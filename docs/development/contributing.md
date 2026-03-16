---
sidebar_position: 1
title: Contributing
description: How to contribute to Adjutant
---

# Contributing

Adjutant is a Python-based personal agent framework. This guide covers how to set up a development environment and contribute changes.

## Development Setup

```bash
git clone https://github.com/eddiman/adjutant.git
cd adjutant
python3 -m venv .venv
.venv/bin/pip install -e ".[dev]"
```

This installs all development dependencies including pytest, ruff, and mypy.

## Running Tests

```bash
# Full suite
.venv/bin/pytest tests/ -q

# Unit tests only
.venv/bin/pytest tests/unit/ -q

# Single file
.venv/bin/pytest tests/unit/test_kb_manage.py -q
```

All tests must pass before any release. There is no CI pipeline -- tests are run locally.

## Code Style

Adjutant uses **ruff** for linting and **mypy** for type checking:

```bash
# Lint
.venv/bin/ruff check src/

# Type check
.venv/bin/mypy src/adjutant/
```

### Conventions

- All source lives under `src/adjutant/` -- no top-level modules
- Imports: stdlib, then third-party, then local -- alphabetical within groups
- Credentials: use `get_credential(key)` from `core/env.py` -- never read `.env` directly
- Paths: use `get_adj_dir()` from `core/paths.py` -- never hardcode paths
- Logging: use `adj_log("component", "message")` -- not `print()`
- Capability functions return a result string or raise -- no stdout
- New modules need a corresponding `tests/unit/test_<module>.py`

### Naming Conventions

| Prefix | Location | Purpose |
|--------|----------|---------|
| `cmd_*` | `messaging/telegram/commands.py` | Slash command handlers |
| `msg_*` | `adaptor.py` + telegram/ | Messaging interface functions |
| `kb_*` | `capabilities/kb/manage.py` | KB CRUD operations |
| `wiz_*` / `step_*` | `setup/` | Wizard UI / setup steps |
| `_*` | Anywhere | Private/internal |

## Adding a Capability

1. Create `src/adjutant/capabilities/<name>/<name>.py` -- return string or raise
2. Add `cmd_<name>()` in `messaging/telegram/commands.py`
3. Register in `messaging/dispatch.py`
4. Add CLI command in `cli.py`
5. Document in `.opencode/agents/adjutant.md`
6. Add `tests/unit/test_<name>.py`
7. Add to `docs/guides/commands.md`

See the [Plugin Guide](plugin-guide.md) for full details.

## Adding a Slash Command

Register in `dispatch.py`. Handler signature:

```python
async def cmd_mycommand(
    arg: str,
    message_id: int,
    adj_dir: Path,
    *,
    bot_token: str,
    chat_id: str,
) -> None:
```

## Project Structure

```
src/adjutant/
├── cli.py              # Click CLI (entry point)
├── core/               # Shared: config, env, lockfiles, logging, model, opencode, paths
├── lib/                # HTTP client, NDJSON parser
├── lifecycle/          # start/stop/pause/kill, cron, update
├── observability/      # status, usage estimates, journal rotation
├── capabilities/       # KB, schedule, screenshot, search, vision, memory
├── news/               # Fetch, analyze, briefing pipeline
├── setup/              # Wizard, install, repair, uninstall
└── messaging/          # Adaptor, dispatcher, Telegram backend
```

## Documentation

When making changes that affect user-facing behavior, update docs in **both** repositories:

1. **`eddiman/adjutant`** (`docs/`) -- source-of-truth markdown files
2. **`eddiman/adjutant-docs`** -- the published documentation site

## Files Never to Commit

These are gitignored and user-specific:

- `identity/` (soul.md, heart.md, registry.md)
- `state/`, `journal/`, `insights/`, `photos/`, `screenshots/`
- `.env`, `adjutant.yaml`
- `knowledge_bases/registry.yaml`

## Release Process

1. Ensure all tests pass: `.venv/bin/pytest tests/ -q`
2. Update `VERSION` and `CHANGELOG.md`
3. Tag the release: `git tag v2.x.x`
4. Push the tag: `git push origin v2.x.x`
5. The GitHub Actions release workflow creates a tarball and publishes it
