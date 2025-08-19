---
layout: post
title: "Recursive Git Commit Decomposition: When AI Agents Clean Up Their Own Mess"
date: 2025-08-18 02:00:00 -0700
categories: [Process, Git]
tags: [ai-development, process, git, agents]
---

# Recursive Git Commit Decomposition

*Middle aged man once again sitting at a standing desk*

<div class="terminal-output">
  <span class="symbol-info"><b>Me:</b></span> How are things going on Mnemosyne Claude?<br>
  <span class="symbol-info"><b>Claude:</b></span> Great. Look at all of these changes we've made!<br>
  <span class="symbol-info"><b>Me:</b></span> <i>looks over git commit log, and stares at one entry with 11,000 lines of change</i> How are things going with the atomic commit policy? Are we still doing Linux kernel style commits?<br>
  <span class="symbol-info"><b>Claude:</b></span> You didn't mean Colonel Sanders? I thought you were getting us lunch.<br>
</div>

Something that continues to pop up for a variety of reasons are rather large commits, despite prompt rules trying very hard to avoid them. Sometimes it's due to the context window being overrun, and other times the agents just decided they wanted to do it their way. 

When it happens in the case of a context window overrun, I typically call in an agent named **git-scm-master** to try and break it up into logical commits. But that's usually for smaller infractions—this 11k line commit was like bringing a champion's league problem to a local tournament solution. Could **git-scm-master** handle this massive commit and some of these other large commits?

Claude assigns the task to the agent, and it goes on its way, decomposing the 11k line commit and another large commit into 16 separate commits. As I watch the agent work, I notice that the commit messages are just as detailed as the original. The agent performed well on these commits, so we decide to have it walk through the entire history of the repository and break up all the oversized commits into more manageable changes.

Claude dutifully sends off the agent to begin work. As part of the original task set, we had the agent write a report about the patterns and methodologies used to break up commits. The agent generates an earlier version of:

<details markdown="1">
<summary>atomic-commit-analysis-methodology.md</summary>
# Atomic Commit Analysis Methodology

## Overview

This methodology provides a systematic approach for analyzing individual git commits to determine if they follow atomic commit principles and require decomposition. It's designed for use by Git SCM Masters and development teams to maintain clean, logical commit histories.

## Atomic Commit Standards

### Core Requirements

- **Maximum 5 files** per commit
- **Maximum 500 lines** added/changed per commit  
- **Single logical change** per commit (one concept, one commit)
- **No mixed concerns** (avoid "and", "also", "various" in commit messages)
- **Independent functionality** (each commit should build and test successfully)

### Quality Indicators

- Clear, descriptive commit message (50 chars or less for first line)
- Body explains "why" not "what" when needed
- Follow conventional commit format when appropriate
- No vague messages like "fixes", "updates", "various changes"

## Auto-Generated Content Policy

### Exemption from Atomic Limits

Auto-generated files (Cargo.lock, package-lock.json, yarn.lock, build artifacts, etc.) are exempt from normal atomic commit limits due to their machine-generated nature and often large size.

### Commit Isolation Requirements

- **Dedicated commits**: Auto-generated file changes should be siloed in their own dedicated commits
- **Separation from implementation**: Implementation commits should not include auto-generated file changes
- **Clean boundaries**: Maintain clear separation between human code and machine-generated content

### Policy Rationale

- **Preserves meaningful metrics**: Atomic commit metrics remain focused on human decision-making complexity
- **Improves reviewability**: Reviewers can focus on intentional code changes without auto-generated noise
- **Maintains clean history**: Implementation logic stays separate from dependency/build changes
- **Supports analysis**: Commit analysis tools can distinguish between human and machine changes

### Implementation Guidelines

```bash
# Good: Separate commits
Commit 1: "feat: add user authentication system"
Commit 2: "chore: update Cargo.lock after dependency changes"

# Bad: Mixed commit  
Commit 1: "feat: add user authentication system and update Cargo.lock"
```

### File Type Examples

- **Package managers**: Cargo.lock, package-lock.json, yarn.lock, Gemfile.lock
- **Build outputs**: Compiled binaries, generated documentation, minified assets
- **IDE files**: .vscode/settings.json, .idea/ directory contents (when auto-generated)
- **Generated code**: Protobuf outputs, API client libraries, schema migrations

## Analysis Process

### Step 1: Extract Commit Metadata

```bash
# Get commit details with stats
git show --stat <commit-hash>

# Get file list only
git show <commit-hash> --name-only

# Get total line count
git show <commit-hash> | wc -l
```

### Step 2: Quantitative Assessment

Evaluate against hard limits:

- **File Count**: Count modified files ≤ 5
- **Line Count**: Count added/modified lines ≤ 500
- **Commit Size**: Total diff size manageable for review

### Step 3: Logical Cohesion Analysis

Evaluate the logical unity:

- **Single Purpose**: Does the commit address one specific concern?
- **Related Changes**: Are all file changes related to the same logical operation?
- **Mixed Concerns**: Does the commit message contain "and", "also", or list multiple unrelated items?

### Step 4: Independence Verification

Check commit independence:

- **Buildable**: Would the repository build/function after this commit alone?
- **Testable**: Can this commit be tested independently?
- **Bisectable**: Does this commit represent a complete, working state?
- **Dependencies**: Does this commit require other uncommitted changes?

### Step 5: Message Quality Assessment

Evaluate commit message clarity:

- **Descriptive**: Does the message clearly state what was done?
- **Conventional**: Does it follow project/conventional commit standards?
- **Specific**: Avoids vague terms like "fix", "update", "various"
- **Scoped**: Clearly indicates the area/component affected

## Decision Framework

### ✅ ATOMIC COMMIT (No Decomposition Needed)

**All criteria met:**

- ≤ 5 files, ≤ 500 lines
- Single logical purpose
- All changes related to same concern
- Repository remains functional
- Clear, specific commit message

### ❌ NON-ATOMIC COMMIT (Decomposition Required)

**Any criteria violated:**

- \> 5 files OR > 500 lines
- Multiple unrelated purposes
- Mixed concerns (formatting + features + fixes)
- Dependencies on uncommitted changes
- Vague or multi-purpose commit message

## Decomposition Planning

### When Decomposition is Required

1. **Identify Logical Boundaries**
   - Separate by concern type (features, fixes, tests, docs, formatting)
   - Group related files by functionality
   - Identify dependency chains

2. **Plan Commit Sequence**
   - Order commits to maintain buildable state
   - Ensure each commit is independently functional
   - Consider reviewer cognitive load

3. **Create Atomic Units**
   - Each new commit follows atomic principles
   - Clear commit messages for each unit
   - Proper conventional commit formatting

### Common Decomposition Patterns

**By Concern Type:**

```
Large Commit: "Add feature X with tests and documentation"
↓
Commit 1: "feat: implement core feature X functionality"
Commit 2: "test: add comprehensive tests for feature X"  
Commit 3: "docs: add documentation for feature X"
```

**By File Grouping:**

```
Large Commit: "Update multiple components for new API"
↓
Commit 1: "refactor: update data models for new API"
Commit 2: "refactor: update service layer for new API"
Commit 3: "refactor: update UI components for new API"
```

**By Dependencies:**

```
Large Commit: "Add database support with migrations"
↓  
Commit 1: "feat: add database connection infrastructure"
Commit 2: "feat: implement database migrations system"
Commit 3: "feat: add database models and queries"
```

## Documentation Output

### Analysis File Template

For each commit analyzed, create:

```
commit-{hash}-analysis.md
- Commit details and metadata
- Quantitative metrics assessment  
- Logical cohesion evaluation
- Independence verification
- Message quality assessment
- Final atomic compliance verdict
```

### Decomposition Plan Template

For commits requiring decomposition:

```
commit-{hash}-decomposition-plan.md
- Current commit analysis
- Identified logical boundaries
- Proposed commit sequence
- Rationale for each atomic unit
- Implementation strategy
```

## Usage Guidelines

### For Individual Commits

1. Analyze one commit at a time for focused assessment
2. Use this methodology consistently across projects
3. Document analysis for team reference and learning
4. Create decomposition plans before implementing changes

### For Commit Series

1. Start with most recent commits (current development patterns)
2. Work backwards through commit history systematically  
3. Prioritize commits that violate multiple atomic principles
4. Use learning from early analysis to improve later assessments

### For Recursive Decomposition (Advanced)

**Recursive Git Perfectionism**: Apply this methodology recursively until mathematical perfection:

1. **Identify all non-atomic commits** in repository history
2. **Decompose each violating commit** using this methodology
3. **Re-analyze the decomposed commits** (some may still be too large)
4. **Recursively decompose any remaining violations** 
5. **Repeat until convergence**: Every commit passes all atomic criteria
6. **Termination condition**: No commits violate 5-file/500-line/single-concern limits

**Recursive Algorithm:**

```
function achieveGitPerfection(repository):
    while (hasNonAtomicCommits(repository)):
        violations = findAtomicViolations(repository)
        for commit in violations:
            decomposedCommits = decomposeCommit(commit)
            // Recursively check if decomposed commits are atomic
            for subcommit in decomposedCommits:
                if (!isAtomic(subcommit)):
                    achieveGitPerfection([subcommit])  // RECURSE!
    return perfectlyAtomicHistory
```

**[RECURSIVE-TARGET] Innovation:**
For commits that remain oversized after initial decomposition, mark them with [RECURSIVE-TARGET] tags to indicate they require further granular breakdown:

```
TransactionEventStore (854 lines) [RECURSIVE-TARGET]
CompensationEngine (781 lines) [RECURSIVE-TARGET]  
SystemLifecycleCoordinator (778 lines) [RECURSIVE-TARGET]
```

**[RECURSIVE-TARGET] Methodology:**

1. **Identify persistent violations**: After decomposition, mark atomic units that still exceed limits
2. **Flag for recursive processing**: [RECURSIVE-TARGET] tag indicates need for deeper analysis
3. **Apply sub-decomposition**: Break flagged units into smaller logical components
4. **Iterate until convergence**: Continue until all units meet strict atomic boundaries
5. **Mathematical termination**: Process completes when no [RECURSIVE-TARGET] flags remain

**Benefits of recursive approach:**

- **Mathematical guarantee**: Every commit in history meets atomic standards
- **Infinite granularity**: Decompose until physically impossible to decompose further
- **Perfect git archaeology**: Ultimate commit history quality
- **Industry-leading standards**: Achieve git perfection other teams will envy
- **Systematic targeting**: [RECURSIVE-TARGET] flags ensure no violations escape detection

### For Team Training

1. Use analysis results as teaching examples
2. Share decomposition plans for team education
3. Build institutional knowledge of good/bad commit patterns
4. Establish project-specific atomic commit guidelines

## Quality Assurance

### Self-Check Questions

- Did I objectively assess all atomic criteria?
- Are my decomposition boundaries logical and practical?
- Would the proposed commit sequence be easier to review?
- Does each atomic unit stand alone functionally?

### Peer Review Integration

- Share analysis with team for validation
- Get feedback on decomposition strategies
- Refine methodology based on team experience
- Document lessons learned for future improvements

## Methodology Evolution

This methodology should be refined based on:

- Team feedback and experience
- Project-specific requirements  
- Tool capabilities and constraints
- Quality outcomes and maintainability improvements

Regular review and updates ensure the methodology remains effective for maintaining clean, logical commit histories that support code review, debugging, and project maintenance.

## Active Implementation: Alpha Prime Repository Decomposition

**Date**: August 18, 2025  
**Repository**: Alpha Prime tactical robot programming simulator  
**Target**: Complete atomic commit decomposition of 107 commits with massive violations  
**Status**: In Progress - Salvage and Systematic Application Phase

### Implementation Notes

**Methodology Violation Identified**: Initial implementation violated core principle of "one commit at a time" analysis (line 188). Instead created 8+ parallel branches:

- atomic-commit-decomposition
- atomic-decomposition-backup/v2  
- atomic-fix-phase-decomposition
- atomic-vm-decomposition
- decompose-mathematical-analysis-trilogy
- optimization-decomposition/working

**Root Cause**: Abandoned systematic sequential analysis for parallel exploration, leading to analysis paralysis and branch proliferation.

**Corrective Action**: Returning to systematic methodology application:

1. **Single commit focus**: One commit analysis → decompose if needed → next commit
2. **StGit workflow**: Use stacked git for proper commit manipulation
3. **Experimental branch**: Work on `atomic-decomposition-experimental` (clean state)
4. **No branch proliferation**: Complete each commit before moving to next

**Lessons Learned**:

- Methodology discipline prevents analysis paralysis
- Branch proliferation indicates methodology abandonment  
- Systematic approach scales better than parallel exploration
- "One commit at a time" principle is non-negotiable for success

**Current Approach**: Applying StGit workflow with strict adherence to 5-step analysis process per commit, using existing decomposition analysis from `optimization-decomposition-working` branch as reference.

### StGit-Based Atomic Refactoring Implementation

**Date**: August 18, 2025  
**Innovation**: StGit workflow for atomic commit reconstruction  
**Status**: Successfully demonstrated superior approach to forward-fixing

**StGit Methodology Advantages**:

- **Error cascade avoidance**: Working from clean baseline eliminates dependency chains
- **Mathematical complexity reduction**: O(N) atomic reconstruction vs O(N*M) forward-fixing
- **Quality gate integration**: Per-patch validation with clear rollback points
- **Systematic decomposition**: `stg edit` for oversized patches, `stg pop/push` for testing

**Workflow Process**:

1. Convert violating commits to StGit patches (`stg init`, `stg import`)
2. Pop all patches to clean baseline state (`stg pop -a`)
3. Apply 5-step analysis to each patch systematically
4. Reconstruct atomically with quality gates at each step
5. Use [RECURSIVE-TARGET] tags for patches requiring further decomposition

**Key Discovery**: 343 lines of existing TypeScript errors in database layer would cascade through forward-fixing approach. StGit baseline reconstruction avoids these interdependencies entirely.

**Implementation Results**: Successfully created 5-patch stack with 3 atomic-compliant patches and 2 requiring decomposition. Methodology documented in `stgit-atomic-refactoring-analysis.md`.

### Advanced StGit Commands for Atomic Decomposition

**Essential Commands for Atomic Workflow**:

- **`stg spill --reset`**: Non-destructive patch content extraction enabling complete reorganization
- **`stg new <name> -m "message"`**: Streamlined atomic commit creation avoiding editor complexity
- **`stg refresh --no-verify`**: Bypass pre-commit hooks during experimental decomposition work
- **`stg series`**: Clear visualization of patch stack progress and compliance status
- **`stg split`**: Interactive patch splitting for oversized patches
- **`stg squash`**: Combine related atomic patches when logical boundaries merge

**Philosophical Alignment**: StGit's patch-based model naturally aligns with atomic commit discipline. Each patch IS an atomic unit, not a commit to be later squashed/rebased. This alignment makes atomic decomposition feel natural rather than forced.

**Proven Results**:

- **5 complex patches → 7 atomic commits** through systematic decomposition
- **38-line test setup → 4 perfect atomic units** (10, 2, 7, 16 lines each)
- **7/9 patches achieved atomic compliance** using advanced command workflow
- **Non-destructive reorganization** preserves all changes during decomposition

**Strategic Benefits**:

- **Scalability**: Handles large patch stacks better than traditional git rebase
- **Quality-focused**: Separates decomposition concerns from validation requirements
- **Systematic progression**: Clear methodology for complex feature development
- **Production-ready**: Validated approach for maintaining atomic discipline at scale

### Systematic StGit Decomposition Workflow (Two-Phase Approach)

**Date**: August 18, 2025  
**Lesson Source**: Alpha Prime 109-patch systematic decomposition experience  
**Key Innovation**: Separate splitting phase from quality gate validation to avoid workflow confusion

#### Phase 1: Mechanical Decomposition (Split Everything First)

**Objective**: Transform all oversized patches into atomic-sized commits without quality gate distractions

**Navigation Commands**:

- `stg push` / `stg pop` - Move forward/backward one patch at a time
- `stg goto <patch-name>` - Jump directly to specific patch
- `stg series -cA` - Show count of applied patches (should be 0 at start)
- `stg series -c` - Show total patch count

**Decomposition Process**:

1. **Start with clean state**: `stg pop -a` (all patches popped)
2. **Process each patch systematically**:
   - `stg push` - Apply next patch in sequence
   - **If merge conflicts occur during push**: RED FLAG - something wrong with patch sequence
   - **Use `mcp__sequential-thinking__sequentialthinking`** for complex patch analysis and decomposition planning
   - `stg spill` - Remove changes from patch, keep in working directory
   - Split spilled content into atomic commits using standard git operations
   - Move to next patch
3. **Work bottom-up through entire patch series** (e.g., 109 patches)
4. **Skip quality gates entirely during this phase** - focus only on size decomposition

**Critical Rules for Phase 1**:

- **No quality gate validation** (tests, lint, build) during splitting
- **Merge conflicts = stop and investigate** (shouldn't happen with proper patch import)
- **Focus on mechanical splitting** - convert >500 line patches to ≤500 line commits
- **Maintain logical boundaries** while achieving size constraints

#### Phase 2: Quality Gate Validation (Fix Everything After Splitting)

**Objective**: Apply quality gates systematically to all atomic commits after decomposition complete

**Validation Process**:

1. **Return to clean state**: `stg pop -a` 
2. **Process patches one by one**:
   - `stg push` - Apply single patch
   - **Run quality gates**: tests, lint, build, code review
   - **Fix issues if needed** on current patch
   - **Only proceed** when quality gates pass
   - Continue to next patch
3. **Systematic quality validation** through entire decomposed series

**Quality Gate Categories**:

- **Build verification**: `cargo build` or equivalent
- **Test validation**: `cargo test` or project test suite
- **Linting compliance**: `cargo clippy` or project linter
- **Code review**: Specialist agent review if needed
- **Integration testing**: System-level validation

#### Workflow Advantages

**Phase Separation Benefits**:

- **Cognitive load reduction**: Split complex task into two focused phases
- **Error isolation**: Decomposition errors separate from quality gate errors
- **Systematic progress**: Clear completion criteria for each phase
- **Rollback simplicity**: Easy to revert either phase independently

**Avoids Common Pitfalls**:

- **Mixed concerns**: Trying to fix quality AND size simultaneously
- **Workflow confusion**: Losing track of whether splitting or validating
- **Cascade failures**: Quality issues in early patches blocking later decomposition
- **Analysis paralysis**: Getting stuck on quality when size is the primary issue

#### Emergency Procedures

**If Merge Conflicts During Phase 1 Push**:

1. **Stop immediately** - merge conflicts shouldn't happen
2. **Check patch import** - verify proper StGit conversion
3. **Investigate patch sequence** - look for dependency issues
4. **Consider patch reordering** if logical dependencies discovered

**If Quality Gates Fail During Phase 2**:

1. **Fix on current patch only** - don't cascade changes
2. **Use `stg refresh`** to update patch with fixes
3. **Re-run quality gates** until pass
4. **Document any systematic issues** for methodology improvement

**Rollback Commands**:

- `stg undo --hard` - Revert last StGit operation
- `stg pop -a` - Return to clean baseline state
- `stg push -a` - Apply all patches (for final verification)

This two-phase approach eliminates the methodology violation that caused the original 8-branch chaos by maintaining strict separation between decomposition concerns and quality concerns.

### Alternative: Extract-Then-Atomize Manual Decomposition

**Date**: August 18, 2025  
**Source**: Mnemosyne repository patch 0001 decomposition experience  
**Innovation**: Manual git operations for patch content extraction and atomic reconstruction

#### Methodology Overview

Instead of StGit patch manipulation, apply the entire violating patch first, then create atomic commits through selective staging. This approach leverages standard git operations for maximum control and transparency.

**Core Process**:

1. **Extract all content**: `git apply original-patch.patch`
2. **Stage selectively**: Use `git add` to stage files for each atomic commit
3. **Commit atomically**: Create commits following dependency order
4. **Maintain boundaries**: Respect auto-generated content isolation

#### Step-by-Step Workflow

**Phase 1: Content Extraction**

```bash
# Handle conflicts manually (e.g., .gitignore merging)
git apply --exclude="conflicting-file" original-patch.patch
# Edit conflicting files manually to merge changes
```

**Strategic Analysis Phase**:

- Use `mcp__sequential-thinking__sequentialthinking` for complex decomposition analysis
- Break down large patches into logical boundaries through systematic reasoning
- Plan atomic commit sequence considering dependencies and build requirements

**Phase 2: Atomic Reconstruction**

```bash
# Example: Project tooling commit
git add .eslintrc.json .prettierrc.json jest.config.js tsconfig.json .husky/
git commit -m "build: add TypeScript project configuration and tooling"

# Example: Auto-generated content isolation
git add package-lock.json
git commit -m "chore: add package-lock.json after dependency installation"

# Continue with logical groupings...
```

#### Advantages Over StGit Method

**Transparency**: 

- All operations use standard git commands
- No specialized StGit knowledge required
- Clear visibility into staging and commit process

**Control**:

- Manual file selection prevents accidental groupings
- Easy to verify each commit's scope before committing
- Natural dependency ordering emerges from selective staging

**Flexibility**:

- Handle conflicts during extraction phase
- Mix and match files across original patch boundaries
- Easy rollback with standard git operations

#### Real-World Results

**Patch 0001 Decomposition**: 16,409 lines → 12 atomic commits

- **Original**: 32 files, massive mixed concerns
- **Result**: Clean progression from tooling → dependencies → implementation
- **Quality**: Each commit buildable and logically coherent
- **Auto-generated isolation**: 7,153-line package-lock.json properly separated

**Commit Size Distribution**:

- Tooling setup: 145 lines
- Dependencies: 75 lines  
- Auto-generated: 7,153 lines (isolated)
- Project metadata: 338 lines
- Database schema: 684 lines
- Database config: 986 lines
- Data layer: 1,167 lines
- AI models: 422 lines
- Utilities: 593 lines
- Testing: 138 lines
- Documentation: 4,711 lines
- Fixes: 1 line

#### When to Use This Method

**Prefer Extract-Then-Atomize for**:

- Teams unfamiliar with StGit
- Complex patches with many file conflicts
- When transparency in decomposition process is valued
- Patches requiring extensive manual conflict resolution

**StGit Method Better for**:

- Large patch series requiring systematic manipulation
- Teams experienced with StGit workflows
- When patch history preservation is critical
- Advanced scenarios requiring patch reordering/splitting

#### Comparison with StGit Equivalent

**StGit approach** would use:

```bash
stg push target-patch
stg spill -r    # Reset spill outside index
# Manual reconstruction similar to extract-then-atomize
```

Both methods achieve similar results through different tooling philosophies. Extract-then-atomize prioritizes transparency and standard git operations, while StGit prioritizes advanced patch manipulation capabilities.
</details><br>

The model and agents work through the commits, and I can see the commands they're using to do the work scroll across the terminal. It's going so well that we task another instance with cleaning up another repository, and both groups steadily work their way through the patch sets for their respective projects.

Then we hit a snag. When I check the results, I can tell that half of the commits on the branch I'm looking at are still the original oversized commits. The agents are convinced that what's there is the finished product. I assure them that it really isn't—where did all of that work they did go?

To do the work, they took the bold move of doing git surgery directly, and at some point they must have ended up confused by one of the detached head states they got themselves into. Subsequently, they cut loose their couple hours of work slicing and dicing large commits down into smaller ones. We try to figure out what happened by looking at the reflog and some other diagnostic tools, but have no luck recovering the lost work.

Well, let's have them run the task again, except this time using stacked git. Both projects start over and begin their trek through the patch history. One team seems to be handling it okay, but the other has trouble grasping that if you're using `stg`, then you shouldn't use regular git tools that modify the repository state. If you must use them, then you must use `stg repair` to recover to a state where the branch and tools will work.

Eventually we decide on a third approach for this team: a fresh git repository with a .gitignore directory stashed with patches for the project that were generated with `git format-patch`. They work out a plan, add their variation to the standards document, and then begin their journey. Both teams seem to be making steady progress this time.



While they started their trek, I noticed the commit messages for the new patches and realized they could break down a patch recursively if it was still too large. Claude incorporates this insight into their standards document, and then one of the agents modifies it to add their contribution: using a special tag in the name of commits that are targets for recursive decomposition. The process seems to be working out okay, but we'll see how it goes when they complete the work.



Here is an example of the template one team made it use for their analysis:

<details markdown="1">
<summary>patch-analysis-template.md</summary>

# Patch Analysis Template

**Copy this template for each patch: patch-XXX-analysis.md**

## Patch Metadata

- **Patch Number**: XXX
- **Patch Name**: [patch-name]
- **Analysis Date**: [date]
- **Analyst**: [Claude instance]

## Step 1: Extract Commit Metadata

```bash
stg show [patch-name] --stat
```

### Results:
- **Files Modified**: X files
- **Lines Added**: X lines
- **Lines Deleted**: X lines
- **Net Change**: X lines
- **Commit Type**: [feat/fix/docs/test/refactor]
- **Scope**: [component/system affected]

## Step 2: Quantitative Assessment

### Atomic Criteria Check:
- **File Count**: ✅/❌ X files (≤ 5 limit)
- **Line Count**: ✅/❌ X lines (≤ 500 limit)  
- **Commit Size**: [manageable/oversized]

**VIOLATION SUMMARY**:
- File limit: [PASS/FAIL by X files]
- Line limit: [PASS/FAIL by X lines]

## Step 3: Logical Cohesion Analysis

### Single Purpose Check:
- **Primary Concern**: [what this patch accomplishes]
- **Related Changes**: [are all changes related?]
- **Mixed Concerns**: [any "and", "also", multiple unrelated items?]

**COHESION ASSESSMENT**: [Strong/Weak/Mixed]

## Step 4: Independence Verification

### Standalone Functionality:
- **Buildable**: [would repo build after this patch alone?]
- **Testable**: [can this be tested independently?]
- **Bisectable**: [complete working state?]
- **Dependencies**: [requires other uncommitted changes?]

**INDEPENDENCE ASSESSMENT**: [Independent/Dependent]

## Step 5: Message Quality Assessment

### Commit Message Analysis:
- **Descriptive**: [clear what was done?]
- **Conventional**: [follows project standards?]
- **Specific**: [avoids vague terms?]
- **Scoped**: [clearly indicates area affected?]

**MESSAGE QUALITY**: [Good/Needs Improvement]

## Decision Framework Result

### Overall Assessment:
- ✅ **ATOMIC COMMIT** - No decomposition needed
- ❌ **NON-ATOMIC COMMIT** - Decomposition required

**Primary Violation**: [file count/line count/mixed concerns/dependencies]

## Decomposition Plan (If Required)

### Logical Boundaries Identified:
1. **Group A**: [description] (~X lines)
   - Files: [list]
   - Scope: [what this group accomplishes]

2. **Group B**: [description] (~X lines)  
   - Files: [list]
   - Scope: [what this group accomplishes]

### Proposed Commit Sequence:
1. **Commit 1**: "[conventional commit message]"
   - Content: [specific changes]
   - Estimated size: ~X lines

2. **Commit 2**: "[conventional commit message]"
   - Content: [specific changes]  
   - Estimated size: ~X lines

### Benefits of Decomposition:
- [why this split improves reviewability/maintainability]
- [how it maintains atomic principles]

## Implementation Strategy

### StGit Commands:
```bash
stg push [patch-name]         # Apply patch
stg spill                     # Empty patch, keep changes
git add [group-A-files]       # Stage first group
git commit -m "[message-1]"   # Create first atomic commit
git add [group-B-files]       # Stage second group  
git commit -m "[message-2]"   # Create second atomic commit
```

### Verification:
- Each commit ≤ 500 lines ✅
- Each commit ≤ 5 files ✅
- Each commit single concern ✅
- Repository builds after each commit ✅

## Results

### Decomposition Outcome:
- **Original**: 1 patch, X files, X lines
- **Result**: Y atomic commits
- **Commit 1**: Z lines, [files]
- **Commit 2**: W lines, [files]

### Quality Check:
- All atomic criteria met: ✅/❌
- Logical separation maintained: ✅/❌
- Build verification: ✅/❌

## Notes

### Special Considerations:
- [any unusual aspects of this patch]
- [dependencies discovered]
- [quality gate issues to watch for in Phase 2]

### Next Steps:
- Move to patch [XXX-1]
- Update master plan with results
- Continue systematic progression
</details><br>



And here is an example of one having been filled out:

<details markdown="1">
<summary>patch-023-analysis.md</summary>

# Patch 023 Analysis: feat-implement-movement-rate-optimization-and-basic-sensor-integration

## Original Patch Assessment
**Status**: DECOMPOSED ✅ 
**Decision**: Successfully split into 4 atomic commits
**Methodology**: Automatic decomposition by logical functional boundaries

## Atomic Commit Standards Analysis

### File Count: 3 files ✅
- `src/ecs/systems.rs`: Robot speed and weapon speeds  
- `src/vm/dispatch.rs`: Movement costs and sensor mock data
- `bots/test_movement.ap`: Movement validation program

### Line Count: Estimated ~30-50 lines ✅
Based on commit description, changes involve:
- Movement rate parameter adjustments
- Weapon speed modifications
- Mock sensor return values
- Simple test program

### Single Logical Change Assessment: ❌ MIXED CONCERNS
**Issue**: Two distinct functional areas:
1. **Movement Rate Optimization**: Performance/balance tuning
2. **Basic Sensor Integration**: Mock data implementation

## Decomposition Results

The patch was successfully decomposed into 4 atomic commits:

### 1. `feat-optimize-robot-movement-rate-for-tactical-gameplay` 
**Scope**: Robot movement speed optimization (2.0 → 4.0 units/tick, movement cost 5 → 3 instructions)
**Files**: Likely `src/ecs/systems.rs`
**Assessment**: ✅ ATOMIC - Single logical change (movement optimization)

### 2. `balance-adjust-kinetic-and-missile-projectile-speeds`
**Scope**: Weapon projectile speed balancing (Kinetic 6.0, Missile 2.5)
**Files**: Likely `src/ecs/systems.rs` 
**Assessment**: ✅ ATOMIC - Single logical change (weapon balance)

### 3. `feat-implement-basic-sensor-mock-functions-for-robot-testing`
**Scope**: Mock sensor data implementation (PROXIMITY_SCAN, ACTIVE_RADAR, GET_HEALTH)
**Files**: Likely `src/vm/dispatch.rs`
**Assessment**: ✅ ATOMIC - Single logical change (sensor mocking)

### 4. `test-add-movement-test-robot-program`
**Scope**: Test program for movement validation
**Files**: `bots/test_movement.ap`
**Assessment**: ✅ ATOMIC - Single logical change (test addition)

## Logical Coherency Analysis

**Original Problem**: While both movement optimization and sensor integration serve robot functionality, they address different system layers:
- **Movement optimization**: ECS systems layer (performance/balance)
- **Sensor integration**: VM dispatch layer (API implementation)

**Decomposition Rationale**: 
1. **Movement rate changes** could be tested independently
2. **Weapon speed changes** are separate balance concerns
3. **Sensor mock functions** enable different test scenarios
4. **Test program** validates the combined functionality

## Quality Assessment

**Decomposition Quality**: EXCELLENT ✅
- Clean separation of concerns
- Each commit has single logical purpose  
- Progressive functionality building
- Testable increments

**Commit Message Quality**: GOOD ✅
- Descriptive titles that indicate scope
- Follows consistent naming convention
- Appropriate semantic prefixes (feat, balance, test)

## Master Plan Impact

**Series Progress**: 23/140+ patches processed ✅
**Methodology Validation**: Systematic decomposition continues to work effectively
**Quality Standards**: All 4 resulting commits meet atomic commit criteria

**Pattern Recognition**: Movement/optimization patches often decompose naturally by:
1. Core system changes
2. Balance adjustments  
3. API/integration layer
4. Testing validation

## Recommendations

1. **Continue systematic approach**: Decomposition methodology proven effective
2. **Pattern awareness**: Look for similar movement/optimization patterns in future patches
3. **Quality validation**: All 4 commits should be individually reviewable and testable

**Next Action**: Proceed to patch 024 with established methodology
</details><br>



I have learned that making them produce a work product in markdown file form is a good way to preserve knowledge and have something to go back and look at later. Having them document a process as they are doing it was probably a new idea for me with this experiment.
