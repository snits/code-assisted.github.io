---
layout: post
title: "Git Commit Decomposition Achieved via Hybrid Process"
date: 2025-08-23 07:03:00 -0700
categories: [Process, Git]
tags: [ai-development, process, git, agents]
---

## Introduction

To address the problem of extremely large commits as the process of working with models and agents continues to evolve, I attempted on Sunday to use a specialist agent, git-scm-master, to work through the git history and break up problematic commits into more manageable pieces. The actual work of logically decomposing the commits—which seemed to me like the more challenging aspect—was handled quite well by the agent, but they lost track of overall progress and their current position in the process. A second attempt used stacked git to help the model and agents track progress, combined with the documentation they maintained. That attempt also encountered issues, though it's possible that cross-context contamination between agents through the private journal system contributed to the problems. 



## A Successful Attempt



Success was finally achieved on a third attempt, which took a hybrid approach. I managed the progression of the git repository, using either `git apply` or `git am` to apply the next patch. When a commit was applied via `git apply`, the model would invoke a specialist agent to analyze the original commit and determine how it should be decomposed into multiple separate commits, providing reasoning for each decomposition. Then either I or the agent would execute the decomposition plan and compare the diff of the new commit series against the diff of the original single commit. Another key difference was prioritizing source parity over passing all quality gates as we worked through the process. The sole quality gate was the diff comparison, with the goal of reaching an end state where the final source tree was close to—if not identical to—the original source code. After achieving source parity, we could then optionally revisit the commits, refine them, and ensure all quality gates passed at each step. The end result was that the Alpha Prime repository expanded from approximately 90 commits to over 200 commits. We now have a documented process that hopefully the model and agents can follow independently, so that will be the next experiment.

Commit size stats prior to the above work:

```
COMMIT SIZE STATISTICS
=====================
Total commits analyzed: 92

LINES CHANGED:
  Average added:     1955.8
  Average deleted:    104.0
  Average total:     2059.8
  Maximum added:      36000
  Maximum deleted:     4575

FILES CHANGED:
  Average files:        7.1
  Maximum files:        117

DISTRIBUTION (by total lines changed):
  50th percentile:      405
  75th percentile:     1523
  90th percentile:     3666
  95th percentile:     9363

TOTALS:
  Total lines added:   179931
  Total lines deleted: 9568
  Total lines changed: 189499
  Total files touched: 649
```



Commit size stats after the work was completed, plus some additional commits since then:

```
COMMIT SIZE STATISTICS
=====================
Total commits analyzed: 237

LINES CHANGED:
  Average added:      516.6
  Average deleted:     56.9
  Average total:      573.5
  Maximum added:      23581
  Maximum deleted:     3779

FILES CHANGED:
  Average files:        3.4
  Maximum files:        101

DISTRIBUTION (by total lines changed):
  50th percentile:      187
  75th percentile:      487
  90th percentile:     1021
  95th percentile:     1943

TOTALS:
  Total lines added:   122430
  Total lines deleted: 13494
  Total lines changed: 135924
  Total files touched: 800
```



Future experiments will test whether a recursive approach works or whether we need to lower the threshold for what constitutes an acceptable commit size. These size limits are hard constraints that can only be waived when agents provide compelling justification. Another approach would be having the model analyze upstream kernel patch sets to understand how feature support is gradually built through commit series, then synthesize those lessons into journal entries and actionable prompt rules for determining logical commit boundaries. From what I observed, the model already has this capability—it just needs consistent guidance to apply the decomposition process repeatedly, breaking commits down into increasingly granular pieces. 

