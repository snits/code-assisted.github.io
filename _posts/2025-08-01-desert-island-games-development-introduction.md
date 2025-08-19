---
layout: post
title: "Desert Island Games: Beginning the AI-Assisted Development Adventure"
date: 2025-08-01 09:30:00 -0700
categories: [AI Development, Game Development]
tags: [desert-island-games, claude-code, agent-teams, planetary-simulation, ai-collaboration, private-journal-mcp]
---

I figure if I am going to keep talking about this *thing*, I should fork it off into its own thread as I probe how the technology works and try experiments with the agent technology. This will be a mix of talking about current AI technology, game programming and design, and the ongoing experience with a little toy project being built by one middle-aged skeptic's brain and a host of silicon personalities borrowing one or two silicon "brains"—the misadventures, mysteries, wonderings, triumphs, and failures of both the meat puppet and his merry band of software wizards.

For a whole (beware wall of text ahead) lot of background, you can see my [post](https://forum.quartertothree.com/t/the-a-i-thread-of-omg-were-being-replaced/158303/6298) about the past week as I explored AI code assist technology and how it could be used to automate or help parts of my workflow at work as the corporate world continues to race towards using language models. A follow-on [post](https://forum.quartertothree.com/t/the-a-i-thread-of-omg-were-being-replaced/158303/6300) includes the summary of results of asking the model to have some game designer sub-agents come up with game ideas based on this toy software project underway.

It is interesting to be doing this, and also doing some meta-thing of observing how I am responding to the process and the output the model returns as it chews on and spits out tokens. The OMG AI thread already has a million posts about what these models are and aren't, and the promise and perils they hold. In this thread I am largely taking a break from worrying about that. This is just a little bubble where myself and some AI dudes are going to have fun, and you get to go along for the ride.


To summarize for folks that don't want to spend an hour reading my brain dump linked above, the current situation as of yesterday afternoon was this:

- As part of a work goal to try to make use of AI weekly in our workflows, I have been exploring AI code assist technology. In particular for this thread, I have been using a max account from Anthropic, and Claude Code along with their model Sonnet-4.
- I have largely been exploring the feature that was released in Claude Code last week for the use of agents, or sub-agents as they like to call them as well.
- As part of this, I have been iterating on the prompt files that are fed into the model, and the agents as I try to get them to a place where they and I can co-exist and get things I work on done more quickly.
- As an aside, the targets I came up with for my quarterly goals were: tool refactoring and generation, test refactoring and generation, source code analysis q & a, and ways to assist in doing some of the more boring parts of subsystem maintenance in a downstream Linux kernel. I can probably easily check off 1-2 as being successful, 3 we've only done a little exploring, but it shows promise, and 4 hasn't been touched yet (stop trying to take my job Hal)
- After working on some kinks, working with the ai itself to improve the prompt files, and having it go through multiple refactors of a couple of my homegrown Python tools I use for my kernel work, I decided to see how far I could push the agent prompt files and how different the behavior would become.
- A small project was started to create a planetary simulation, using these models encyclopedic knowledge to have meandering discussions about procedural generation, the various systems that can be simulated, and links to research about said things, and finally asking GPT to put it all in a markdown file as a plan for Claude-Sonnet-4 to read, and then we would move forward, and just see what we came up with.
- Disclaimer: no sentient beings were involved in this process, just whatever crazy goes on in my head, and a bunch of magic token generators.


The location: A terminal window on either a Mac Studio M1 Max or AMD Ryzen 5900x desktop, with Claude Code running, and connected to a local MCP called private-journal-mcp, which lets the model (and agents) record 'thoughts' into a journal that can later be queried.

The original party:

- Claude-Sonnet-4 and CLAUDE.md - silicon puppet master, philosopher, and code junkie.

- code-reviewer - picky about code quality and security
- senior-engineer - knowledgeable in algorithms and languages
- systems-architect
- ux-design-expert
- security-engineer
- debug-specialist
- test-specialist
- qa-engineer
- performance-engineer
- kernel-hacker

new members to the team:

- world-generation-architect

- simulation-engineer
- rendering-engineer
- game-subsystem-engineer
- data-architect
- game-design-strategist "Sid"
- simulation-designer "Will"
- social-systems-designer "Bunten"
- cultural-mythology-engine


Each of the above are markdown files with prompts basically telling the model to make believe that you are such and such type of person, with such and such type of skills, along with a number of additional things to try and get everyone to work in the process I would like. The magic is that with that prompt and the attention mechanism of the model, it gets steered towards generating tokens that would tend to match the persona of that prompt. For example, security-engineer looking at a Python project found a number of issues to fix that code-reviewer, CLAUDE.md, systems-architect, and everyone else missed. The debug-specialist approaches debugging in a different manner than CLAUDE.md. It is crazy that it works, and a lot of what I have been doing is trying to suss out just how much of the variance in behavior is in my head, how much is bullshit, and how much is real. Whatever it is, it is fascinating, and this thread is here to document my continuing adventures down this rabbit hole to see where we go. 

We are playing with a toy planetary physics simulation that the models claim is a professional grade simulation. I have my doubts about that, and spend half my time working with various chat models trying to refine prompts and protocols to try to get them to not blow sunshine up my ass, to back up their claims, and to challenge me when I am taking my turn as the bullshit artist. It is a form of programming on its own, using natural language to do it, and this might not be intelligence, especially in the sense we like to define it, but the fact that I have to, and can do this is amazing enough on its own. I will post pictures, and some markdown bits as we go. Don't be too harsh on the art. We don't have an art department at this time. 😬

If mods want to roll those posts out of the P&R AI thread into here, I am good with that.