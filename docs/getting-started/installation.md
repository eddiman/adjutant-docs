---
sidebar_position: 1
title: Installation
description: How to install Adjutant on macOS or Linux
---

# Installation

Adjutant runs on macOS and Linux. This page covers prerequisites and installation.

## Prerequisites

Before installing, make sure you have:

- **macOS or Linux**
- **Python 3.11+** -- check with `python3 --version`
- **[OpenCode](https://opencode.ai)** -- the AI runtime Adjutant uses for reasoning
- **curl** -- installed by default on macOS and Linux

Verify OpenCode is working:

```bash
opencode --version
```

## Install

Clone the repository to any location -- Adjutant can live anywhere:

```bash
git clone https://github.com/eddiman/adjutant.git /path/to/adjutant
cd /path/to/adjutant
python3 -m venv .venv
.venv/bin/pip install -e .
```

This installs the `adjutant` CLI into `.venv/bin/adjutant`.

### Add to PATH

Add the CLI to your shell profile so you can run `adjutant` from anywhere:

```bash
echo 'alias adjutant="/path/to/adjutant/.venv/bin/adjutant"' >> ~/.zshrc
source ~/.zshrc
```

:::tip
Replace `/path/to/adjutant` with the actual directory you cloned to. The setup wizard will write the install path to `adjutant.yaml` -- no hardcoded paths are needed after setup.
:::

## Next Steps

- [Set up a Telegram bot](telegram-setup.md)
- [Run the setup wizard](setup-wizard.md)
