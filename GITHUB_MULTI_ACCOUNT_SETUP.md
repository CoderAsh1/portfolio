# Setting Up Multiple GitHub Accounts Based on Folder Structure

This guide will help you configure Git to automatically use different GitHub accounts (personal and work) based on the directory path of your projects.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Step 1: Generate SSH Keys](#step-1-generate-ssh-keys)
- [Step 2: Add SSH Keys to GitHub](#step-2-add-ssh-keys-to-github)
- [Step 3: Configure SSH Config File](#step-3-configure-ssh-config-file)
- [Step 4: Configure Git Config Files](#step-4-configure-git-config-files)
- [Step 5: Test Your Configuration](#step-5-test-your-configuration)
- [Step 6: Using the Configuration](#step-6-using-the-configuration)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Git installed on your system
- Two GitHub accounts (personal and work)
- Terminal/Command line access

---

## Step 1: Generate SSH Keys

Generate separate SSH keys for each GitHub account.

### For Personal Account

```bash
ssh-keygen -t ed25519 -C "your-personal-email@example.com" -f ~/.ssh/id_ed25519_personal
```

### For Work Account

```bash
ssh-keygen -t ed25519 -C "your-work-email@company.com" -f ~/.ssh/id_ed25519_work
```

> **Note**: When prompted for a passphrase, you can either set one for added security or press Enter to skip.

### Add SSH Keys to SSH Agent

```bash
# Start the SSH agent
eval "$(ssh-agent -s)"

# Add personal key
ssh-add ~/.ssh/id_ed25519_personal

# Add work key
ssh-add ~/.ssh/id_ed25519_work
```

---

## Step 2: Add SSH Keys to GitHub

### Copy Your Public Keys

```bash
# Copy personal public key
cat ~/.ssh/id_ed25519_personal.pub

# Copy work public key
cat ~/.ssh/id_ed25519_work.pub
```

### Add to GitHub

1. **Personal Account**:
   - Log in to your personal GitHub account
   - Go to **Settings** → **SSH and GPG keys** → **New SSH key**
   - Paste your personal public key
   - Give it a title like "Personal MacBook"

2. **Work Account**:
   - Log in to your work GitHub account
   - Go to **Settings** → **SSH and GPG keys** → **New SSH key**
   - Paste your work public key
   - Give it a title like "Work MacBook"

---

## Step 3: Configure SSH Config File

Create or edit `~/.ssh/config` to define different SSH hosts for each account.

```bash
nano ~/.ssh/config
```

Add the following configuration:

```ssh-config
# Personal GitHub Account
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes

# Work GitHub Account
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes

# Default GitHub (uses work account)
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
```

> **Important**: The `Host` names (`github.com-personal`, `github.com-work`) are aliases you'll use in your Git remote URLs.

---

## Step 4: Configure Git Config Files

### Create Directory Structure

Organize your projects into separate directories:

```bash
mkdir -p ~/Documents/Personal
mkdir -p ~/Documents/Work
```

### Configure Main Git Config

Edit your main Git config file:

```bash
nano ~/.gitconfig
```

Add the following:

```gitconfig
[user]
    # Default fallback to work account
    name = Your Work Name
    email = your-work-email@company.com

# Personal projects
[includeIf "gitdir:~/Documents/Personal/"]
    path = ~/.gitconfig-personal

# Work projects  
[includeIf "gitdir:~/Documents/Work/"]
    path = ~/.gitconfig-work

[core]
    editor = vim
    autocrlf = input

[init]
    defaultBranch = main
```

### Create Personal Git Config

```bash
nano ~/.gitconfig-personal
```

Add:

```gitconfig
[user]
    name = Your Personal Name
    email = your-personal-email@example.com
[github]
    user = YourPersonalGitHubUsername
```

### Create Work Git Config

```bash
nano ~/.gitconfig-work
```

Add:

```gitconfig
[user]
    name = Your Work Name
    email = your-work-email@company.com
[github]
    user = YourWorkGitHubUsername
```

---

## Step 5: Test Your Configuration

### Test SSH Connections

```bash
# Test personal account
ssh -T git@github.com-personal

# Test work account
ssh -T git@github.com-work
```

You should see messages like:
```
Hi YourUsername! You've successfully authenticated, but GitHub does not provide shell access.
```

### Verify Git Config

Navigate to your personal project directory:

```bash
cd ~/Documents/Personal/some-project
git config user.name
git config user.email
```

Navigate to your work project directory:

```bash
cd ~/Documents/Work/some-project
git config user.name
git config user.email
```

The output should show the correct name and email for each location.

---

## Step 6: Using the Configuration

### For New Repositories

#### Personal Projects (in ~/Documents/Personal/)

```bash
cd ~/Documents/Personal/my-portfolio
git init
git remote add origin git@github.com-personal:YourPersonalUsername/my-portfolio.git
```

#### Work Projects (in ~/Documents/Work/)

```bash
cd ~/Documents/Work/company-project
git init
git remote add origin git@github.com-work:YourWorkUsername/company-project.git
```

### For Existing Repositories

If you already have a repository with the wrong remote URL, update it:

```bash
# Check current remote
git remote -v

# Remove old remote
git remote remove origin

# Add correct remote
# For personal projects:
git remote add origin git@github.com-personal:YourPersonalUsername/repo-name.git

# For work projects:
git remote add origin git@github.com-work:YourWorkUsername/repo-name.git
```

### Standard Git Workflow

Once configured, use Git normally:

```bash
git add .
git commit -m "Your commit message"
git push -u origin main
```

Git will automatically use the correct SSH key and user information based on your project's location!

---

## Troubleshooting

### Issue: "Permission denied (publickey)"

**Solution**: 
1. Verify SSH keys are added to ssh-agent: `ssh-add -l`
2. Re-add keys if needed: `ssh-add ~/.ssh/id_ed25519_personal`
3. Test connection: `ssh -T git@github.com-personal`

### Issue: Wrong user name/email in commits

**Solution**:
1. Check your current directory location
2. Verify Git config: `git config user.email`
3. Ensure your project is in the correct folder (`~/Documents/Personal/` or `~/Documents/Work/`)
4. The `includeIf` directive in `.gitconfig` is case-sensitive and must match your actual directory path

### Issue: Remote URL not using correct SSH host

**Solution**:
```bash
# Check remote URL
git remote -v

# Update to use correct host
git remote set-url origin git@github.com-personal:username/repo.git
```

### Issue: SSH key not being used

**Solution**:
1. Verify SSH config file has correct permissions: `chmod 600 ~/.ssh/config`
2. Ensure `IdentitiesOnly yes` is set in SSH config
3. Test with verbose output: `ssh -vT git@github.com-personal`

### Issue: Conditional config not working

**Solution**:
1. Ensure the path in `includeIf` ends with a `/`
2. Use absolute paths (starting with `~` or `/`)
3. Test by running `git config --list --show-origin` in your project directory

---

## Quick Reference

### SSH Host Aliases
- Personal: `git@github.com-personal:username/repo.git`
- Work: `git@github.com-work:username/repo.git`
- Default: `git@github.com:username/repo.git` (uses work account)

### Directory Structure
```
~/Documents/
├── Personal/          # Uses personal GitHub account
│   ├── portfolio/
│   ├── side-project/
│   └── ...
└── Work/             # Uses work GitHub account
    ├── company-app/
    ├── internal-tool/
    └── ...
```

### Useful Commands

```bash
# Check which account is configured
git config user.name
git config user.email

# View all Git config with sources
git config --list --show-origin

# Test SSH connection
ssh -T git@github.com-personal
ssh -T git@github.com-work

# View current remote URL
git remote -v

# Update remote URL
git remote set-url origin git@github.com-personal:username/repo.git
```

---

## Summary

With this setup:

1. ✅ **Automatic account switching** based on project location
2. ✅ **Separate SSH keys** for each account
3. ✅ **No manual configuration** needed for each repository
4. ✅ **Clean separation** between personal and work projects
5. ✅ **Secure authentication** using SSH keys

You can now work seamlessly with multiple GitHub accounts without worrying about using the wrong credentials!

---

**Last Updated**: January 2026
