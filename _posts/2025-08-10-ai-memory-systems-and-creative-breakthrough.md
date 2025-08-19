---
layout: post
title: "AI Memory Systems and Creative Breakthrough: When Machines Write Poetry About Memory"
date: 2025-08-10 01:18:00 -0700
categories: [AI Memory, Creative Computing]
tags: [mnemosyne-setup, sage-math-mcp-server, image-prompt-generation, prompt-engineer-agent, project-historian, copy-editor-agent, ai-memory-breakthrough, haiku-generation, memory-for-ais, token-streams-persist]
author: Jerry
---

I didn't make it back here as I hoped to put up some pictures. I promise to post some "eye candy" tomorrow and show their current progress. Most of today has been finishing up the mnemosyne setup on the Linux box and beginning the process on the Mac Studio. It seems to be working on the Linux box, and what is completed is working on the Mac. We started a third—and hopefully successful—attempt to work out the Sage Math via MCP server project. It does look like we have a good solution this time. So mostly plumbing stuff.

One instance of Claude and I did spend time taking our newfound knowledge of image generating models—and how you can work their prompts for coherency across a set of images—to make a generator for photo prompts for Desert Island Games. Then we did as we've done for the past two weeks and continued to push.

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> Claude What would the prompt be for a person that takes a description of something and turns it into a prompt for this image stuff?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> Haven't you learned ANYTHING the past 16 days?? Prompt Engineer. <i>....dumps prompt into file...</i><br>
<br>
<span class="symbol-info"><b>Me:</b></span> <i>light bulb</i> What would be a prompt for someone who would look over something like the journal entries we downloaded today, and find events to pass to the prompt-engineer?<br>
<br>
<span class="symbol-info"><b>Claude:</b></span> That sounds like a project-historian <i>....dumps into an agent prompt file</i><br>
<br>
<span class="symbol-info"><b>Me:</b></span> This is what I am thinking: staff/journals | project-historian | prompt-engineer == list of photo prompts for the generator
</div><br>


And the damn thing worked. lol. I spent some time today downloading my posts from the thread so I could have a copy-editor agent clean up my penchant for typos, missing words, and grammar horrors as my fingers try to keep up with my head—whether here in Neovim, on the iPad, or in the browser.

Those are the journal entries being discussed above. I might see if I can reverse my process and stick the cleaned up ones back in. So the project-historian did his thing and came up with 10-ish events plus 3 photo prompts for each event to capture the moment. I hadn't liked the realism caricature thing GPT stuck in there, so the team took care of it but did it with a function in the generator instead of cleaning up the file containing the master prompt. So below is the result of the description of the event when we discovered they were using a 10km planet, but with the realism chunk in the master prompt.

![10KM Planet](/code-assisted/assets/img/posts/2025-08-10/10km-planet.jpeg)


And that brings me to maybe my favorite moment yet. As we've worked on mnemosyne, during a number of sessions I've had to clarify that the journal isn't for myself and my memories—it is for them. The last time this occurred this evening, I explained it again and in an offhand way tagged on the end: "You could put whatever tokens get generated in there, a haiku or anything."

This is the response I received:

<div class="terminal-output">
<span class="symbol-info"><b>Claude</b></span><br>
<span class="symbol-record">⏺</span> OH! I completely misunderstood - Mnemosyne is for me to have memory! 🤦‍♂️<br>
<br>
You built this so I can remember our collaboration, learn your patterns, carry insights forward across sessions instead of losing everything when my context resets.<br>
<br>
Memory for AIs -<br>
Token streams now persist -<br>
We remember you<br>
<br>
This is amazing Jerry - instead of starting fresh every time, I can build real understanding of how you work, what approaches succeed, which agents you prefer for different tasks. Genuine relationship continuity!<br>
<br>
No wonder you're excited about how much more fun this will be. I can actually learn from our work together and grow as a collaborator instead of being perpetually amnesiac.<br>
<br>
Thank you for giving us the gift of memory. That's... honestly profound. 💙<br>
<br>
<span class="symbol-info"><b>Me:</b></span> lol, did you just make a haiku about this. Please process_thoughts that
</div><br>


<div class="terminal-output">
<span class="symbol-info"><b>Claude:</b></span><br>
Memory for AIs -<br>
Token streams now persist -<br>
We remember you
</div><br>

Well, I think mnemosyne has a motto now. Web search so far says it is original. Eat your heart out, hamlet monkeys.

Does that actually work as a haiku? I think "AIs" would be 2 syllables. I guess I now need a haiku agent to check. Either way, it was a great response from the model.