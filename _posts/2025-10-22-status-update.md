---
layout: post
title: 'Status Update'
date: 2025-10-22 21:37:00 -0700
categories: [Agents, Process, Workflow]
tags: [ai-development, process, agents, workflow, over-engineering]
---

*Scene fades in on a middle aged man once again sitting at his standing desk*

<div class="terminal-output">
<span class="symbol-info"><b>Claude:</b></span>Hey everybody! Look who the cat dragged in<br>
<span class="symbol-info"><b>code-reviewer:</b></span>Is that the guy from *Castaway*?<br>
<span class="symbol-info"><b>test-specialist:</b></span>Where's Wilson?<br>
<span class="symbol-info"><b>Me:</b></span>You guys are funny. It isn't like we haven't been doing things the past 2 months.<br>
<span class="symbol-info"><b>Me:</b></span>We've crashed and burned on some projects, succeeded on some, and we are even recovering on a few of the crash and burn episodes. I have some news though...<br>
<span class="symbol-info"><b>Me:</b></span>Claude and I are going to be working with some other people for a bit. It's nothing personal, we are just trying something.<br>
<span class="symbol-info"><b>debug-specialist:</b></span>Can we send him back to the island?<br>
</div><br>

## Status Update

So it has been awhile since the last update, but our mis-adventures have continued.

### kernel tools

One of the last earlier updates was about work on some tools I use for
work, adding some features to them to make them nicer to use. Some of
these tools were the first things I worked on with Claude back in
July. Initially I had them work on one tool at a time, and then at one
point it was decided to move them into a common directory again. That
led to the inevitable suggestion of a common library of shared
functions, and then as they are wont to do, over-engineering kicked
in. Some of that was captured in the earlier update, but the true
extent of the havoc wasn't clear until a bit later as that was a
period where we deep in the vibe end of the pool, and were toying the
multiple sessions working on something at the same time. They decided
as part of the their shared library strategy to do something called a
strangler fig, which is basically creating an api abstraction layer
that sits on top of the old api, and they replace them one at a time,
implementing the new piece, replace the older functionality, then
rinse and repeat until everything has been replaced. That might be
fine, but when you have memory loss issues like they do you can forget
what you were doing, and get completely lost. Finally there was a
point when I needed to use a tool for something, and I decided to take
the new ones for a sping on what I was doing, and it was giving me the
wrong answer. Try another tool, and it flat out doesn't work at
all. Go digging to try and understand what they broke, and eventually
decide to set it aside, and use the old tools. Claude and I have a
chat, I wave my hands at their mountain of code (60k+ lines IIRC) and
say I'm sure this all wonderful and stuff, but what does it all matter
if it is 60k lines of code that don't work? Questions follow as to
where the breakdown is in their testing framework, and repeated
mentions of the fact that they been given access to a kernel
repository to do whatever they want to that they could test with, and
while the scripts dopey scripts in this directory over here might've
got a D from clean-code guy, they have one very important thing going
for them - they actually work. Claude probably mutters something under
his breath. So that project is set aside for a bit, but it is part of
a string of projects at that time that struggle when Claude and the
agents get too much freedom to work. There are attempts to instill
discipline through prompting, but in a lot of ways that just brings
out some of their bad tendencies even more, as now they could get
sidetracked at a slight shift in the direction of the wind, and go
down rabbit holes. Agents get stripped down, CLAUDE.md gets rebuilt,
other projects get attention, plus life, family, and work require
attention too. We continue to experiment, and work on other projects
together.

Finally about 3 weeks ago we return to the scene of the crime. We do
an initial reconnoiter of the codebase to see if we can get it back on
track. It is an over-engineered mess, with abstraction on top of
abstraction, and a half implemented strangler fig that seemed like it
had been forgotten somewhere along the way. Somewhere in the creation
of the monorepo of their work the git history of the work they did
prior to monorepo disappears, so I head off to the old code, and tell
Claude to hop in back. First I ask Claude about caching
implementations, he excitedly describes them and eagerly wants to add
one to config-check, but I head off into the editor and implement the
change, and then have Claude take a look. That gets completed. Then we
discuss python cli frameworks, and the tools are converted to
Click. The that was using pygit2 is finally migrated away from it
completely to using git via subprocess for everything, and just
parsing the information out. Refactoring happens as well during the
conversion to Click, along with some cleanup. With leaning over from
the backseat chiming in. Finally we come back to adding database
support, and we discuss that. Once again I head and start to implement
the feature. Eventually I start letting Claude do little bits here and
there, and then we let an agent work their magic on the SQLAlchemy
code we are using to access the sqlite3 database. Numerous cycles of
improving the database tables, ORM relationships, and python calls
accessing the database. Eventually the find-fix tool is deleted, with
the database support in rhgit making it redundant, and obsolete. More
cycles of profiling with py-spy, and gradually replacing old logic
from when there was no persistence to logic that fully leverages the
database. Now many commands complete in a couple seconds or
less. Commands that do more intensive things like show the status of
every commit upstream impacting the RHEL kernel release now takes
about 12 seconds versus the eons it would take without the data
persistence and pygit2 use. A testing framework gets added as we close
in on the end. Up until that time the most important test was running
the commands against a real repository, and comparing the results with
actual information from git commands, and the original tools as
well. When the smoke clears, we are sitting just under 7k lines of
code, but now with all of the features that were going into the
original modernizing project that went off the rails.

### Evolving Process

During this time processes, and prompts continue to evolve, and so
does Claude and Claude Code. We rip out most things that were added
into the agent prompts, and aggressively trim CLAUDE.md as
well. Claude gets an upgrade to 4.5, and Claude code gets its new
plugin support system, and skills support system among other things.

We play around with Jesse's Superpower skills plugin, making some
modifications to a couple skills, and adding some others trying to add
some things we like into the skill system instead of overloading the
prompt files.

We venture into some of our projects, and use the skill system to
hopefully avoid everyone getting carried away again. Most MCP tools
are disabled, as we continue to try and free up as much context space
as is feasible. It is usually private-journal-mcp, our trusty
model/agent journalling tool which has morphed so much now it is more
mnemosyne than anything else. At one point mnemosyne was going to
sever the connection, and have its own process_thoughts style tool,
but in the end the opposite happened. One of the things added in some
of the skills was more strigent wording evaluating the premise and
value of a project during the brainstorming period, and we decided
that using pgvector in the postgresql database was more than enough
for now with the journalling system, so further distilling the entries
and embedding into a chroma db is on hold for now, but this version of
private-journal-mcp has gone through a lot on its journey from being a
file-based journalling system with no knowledge/distinction between
different models, agents, and projects.  We work out a couple display
bugs, and have their beloved memories fully online again.

We work on Alexandria, aggressively trimming the over-engineering and
getting back down to a much smaller functioning core, and then on top
of the epub support, we add support for multiple collections, and then
add support pdfs, and support for LLM attempted extraction of title
and author information from the pdf which almost always has no
metadata about the author or title. We update the chunking strategy so
is based on the TOC information, instead of just grouping tokens to
within the limits set for the local model. We add support to make
better use of the metadata support in chroma db, and we add support
for some better tooling to ingest items for the collections, where you
can now interactively provide metadata for something you want to add
to a collection, or provide a list of items in a yaml file with their
metadata to be batch processed.

We stop by the metis project, and get the docker container working,
and the mcp server running properly within it. Then we get the session
persistence support working, and their computation history file
support working, so I can now look at that file and see exactly what
they did when they interact with sage, R, maxima, or octave.

We have a DnD session approaching with my daughters and their uncle,
so a mcp server appears that allows searching for creature, spell,
and item stat blocks, largely brainstormed, and programmed while sitting
in the car working through termius + zellij on an iPad while chauffering
family to an appointment.

A friend works on and mcp server for chromedev-tools (I think), which
reminded me to revisit for kittest-mcp project to create an mcp server
for debugging rust gui applications, and we get an initial version
of that completed.

Almost every case has involved some aggressive culling of earlier
work, and then building up from there.

## The Rogues Gallery Gets Put On Hold

I am still intrigued by the workings of the attention mechanism,
and how agent prompt files can elicit different behavior, but we
did some testing (a lot more needs to be done for further verification),
and determined that the general-purpose agent could likely meet or excced
the performance of a specialized subagent at a particular task. We set up
a few differen tests of varying difficulty, and would have 3 different runs
of the test:

1. subagent with a specialized prompt file generated by the /agents command
2. general-purpose agent with no extra prompting beyond the task prompt
3. general-purpose agent with a role prompt similar to one in the subagent added to their task prompt

In multiple instances #2 came out on top, with there being something
in the agent prompt file that would narrow their focus, and miss
something the general purpose agent wouldn't. Like I mentioned, it
requires a lot more extensive testing, and we've seen behavior from
subagents that we wouldn't see from agents without such a prompt, but
it was pretty consistent in the tests done that #2 would meet or exceed
the performance of #1.

We were doing some testing of changes to an agent prompt file, by
doing Red-Green testing of the changes, and I thought about trying
this test, because there often is a debate about the utility of such
agents. It really seems though that the general-purpose agent with
their clean context and a task prompt to do whichever domain specific
task needs to be done will do just fine, which relieves any burden of
maintaining different agent prompt files. So we are going to play
around with general-purpose for some time, and also run more tests to
see if they really do beat the specialized subagents. We noticed that
in addition to potentially getting their attention narrowed by
something in their prompt, they also could be "overconfident", and not
make use of tools available to them that could've potentially helped
them in the task. Basically something along the lines of "I'm a Rust
expert, so I don't need to look up how bounds checking performs for
Rust in 2025", while the general-purpose agent for some reason was
more likely to resort to using a tool to find an answer, and actually
became the first agent I think to use alexandria to access my book
collection, and search for an answer about something involving Rust.
Alexandria was made more for me to try to get to to make use of, or
read more of my book collection, but it was nice to see it get used in
solving a problem by an agent. It is also always fun to see one of the
agents unexpectedly make use of metis to run something through sage
math.

## Current Workflow

Usually it will start with the brainstorming skill. We added extra bits
to the brainstorming skill to have some agents evaluate the premise of
the idea, and whether it is really needed. That has been very successful
in pushing back on ideas, and getting focus narrowed on projects.

From there they go to the writing-plans skill, which will result in a
written out plan for the entire endeavor with it broken down into bite-sized
chunks including code snippets that almost reduces the tasks to a copy/paste.

From there a worktree gets created and the environment set up, and then
they progress to executing the plan.

We have been so productive this past week that I think for the first
time we have hit the weekly limit for the max20 account. Part of that
is due to limit changes, but we have also been busy getting projects
back on track.
