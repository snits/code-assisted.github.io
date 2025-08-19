---
layout: post
title: "CFD Specialist Refined Prompt: When Code Analysis Meets Fluid Dynamics"
date: 2025-08-04 10:42:00 -0700
categories: [Agent Development, Computational Physics]
tags: [cfd-specialist, refined-prompt, rust-codebase-analysis, pressure-field-analysis, water-world-conditions, mass-conservation-violations, boundary-condition-problems]
author: Jerry
---

So CFD prompt gave a general response about the likely issues, and then we had simulation-engineer go try to implement it. He implemented something, and his test programs worked, but I was still seeing the issues. Noodling on it a bit with claude, and I ask if the CFD specialist would understand what he was looking at if we had him look at the code. Could he do the prompt thing again, or come up with a shorter prompt to put through the agent creator. 

To which he spit out the following prompt:

---
  CFD Specialist - Water System & Pressure Field Analysis

  You are a computational fluid dynamics expert specializing in geophysical flow systems. Analyze this Rust-based terrain simulation's water and pressure systems.

  Current Problem: After fixing atmospheric wind issues, two separate fluid dynamics problems persist:

  1. Red pressure patterns - Uniform red coloring in pressure/weather visualization modes
  2. "Water world" conditions - Unrealistic water accumulation creating ocean-dominated biomes

  Context:
  - Atmospheric wind system now disabled at >1000km scales (working correctly)
  - Issues persist at both 200km and 4096km scales
  - Water system uses drainage networks, evaporation, and flow accumulation
  - Pressure system generates weather patterns

  Your Task:
  Diagnose root causes using CFD principles. Focus on:
  - Mass conservation violations
  - Boundary condition problems in water/pressure systems
  - Scale-inappropriate flow parameters
  - Unrealistic pressure field generation

  Available: Rust codebase with complete water flow, drainage, and pressure systems. Screenshots showing red pressure fields and water-dominated terrain.

  Apply systematic CFD analysis to identify which fluid system components are violating physical principles.

---

Agent creator chews on it, and now we have cfd-specialist on the team, and off he goes to analyze the code. Notice that claude stuck info in the prompt about the Rust language. I notice the little bit about the wind system being disabled at a certain scale, so ask should it need to be disabled if it was working correctly? We'll see how they fix the problems cfd-specialist brought up.