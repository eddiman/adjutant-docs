---
sidebar_position: 4
title: First Message
description: Start the listener and send your first message
---

# First Message

After running the setup wizard, start the Telegram listener:

```bash
adjutant start
```

Verify it's running:

```bash
adjutant status
```

You should see `Adjutant is up and running.` and the listener's PID.

## Send a Message

Open Telegram and message your bot. Try these:

| What to send | What happens |
|-------------|-------------|
| `/status` | Adjutant replies with its current state |
| `/help` | Lists all available commands |
| `What time is it?` | Natural language question -- Adjutant responds via the AI agent |

That's it. Adjutant is running.

## Auto-Start on Boot

### macOS

Use `adjutant startup` to install a LaunchAgent that starts Adjutant on login:

```bash
adjutant startup
```

### Linux

Set up a systemd user service. Create `~/.config/systemd/user/adjutant.service`:

```ini
[Unit]
Description=Adjutant Telegram Listener

[Service]
ExecStart=/path/to/adjutant/.venv/bin/python -m adjutant start
Environment=ADJ_DIR=/path/to/adjutant
Restart=always
RestartSec=30

[Install]
WantedBy=default.target
```

Then enable and start:

```bash
systemctl --user enable adjutant
systemctl --user start adjutant
```

## Next Steps

- [Configure Adjutant](/docs/guides/configuration) -- customize settings, identity files, and features
- [See all commands](/docs/guides/commands) -- full Telegram and CLI command reference
- [Add a knowledge base](/docs/guides/knowledge-bases) -- create sandboxed domain-specific workspaces
- [Understand start/stop/pause](/docs/guides/lifecycle) -- lifecycle management
