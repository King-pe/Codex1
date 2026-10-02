# Codex1

**Codex1** is an English, local-first **Termux CLI device care toolkit** by **MrCodex1Tz**. A lightweight web dashboard is included as a visual companion.

It provides a clear interface for:

- Internet diagnostics and a reversible troubleshooting checklist
- Display scale preview for better readability planning
- Ubuntu/Debian ADB workstation setup guidance
- Safe, read-only ADB command examples
- Firmware maintenance preparation guidance

## Install in Termux

Install Termux from [F-Droid](https://f-droid.org/packages/com.termux/) or the official GitHub releases, then run:

```bash
pkg update -y
pkg install -y git
git clone https://github.com/King-pe/Codex1.git
cd Codex1
chmod +x codex1 install.sh
./install.sh
codex1 help
```

Useful commands:

```bash
codex1 status
codex1 screen info
codex1 screen scale 110
codex1 screen reset
codex1 network check
codex1 network repair
codex1 setup
codex1 adb devices
codex1 adb info
codex1 flash guide
codex1 flash verify ~/storage/downloads/firmware.zip
```

The screen density commands may require ADB, root, or Shizuku permission. `network repair` opens Android network settings and avoids silently changing APN or private DNS values.

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
- `codex1` — Termux CLI executable
- `install.sh` — local Termux installer

## Developer

- **MrCodex1Tz**
- Facebook: [MrCodex1Tz](https://www.facebook.com/MrCodex1Tz)

## License

MIT
