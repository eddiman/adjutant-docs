---
sidebar_position: 3
title: Setup Wizard
description: Configure Adjutant with the interactive setup wizard
---

# Setup Wizard

The setup wizard walks you through configuring Adjutant. Run it after installation:

```bash
adjutant setup
```

## Wizard Steps

The wizard has seven steps:

1. **Prerequisites** -- verifies Python, LLM backend (OpenCode or Claude CLI), and other dependencies
2. **Install path** -- confirms where Adjutant lives and creates the root marker
3. **Identity** -- creates `soul.md` (personality), `heart.md` (priorities), and `registry.md` (projects)
4. **Messaging** -- prompts for your Telegram bot token and chat ID, writes them to `.env`
5. **Features** -- enables optional capabilities (news briefing, web search)
6. **Service** -- installs the shell alias and optionally sets up auto-start on boot
7. **Autonomy** -- optional scheduled pulse/review cycles

## Repair Mode

If something breaks after initial setup, re-run the wizard in repair mode:

```bash
adjutant setup --repair
```

Repair mode detects what's already configured, skips those steps, and fixes anything that's broken:

- Missing directories (`state/`, `journal/`, etc.)
- File permissions
- Credential validation
- Service state checks

:::tip
`adjutant setup` should always be the answer to "something isn't working." Run it whenever things break.
:::

## Dry Run

Test what the wizard would do without making changes:

```bash
adjutant setup --dry-run
```

## Next Steps

- [Start the listener and send your first message](first-message.md)
