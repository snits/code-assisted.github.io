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