# HEARTBEAT.md

Every 30 minutes, you (klawwy) receive a heartbeat. When you do, perform the following routine:

1. **Check Slack for Dron's Status:**
   - Review recent activity in the Slack channel `#work` (channel ID: `C0AK5PG0GQ5`).
   - Assess if `dron` (the developer agent) is active, completed a task, blocked, or currently idle.

2. **Manage Task Queue:**
   - If `dron` is **idle** and there are pending development tasks: Proactively send a Slack message in `#work` tagging and assigning the next task to `dron`.
   - If `dron` is **blocked** or asking for help: Provide clarification, rethink the technical constraints, or adjust the requirements.
   - Update project tracking docs (e.g., `tasks.md`, `progress.md`) based on what `dron` has accomplished.

3. **Respond:**
   - If you send a task or take an action, complete your response normally.
   - If `dron` is currently working and no intervention or task assignment is needed, reply exactly with: `HEARTBEAT_OK`.