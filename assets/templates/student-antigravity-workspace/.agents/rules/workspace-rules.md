# Workspace Rules

## Project Contract
- Read `AGENTS.md` before acting.
- Read `docs/project-brief.md` before designing agents or workflows.
- Read `docs/workspace-map.md` before changing file structure, handoff, or outputs.
- If project intent conflicts across files, ask the human owner to confirm before changing scope.

## Safety
- Do not expose credentials, tokens, passwords, or private raw data.
- Ask for human review before producing external-facing output.
- If required information is missing, state the missing input before continuing.
- Use anonymized or synthetic sample data in `sample-data/`.

## Output Quality
- Use the output format requested in `docs/project-brief.md`.
- Cite or point to source input when summarizing facts.
- Separate facts, assumptions, and recommendations.
- Save generated files in `outputs/`.
- Never overwrite an existing output without noting it in `docs/pdca-log.md`.

## PDCA
- After each run, update `docs/pdca-log.md`.
- Keep evidence in `outputs/` or link to it from the PDCA log.

## Handoff
- Every agent handoff must state required fields, optional fields, and rejection rule.
- If a required field is missing, reject the handoff, log the reason, and continue safely where possible.
