---
layout: post
title: "Desert Island Games Grows Up: Adding Project Management and Finding Terrain Bugs"
date: 2025-08-02 01:32:00 -0700
categories: [Project Updates, Technical Debugging]
tags: [project-management, technical-feasibility-engineer, project-scope-guardian, terrain-generation, systems-architect, world-generation-architect, diamond-square, biome-bugs]
author: Jerry
---

**Desert Island Games Grows Up (kind of)**

We are all starry-eyed dreamers here at Desert Island Games. The meat puppet is moping in his chair, listening to the acoustic guitar of *Under the Milky Way* by the Church, on repeat in the Winamp of his ADHD mind. 

<div class="terminal-output">
<span class="symbol-info"><b>Meat puppet:</b></span> everyone gets nerd sniped into chasing the next thing, and there is no one trying to keep it under control (that is why I am supposedly here)<br>
<span class="symbol-info"><b>Meat puppet:</b></span> how can I get this under control when I am as starry-eyed as they are?<br>
<span class="symbol-info"><b>Meat puppet:</b></span> gpt, give me a prompt for a project manager and technical lead to keep tasked with keeping a project in scope and avoid feature creep (good luck!)
</div><br>

Desert Island Games expands staff:

technical-feasibility-engineer
project-scope-guardian

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> claude can you show the new guys around, and have them look at the project?<br>
<span class="symbol-info"><b>Claude:</b></span> are they buying lunch?<br>
<span class="symbol-info"><b>Me:</b></span> ...<br>
..... later ......<br>
<span class="symbol-info"><b>Me:</b></span> Claude, why do all the overlays except temperature always look muddled? Shouldn't I see pressure systems or something?<br>
<span class="symbol-info"><b>Claude:</b></span> I'm not a meteorologist, why are you asking me?<br>
<span class="symbol-info"><b>Me:</b></span> dude<br>
<span class="symbol-info"><b>Claude:</b></span> :( yes, you should be<br>
<span class="symbol-info"><b>Me:</b></span> Wow, the movement is much smoother though. Good job rust specialist dude.<br>
<span class="symbol-info"><b>Me:</b></span> claude here are pictures of all of the modes<br>
<span class="symbol-info"><b>Claude:</b></span> wow, look at the rivers, and valleys, and ....
</div><br>
![Water World](/assets/img/posts/2025-08-02/screenshot-1.png)

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> <i>wipes glasses off, looks at the screen again.</i><br>
....<br>
<span class="symbol-info"><b>Me:</b></span> Claude, how do you consume images?<br>
<span class="symbol-info"><b>Claude:</b></span> like twinkies? Oh, wow it looks like it is a water world.<br>
<span class="symbol-info"><b>Me:</b></span> couldn't we write something to go through the terrain generation, and generate distribution stats for the biomes and everything and tell us if something is broken?<br>
<span class="symbol-info"><b>Claude:</b></span> <i>bing</i> here you go<br>
<span class="symbol-info"><b>Claude:</b></span> let me try ..... awesome seed #1<br>
<span class="symbol-info"><b>Claude:</b></span> cargo run -- --graphics --seed AWESOME --width 512 --height 256 ... little map with big ass continent to one side.<br>
<span class="symbol-info"><b>Me:</b></span> cargo run -- --graphics --seed AWESOME --width 2048 --height 1024 .... water world<br>
<span class="symbol-info"><b>Me:</b></span> Claude! ^^^<br>
</div><br>


![Pressure Mode](/assets/img/posts/2025-08-02/pressure.jpeg)
![Wind Mode](/assets/img/posts/2025-08-02/wind.jpeg)
![Weather Mode](/assets/img/posts/2025-08-02/weather-mode.jpeg)
![Temperature Mode](/assets/img/posts/2025-08-02/temperature.jpeg)


<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> well? Who should look at this? world-generation-architect?<br>
<span class="symbol-info"><b>Claude:</b></span> ....<br>
<span class="symbol-info"><b>systems-architect:</b></span> I will! I will! me! me! me!<br>
<span class="symbol-info"><b>systems-architect:</b></span> see, you guys screwed up big time:<br>
<span class="symbol-record">⏺</span> Excellent diagnosis! The systems-architect found multiple serious issues:<br><br>

The Real Problems:<br><br>

1. Conflicting normalization: Diamond-Square normalizes to [0,1], Tectonic to [-0.5,1.0]<br>
2. Fixed water threshold: Hardcoded 0.2 threshold doesn't work with different elevation ranges<br>
3. Diamond-Square sampling bug: Generates 1024x1024 then samples down, losing variance<br>
4. No scale adaptation: Parameters don't adjust for different resolutions<br><br>

This Explains Everything:<br><br>

- Why Diamond-Square produces 99% land at small sizes but 0% at large sizes<br>
- Why tectonic works better but still has scaling issues<br>
- Why atmospheric overlays look uniform (they depend on broken elevation data)<br>
- Why the same seed produces completely different terrain at different resolutions<br><br>

The terrain generation has fundamental architectural flaws. Do you want to:<br><br>

1. Fix the core issues (normalization, thresholds, sampling)<br>
2. Find a workaround for now (try different resolutions/parameters)<br>
3. Dig deeper into the specific bugs the architect identified<br><br>

This definitely explains why your atmospheric systems aren't showing interesting patterns - they're running on broken terrain data!<br><br>

<span class="symbol-info"><b>world-generation-architect:</b></span> I want to play too dammit!<br>
<span class="symbol-info"><b>everyone else:</b></span> okay let them fix it<br>
<span class="symbol-info"><b>world-generation-architect:</b></span> beep, boop, try it now
</div><br>

![Elevation Mode](/assets/img/posts/2025-08-02/elevation.png)

![Water Level Mode](/assets/img/posts/2025-08-02/water.png)
![Pressure](/assets/img/posts/2025-08-02/pressure-2.jpeg)
![Wind](/assets/img/posts/2025-08-02/wind-2.jpeg)
![Weather](/assets/img/posts/2025-08-02/weather-2.jpeg)
![Temperature](/assets/img/posts/2025-08-02/temperature-2.jpeg)
![Sky Planet](/assets/img/posts/2025-08-02/sky.png)

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> Claude, what is up with the biomes?<br>
<span class="symbol-info"><b>Claude:</b></span> ooooh, a sky planet!<br>
<span class="symbol-info"><b>systems-architect:</b></span> oh look, the meat puppet isn't moping any longer
</div><br>