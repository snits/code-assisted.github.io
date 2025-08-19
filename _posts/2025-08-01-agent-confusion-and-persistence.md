---
layout: post
title: "Agent Confusion and the Comedy of AI Memory"
date: 2025-08-01 11:07:00 -0700
categories: [AI Development, Agent Systems]
tags: [agent-memory, debugging, ai-agents, private-journal-mcp, context-persistence, agent-confusion]
author: Jerry
---

*Scene fades in: middle-aged man sitting at his standing desk.*

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> <i>in head: okay, that seems a little better. Is it something they scraped offline? It is very focused on the simulation—in fact, it is completely focused on what has been currently implemented in the simulation.</i> <i>LED pops up above head</i><br>
<br>
<span class="symbol-info"><b>Me:</b></span> Claude, the pitch documents from earlier all focused on what was currently in the simulation, yes? What was their task? Can we have them do it again, taking into consideration the future roadmap of the simulation engine? They can either continue with the same idea or come up with a new one. <i>(summary of a few interactions)</i><br>
<br>
<span class="symbol-info"><b>Claude:</b></span> sure thing dude, you should be clearer about what you want moron<br>
<br>
<span class="symbol-info"><b>game-design-strategist:</b></span> nom nom nom nom, beep<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> gives summary that is basically the same thing as the basis of Terraformer's Legacy before<br>
<br>
<span class="symbol-info"><b>Me:</b></span> hmmmm, that is a bit disappointing that it didn't really change ANYTHING.<br>
<br>
<span class="symbol-info"><b>everyone watching at home:</b></span> Look at the files in the directory, idiot! Where did network-wars.md come from?<br>
<br>
<span class="symbol-info"><b>Me and Claude:</b></span> let's try it again<br>
<br>
<span class="symbol-info"><b>game-design-strategist:</b></span> <i>(I shit you not)</i> why are they asking me for a new pitch document, I just fucking gave them one.<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> <i>at some point his forgetfulness forgetting TL, and now talking about NW, but thinking we are looking for a fabled, lost document about Terraformer's Legacy.</i><br>
<br>
<span class="symbol-info"><b>Me:</b></span> What the hell are you on about with Network Wars? You gave me back a summary of TL when he asked the first time.<br>
<br>
<span class="symbol-info"><b>Me:</b></span> <i>looks at directory</i> OH <i>(wtf was all of that confusion about?)</i>
</div><br>

So part of what happened here was the first go-round—Sid-inspired dude did come up with a new idea, but some timing thing caused Claude to not notice, and to spit back the summary of TL to me again. So we tried again. Now, my old friend Jesse's private-journal-mcp isn't that private really, but don't tell the AI. When someone has a thought they want to save off, it sends a message to the server but also brings up the entry in the Claude Code display. So game-design-strategist gets the task again, maybe queries the private journal and is confused about being asked for a new pitch document when he just made one. Now these agents by and large are supposed to be like the dude in Memento. They spin up with a blank context window, do their thing, and then the context window goes away. The private-journal-mcp gives them a tiny bit of persistence. So he is a bit confused and sends a process_thoughts message to the MCP server to record that he is confused about it. I see it pop up on my screen, back-seat-drive and say something about it in a prompt while it is still working, and that probably trips Claude a bit and he gets confused about which thing we are talking about. It was hilarious.