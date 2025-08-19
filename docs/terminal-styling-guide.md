# Jekyll Blog Terminal Styling Guide

## Overview
This guide defines the standard formatting for Claude Code terminal interactions in Jekyll blog posts. Use these patterns to maintain consistent, authentic terminal styling across all posts.

## Formatting Patterns

### 1. Terminal Output Container
Wrap all Claude interactions in terminal styling:
```html
<div class="terminal-output">
<!-- content here -->
</div><br>
```

### 2. Speaker Labels
Format speakers with consistent styling:
```html
<span class="symbol-info"><b>Speaker:</b></span> Content here<br>
```

Common speakers:
- `<span class="symbol-info"><b>Me:</b></span>`
- `<span class="symbol-info"><b>Claude:</b></span>`
- `<span class="symbol-info"><b>GPT:</b></span>`
- Agent names: `<span class="symbol-info"><b>game-design-strategist:</b></span>`

### 3. Claude Code Symbols
Use color-coded symbols with proper classes:
```html
<span class="symbol-record">⏺</span>  <!-- Red - for actions/recording -->
<span class="symbol-branch">⎿</span>  <!-- Blue - for continuation lines -->
<span class="symbol-completed">☒</span>  <!-- Green - for completed items -->
<span class="symbol-pending">☐</span>  <!-- Yellow - for pending items -->
<span class="symbol-success">Done</span>  <!-- Green - for completion status -->
```

### 4. Line Breaks and Spacing
- Use `<br>` for line breaks within terminal divs
- Add `<br>` after closing `</div>` tags for consistent spacing
- Use `<i>` tags for actions, thoughts, and time stamps

### 5. Multi-line Content
For longer responses, maintain structure:
```html
<div class="terminal-output">
<span class="symbol-info"><b>Claude:</b></span><br>
<span class="symbol-record">⏺</span> Action description<br>
Content line 1<br>
Content line 2<br>
<span class="symbol-branch">⎿</span> Status confirmation
</div><br>
```

## Files to Convert

### ✅ Completed
1. `2025-07-31-testing-ai-agent-creative-capabilities.md` - ✅ Done
2. `2025-07-31-first-week-ai-assisted-development.md` - ✅ Done

### 🔄 Remaining Files (40 total)

#### Week 1 - Getting Started (July 31 - August 1)
- [ ] `2025-07-31-first-week-exploring-claude-code-and-ai-agents.md`
- [ ] `2025-08-01-desert-island-games-development-introduction.md`
- [ ] `2025-08-01-ai-development-tools-getting-started.md`
- [ ] `2025-08-01-understanding-claude-code-agent-system.md`
- [ ] `2025-08-01-agent-confusion-and-persistence.md`
- [ ] `2025-08-01-game-pitch-evaluation-experiment.md`

#### Week 2 - Deep Development (August 2-4)
- [ ] `2025-08-02-project-cost-benefit-reflection.md`
- [ ] `2025-08-02-scale-debugging-and-fantasy-physics.md`
- [ ] `2025-08-03-testing-ai-evaluation-with-intentionally-bad-pitch.md`
- [ ] `2025-08-04-ascii-debugging-breakthrough.md`

#### Week 2 - Major Discoveries (August 5-10)
- [ ] `2025-08-05-project-scale-and-agent-competition.md`
- [ ] `2025-08-09-saturday-morning-comprehensive-project-update.md`
- [ ] `2025-08-10-ai-memory-systems-and-creative-breakthrough.md`

#### Remaining Posts (27 more files)
[Complete list of all 42 posts to be processed chronologically]

## Conversion Strategy

### Phase 1: Identify Conversations
For each file:
1. Scan for dialogue patterns:
   - `**Me:**` / `**Claude:**` / `**Agent:**`
   - Lines starting with `: ⏺` or `: ⎿`
   - Code block conversations
   - Agent task executions

### Phase 2: Apply Terminal Styling
1. Wrap conversation sections in `<div class="terminal-output">`
2. Convert speaker names to proper spans
3. Add color-coded symbols using appropriate classes
4. Insert `<br>` tags for line breaks
5. Add `<br>` after closing div tags

### Phase 3: Verify Formatting
1. Check for consistent spacing
2. Ensure no duplicate content
3. Verify proper symbol usage
4. Test that divs are properly closed

## Style Guidelines

### Content Principles
- **Preserve authenticity**: Maintain Jerry's original voice and actual Claude Code output
- **Focus on terminal interactions**: Apply styling primarily to actual Claude/agent conversations
- **Keep it clean**: Use consistent spacing and avoid cluttered formatting

### Formatting Rules
- **Internal thoughts**: Use `<i>` tags for thoughts, actions, and timestamps
- **Actions in conversation**: Format as `<i>action description</i>`
- **Emoji handling**: Convert forum emoji markers to actual emoji (`:slight_smile:` → 😊)
- **Spacing**: Always add `<br>` after terminal div closing tags
- **Line breaks**: Use `<br>` within divs, not markdown line breaks

### When to Use Terminal Styling
✅ **Do use for:**
- Claude Code terminal output
- Agent task executions  
- Private journal MCP interactions
- Todo list updates
- Actual conversation transcripts

❌ **Don't use for:**
- Regular paragraph text
- Code examples in markdown blocks
- Image captions
- Navigation/metadata

## External Content Inclusion

### Markdown File Embedding
When Jerry uses the `@path` syntax to reference markdown files, automatically embed them using proper details tags.

**Syntax:**
- `@path/to/file.md` - Uses filename as summary
- `@path/to/file.md summary:Custom Description` - Uses custom summary

**Examples:**
```
@docs/analysis.md
@docs/analysis.md summary:Multi-Scale Social Analysis by Virtual Dani Bunten
@agents/game-design-strategist.md summary:Game Design Agent Prompt
```

**Automatic Processing:**
1. Detect `@filepath` patterns in post content
2. Read the referenced markdown file
3. Extract custom summary if provided after `summary:`
4. Wrap content in details tag with appropriate summary
5. Replace the `@filepath` reference with the embedded content

**Generated Output:**
```html
<details markdown="1">
<summary>Custom Description (or filename if no summary provided)</summary>

[Full content of the referenced markdown file goes here]
</details>
```

**Process:**
1. Scan post for `@filepath` patterns
2. Read each referenced file
3. Use custom summary or default to filename
4. Preserve all original formatting and structure
5. Ensure proper spacing around details blocks

## Quality Checklist

For each post using terminal styling:
- [ ] All conversations wrapped in terminal-output divs
- [ ] Consistent speaker labeling with colons
- [ ] Proper symbol color coding
- [ ] Clean line breaks with `<br>` tags
- [ ] Appropriate spacing between sections
- [ ] No duplicate content
- [ ] All divs properly closed
- [ ] Internal thoughts in `<i>` tags
- [ ] External markdown files embedded in details tags when referenced