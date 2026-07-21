# Learn Playwright Fundamentals 2x

A comprehensive hands-on Playwright automation training project covering 20+ modules — from basic browser automation to advanced topics like session reuse, web tables, API testing, visual testing, CI integration, and mobile testing.

Built with **[Playwright](https://playwright.dev/) ^1.61.1** and the **@playwright/test** runner.

## Project Structure

```
├── tests/
│   ├── 01_Basics/            # Basic test structure, annotations
│   ├── 02_First_tests/       # BCP hierarchy, multi-context, context options
│   ├── 03_Locators_Commands/ # CSS, XPath, getByRole, pressSequentially, waitUntil
│   ├── 04_Session_Storage/   # storageState, session persistence, auth reuse
│   ├── 05_Allure_Reporting/  # Allure integration, test steps, attachments, tags
│   ├── 06_Multiple_Elements/ # allInnerTexts, locator lists, getByTestId
│   ├── 07_WebTables/         # Dynamic XPath, following-sibling, pagination
│   ├── 08_Web_Select_Frames-iframe/ # Standard, custom & async dropdowns, iframes
│   ├── 09-Component-Testing/ # Component testing
│   ├── 10-API-Testing/       # API testing
│   ├── 11-Visual-Testing/    # Visual comparison testing
│   ├── 12-Debugging/         # Debugging techniques
│   ├── 13-Trace-Viewer/      # Trace viewer
│   ├── 14-Codegen/           # Codegen
│   ├── 15-CI-Integration/    # CI/CD integration
│   ├── 16-Parallel-Execution/# Parallel execution
│   ├── 17-Authentication/    # Auth flows
│   ├── 18-Network-Mocking/   # Network mocking
│   ├── 19-Mobile-Testing/    # Mobile emulation
│   ├── 20-Performance-Testing/# Performance testing
│   ├── data/                 # Test data files
│   ├── fixtures/             # Custom fixtures
│   ├── pages/                # Page Object models
│   └── utils/                # Utilities
├── utils/
│   └── CustomReporter.ts     # TTA custom HTML reporter
└── playwright.config.ts      # Playwright configuration
```

## Topics Covered

| Category | Topics |
|----------|--------|
| **Basics** | Test structure, annotations (`skip`/`fail`/`slow`/conditional) |
| **Browser Context** | BCP hierarchy, multi-context, multi-tab, context options (viewport, locale, timezone, geolocation) |
| **Locators** | CSS selectors, XPath, `getByRole`, `getByText`, `getByTestId`, `allInnerTexts` |
| **Actions** | `fill()`, `click()`, `pressSequentially()`, `goto()` with `waitUntil` options |
| **Session** | `storageState`, session persistence, auth reuse without login |
| **Web Tables** | Dynamic XPath, `following-sibling::td`, `preceding-sibling::td`, `nth()`, pagination with `filter({ hasText })` + `getByTestId("next-page")` + `isDisabled()` guard, employee management (delete by status) |
| **Reporting** | Allure integration (`allure-playwright`), custom TTA HTML reporter, screenshots, video, traces |
| **Web Select / Dropdowns** | Standard `<select>`, custom dropdown picker, multi-select chips with remove, creatable/grouped/async search dropdowns |
| **Test Structure** | `test.step()`, `testInfo.attach()`, tag filtering (`@P0`, `@smoke`, etc.) |

## Quick Start

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run a specific test
npx playwright test tests/05_Allure_Reporting/249_TestVWO_Dashboard_CustomReport.spec.ts

# Generate and open Allure report
npx allure generate allure-results --clean
npx allure open
```

## Configuration Highlights

| Setting | Value |
|---------|-------|
| **Browser** | Chromium only |
| **Parallel** | Fully parallel |
| **Headless** | `false` |
| **Trace** | On for all tests |
| **Screenshot** | On for all tests |
| **Video** | On for all tests |
| **Viewport** | 1920x1080 |
| **Reporters** | Line + Allure + Custom TTA HTML |
