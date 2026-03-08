# MEMORY.md

## 2026-03-08
- **Multi-Agent Architecture Setup:** Defined `klawwy` as the Project Manager agent and `dron` as the Developer agent. 
- **Workspaces:**
  - `klawwy`: `/Users/macmini/.openclaw/workspace` (Main project management, task queues, logic, and over-arching oversight).
  - `dron`: `/Users/macmini/.openclaw/workspace-dron` (Development, coding memory, project implementation space).
- **Communication & Heartbeat:**
  - `dron` runs as a continuous background agent. 
  - `klawwy` pings and coordinates with `dron` directly within the Slack `#work` channel (`C0AK5PG0GQ5`).
  - `klawwy` relies on a 30-minute heartbeat poll to check in on `dron`'s progress, answer blockers, and assign new tasks from the backlog if `dron` finishes up.