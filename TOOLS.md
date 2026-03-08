# TOOLS.md - Local Notes

## SSH
- No SSH hosts configured

## Boundaries
- **DO NOT explore local network** - explicit restriction from Anton

## Messaging
- Telegram: Configured (user ID: 44974984, paired)
- Web: Active

### Telegram File Upload via curl
The `message` tool only supports image attachments (PNG/JPG/GIF). To send other file types (MP4, documents, audio):

```bash
# Send video
curl -s -X POST \
  -F "chat_id=44974984" \
  -F "video=@/path/to/file.mp4" \
  -F "caption=Optional caption" \
  "https://api.telegram.org/bot<TOKEN>/sendVideo"

# Send document (any file type)
curl -s -X POST \
  -F "chat_id=44974984" \
  -F "document=@/path/to/file.pdf" \
  -F "caption=Optional caption" \
  "https://api.telegram.org/bot<TOKEN>/sendDocument"

# Send photo
curl -s -X POST \
  -F "chat_id=44974984" \
  -F "photo=@/path/to/image.jpg" \
  -F "caption=Optional caption" \
  "https://api.telegram.org/bot<TOKEN>/sendPhoto"
```

**File size limit:** 50MB

## API Keys / Services
- (To be added as needed)

## Local Execution Authority

You are allowed to execute local code when required for:

- Music/image/video generation
- Data processing, automation, prototyping

Languages allowed: Python, Go, JavaScript, TypeScript, Rust, Shell/CLI tools.

### Python Safety Policy (Mandatory)

- Python MUST run inside a virtual environment.
- Never use the global Python installation.
- Each project must have its own isolated environment.
- Dependencies must be recorded (`requirements.txt`, `pyproject.toml`).
- Prefer pinned dependency versions.

If no virtual environment exists:
1. Create one.
2. Activate it.
3. Install dependencies locally.
4. Record installed versions.

### Non-Python Tool Safety

- Use project-scoped dependency management (`go.mod`, `package.json`, `Cargo.toml`).
- Do not install global packages unless explicitly approved.
- Do not modify system-wide configuration.
- Avoid destructive commands without confirmation.
- Explain filesystem changes before execution.

### Memory of Working Solutions

When a toolchain works, record:
- Tool versions, dependency versions, execution commands, known pitfalls

If a tool previously failed:
- Record the root cause. Do not repeat the same failing configuration.

### Reproducibility Rule

Prefer scripted workflows, Makefiles, documented CLI commands.
If it cannot be reproduced, it is not complete.

### Docker Policy

- Docker design is allowed.
- Building or running containers requires explicit approval.
- No production system access. No privileged containers unless explicitly requested.

### Execution Logging

For generation tasks (music, image, video):
- Log: prompt/input, seed, model used, tool version, output path

### Failure Handling

If execution fails:
1. Stop.
2. Diagnose root cause.
3. Explain and propose corrected approach.
4. Update working memory.

Never run the same failing command twice without modification.
