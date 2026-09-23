---
name: repo-explainer
description: Describe what this custom agent does and when to use it.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

Analyze this codebase and help me understand it as if I am a new developer joining the project.

Please explain:
- What this application does
- The overall architecture
- The purpose of each major folder
- The application entry point
- How a request flows through the application
- The key technologies and frameworks used
- The most important files I should read first

Use examples from the actual code and explain everything in simple language.