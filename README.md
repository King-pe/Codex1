# Codex1

**Codex1** is an English, local-first **Termux CLI device care toolkit** by **MrCodex1Tz**. A lightweight web dashboard is included as a visual companion.

It provides a clear interface for:

- Internet diagnostics and a reversible troubleshooting checklist
- Display scale preview for better readability planning
- Ubuntu/Debian ADB workstation setup guidance
- Safe, read-only ADB command examples
- Firmware maintenance preparation guidance
- Official Android update checks and a shortcut to Android's system-update settings
- Termux-accessible file scanning with ClamAV and reversible quarantine
- Security audit reminders for USB debugging, Play Protect, unknown sources, updates, and account safety
- Compressed backup and confirmation-based restore for files accessible to Termux
- Offline country lookup from a caller's international dialing prefix
- Offline voice effects for audio files

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
codex1 update check
codex1 update settings
codex1 security audit
codex1 scan files ~/storage/downloads
codex1 scan quarantine ~/storage/downloads
codex1 backup create ~/codex1-backup.tar.gz
codex1 backup list ~/codex1-backup.tar.gz
codex1 backup restore ~/codex1-backup.tar.gz
codex1 caller country +255712345678
codex1 voice effects
codex1 voice apply robot input.wav output.wav
codex1 setup
codex1 adb devices
codex1 adb info
codex1 flash guide
codex1 flash verify ~/storage/downloads/firmware.zip
```

The screen density commands may require ADB, root, or Shizuku permission. `network repair` opens Android network settings and avoids silently changing APN or private DNS values. `codex1 setup` installs ClamAV for file scanning.

### Updates, malware, and account protection

`codex1 update check` reads the phone model, Android version, build, and security-patch date. `codex1 update settings` opens the official Android update screen. Android system updates are intentionally installed by Android's own updater, not force-flashed by Termux: firmware packages are model/region-specific and a wrong image can brick or wipe a phone.

`codex1 scan files <directory>` scans files visible to Termux and reports detections without changing anything. `codex1 scan quarantine <directory>` moves detected files to `~/.codex1/quarantine` instead of deleting them. This cannot scan protected Android app data or replace Play Protect. Keep Play Protect enabled, install apps only from trusted sources, use a strong screen lock and 2FA, review Google account devices, and disable USB debugging when not needed.

### Backup and restore

Run `termux-setup-storage` once, then use `codex1 backup create [file]` to archive common shared-storage folders such as DCIM, Downloads, Pictures, Movies, Music, and Documents. Use `codex1 backup list <file>` to inspect an archive and `codex1 backup restore <file>` to restore it after typing `RESTORE`. Backups do not include protected app data, passwords, banking data, SMS, or contacts unless those are separately exported using an official app flow.

### Caller country and voice effects

`codex1 caller country +255712345678` identifies a country from an international prefix using an offline list. It cannot prove caller identity or prevent caller-ID spoofing. `codex1 voice apply robot input.wav output.wav` applies an offline effect to an audio file after `pkg install ffmpeg`; effects are `deep`, `high`, and `robot`. This is **not** a live phone-call voice changer and does not spoof calls or impersonate another person.

## Safety scope

Codex1 is designed for phones owned by the user or devices they are explicitly authorized to repair. It does **not** bypass PINs, FRP, carrier locks, account security, or other access controls, and it cannot guarantee that a phone will never be hacked. It does not distribute firmware. For flashing, use the exact official image for the device model and region, back up first, and follow the manufacturer’s service instructions.

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
