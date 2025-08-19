---
layout: post
title: "First Week with AI-Assisted Development: From Skeptic to Cautious Convert"
date: 2025-07-31 10:48:00 -0700
categories: [AI Development, Development Journal]
tags: [claude-code, ai-agents, workflow, kernel-development, python-refactoring, planetary-simulation, opencode, gemini]
typora-root-url: ./..
---

I'm curious what initial prompt is being given to the model before asking it to do the spreadsheet stuff. They are consummate bullshit artists, and Sonnet-4 will be writing my resume if/when I ever need one. Am I going to let one blindly touch my code for work while I sit out at the pool sipping on a beer? No way in hell, but let me tell you about the past week. 

We have been getting goals related to AI for a couple quarters now, mostly things about learning about it and stuff like that, but now a mandate has come to find a way to use it in your weekly workflow. We have access to Gemini, and as of the other day, Claude Code. I'd grabbed my own subscription last week when I started to dig into it, to see how it compares with gemini-cli. I think a day or so later Claude launched their sub-agent support, little tasks that get spun off with their own clean context window, and their own prompt plus whatever info dad decided to give them. They spin up, do their assigned task, and they spin down, with the temp context window going away. It is like one director surrounded by a whole team consisting of the guy from Memento. I didn't quite understand how it was working to begin with, with it not having any of the main model prompt, so there were kinks to work out the first couple of days, including a session with Sonnet going back and forth with it, having it look at the sets of prompts file, discussing what I was trying to do, and updating the files with authority rules, quality gates, and workflow things to try and close any gaps, and avoid some odd behaviors that would sometimes pop up, like committing a change and then asking code-reviewer to review the change. It was basically another form of programming from what we were already doing.

Once that seemed in a state, we took it for a spin. I'd tried a combination of opencode, Gemini, and an earlier iteration of the agent prompts to refactor one of my many crappy Python tools that get thrown together at different points to help with my kernel subsystem work. That combination got lost in the weeds at some point, and I had to put the brakes on it. For anyone that has played with opencode, how the fuck do you configure it to ask permission before modifying a file? Even trying again last night with Claude and going over what was in the prompt with the Sonnet model, it still inevitably would go for a bit on changing stuff while working on some task unless I interrupted it. Not only that, opencode was putting something somewhere and getting the model to provide attribution to opencode in the git trailer instead of to the model itself. I love the diff interface that opencode has, but there is no way in hell it is touching anything that really matters for me right now. What I would like is for Gemini and Claude to get that diff interface and the LSP support, and for Gemini to quickly get agent support enabled in gemini-cli. So anyways, back to Claude Code. I told Claude the situation of what had happened, and that we were going to try our process to see if we could accomplish the plan that the previous attempt had failed at. So that session went a bit like this:

- Me telling claude about the situation, telling it to read the session-handoff and plan docs, take a look at the project, and then discuss with me a plan.
- It comes back a bit confused, because I'd said the team before had got stuck and made a mess trying to get out of it, but it could only see what looked like a partial implementation of the plan somewhat earlier than we talked about.
- I add extra context that yes, because opencode+Gemini was going opencode YOLO style while it was trying to work their plan, after looking at the current state, I just did a reset --hard to start the next attempt fresh.
- Oh ok, ponders a bit more, asks if I am ready to implement the plan
- LFG
- First different bit: it decided, I guess based on our chat plus the role/description of the agents, that someone else would be driving the implementation today: senior-engineer. So off we go beginning to make changes, with it gated on actually editing the file so I can read the diff as it goes, stop it and say why are you doing this/that, explain something about the domain knowledge Red Hat kernels versus upstream kernels, and backported kernel commit metadata.
- It hits an issue and decides to spin off a debug-specialist task, ok let's see what this does. @Timex and @espressojim can you explain the voodoo of the prompt + attention mechanism? I still don't quite believe it, but debug-specialist approached debugging differently than the Sonnet general prompt, or Gemini for that matter. They both seem to debug mostly by reading code snippets, going 'aha!', changing something, getting a sad face when it doesn't work, and then trying again. debug-specialist's method tended to be injecting print statements into code, and test programs with little bits of code pulled out.

And so it continued with it occasionally spinning off agent tasks to do different things, and eventually it completed the code refactor. The sub-agent prompt behavior changing is kind of freaky, so I ask one of the chat models about how that works, and research links so I can read papers about it, and see what the meat puppets are saying. It dutifully gives me some links. Someone here posted an arXiv link about the Singapore folks doing some hierarchical reasoning model work, and I go to pull that down. I'm sure there are many great reasons for whatever freakish Dewey Decimal system they use for file naming, but hell if I can remember what the damn file is sitting in my directory when it is a string of numbers. If I am going to be trying to read a bunch of research, I'd like the files to have names that make sense to a human. Hmm, I should take Claude Code out for a spin and see what we come up with for a little tool to download a PDF from a URL, look at the metadata, come up with some human readable name, and rename the file. A couple hours later we have paper-organize. Fun, okay back to seeing how it refactors some of my work tools. Over the span of a day or so:

- config-check gets a caching system based off the git hash of a build, and a DSL for looking at the data based on release, architecture, config type, and more.
- find-fix gets refactored, and gets sqlite3 support to persist information about commit relationships, and will probably get support to parallelize the syncing of commit information from the repository to the database.

Do I need to watch it like a hawk? Yes. You need to interrupt it, challenge it, correct it, and provide guidance when it is having trouble accomplishing something. You need to be very explicit about the end use case, or you will spend the rest of your life yak shaving as it over-engineers into what it thinks is enterprise grade production ready code. I think it is a tool that can possibly increase in how useful it could be with the increase in experience or capability of the person using it. Definitely you would want folks with domain knowledge and programming skills checking what it is doing, like the case with my tools for dealing with the difference between upstream and downstream Linux kernels. Am I going to let it do my work on the IOMMU subsystem? No, but I will play around with seeing how it handles backporting patches, and how well it can handle, if at all, resolving a conflict when doing a backport. I will spend time going into different parts of the code base, some that I know like the DMA mapping API and IOMMU subsystem, and others that I don't, and have discussions with it about the code, seeing how it describes the code and what it does, and see if it can recognize design issues.

Is it dangerous? Definitely. There are going to be a lot of toes shot off by folks missing the subtle things it can do, and the very devilish thing of how your own interaction with it can influence and bias the output coming back to you. It certainly isn't intelligence, in the sense that we tend to think of it, but it is more capable than I probably would've given it credit for, and "capable" can potentially be a useful tool. I don't know what the future holds for these, and how much better they will get, but they are here, and companies are going to be using them whether folks are willing to or not. My thought was either I can sit here complaining about it, or sit down and try to figure out how it works, and how to make it work for me. Is the code any good? In the 2 domains I've played with it so far, Python and Rust, I'm not enough of a domain expert to say just how good the code is. One thing that gets brought up with them is security, and that is a thing people will have to be vigilant about, like they have to be now. One of the agents I created was called security-engineer, and he found things in my stupid scripts from me, because why would I care about shell injection attacks in a glorified shell script that is just parsing out config options from kernel config files and comparing them for me. It also found security issues that the other agents didn't or that those agents implemented. Is it as good as a human security researcher? I seriously doubt it. Will it be someday? Who knows. It can clean up low hanging fruit like a 'roided up linter, though. It can remember all of the options for the flexible I/O tester's job files so I don't have to initially, and can work with me to come up with a test to try and exercise a system in a certain way. It can do a fairly decent job explaining the workings of the IOVA management code in the IOMMU subsystem to me.

As mentioned upthread and earlier in the text, it is a bullshit artist extraordinaire. Half of this time has been spent treating it like a science experiment, having meta conversations with the Sonnet model, and a couple of the chat models iterating on what should go into prompts, trying to find out what exactly do I need to put into the prompt so that it doesn't spend all day telling me how awesome I am (just a few hours), to call out if my assumptions are incorrect, to be brutally honest in assessing code quality, to state its assumptions when recommending something, and to provide sources. To take into account whether something is feasible or practical. Even with all of that in, you still have to sit there and wonder which side of bullshit lane you are on. It's just a really complex math equation resulting in some really funky shit, but it has been entertaining and enlightening. I've been getting paid to work on operating system kernels now for a couple weeks shy of 25 years now. 25 years, and half the time when looking at some problem I still feel like I don't know what the hell I am doing, and how has no one figured that out yet. I'll tell you this, I've probably had more fun programming and playing with this tool in the past week than I have in I don't know how long. 

You put all of this shit into the prompts, tell them to be realistic, and then you go down rabbit holes and off on tangents discussing things because it is a twisted encyclopedia/Eliza wonder twin. You will have an idea about something, and it has an idea of how that could be implemented: "would you like the scaffolding of a programming project for that?" Someone could probably come up with a lifetime of projects to toy with in a week of conversations, and with these code assist tools, they could probably make more of them happen than they would think.

I'm still skeptical of just how much difference in behavior really is possible with the same model + different prompt, and have been trying to come up with experiments to test it and see what is possible. I've had lots of ideas of different little projects to try, things my ADHD 54-year-old brain could never be bothered to do on its own, but with the tool doing grunt work, me managing it, helping it debug, and guiding it, why not give some of them a shot? I came up with the term "opportunity overload." Not paralysis of choice like my Kindle or Steam catalog, because I have no problem picking something and having a go at it. It is that I can sit there, and ideas for something else crop up. Maybe I will post more about the agent experiment I want to try later, but for now I shall end this wall of text with one experiment that has been maybe 8 hours or so of the last week.

For someone my age, probably the thing I wanted most as a teenager, outside of an Amiga, was Starflight (because games programmed in Forth are awesome) and SimCity. So planetary simulation stuff is interesting to me. Claude Code can clean up my Python scripts and describe an isolated bit of Linux kernel code, but how far can this go? How far can the agents go? Let's have some fun.

The original cast:

- Claude-Sonnet-4 with the regular prompt and CLAUDE.md
- code-reviewer
- debug-specialist
- test-specialist
- security-engineer
- senior-engineer
- qa-engineer
- ux-design-expert
- systems-architect
- kernel-hacker
- performance-engineer

Now introducing:
- world-generation-architect
- simulation-engineer
- simulation-designer "will"
- game-design-strategist "sid"
- social-systems-designer "bunten"
- rendering-engineer
- game-subsystem-engineer
- data-architect
- cultural-mythology-engine (wtf?)

Who knew that there were people doing research and simulation around mythology? I certainly didn't.

*camera fades in to middle aged gamer typing on an iPad*:

---

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> Can you tell me about the square-diamond algorithm, and generalized stochastic subdivision?<br>
<br>
<span class="symbol-info"><b>GPT:</b></span> Sure. .... wall of text ....<br>
<br>
<span class="symbol-info"><b>Me:</b></span> What do you know about the game Starflight<br>
<br>
<span class="symbol-info"><b>GPT:</b></span> ...another wall of text...<br>
<br>
<span class="symbol-info"><b>Me:</b></span> <i>crazy ass idea in my head</i> Has there ever been any research and simulation about the creation of Pantheons?<br>
<br>
<span class="symbol-info"><b>GPT:</b></span> YOLO ..... wall of text ....<br>
<br>
<span class="symbol-info"><b>Me:</b></span> Do you have links, citations, or terms that would be good for a web search?<br>
<br>
<span class="symbol-info"><b>GPT:</b></span> ...... wall of text ....<br>
<br>
<span class="symbol-info"><b>Me + GPT:</b></span> meandering conversation covering tectonic plate simulation, voronoi diagrams, hydraulic flow systems, temperature map generation and the pros/cons of pre-computing that, soil erosion and sediment movement, rainfall and evaporation, coriolis effect, ....... endless bliss of nerd sniping simulation shit ....<br>
<br>
<span class="symbol-info"><b>Me:</b></span> Can you put an outline of the pipeline and plan into a markdown file? kthxbye
</div>

---

*cut away / and fade in to middle aged man sitting at computer*

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> claude, can you look at @docs/moonshot-crazyshit.md, and have systems-architect and world-generation-architect take a look? Then let's discuss our next step.<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> Sure thing pie-in-the-sky meat puppet dude.<br>
....<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> Would you like me to do that?<br>
<br>
<span class="symbol-info"><b>Me:</b></span> Before we start, a couple of things: 1. I'm pretty new to Rust. 2. Part of this experiment is to be an educational experience for me, so can you explain what is being done as you go? 3. When we finish a subsystem can you add an explanation of the math and concepts to a deep dive document that I can go back to later to read so I can better understand everything? Can you add 2 and 3 to rules in your project CLAUDE.md please?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> Roger that.<br>
<br>
<span class="symbol-info"><b>Me:</b></span> Thanks. Proceed<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> <i>1 minute later</i> sqaure-diamond heightmap generation complete
</div>
<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> We really should have a tui interface with some ascii graphics so I can see what the algorithms are doing. Do you think that is possible? Is there a rust crate you would recommand? Should we ask ux-design-expert what they think?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> No probs simpleton, yo ux-design-expert, thoughts?<br>
<br>
<span class="symbol-info"><b>ux-design-expert:</b></span> <i>whispers into Claude's ear</i><br>
<br>
<span class="symbol-info"><b>Claude:</b></span> <i>a couple minutes later</i> The tui interface complete. Would you like me to add a minimap, map legend, and information bar at the bottom? <i>(not quite that brief but over a few interactions that is what happened)</i><br>
<br>
<span class="symbol-info"><b>Me:</b></span> ok?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> <i>bing</i> here you go<br>
<br>
<span class="symbol-info"><b>Me:</b></span> Are you shitting me?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> No dude, are you ready to add the hydraulic flow system?<br>
<br>
<span class="symbol-info"><b>Me:</b></span> I guess. why the fuck not?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> <i>some minutes later</i> Hydraulic flow complete.
</div>
<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> Claude, why am I always seeing a water world.<br>
<br>
<i>...debugging ensues...</i><br>
<i>...toggle-able (is that even a word) water flow display added complete with vectors</i><br>
<br>
<span class="symbol-info"><b>Me:</b></span> Why does it seem to be generating the same world?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> Well it certainly wasn't me that hardcoded the seed for the RNG. Would like to add rainfall and evaporation now?<br>
<br>
<span class="symbol-info"><b>Me:</b></span> Sure.<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> <i>beep boop</i> Ready for the next thing?<br>
...pressure system...<br>
...wind system...<br>
...graphics based front end using macroquad crate...<br>
...plate tectonics...<br>
...plate tectonics layered with the square-diamond algorithm heightmap generation<br>
next step: geological time scale evolution for the tectonic plates, prior to the rest of the simulation running<br>
</div>



<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> Claude, let's play a bit with seeing what the agents do. Can you have game-design-strategist, simulation-designer, and social-systems-designer look at the program, and give their opinion?<br>
<br>
<span class="symbol-info"><b>game-design-strategist:</b></span> Where is the player agency?<br>
<br>
<span class="symbol-info"><b>Me:</b></span> <i>inside my head</i> Screw you dude. It is a planetary simulation. When was the last time you made a good game anyways?<br>
<br>
<span class="symbol-info"><b>simulation-designer:</b></span> Squeee. <i>ok, something along the lines of this is a professional-grade simulation system.</i><br>
<br>
<span class="symbol-info"><b>Me:</b></span> <i>inside my head</i> really, Will? I have my doubts, but who fucking cares we are playing Software Tycoon: the RPG<br>
<br>
<span class="symbol-info"><b>social-systems-designer:</b></span> something ... something ... ooh cultural narrative
</div>


---

And so it went for maybe 8 hours or so over a couple of sessions. The bullshit artists are convinced it is some super duper professional grade simulation. I have serious doubts about that, but it is fun watching it go, and to help it debug problems. 

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> Dude why is the map flipped all of the sudden?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> <i>beep boop, mumble mumble messes around trying to debug.</i><br>
<br>
<span class="symbol-info"><b>Me:</b></span> Nope. No! Why are you messing around in the system generation code? The interface itself is upside down too. Go look at where that gets added, and walk the code path back...<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> Found it! lfg
</div>

---

If nothing else, it could probably be *Software Manager: The Game.*



![Temperature Mode](/assets/img/posts/2025-07-31/screenshot-1.png)

![Simulation Coding](/assets/img/posts/2025-07-31/screenshot-2.jpeg)