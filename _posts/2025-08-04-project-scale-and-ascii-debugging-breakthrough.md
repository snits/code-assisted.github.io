---
layout: post
title: "Project Scale and ASCII Debugging Breakthrough: A Continuous Improvement Process"
date: 2025-08-04 18:49:00 -0700
categories: [Debugging Innovation, System Analysis]
tags: [continuous-improvement, cfd-specialist, atmospheric-system-debugging, random-noise-generator, subsystem-assessment, ascii-framebuffer, hardcoded-values, pressure-system, wind-visualization]
---

It is a continuous improvement process here at Desert Island Games as we try to figure out how to communicate and work together through this interface. We are still chasing ghosts in the atmospheric systems. I ask claude to have the 'science geek' take a look at something, and claude figures out I am talking about the cfd-specialist agent. Computation Fluid Dynamics guy takes a look at the pressure system, and claude comes back with a list of some things to fix. A bit later Claude, or someone else is trolling through the pressure system code, and notices a potential source of problems: the pressure system is being driven by a random noise generator.

<div class="terminal-output">
  <span class="symbol-info"><b>Me:</b></span> <i>rubs my head</i> Claude, didn't the science geek just look at this system?<br>
  <span class="symbol-info"><b>Claude:</b></span> <i>checks his clipboard</i> yes he did.<br>
  <span class="symbol-info"><b>Me:</b></span> Did he mention the random noise bit? It seems like something science guy should've noted.<br>
  <span class="symbol-info"><b>Me:</b></span> Did it just get lost in the summary, or he didn't notice at all?<br>
  <span class="symbol-info"><b>Me:</b></span> Okay read @docs/subsystem-assessment-plan.md, and tell me if you think it needs to be improved.<br>
  <span class="symbol-info"><b>Claude:</b></span> You should  do 1 2 3 4 ...... 99 <br>
  <span class="symbol-info"><b>Me:</b></span> Get them started.<br>
</div><br>





So we begin basically a for loop through the subsystems, with science geek and a couple of others doing an assessment, writing the results in a file as they go for each subsystem.

..... *30 minutes later* .......

<div class="terminal-output">
  <span class="symbol-info"><b>Me:</b></span> You guys are big fans of hardcoded values huh?<br>
  <span class="symbol-info"><b>Claude:</b></span> hehe, he said hard<br>
</div><br>



They notice some other things too, so there is a plan now to do some cleanup. As this happens I will have to run the program and report back what I am seeing. As has been noted earlier they are horrible at looking at images. So I have an idea for claude. 

<div class="terminal-output">
  <span class="symbol-info"><b>Me:</b></span> Claude, this image stuff is a pain, and doesn't seem to go well. Couldn't we extend the --ascii option to use a delimiter or something and spit out a map every so often for you to look at? You have no problem reading the --ascii stuff?<br>
  <span class="symbol-info"><b>Claude:</b></span> Great idea! Let me go implement something<br>
  ... <i>a few minutes later</i> ...<br>
  <span class="symbol-info"><b>Claude:</b></span> Look at this ! If you run --ascii --stats it prints out all sorts of information about the system.<br>
  <span class="symbol-info"><b>Me:</b></span> That's cool claude, but what if you extended it further. Could you have something like an ascii framebuffer that is just spitting out ascii maps to you however often, you would have to think about it a bit, but you could have it display info about the different modes.<br>
  <span class="symbol-info"><b>Claude:</b></span> Hold on sec <i>bing</i><br>
  <span class="symbol-info"><b>Claude:</b></span> Like this?<br>
</div><br>



```
Buffer: 5/5 frames | Press Ctrl+C to exit
=== FRAME 021 (t=   220 ticks) ===
PRESSURE     WIND
+++#####++###++0000.  ↑↗↖↖↙↖↖↘↖↑↘↖←←↙←←←↓←
0++++####+###+++000.  ↑↑↓↑↖↖↑↗↘←↖→→↑←↘↓↘↖←
++++####++++++0.00..  ↑↘↗↑↓↘←↗↙↓→↘↘←↘↗↓↗↓→
+++++++++++0000.000.  ↗↑↙↖←←↘←→←↓→→→→↑↗↗↙←
#+++++000+000....0..  ↑←→↗↖↖↙←→↓↑→↙↙↓↓↓→→→
#++0++0000000..-....  →↙↓↗↘↓←↓→↘→↘↑↘→↗→↖↘↑
++000000.000..----..  →↘→↑↑←↓→↘↘←→↓←↖↘←↗→↗
00000..---...----.--  ↑↖↑↘↓→↗↘↘↘↓→↑↘↙↓↑→→↘
+++0...----..-------  ↓←↑↑↘→↘↘↑↘↓↙↖↗↙↖↖→←↘
+00....--.....------  ↘↓←↗↑→↘↑←→→→↑↓→←↓↗↗↘
000........0..---..-  ↓←↑↑↓↖↑↘←↑←↗↖↖↖→→→→↗
+++0.0....0...---...  ↓↘→→←→↘↘↑←↗↑↗→↓↘↓↖↓↖
++000......0..-..-..  ↙↑↖↑↗↖→↖↘↖↖↘↑↑↑↘↖↗↖↗
0++0...........-....  ↙↓↑↖→↘↖↙←↗←↓↓↓↘↗↙→↘↓
000.......-....0.00.  ↙←↑↖↖→↗←↖←←←↘↗↖↘↗↘↓→


Buffer: 5/5 frames | Press Ctrl+C to exit
=== FRAME 022 (t=   230 ticks) ===
PRESSURE     WIND
+++#####++###++0000.  ↑↑↑↖↓↖↖→↑↑↘↖←←↙←←←↓↖
0++++####+###+++000.  ↑↗↓↑↖←→↗↘←↖↗→↑↖↘↘↘←←
++++#####+++++0.00..  ↑↓↗↑→↘←→↙↙→↓↘←↘↑↓↗↓→
+++++++++++0000.0000  ↗↗↙↖←←↘←→↖↘→↗→→↑↗→↙←
#+++++000+000....0..  ↑←→↗↖↑↙←→↙↗→↓↓↘↘↓↗→→
#++0++0000000..-....  →↓↓↑↘↓←↙↘↗→↘↑↘↘→↗←→↖
++000000.000..----..  →↘→↖↗↙↓→↘↘←→↓↖↖→←↗→↗
00000..---...----.--  ↑↖↑↘↙→↗↘↘→↓→↑↘↘←↗↗→→
++00...----..-------  ↓←↗↑↘→↘↘↑↓↓↙↖↑↓↖↖→←↘
+00....--.....------  ↓↓←↗↖→↘↑←↘→→↑↓→←↓↗↗↗
000.......00..---..-  ↓←↗↗↓←↑↘←↖↙→↑↓↖→→→→→
0++0.0....0...---...  ↘↓↖→←→↘↘↖←→↑↗→↓→↓↖↓↖
++000......0..-..-..  ↙↗↑↑→↖→↙↘↖←↘←↑↖↓↖↗↖↗
0++0...........-....  ↙↙↑←→↘↖↓↖↗←↙↘↓↘↑←→↘↓
000............0.00.  ↙←↑←↖→↗←↖←←←↓↗↑↘↗↘↓→


Buffer: 5/5 frames | Press Ctrl+C to exit
=== FRAME 023 (t=   240 ticks) ===
PRESSURE     WIND
+++#####++###++0000.  ↑↑↑↖↓↖↖→↑↑↘↖←←↙←←←↓↖
0++++####+###+++000.  ↑↗↓↑↖←→↗↘←↖↗→↑↖↘↘↘←←
++++#####+++++0.00..  ↑↓↗↑→↘←→↙↙→↓↘←↘↑↓↗↓→
+++++++++++0000.0000  ↗↗↙↖←←↘←→↖↘→↗→→↑↗→↙←
#+++++000+000....0..  ↑←→↗↖↑↙←→↙↗→↓↓↘↘↓↗→→
#++0++0000000..-....  →↓↓↑↘↓←↙↘↗→↘↑↘↘→↗←→↖
++000000.000..----..  →↘→↖↗↙↓→↘↘←→↓↖↖→←↗→↗
00000..---...----.--  ↑↖↑↘↙→↗↘↘→↓→↑↘↘←↗↗→→
++00...----..-------  ↓←↗↑↘→↘↘↑↓↓↙↖↑↓↖↖→←↘
+00....--.....------  ↓↓←↗↖→↘↑←↘→→↑↓→←↓↗↗↗
000.......00..---..-  ↓←↗↗↓←↑↘←↖↙→↑↓↖→→→→→
0++0.0....0...---...  ↘↓↖→←→↘↘↖←→↑↗→↓→↓↖↓↖
++000......0..-..-..  ↙↗↑↑→↖→↙↘↖←↘←↑↖↓↖↗↖↗
0++0...........-....  ↙↙↑←→↘↖↓↖↗←↙↘↓↘↑←→↘↓
000............0.00.  ↙←↑←↖→↗←↖←←←↓↗↑↘↗↘↓→


Buffer: 5/5 frames | Press Ctrl+C to exit
```

<div class="terminal-output">
  <span class="symbol-info"><b>Me:</b></span> Yes, exactly like that.<br>
</div><br>





Here is the problem I've been trying to get them to solve in ascii form. The little bodies of water popping up as the water accumulation goes wrong, and then poof! big lake world with ice regions. It is a condensed picture of a bigger map, but it gets the point across likely much better than him trying to understand an image ever did.

```
=== FRAME 000 (t=    10 ticks) ===
BIOMES
BIIIIIIIIIIIIIIIIIII
BIIIIIIIIIIIIIIIIIII
BBBBIBBBBBIIIBBBBBBB
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBA
GAGAGGGGGGGGGGGGGGGA
GGGAGGGGGGGGGGGGGGGG
GGGGGGGGGGGGGGGGGGGG
GGGGGGGAGGGGGGGGGGGG
GGGGGAAAGGGGGGGGGGGG
GGGGAAAAAAGGGGGGGGGG
GBBAAABAABBBBBGGGGGG
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBIIIBIBBBBBB
BIIIIIIIIIIIIIIIIIII


Buffer: 1/5 frames | Press Ctrl+C to exit
=== FRAME 001 (t=    20 ticks) ===
BIOMES
BIIIIIIIIIIIIIIIIIII
BIIIIIIIIIIIIIIIIIII
BBBBBBBBBBIIIBBBBBBB
BBBBBBBBBBBBBBBBBBBB
BBBBBBGBBBBBBBBBBBBA
GAGAGGGGGGGGGGGGGGGA
GGGAGGGGGGGGGGGGGGGG
GGGGGGGGGGGGGGGGGGGG
GGGGGGGAGGGGGGGGGGGG
GGGGGAAAGGGGGGGGGGGG
GGGGAAAAAAGGGGGGGGGG
GBBAAABAABBBBBGGGGGG
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBIIIBIBBBBBB
BIIIIIIIIIIIIIIIIIII


Buffer: 2/5 frames | Press Ctrl+C to exit
=== FRAME 002 (t=    30 ticks) ===
BIOMES
BBIIIIIIIIIIIIIIIIII
BIIIIIIIIIIIIIIIIIII
BBBBBBBBBBIIIBBBBBBB
BBBBBBBBBBBB-BBBBBBB
BBBBBBGBBBBBBBBBBBBA
GAGAGGGGGGGG*GGGGGGA
GGGAGGGGGGGGGGGGGGGG
GGGGGGGGGGGGGGGGGGGG
GGGGGGGAGGGGGGGGGGGG
GGGGGAAAGGGGGGGGGGGG
GGGGAAAAAAGGGGGGGGGG
GBBAAABAABBB*BGGGGGG
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBIIIBBBBBBBB
BIIIIIIIIIIIIIIIIIII


Buffer: 3/5 frames | Press Ctrl+C to exit
=== FRAME 003 (t=    40 ticks) ===
BIOMES
BBIIIIIIIIIIIIIIIIII
BIIIIIIIIIIIIIIIIIII
BBBBBBBBBBIIIBBBBBBB
BBBBBBB-BBBB-BBBBBBB
BBBBBB-*BBB*BBBBBBBA
GAGAGGGGGGGG-GG*GGGA
GGGAGGGG*GGGGGGGGGGG
G*GGGG*GGGGGGGGGGGGG
GGGGGG*AG*GGGGGGGG*G
GGGG*AAAGGGGGGGGGGGG
GGGGAAAAAA*GGGGGGG*G
GBBAAABAA-BB*BGGGG*G
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBIBBBBBBBBB
BIBIIIIIIIIIIIIIIIII


Buffer: 4/5 frames | Press Ctrl+C to exit
=== FRAME 004 (t=    50 ticks) ===
BIOMES
--III-IIIIIIIIIIIIII
-IIIIIIIIIIIIIIIIIII
----------III-------
--------------------
--------------------
--------------------
--------------------
--------------------
--------------------
--------------------
--------------------
--------------------
--------------------
----------I---------
-I-IIIIIIIIIIIIIIIII


Buffer: 5/5 frames | Press Ctrl+C to exit
```

claude is excited to have his new toy, and I'm excited I don't have to screenshots any longer.