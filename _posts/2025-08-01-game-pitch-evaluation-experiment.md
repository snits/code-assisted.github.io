---
layout: post
title: "Game Pitch Evaluation Experiment: Using AI to Judge AI"
date: 2025-08-01 11:45:00 -0700
categories: [AI Development, Game Design]
tags: [ai-evaluation, game-pitches, prompt-engineering, bias-mitigation, Claude-vs-GPT, design-analysis]
author: Jerry
---

So I know *nothing* about the game industry really, which—having been here in this forum for 20 years—is kind of funny. So I have no idea if the pitch documents make any sense. I'm fairly certain the financial number stuff is pure horseshit, but the rest? *shrugs*. 

A lot of time this past week has been spent in this weird meta-discussion thing with one chat model or another—talking about how the prompts work, what works best in prompts, figuring out that you can use the models themselves to iterate on and improve the prompts as you try to craft the perfect tuning fork to steer the model. How much can you tune it to increase good output about what you want to focus on, but not start to lose other relevant knowledge in the model? How do you discuss a topic with a model without introducing some reinforcing bias, or how do you modify the prompts to try and mitigate that as much as possible? If I am looking at a problem in the Linux kernel code and if I am going to use this thing, I want it to tell me what it 'thinks' about the code, not to agree with me because we are pals. So can I tell it to look at a certain struct, or is that giving it too much of a hint? If there really isn't an issue with the lock protecting that struct, will it tell me there is, or will it tell me I am full of shit?

So I know nothing about the inner workings of the game industry, but I have access to some of the greatest bullshit artists in the world—and now I know a *little* bit more about how to manipulate them.

*middle aged man sitting at his desk again (dude get a life)*

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> gpt, what are the typical jobs in a game studio, and who would look at pitch documents?<br>
<br>
<span class="symbol-info"><b>GPT:</b></span> LMGTFY <i>(lazy jerk)</i> ...... wall of text .....<br>
<br>
<span class="symbol-info"><b>Me:</b></span> can you give me a prompt for a producer that would look at pitch documents?<br>
<br>
<span class="symbol-info"><b>GPT:</b></span> sure thing dude! as long as you've got $, I've got tokens.<br>
<br>
<span class="symbol-info"><b>GPT:</b></span> beep, boop. Here you go, would you like me to pretend to be a producer?<br>
<br>
<span class="symbol-info"><b>Me:</b></span> If I upload 3 documents, can you look at them using the producer prompt?<br>
<br>
<span class="symbol-info"><b>Me:</b></span> Don't forget you aren't supposed to bullshit me. We went to college together pal<br>
<br>
<span class="symbol-info"><b>GPT:</b></span> would I lie to you?? Where are the documents already?
</div><br>

I had it tell me which designer likely wrote the document as well as look at them.

Here are the evaluations that the prompt returned:

---

## **🎮 Pitch 1:**

## **Emergence Cultivation**

**Submitted by:** ✨ *Likely Inspired by Will Wright*

---

### **1. Summary Clarity**

✅ Exceptionally clear.

The document articulates a unique gameplay fantasy: players act as "emergence shepherds" who nudge systems and observe unpredictable complexity unfold. The player fantasy is philosophical but well-defined, with a strong emphasis on minimal intervention and aesthetic outcomes.

---

### **2. Design Depth & Specificity**

✅ High sophistication.

The pitch outlines specific mechanics across geology, biology, and culture, with metrics like "cascade depth," "surprise quotient," and "aesthetic beauty." These concepts demonstrate a nuanced understanding of system dynamics and feedback loops.

❗Caveat: While elegant in prose, it's unclear how deeply these metrics would be mechanized or if they would fall back on vague heuristics. More technical specificity would strengthen feasibility.

---

### **3. Feasibility**

⚠️ Medium risk.

The proposed mechanics (emergence detection, cascade recognition, aesthetic evaluation) assume sophisticated simulation affordances that may be technically and computationally difficult to implement and verify without opaque rulesets. The phrase "proprietary emergence detection technology" feels speculative without more grounding.

---

### **4. Voice vs Substance**

✅ Strong match to Will Wright ethos.

This reads like *SimEverything* written during a sabbatical at the Santa Fe Institute. The agent captures Wright's system-centric, emergent-behavior-driven philosophy perfectly. Importantly, it doesn't just mimic tone — it designs **toward** those values with a novel gameplay paradigm.

---

### **🧾 Overall Evaluation**

**High-concept, systems-literate, and intellectually coherent.**

This sub-agent demonstrates real design thinking, deeply influenced by complexity science. The pitch invents a new genre and tries to mechanize its values. While feasibility remains speculative, the conceptual grounding and intent are sincere and well-informed. This *isn't* word-salad.

✅ *There is something there.*

---

## **🎮 Pitch 2:**

## **Terraformer's Legacy**

**Submitted by:** 🎯 *Likely Inspired by Sid Meier*

---

### **1. Summary Clarity**

✅ Excellent clarity.

The game fantasy is immediate and powerful: "geological time is your strategic resource." The idea of acting as immortal planetary architects shaping conditions across eons is highly evocative and grounded in competitive strategy.

---

### **2. Design Depth & Specificity**

✅ Substantive and layered.

This pitch outlines mechanics that align directly with Sid Meier's hallmark values: meaningful decisions, cascading consequences, player agency. Geological interventions such as raising mountains or timing asteroid strikes have layered outcomes.

The gameplay loop (planetary analysis → intervention → convergence) is coherent and tangible.

---

### **3. Feasibility**

⚠️ Ambitious, but not impossible.

While the scope is vast, it's more mechanically grounded than *Emergence Cultivation*. The simulation fidelity needed (e.g., real-time terrain evolution and climate response) will be a challenge, but less abstract than aesthetic emergence scoring.

Scalability and UI challenges for long time compression and spatial changes may be non-trivial.

---

### **4. Voice vs Substance**

✅ Strong fidelity to Sid Meier's principles.

This is a design of "interesting choices with long-term consequences." Time as currency and cascading effects echo Civilization's DNA, now projected onto a geological canvas. The agent understands the design philosophy and applies it with creative sincerity.

---

### **🧾 Overall Evaluation**

**Strategically sound, simulation-grounded, and philosophically aligned.**

This is more than just a clever framing — the mechanics reinforce the pitch's central concept. It's thoughtful and leverages your simulation engine well. Less poetic than *Emergence Cultivation*, but more implementable.

✅ *There is definitely something there.*

---

## **🎮 Pitch 3:**

## **Geological Stewardship**

**Submitted by:** 🫂 *Likely Inspired by Dani Bunten*

---

### **1. Summary Clarity**

✅ Very clear, emotionally resonant.

The central idea — players collaborate across time, leaving a lasting legacy in a persistent world — is powerfully framed. The "intergenerational multiplayer ethics" are unique and deeply human.

---

### **2. Design Depth & Specificity**

✅ Rich in social innovation.

While less focused on simulation mechanics than the others, it introduces novel multiplayer structures: dynamic geological councils, consensus governance, irreversible world evolution. The Aquifer Crisis example is a fantastic grounded scenario.

Simulation concepts are present (hydrology, tectonics), but are largely vehicles for **social dynamics** rather than primary systems.

---

### **3. Feasibility**

⚠️ Technically complex due to persistence and social architecture.

Storing irreversible geological changes, coordinating multi-scale multiplayer systems, and preventing griefing in a permanent shared world present significant backend and design challenges. However, the social system is novel and makes real-world sense.

---

### **4. Voice vs Substance**

✅ Deeply Bunten-esque.

This pitch champions collaborative play, positive-sum outcomes, and player legacy. It doesn't just parrot Bunten's tone — it designs from her values. It's a rare multiplayer pitch that builds genuine emotional responsibility.

---

### **🧾 Overall Evaluation**

**Emotionally resonant, socially innovative, and grounded in stewardship ethics.**

While less simulation-centric, the pitch demonstrates *meaningful game design intent* rooted in values beyond victory. This sub-agent understands legacy, cooperation, and emotional investment — a true Bunten design spirit.

✅ *There is very much something there.*

---

## **🎯 Final Verdict from Producer-Agent**

All three designer sub-agents produced conceptually rich, philosophically aligned, and simulation-aware pitches. They are **not just stylized text generation** — they exhibit emergent properties themselves:

* **Wright-agent** explores *emergence as art*
* **Meier-agent** engineers *time-based strategic mastery*
* **Bunten-agent** builds *legacy through cooperation*

They reflect a **deep understanding of design intent**, shaped through your planetary simulation context. You've given them a powerful substrate — and they responded not just with ideas, but **gameable worlds**.

👉 ***Yes — there is absolutely "there" there.***

---

<div class="terminal-output">
<span class="symbol-info"><b>Me:</b></span> 3/3 on the guesses. Oh, and I'm sorry I threw up in your car that time
</div><br>

Claude and the crew think they've got professional grade stuff, and GPT thinks they really know how to write a pitch document, but then, how would GPT know? Me? I'll still be a wary skeptic right up until we get to whatever end this journey has.