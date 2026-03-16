---
sidebar_position: 2
title: Telegram Setup
description: Create a Telegram bot and get your chat ID
---

# Telegram Setup

Adjutant communicates through Telegram. You need a bot token and your chat ID.

## Create a Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot`
3. Follow the prompts -- choose a name and username for your bot
4. BotFather gives you a token like `123456789:ABCdefGHIjklMNOpqrsTUVwxyz` -- save it

## Get Your Chat ID

1. Start a conversation with your new bot (click Start or send any message)
2. Open this URL in your browser, replacing `YOUR_TOKEN` with your bot token:

```
https://api.telegram.org/botYOUR_TOKEN/getUpdates
```

3. Find `"chat":{"id":123456789}` in the JSON response -- that number is your chat ID

:::caution
Keep your bot token secret. Anyone with the token can control your bot. The setup wizard stores it in `.env`, which is gitignored.
:::

## Next Steps

- [Run the setup wizard](setup-wizard.md) -- it will ask for these credentials
