---
sidebar_position: 1
title: What is Adjutant?
description: Overview of Adjutant, a persistent personal AI agent framework
---

# What is Adjutant?

Adjutant is a persistent personal AI agent that runs on your machine and stays in contact with you through Telegram. You send it messages -- questions, commands, requests -- and it responds using an LLM with full awareness of your projects and priorities.

**Version**: 0.1.0

## What It Does

- **Responds to natural language** via Telegram -- ask questions, give instructions, have conversations
- **Queries knowledge bases** -- sandboxed sub-agent workspaces for domain-specific knowledge
- **Monitors your projects** -- on-demand pulse checks and deep reflections scan registered projects
- **Takes screenshots** of web pages, analyzes images, and searches the web
- **Remembers things** -- persistent long-term memory with auto-classification
- **Delivers news briefings** -- curated AI/tech news from HackerNews, Reddit, and RSS feeds

## Philosophy

- **Observe first, act rarely** -- default is logging and selective notification
- **Human-in-the-loop** -- Adjutant advises, you decide
- **Cap-conservative** -- uses the cheapest viable model by default, expensive models only on explicit request
- **No surprises** -- surfaces things before they become emergencies
- **Install anywhere** -- no hardcoded paths; everything resolves from `adjutant.yaml`

## Who It's For

Adjutant is built for developers and power users who want a personal AI assistant running locally on their machine. You need to be comfortable with:

- Running Python 3.11+ and managing a virtual environment
- Setting up a Telegram bot
- Editing YAML configuration files
- Running services on macOS or Linux

## How It Works

Adjutant runs as a background service. It polls the Telegram Bot API for messages, routes them through a backend-agnostic dispatcher, and responds via OpenCode-powered AI reasoning.

```
You --> Telegram --> Adjutant Listener
                        |
                  Dispatcher
                  /        \
            /command     natural language
              |               |
         cmd_handlers    opencode_run (LLM)
              |               |
            Reply        Agent Response
```

Everything runs on your device. There is no server, no cloud component, and no data leaving your machine except the messages you explicitly send and receive through Telegram.

## What It Is Not

- **Not a cloud service** -- runs entirely on your local machine
- **Not a chatbot platform** -- it's a personal agent for one user
- **Not a general-purpose AI framework** -- it's opinionated about architecture and focused on persistent personal assistance
- **Not autonomous by default** -- responds when you message it; proactive behaviour only happens when explicitly configured

## Next Steps

- [Install Adjutant](/docs/getting-started/installation)
- [Understand the architecture](/docs/architecture/overview)
- [See all commands](/docs/guides/commands)
