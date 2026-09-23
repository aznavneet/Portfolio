---
name: CV-updater
description: Describe what this custom agent does and when to use it.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

Use the latest CV available in the repository and update the codebase to use it everywhere the resume is referenced.

Replace all references to the old CV with the latest one, ensuring the download/view resume functionality continues to work correctly.

Do not modify anything else in the project. Only make the changes necessary to use the latest CV.