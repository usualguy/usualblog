---
title: "I Built Myself an Automated Newspaper"
created: 2026-03-02
tags:
  - automation
  - ai
  - ollama
  - openclaw
---

So here's the thing—I was drowning in news tabs.

You know that feeling. Fifteen browser tabs open. BBC, Meduza, Zona, Reuters. Half-read articles everywhere. And I still don't know what actually *matters* today.

So I built a bot that makes me a newspaper. Every morning. At 7 AM. In my Telegram.

Not an RSS feed. An actual newspaper. With layout. Headlines. And a 30-word summary written by AI that actually sounds... fine?

Here's how it works.

## What It Does

**Pulls from three sources** — BBC Russian, Meduza, Mediazona. Only articles from the last 24 hours. Everything else gets tossed.

**Merges duplicates** — If all three outlets cover the same story, it combines them. Shows you all the sources. No repetition.

**Writes an intro** — Sends all the headlines to my local Ollama (qwen2.5:7b). Gets back ~30 words in news editor style. With emojis that match the mood.

War going on? ⚠️. Someone died? 🕯️. Government being absurd? 🎭.

**Picks a visual theme** — Heavy news gets a dark, brutalist design. Tech stories go clean and modern. Culture pieces get elegant cream backgrounds.

**Publishes to Telegraph** — Sends me a link. Instant View works. I read it in 30 seconds while making coffee.

## The Technical Bits

### AI Summary

I was skeptical about this part. Most AI summaries are garbage. Too long. Too vague.

So I got strict:

```python
prompt = f"""
You are a news editor. Write an intro for the newspaper:
{titles_text}

STRICT:
- Maximum 30 words
- 1-2 emojis at the start
- Key topics + sources
"""
```

The constraint helps. 30 words forces it to prioritize. No fluff.

Today's output:

> 🚨 War with Iran, France expands nuclear arsenal, repression in Russia. Trump, Macron, Dubai airport. BBC, Meduza, Mediazona.

That's it. That's the news. I know immediately if I want to dive deeper.

### Tone Detection

It scans for keywords:

```python
CONTENT_PATTERNS = {
    'war': ['war', 'attack', 'strike', 'shelling'],
    'repression': ['court', 'sentence', 'colony', 'foreign agent'],
    'tragedy': ['died', 'death', 'killed'],
    'absurd': ['terrorist', 'extremist', 'banned'],
}
```

Each category has a weight. War scores highest. The dominant theme picks the visual design.

### Deduplication

This took a few tries. My first version just grabbed the top 10 headlines. Problem? All three sources often cover the same story.

Now it compares titles. If they're 75%+ similar AND from different sources, it merges them. Shows all the links. You get the full picture without the repetition.

## Automation

Cron job at 7 AM:

```bash
0 7 * * * cd /path && python newspaper_skill.py && python telegraph_publish.py --send-tg
```

Takes about 90 seconds total. Most of that is waiting for Ollama.

## Why Bother?

Honestly? I was tired of feeling behind.

The news isn't going anywhere. But scrolling fifteen feeds every morning was eating time I didn't have. And I'd still miss stuff.

Now I get one digest. 30 seconds to read. If something catches my eye, I click through. If not, I'm done.

It's not perfect. The AI sometimes picks weird details. The theme detection isn't always right. But it's *mine*. Runs locally. No API keys. No tracking.

And I sleep better knowing I'm not missing anything important.

---

**Stack:** Python, feedparser, Playwright, Ollama (qwen2.5:7b), Telegraph API

**Code:** OpenClaw skill, Python 3.10+

*This isn't replacing journalists. It's just helping me keep up. The actual reading—and thinking—is still on me.*
