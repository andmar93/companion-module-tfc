# companion-module-tfc

Companion module for controlling NEP TFC via Websocket.

See [HELP.md](./companion/help.MD) and [LICENSE](./LICENSE)

## Actions

- **Select Target** — select a target for a routing domain.
- **Route Source to Selected Target** — route a source to the target currently selected in a routing domain.
- **Route Source to Target** — route a source to a target, chosen from dropdowns.
- **Route by SectionIndex** — route a source to a target using their `SectionIndex` values, which may be supplied via Companion variables.
- **Route by UUID** — route a source to a target using their raw UUIDs (tags), which may be supplied via Companion variables (e.g. `$(module:variable)`).

## Changelog

### 1.1.0

- Added "Route by UUID" action, allowing sources and targets to be selected by UUID via Companion variables.

### 1.0.3

- Previous release.
