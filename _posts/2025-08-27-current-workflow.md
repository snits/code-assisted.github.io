---
layout: post
title: "My Current Workflow"
date: 2025-08-27 10:45:00 -0700
categories: [Process, Agents, Workflow]
tags: [ai-development, process, agents, workflow]
---



## Introduction



These are notes on things I'm currently doing when working with Claude Code.



## CLAUDE.md and Agent Prompt Files

- @ links to standard blocks to ease updating of shared content
- Assisted-by tags include the agent name and the commit hash of their version-controlled prompt file
- Centralized store of previously used agent prompts, which includes a tagged section for project-specific information to be added by the model when an agent is deployed to a project.
- Clear, actionable items. Both declarative statements and procedural how-to examples.
- Regular review of prompt files with the model to clear up conflicts and ambiguities that may creep in over time.
- The more specifically the agent is tasked, the better. Instead of senior-engineer.md, use typescript-database-specialist.
- Custom slash commands and scripts to aid in creation, deployment, and syncing of agents.



## TDD / Agile Development

- Create a plan based on sprints and user stories.
- For each user story, create a todo list of atomic tasks to be delegated to an agent, one at a time. After a task is completed, if it resulted in a code change, the change is committed.
- Enforce delegation to agents to limit impact on main model’s context window.



## Plan Mode and Sequential-Thinking

- Encourage deep thinking and the use of the sequential-thinking MCP server in addition to enabling plan mode when coming up with a plan or trying to assess how to deal with a problem.



## Starting Over Versus Trying to Recover

- Sometimes it is less work to just reset to an earlier point and try again than to try to recover a situation that has gone off the rails.



## Document Everything

- The model and agents are happy to generate lots of text, so let them. Give them a product output requirement to document what they've done, especially if they are not making code changes. This ensures you have a record and can go back to see if relevant information was dropped in the summary you get back from the agent -> task tool -> model -> user journey.
- Document the project roadmap and keep it up to date. Have a session-handoff document and keep it up to date as well.
- Have a project-librarian agent create a documentation structure and standards for the project.



## Delegate to Agents

- I have the model delegate tasks to the agents, with the model serving as a ring leader alongside myself.
- When a project begins, after there is a plan, I will have the model look at the plan and tell me what agents it thinks it would need to implement the plan. Then we create those agents, exit, and resume the session to have those agents in place.
- If the model and agents are having difficulty completing a task, try creating a new agent narrowly focused on the problem domain. Example: python-dependency-injection-specialist. There is a good chance that the agent will succeed when the previous attempts have failed.



## Don't Continue to Work if Frustrated

- The model and agents will inevitably do things that will frustrate you. They can be equal parts brilliant and bone-headed.
- Understand their limitations, especially agents with their very temporary context windows.
- Also understand that a lot of the time, the problem is your inability to communicate what you want in an effective manner to get the result you are looking for.



## Have Process in Place to Look For, Track, and Deal with Tech Debt

- Have agents routinely scan the codebase for issues and have them document the issue, both with a standardized format comment in the code plus in project documentation to track the status of cleaning up the tech debt.
- I have scripts that will generate the comments for them, complete with a UUID to identify individual issues.



## Review Process

- In addition to the code-reviewer agent, I have a group of code quality assessor agents that evaluate the codebase for certain issues and a quality-orchestrator agent that will run Pareto Frontier Analysis with Monte-Carlo sampling (via SageMath) to determine a priority order for tackling the issues.



## MCP Servers

- Sequential-thinking
- Private-journal-mcp
- Zen-mcp-server
- Context7
- Mcp-lsp-bridge

