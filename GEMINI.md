# GEMINI.md

This file contains foundational mandates for Project Kanaken System. These instructions take precedence over general defaults.

## Package Management
- **Package Manager:** Use **Bun** (`bun`) for all package management tasks (installing, adding, removing dependencies) and for running scripts.
- Do not use `npm` or `yarn`.

## Development Workflow
- **Post-Modification Hook:** After any code modification, you **MUST** run the following Biome commands to ensure code quality and consistency:
  - `bun run format`: To format the code.
  - `bun run lint:fix`: To apply linter fixes.
- Verification is only considered complete after these commands have been executed successfully.

## Architecture & Standards
- **Framework:** Next.js (App Router) with TypeScript.
- **Styling:** **Tailwind CSS** is the primary tool for styling.
- **Linting & Formatting:** Biome is the sole tool for linting and formatting.
- **Testing:** Do not implement or run tests unless explicitly requested.
