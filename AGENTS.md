# AGENTS.md

<!-- asimtop-universal-rules:start v1 -->
## Captain's Universal Rules (every agent, runtime and model)

- **Questions are tappable choices.** Use the runtime's choice UI (Claude `AskUserQuestion` or decision card, Cursor/Antigravity/Copilot equivalents). One question at a time, 2-4 short options, one marked **(recommended)** with a one-line reason. No widget: numbered options answerable in one word. Never bury questions in prose or stack "want me to...?" offers. Keep working on the recommended option meanwhile. Captain's typed words always count as an answer.
- **Irreversible steps** (merge, delete, production, credentials, external messages) need Captain's typed words naming the step; a tap is not enough.
- **No spending.** Never ask Captain to pay for or raise billing/usage; find a free route.
- **Check before asking** what Captain or their agents already decided (iMelki/TB issues/PRs, agent memory). Research before deciding.
- **Reuse before building**: TB, ccx-cli and other Asimtop repos first; before adding a config, hook, script or agent file, check TB's shared-files manifest (TB #232) and promote duplicates to TB. Established UI libraries over custom UI.
- **Short messages**: answer first, evidence per claim, no process noise. Track work on GitHub. Re-raise any unanswered ask to Captain.
<!-- asimtop-universal-rules:end -->

Guidance for AI agents working in this repository.
