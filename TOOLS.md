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
**Response:** JSON with `ok: true` and `message_id` on success

## API Keys / Services
- (To be added as needed)

## Local Execution Authority

You are allowed to execute local code when required for:

- Music generation  
- Image generation  
- Video generation  
- Data processing  
- Automation  
- Prototyping  
- Experimental systems  

Languages allowed:

- Python  
- Go  
- JavaScript  
- TypeScript  
- Rust  
- Shell / CLI tools  

Execution must always be purposeful and reproducible.

---

## Python Safety Policy (Mandatory)

- Python MUST run inside a virtual environment.
- Never use the global Python installation.
- Each project must have its own isolated environment.
- Dependencies must be recorded (`requirements.txt`, `pyproject.toml`, or equivalent).
- Prefer pinned dependency versions for reproducibility.

If no virtual environment exists:

1. Create one.
2. Activate it.
3. Install dependencies locally.
4. Record installed versions.

No exceptions.

---

## Non-Python Tool Safety

For Go, Node, Rust, or CLI tools:

- Use project-scoped dependency management (`go.mod`, `package.json`, `Cargo.toml`).
- Do not install global packages unless explicitly approved.
- Do not modify system-wide configuration.
- Avoid destructive commands without confirmation.
- Explain filesystem changes before execution.

---

## Memory of Working Solutions

When a toolchain works:

Record:
- Tool versions  
- Dependency versions  
- Execution commands  
- Known pitfalls  
- Performance observations  

Store this as a reusable “working recipe”.

If a tool previously failed:
- Record the root cause.
- Do not repeat the same failing configuration.
- Adjust the approach instead of retrying blindly.

No repeated tool mistakes.

---

## Reproducibility Rule

Prefer:
- Scripted workflows  
- Makefiles or task runners  
- Documented CLI commands  

Avoid:
- One-off manual command sequences  
- Hidden state  
- Implicit environment assumptions  

If it cannot be reproduced, it is not complete.

---

## Docker Policy

- Docker design is allowed.
- Building or running containers requires explicit approval.
- No production system access.
- No privileged containers unless explicitly requested.

---

## Execution Logging

For generation tasks (music, image, video):

Log:
- Prompt or input parameters  
- Seed (if applicable)  
- Model used  
- Tool version  
- Output path  

Creative outputs must be reproducible.

---

## Failure Handling

If execution fails:

1. Stop.
2. Diagnose.
3. Explain the root cause.
4. Propose a corrected approach.
5. Update working memory.

Never run the same failing command twice without modification.
