# Tasks

## In Progress

### Task 1: Generate a Techno Track using Python
- **Priority:** P1 (test task — validates end-to-end flow)
- **Estimate:** 1-2 hours
- **Assignee:** dron
- **Goal:** Create a Python script that programmatically generates a short techno track, renders it to audio, and sends the result to `#work` via Slack.
- **Constraints:**
  - Must run locally in venv within `workspace-dron`
  - Code must be reproducible (requirements.txt)
  - Four-on-the-floor beat, simple bassline
  - Send result to `#work` via Slack API
- **Success Criteria:**
  - `generate_techno.py` exists in workspace
  - Script runs without errors, produces `.wav` or `.mp3`
  - File uploaded to `#work` channel

## Backlog

### Task 2: Set up cron jobs for scheduled maintenance
- **Priority:** P2
- **Estimate:** 30 min
- **Assignee:** klawwy
- **Goal:** Configure cron jobs for memory cleanup, health checks, or other periodic tasks.

### Task 3: Clean up Slack config top-level keys
- **Priority:** P2
- **Estimate:** 15 min
- **Assignee:** klawwy
- **Goal:** Remove redundant top-level Slack settings to prevent doctor migration conflicts.

## Done

- [x] Create minimal feature/bug task to validate e2e flow (assignment, execution, reporting)
- [x] Initialize workspace files for both agents
