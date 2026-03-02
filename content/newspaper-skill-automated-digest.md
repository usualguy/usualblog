---
title: "I Built Myself an Automated Newspaper"
created: 2026-03-02
tags:
  - automation
  - ai
  - ollama
  - openclaw
  - python
---

Every morning at 7 AM, I get a news digest in Telegram. Not just an RSS feed—a real newspaper with layout, headlines, and smart AI-powered summaries.

Here's what's under the hood.

## 🔥 Features

**1. Aggregates from Multiple Sources**

- BBC Russian, Meduza, Mediazona
- Filters out articles older than 24 hours
- Merges duplicate stories from different sources (shows all source links)

**2. AI-Written Introduction via Local LLM**

- Grabs all headlines → sends to Ollama (qwen2.5:7b)
- Gets ~30 words in news editor style
- Emojis match the tone (⚠️ for war, 🕯️ for tragedy, 🎭 for absurdity)
- Falls back to template if Ollama times out

**3. Dynamic Visual Theming**

Analyzes content and auto-selects theme:

- **War/Repression** → dark "Fractured Authority", blood-red accents
- **Technology** → clean white, monospace fonts
- **Culture** → elegant cream, gold accents
- **General News** → classic newsprint texture

**4. Publishes to Telegraph**

- Converts HTML to Telegraph nodes
- Sends link to Telegram
- Instant View works out of the box

## 🛠 Technical Deep Dive

### AI Summary (via local Ollama)

```python
prompt = f"""
You are a news editor. Write an intro for the newspaper:
{titles_text}

STRICT:
- Maximum 30 words
- 1-2 emojis at the start
- Key topics + sources
"""

result = subprocess.run(
    ['ollama', 'run', 'qwen2.5:7b', prompt],
    capture_output=True, text=True, timeout=60
)
```

The prompt is carefully engineered to produce consistent, concise summaries. The 30-word limit forces the model to prioritize what matters.

### Tone Analysis

```python
CONTENT_PATTERNS = {
    'war': ['war', 'attack', 'strike', 'shelling'],
    'repression': ['court', 'sentence', 'colony', 'foreign agent'],
    'tragedy': ['died', 'death', 'killed'],
    'absurd': ['terrorist', 'extremist', 'banned'],
}
```

Each category has an emotional weight. War scores highest (0.9), tragedy (0.8), repression (0.85). The dominant category determines the visual theme.

### Deduplication

```python
def stories_are_similar(self, s1, s2, threshold=0.75):
    # Compare normalized titles
    # Merge only if 75%+ word overlap
    # AND from different sources (preserve diversity)
```

This is critical. Different outlets cover the same story with slightly different angles. The skill merges them but shows all sources—preserving diversity while avoiding repetition.

## 📅 Automation

Cron job at 7 AM:

```bash
0 7 * * * cd /path/to/newspaper && source .venv/bin/activate && \
  python newspaper_skill.py && \
  python telegraph_publish.py --send-tg
```

The script generates the newspaper, publishes to Telegraph, and sends the link to Telegram. Total runtime: ~90 seconds.

## 🎯 Why I Built This

**Saves time** — 30 seconds to read vs 15 minutes scrolling feeds

**Context** — see the big picture, not scattered headlines

**Sources** — immediately know who reported what

**Visual comfort** — dark theme in the morning doesn't hurt your eyes

## 📦 Open Source

Everything's public. OpenClaw skill, Python 3.10+, local Ollama.

**Stack:**

- Python + feedparser + Playwright
- Ollama (qwen2.5:7b) for AI summaries
- Telegraph API for publishing
- BeautifulSoup for HTML parsing

## Example Output

Today's summary:

> 🚨 War with Iran, France expands nuclear arsenal, repression in Russia. Trump, Macron, Dubai airport. BBC, Meduza, Mediazona.

That's 16 words. Takes 20 seconds to read. Tells you everything you need to know to decide if you want to dive deeper.

---

*Note: This isn't a replacement for journalists. It's a tool to avoid drowning in the noise. AI writes the summary, but the decisions and interpretations are still yours.*

**Repo:** `/Users/macmini/.openclaw/workspace/skills/newspaper`

**Live demo:** Check your Telegram at 7 AM tomorrow.
