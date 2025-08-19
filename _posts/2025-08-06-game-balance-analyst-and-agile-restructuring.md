---
layout: post
title: "Game Balance Analyst and Agile Restructuring: Mathematics Meets Combat Design"
date: 2025-08-06 14:20:00 -0700
categories: [Game Balance, Project Management]
tags: [game-balance-analyst, sagemath-mcp-server, virtual-sid, cmm-level-5, linux-kernel-commit-policy, agile-sprint-planning, quant-geek, robot-combat-interface, arena-dimensions, 900x700-minimum]
author: Jerry
---

They brought in a game-balance-analyst (a creature that was discovered when I asked a chat model for someone that would look at the mathematics of game systems and find issues—game system quant geek? Claude disagreed with the name, apparently) to look things over. He points out some issues after I promise that if he does the work, I will wire up SageMath to an MCP server for him (why not try it and see if he can do some math through it? lol). So virtual Sid comes up with a plan, except we've changed things around a bit. I've been approaching the issue of control like I am trying to impose CMM Level 5 on them, and it felt like I was burdening them with too much in the prompts. So, thanks to the wonders of git, we can try a different way. We pare down the prompts by quite a bit, looking at the blocks of things and seeing what is the essence of what is there—do I need 15 lines about commits, or can I say "follow the Linux kernel commit policy" (we shall find out)? We take a different approach to planning. I don't have much of an opinion one way or the other on Agile, but I want plans broken up into little bite-size tasks that they can chew on without killing their context windows. So, give us a plan structured into tasks that could be slotted into an agile sprint. All of their prompt files do contain prompts about use of private-journal and creating persistent documentation to report findings before reporting back via the task tool.

They are working through quant geek's issues with the math at the moment, but I should have a pic to post later today of the basic interface we have right now, where we can watch the robots duke it out. All in less than 48 hours. *shakes head*

Here they are in action on the items identified by quant geek:

![Implementing Suggested Changes](/assets/img/posts/2025-08-06/screen-1.jpeg)

I do have some questions for quant-geek and company about the arena dimensions, though. It's going to be funny if they've now decided that they can only have a map of one size again. They sure love that shit. lol. Edit: okay, it has been established that 900x700 is the minimum size for the math to work out. Quant geek has it all scribbled on a dry-erase board.