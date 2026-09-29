# DPS Pali District — Campus Background Video

This folder is configured for the looping animated/drone background video for the Hero section.

---

## 🎬 File Naming & Location

- **Primary Format:** `/public/videos/hero-campus.mp4`
- **Optional WebM Format:** `/public/videos/hero-campus.webm` (for even faster modern streaming)

---

## 📐 Recommended Technical Specifications

| Parameter | Recommended Setting | Reason |
|---|---|---|
| **Resolution** | `1920 × 1080` (Full HD) or `1280 × 720` (HD) | Balances visual crispness with fast mobile streaming |
| **Frame Rate** | `24 fps` or `30 fps` | Cinematic look; avoids high CPU usage |
| **Duration** | `8 to 15 seconds` (seamless loop) | Keeps file size small while avoiding repetitive jumps |
| **Codec** | `H.264 / AVC` (MP4) | Universally compatible across iOS Safari, Android Chrome, and Desktop |
| **Audio** | **None (Remove audio track completely)** | Reduces file size by 30-40% and ensures instant browser autoplay |
| **Bitrate** | `1.5 to 2.5 Mbps` | Ensures total file size is under **3 MB – 5 MB** |

---

## 💡 How the Website Handles the Video

1. **Instant Poster Fallback:** The site renders `/images/hero-campus.svg` (or `.jpg`) immediately, so there is zero white flash or delay while the video streams.
2. **Auto-Play & Mute:** Configured with `autoPlay`, `muted`, `loop`, and `playsInline` attributes.
3. **User Control:** A discrete **Pause / Play** toggle button is provided in the bottom-right corner of the Hero section.
4. **Accessibility:** Automatically disabled/paused when the user has `prefers-reduced-motion` enabled in their operating system.

---

*To test your video: Simply drop your `hero-campus.mp4` file into this folder. No code changes are required.*
