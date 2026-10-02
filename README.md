# Codex1

**Codex1** is an English, local-first device care toolkit by **mrcode Technologi**.

It provides a clear interface for:

- Internet diagnostics and a reversible troubleshooting checklist
- Display scale preview for better readability planning
- Ubuntu/Debian ADB workstation setup guidance
- Safe, read-only ADB command examples
- Firmware maintenance preparation guidance

## Safety scope

Codex1 is designed for phones owned by the user or devices they are explicitly authorized to repair. It does **not** bypass PINs, FRP, carrier locks, account security, or other access controls. It does not distribute firmware. For flashing, use the exact official image for the device model and region, back up first, and follow the manufacturer’s service instructions.

## Run locally

This is a dependency-free static site. Serve it from the project directory:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Project files

- `index.html` — English Codex1 dashboard
- `styles.css` — responsive visual system
- `app.js` — navigation, diagnostics simulation, clipboard actions, and display preview

## Developer

- **mrcode Technologi**
- Facebook: [@mrcodex1](https://www.facebook.com/mrcodex1)

## License

MIT
