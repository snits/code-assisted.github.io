# Chirpy Theme Migration Plan

## ABOUTME: Systematic TDD/agile approach for migrating Jekyll blog from minima to Chirpy theme while maintaining GitHub Pages compatibility

This document outlines a sprint-based approach to migrate the Code Assisted blog from the minima theme to the Chirpy theme, addressing known Liquid template compatibility issues and ensuring GitHub Pages deployment continues to work.

## Current State Analysis

### Working Components
- Jekyll site builds successfully with minima theme
- GitHub Pages deployment via GitHub Actions
- 40+ blog posts with proper formatting
- Custom includes and layouts for specific overrides
- Baseurl configuration for GitHub Pages subpath

### Known Challenges
- Chirpy remote theme contains Liquid syntax incompatible with GitHub Pages
- Existing `_includes/read-time.html` override for Liquid template errors
- Potential home layout syntax errors requiring local overrides
- Demo posts from remote theme cause syntax errors (currently excluded)

### Key Technical Constraints
- Must maintain GitHub Pages compatibility
- Cannot use gem-based Chirpy theme (remote theme required)
- Must preserve existing content and functionality
- Local overrides needed for Liquid template fixes

## Sprint-Based Implementation Plan

### Sprint 1: Foundation & Build System (3 User Stories)

**Goal**: Establish Chirpy theme without breaking existing functionality

#### Story 1.1: Enable Chirpy Remote Theme
**As a developer, I want to add Chirpy remote theme so that I can access Chirpy layouts**

**Acceptance Criteria:**
- [ ] Add `remote_theme: "cotes2020/jekyll-theme-chirpy"` to `_config.yml`
- [ ] Remove `theme: minima` configuration
- [ ] Site builds successfully: `bundle exec jekyll build`
- [ ] Local server starts without errors: `bundle exec jekyll serve`

**Testing Approach:**
```bash
# Test build success
bundle exec jekyll build --config _config.yml 2>&1 | tee build-log.txt
# Verify no fatal errors in build log
# Test local server startup
bundle exec jekyll serve --config _config.yml --host 0.0.0.0 --port 4000
```

**Rollback Strategy:** Git revert to minima theme configuration

**Commit Message:** `feat: add Chirpy remote theme configuration`

#### Story 1.2: Preserve Existing Content
**As a content creator, I want existing posts to display correctly so that content is preserved**

**Acceptance Criteria:**
- [ ] Navigate to 5 representative posts via local server
- [ ] Images display correctly with proper paths
- [ ] Post metadata (date, categories, tags) appears correctly
- [ ] Internal links between posts function
- [ ] Code blocks and formatting render properly

**Testing Approach:**
- Manual verification of representative posts:
  - Recent post: `2025-08-18-git-commit-decomposition.md`
  - Image-heavy post: `2025-08-02-terminal-ui-and-visual-debugging.md`
  - Technical post: `2025-08-04-ascii-debugging-breakthrough.md`

**Rollback Strategy:** Add explicit `layout: post` to front matter if needed

**Commit Message:** `fix: ensure existing posts render correctly with Chirpy theme`

#### Story 1.3: Basic Site Navigation
**As a site visitor, I want basic navigation to work so that I can browse content**

**Acceptance Criteria:**
- [ ] Home page loads without 500 errors
- [ ] Click navigation to individual posts works
- [ ] Category and tag links function (basic functionality required)
- [ ] Archive page displays post list

**Testing Approach:**
- Navigate home page → verify post list displays
- Click individual post links → verify posts load
- Test category/tag navigation → verify basic filtering works

**Rollback Strategy:** Create minimal navigation overrides if needed

**Commit Message:** `feat: establish basic site navigation with Chirpy theme`

### Sprint 2: Liquid Template Compatibility (3 User Stories)

**Goal**: Systematically identify and fix Liquid template syntax errors

#### Story 2.1: Error Inventory & Documentation
**As a developer, I want to identify all Liquid template errors so that I can create targeted fixes**

**Acceptance Criteria:**
- [ ] Enable Chirpy theme and capture all build errors
- [ ] Document each error with file location and line number
- [ ] Categorize errors by type (syntax, filter compatibility, etc.)
- [ ] Create prioritized fix list

**Testing Approach:**
```bash
# Capture build errors with verbose output
bundle exec jekyll build --verbose --trace 2>&1 | tee liquid-errors.txt
# Parse errors for Liquid-specific issues
grep -i "liquid\|syntax\|filter" liquid-errors.txt
```

**Commit Message:** `docs: document Liquid template compatibility issues`

#### Story 2.2: Fix Read-Time Calculation
**As a developer, I want to fix read-time calculation errors so that posts display correctly**

**Acceptance Criteria:**
- [ ] Verify existing `_includes/read-time.html` override works
- [ ] Test with current Chirpy version for compatibility
- [ ] Posts display read time without Liquid errors
- [ ] Read time calculation is accurate

**Testing Approach:**
- Verify override file exists and contains valid Liquid syntax
- Test multiple posts to ensure read time appears
- Compare with posts that have known word counts

**Rollback Strategy:** Revert to GitHub Pages compatible read-time logic

**Commit Message:** `fix: maintain read-time calculation override for GitHub Pages compatibility`

#### Story 2.3: Fix Home Layout Issues
**As a developer, I want to fix home layout errors so that the main page works**

**Acceptance Criteria:**
- [ ] Create local override for `_layouts/home.html` if needed
- [ ] Fix any pagination or post listing Liquid syntax
- [ ] Home page displays post list correctly
- [ ] Pagination links work (if applicable)

**Testing Approach:**
- Navigate to home page → verify post list displays
- Check for Liquid syntax errors in browser developer tools
- Test pagination if more than 5 posts per page

**Rollback Strategy:** Disable problematic Liquid features, use simpler post listing

**Commit Message:** `fix: create home layout override for GitHub Pages compatibility`

### Sprint 3: Core Chirpy Features (3 User Stories)

**Goal**: Enable key Chirpy functionality while maintaining compatibility

#### Story 3.1: Category Navigation
**As a site visitor, I want category navigation to work so that I can browse related content**

**Acceptance Criteria:**
- [ ] `categories.md` page works with Chirpy layout
- [ ] Category page lists all categories correctly
- [ ] Clicking categories shows filtered posts
- [ ] Category counts are accurate

**Testing Approach:**
- Navigate to /categories/ page
- Verify all categories from posts appear
- Click individual categories → verify filtering works
- Check category post counts match actual posts

**Rollback Strategy:** Use simple category list if advanced features fail

**Commit Message:** `feat: enable Chirpy category navigation and filtering`

#### Story 3.2: Tag Navigation
**As a site visitor, I want tag navigation to work so that I can find specific topics**

**Acceptance Criteria:**
- [ ] `tags.md` page works with Chirpy layout
- [ ] Tag cloud or list displays correctly
- [ ] Tag filtering shows relevant posts
- [ ] Tags are sorted appropriately (by frequency or alphabetically)

**Testing Approach:**
- Navigate to /tags/ page
- Verify tag display (cloud or list format)
- Click individual tags → verify post filtering
- Check tag post associations are correct

**Rollback Strategy:** Fallback to simple alphabetical tag list

**Commit Message:** `feat: enable Chirpy tag navigation and filtering`

#### Story 3.3: Search Functionality
**As a site visitor, I want search functionality so that I can find specific content**

**Acceptance Criteria:**
- [ ] Search box appears in site header/navigation
- [ ] Search functionality works without JavaScript errors
- [ ] Search results are relevant and accurate
- [ ] Search index includes post content and metadata

**Testing Approach:**
- Verify search box appears in navigation
- Test search with known post titles → verify results
- Test search with post content keywords → verify accuracy
- Check browser console for JavaScript errors

**Rollback Strategy:** Disable search feature if incompatible with GitHub Pages

**Commit Message:** `feat: enable Chirpy search functionality`

### Sprint 4: Advanced Features & Polish (2 User Stories)

**Goal**: Enable enhanced user experience features

#### Story 4.1: Image Lightbox & Media Enhancement
**As a content creator, I want image lightbox functionality so that images are more engaging**

**Acceptance Criteria:**
- [ ] Images in posts trigger lightbox when clicked
- [ ] Lightbox navigation works correctly (next/previous)
- [ ] Lightbox close functionality works
- [ ] No JavaScript errors in browser console

**Testing Approach:**
- Navigate to image-heavy posts
- Click images → verify lightbox opens
- Test lightbox navigation controls
- Check browser console for JavaScript errors

**Rollback Strategy:** Disable lightbox feature if incompatible

**Commit Message:** `feat: enable Chirpy image lightbox functionality`

#### Story 4.2: Responsive Design & Mobile Experience
**As a site visitor, I want responsive design so that the site works on mobile**

**Acceptance Criteria:**
- [ ] Site displays correctly on mobile viewports (320px+)
- [ ] Navigation menu works on mobile devices
- [ ] All interactive elements are touch-friendly
- [ ] Performance remains acceptable on mobile

**Testing Approach:**
- Test site at various viewport sizes (320px, 768px, 1024px)
- Verify mobile navigation menu functionality
- Test touch interactions on mobile devices
- Check page load times on simulated mobile connections

**Rollback Strategy:** Adjust responsive breakpoints if needed

**Commit Message:** `feat: verify and enhance mobile responsive design`

## Implementation Strategy

### Development Workflow
1. Create feature branch: `feature/chirpy-theme-migration`
2. Implement one user story per atomic commit
3. Test each story independently before proceeding
4. Request code-reviewer approval for each commit
5. Document all Liquid template fixes for future reference

### Quality Gates (Pre-Commit Checklist)
- [ ] Site builds successfully: `bundle exec jekyll build`
- [ ] Local server starts: `bundle exec jekyll serve`
- [ ] No Liquid template errors in build log
- [ ] Manual verification of story acceptance criteria
- [ ] Browser console shows no JavaScript errors
- [ ] Mobile viewport testing (if applicable)

### Rollback Points
- **After Sprint 1**: Full revert to minima theme possible
- **After Sprint 2**: Selective include/layout override removal
- **After Sprint 3**: Individual Chirpy feature disable
- **After Sprint 4**: Advanced feature rollback without breaking core

### Success Metrics
- **Technical**: Zero build errors, all tests pass
- **Functional**: All existing content displays correctly
- **User Experience**: Navigation, search, and mobile work
- **Performance**: Site performance baseline maintained
- **Maintainability**: Clear documentation of all overrides

### Risk Mitigation
- Git tagging before each sprint for easy rollback
- Separate commits for each user story enable selective reversion
- Local overrides documented for future Chirpy updates
- GitHub Pages compatibility verified at each stage
- Existing content preservation prioritized over new features

## Testing Infrastructure

### Automated Testing
```bash
# Build verification
bundle exec jekyll build --config _config.yml 2>&1 | tee build.log
echo "Build exit code: $?"

# Local server test
bundle exec jekyll serve --detach --config _config.yml
curl -f http://localhost:4000/code-assisted/ || echo "Server test failed"
pkill -f jekyll
```

### Manual Testing Checklist
- [ ] Home page loads correctly
- [ ] Sample posts display properly
- [ ] Navigation works (header, footer, sidebar)
- [ ] Categories page functions
- [ ] Tags page functions
- [ ] Search works (if enabled)
- [ ] Images display correctly
- [ ] Mobile responsive design
- [ ] No JavaScript console errors

### Performance Baseline
- Current build time: ~0.91 seconds
- Current page load time: [to be measured]
- Current mobile PageSpeed score: [to be measured]

Post-migration metrics should meet or exceed baseline.

## Conclusion

This systematic approach transforms a potentially risky theme migration into a controlled, testable process. Each sprint builds incrementally toward full Chirpy functionality while maintaining rollback options and GitHub Pages compatibility throughout.

The focus on Liquid template compatibility as a dedicated sprint ensures the core technical challenge is addressed systematically rather than hoped to resolve naturally.