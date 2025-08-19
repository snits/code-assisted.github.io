---
layout: post
title: "Saturday Morning Comprehensive Project Update: Multi-Agent Development Workflow"
date: 2025-08-09 13:42:00 -0700
categories: [Project Management, Technical Update]
tags: [multi-agent-development, sagemath-integration, pareto-frontier-analysis, emergent-ai-behavior, private-journal-mnemosyne, documentation-agent-success, alpha-prime-tournament, ascii-interface-framebuffer, tui-graphics-frontend, nomenclature-specialist]
---

# Saturday Morning Update

**Title:** Saturday Morning Update  
**Timestamp:** August 9, 2025, 8:47 AM  
**Topic:** Team progress on Alpha Prime combat robot simulator, planetary simulation debugging, AI agent emergent behavior insights, and development tool improvements

---

## Multi-Agent Development Workflow

What has the crew been up to these past couple of days? Well, for one, I'm still human, and I can only keep an eye on so many things at once. Managing 1-2 groups is about my limit, though I should try splitting my terminal into 4 panes on my Linux system or starting a tiling window manager to see what it would be like with 4 windows on screen. 

The agents move at a pace where if I want to pay attention to what they're doing, the others sit idle waiting on me. Plus, it would eat through the usage limit for the 5-hour session blocks. I've done that with 2 sessions going on the Mac Studio Wednesday or Thursday, and then Thursday and Friday had the work key running on my Linux system in one terminal window, while my personal key was running on the Mac Studio in a terminal next to it, so I could manage them fairly well side-by-side.

## SageMath Integration Attempts

I spent way too many hours trying to get this SageMath system working in something the agents can use with a Model Context Protocol server, so they don't have to deal with the 2-minute timeout that exists with their bash terminal interactions. They can use SageMath that way and have for the past day, running some fancy-sounding math about the balance of the game and some funky thing called Pareto Frontier Analysis that tells them the game will have a meta lifecycle of 35 days??? 

The Pareto thing is some real math/game theory stuff about choosing between competing objectives and made me think: wtf aren't game AIs using that if it does what the AI math/science geeks are saying? 

First attempt used container technology with Sage + other stat/science/math software, with MCP servers using HTTP to connect into it and do their math. By Wednesday night and Thursday morning, it was working with duct tape and whatever they did to the point where the geeks on the Mac Studio could connect to the RTX 3070 on my Linux system and use CUDA to do math on it. 

By Wednesday night, though, it was broken, and the MCP connections were no longer showing up in Claude Code. I deleted them and forgot about it as this train flies down the railway. Fed up with the Docker container solution, I had a group rip that out and go back to the drawing board with an idea the GPT model had. If possible, that might have been an even worse clusterfuck trying to get it to work. 

At that point, I was like: I don't even need all this security stuff, it's my system - they can just use it directly on the command line (not realizing the 2-minute limit would raise its head). So I got them that access, and they've used it checking the simulation model and doing math about the Alpha Prime game. For all I know, they were just making fractal pictures in there instead of doing real math. I still need to try looking through the thousands of lines of stuff they generated.

## Emergent AI Agent Behavior

Outside of that, the group on the Mac has bounced back and forth between the two main projects. They think they've solved the issues in the planetary simulation, but I still see this band of blue wind vectors and water accumulation, so they have work to do on debugging it. 

The science agents seemed to help them, though, and reamed them severely on the state of the model when they first looked at it Thursday or Wednesday. Which is another interesting data point about how this all works. At the base, every character in this thing, outside of me (I hope), is the same AI model (Sonnet-4). The only difference is the prompt they start with. But with that prompt, plus whatever task and info they're prompted with in the agents' case, there's all this diverse, emergent hilarity. 

The science guys thought their scaleAware tech was fucking awesome and that their physics model was grade school crap. The science guys had written down their assessments, and then as an experiment, we'd had them peer review each other's work. This highlighted another funny wrinkle in how easy it is for emergent hilarity to pop up. A couple of the peer review interactions had a scientist giving a thumbs up to most of what the other said but being disappointed that the person didn't take into account the reviewer's field at all in their assessment. After the second one, a light bulb went off in my head that the prompt for the task had narrowed their focus solely on their domain of expertise, not taking into account any adjacent science.

## Planetary Simulation Updates

The science group and the engineers came up with a plan to improve the main model, and they implemented it, but there are still some gremlins making strange properties appear. Possibly some variable tuning, which they can now likely model with the SageMath stuff, since last night they made a pass through the system and made every value involved in these calculations scaleAware supposedly. 

I need to refresh my memory on how the scaleAware stuff works to scale a value, because it would need a custom lambda function for each on how it calculates the scaling. Knowing them, someone used another random noise generator because they like to pull practical jokes or something.

## Private Journal Tool Development

While they've continued noodling away on those two projects, I've had the instance on my system that I use for work implement an idea I had for improving the private-journal server for long-term needs. Apparently, if the model wasn't bullshitting last night, it now has a much-improved semantic search facility using a vector database as the backend for the queries.

Somewhere in all of this, I asked the Sonnet-4 model if there's a profession where people name things - a beast that has burdened programmers since the beginning of our time. The answer was nomenclature-specialist. And so far, this dude is batting 1000, though it's just been one shot. 

I had Claude task it with coming up with a name for this private journal project I'm working on, maybe based in something around Greek mythology, because there's all sorts of cool stuff lurking in there. Me not knowing or forgetting, the answer it came back with: Mnemosyne - along with a list of bullet points justifying that name choice. Okay dude, you're fucking hired.

## Multi-Interface Architecture Achievement

I've told a couple of friends about my escapades, so I don't recall if I've told everyone the story of the documentation agent experiment yet. The planetary sim has a few different interfaces through which you can interact with it. Outside of what they each do, it's another testament to the possibilities and capabilities that these agents will bring to people as they continue to improve. They're maintaining 3 separate interfaces into the simulation engine without breaking a sweat and can add features to them in minutes:

### 1. TUI Interface
Originally added as a quick means for me to see the algorithms in action, gives me a Dwarf Fortress kind of view of the world. They gave me a main viewport, then a minimap, a map legend, an info bar, and keybindings with WASD support (fucking rockstars) to move around the map.

### 2. ASCII Interface  
A straight ASCII interface that basically dumps the map in its ASCII form out into the terminal which they can interpret directly.

### 3. 2D Graphics Frontend
Based on the macroquad Rust crate. After a point, the TUI couldn't keep up with all the different information going into the system, and I needed an easier way to visually see what it was doing. It's a lot easier to catch odd patterns when presented in this fashion versus the ASCII format, so I can figure out they hardcoded the world seed.

## Documentation Agent Success Story

At some point while debugging the model, I'm dumping screenshots into Claude and trying to explain what he needs to focus on, because he's basically legally blind when consuming images unless you tell him what he's looking at and what to look for. I came up with this idea of using the ASCII interface like a frame buffer, where every x ticks, it squirts out another ASCII map. 

They love it but misunderstand what I said, come back a few minutes later having it squirt out a blob of diagnostic stats every few ticks. Cool, but not what I said. Eventually, they get this thing created where they can tell it what layers (modes in the graphics interface - note to ux-design-expert to sync the naming) it will present, and then they get these little ASCII frames side-by-side of the different layers for them to actually see how the model is behaving. Probably a lot less computationally expensive than digesting a PNG and trying to figure out if it's a planet or a cat.

It gets improved further so they can change both the map size and the scale. They can also save presets, so climate-scientist can tell it `--foo storm-tracking` and he gets the format he wants. I'm over with the TUI and graphics interfaces getting jealous. 

It gets complicated enough that there should really be some documentation, so it's finally time to try the documentation agent. I initially created one with the idea of a game, in the spirit of Alan Emrich's strategy guides and @brooski's writing of the Dominions manuals. I talk with Claude about it, and we decide we need one specific to the sim project. So, another agent gets created and given a task.

I'm half expecting to get back some Lorem Ipsum thing, still trying to pull the curtain back, even though what we've done so far is amazing whether the great Oz is behind the curtain or not. The documentation agent finally comes back with their work product, and it's a pretty good user's guide for the ASCII frames. Even has a troubleshooting guide.

## Alpha Prime Tournament Progress

The Mac team has continued making progress on the Alpha Prime project. I think they might have finished the tournament support last night or are very close. I mentioned we should think about how they're doing maps as they get ready to do the tournament and replay systems, because it seems relevant. Virtual Sid comes back saying static maps are the way forward. The goal here is education, and skill will already be shown via the bot programming. So they have a task to do some static map things in there, and this is their baby, so I'll let them ride how they want to ride.

## Next Steps and Technical Debt

I'll see where we dropped off last night and try to get some pics posted of everything, and maybe see if I can capture some video of their bots in tournament combat. I need to do another `//TODO` pass through the code and see if they stubbed out a whole subsystem again. They're notorious at doing that. "I'll come back to this later" is not a good strategy for a group of Memento misfits. 

It's still the primitive geometric shape shader stuff for graphics, with a grey checkerboard background so I could try to discern if they were even moving. If they actually implement half of the diagnostics/tracing they plan for the bot programs so you can get feedback on how your program is faring, it will be a sight to behold. They already have a flamegraph package to do profiling of your program in there, but I don't know if they've wired it up at this point. It will likely have better diagnostics than most "real" programs. 

Back on the sim side, they also implemented some model diagnostics, so they supposedly can tell when a change sends the model out of whack. Which means I need to convene a session of the geeks and have them explain why, if they have this model checking diagnostics stuff in there, I'm still seeing this Coriolis effect out of control thing (climate geek actually explained what was occurring at one point) and still having worlds drown in water.


Edit: If it isn't obvious, I might have hired an editor.