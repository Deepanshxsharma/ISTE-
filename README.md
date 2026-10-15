# 🌌 Deepansh Sharma | Beyond The Screen — 3D Portfolio Universe

<div align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-0.182-black?style=for-the-badge&logo=threedotjs" alt="Three.js" />
  <img src="https://img.shields.io/badge/R3F-9.4-purple?style=for-the-badge&logo=react" alt="React Three Fiber" />
  <img src="https://img.shields.io/badge/GSAP-3.14-green?style=for-the-badge&logo=greensock" alt="GSAP" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
</div>

<br/>

Welcome to **Deepansh Sharma's** immersive 3D personal universe and developer portfolio: **"Beyond The Screen"**.

I am a B.Tech Computer Science and Engineering student at **SRM University**, building practical applications, computer vision pipelines, multimodal AI assistants, and IoT hardware integrations.

> *"I build things that connect code to the real world."*

---

## 🏛️ Spatial Architecture & Explorable Rooms

The portfolio is structured as an explorable 3D universe with hand-drawn, sketch-inspired aesthetics:

- **The Grand Entrance & Corridor:** A hand-drawn corridor with physical wooden doors leading to different sectors.
- **The Gallery Room:** Interactive 3D project cards displaying Deepansh's core systems:
  - **TechXpert My Parking:** Real-time smart parking allocation and dynamic bay booking system.
  - **TechXPark ANPR Pipeline:** Sub-100ms OpenCV and YOLO license plate recognition pipeline.
  - **Hi TechXPert:** Multimodal Google Gemini diagnostic assistant with visual reasoning.
  - **Jarvis Personal AI:** Speech-driven automation agent with local tool calling and memory.
  - **IoT Edge Node & Telemetry Hub:** ESP32 microcontroller sensor telemetry streamed over MQTT.
- **The Studio / Project Labs:** A floating holographic grid of interactive CRT monitors detailing engineering pipelines, architecture blueprints, and microcontrollers.
- **The About Room:** Floating islands representing academic milestones at SRM University, computer vision research, full-stack systems engineering, and hardware prototyping.
- **The Contact Room:** Interactive 3D paper desk with direct communication channels, GitHub, LinkedIn, and SRM CSE portals.

---

## ⚙️ Key Technical Implementations

1. **Procedurally Generated & Original Textures:** 30 high-resolution original WebP textures created for gallery cards, monitors, milestones, and signage.
2. **Disconnected External Dependencies:** Decoupled from third-party remote CMS databases; 100% self-contained data flow via `src/config/portfolioData.js`.
3. **Dynamic 3D Geometry:** Custom split-text corridor hero typography (`DEEPANSH`), interactive flip cards, and floating monitors.
4. **Asynchronous Preloading & Shader Warmup:** Asynchronous shader compilation prevents frame drops during room transitions.
5. **Adaptive Performance:** Responsive canvas scaling with device pixel ratio clamp and hardware concurrency throttling.

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production bundle
npm run preview
```

---

## 📜 Attribution & License

- **Code Architecture:** Adapted from [portfolio-itom](https://github.com/ITomPoland/portfolio-itom) under the [MIT License](LICENSE), with core rendering, navigation, and shader architectures preserved and customized.
- **Personal Assets & Copywriting:** All personal textures, project cards, copywriting, identity, and branding are the original work of **Deepansh Sharma** (B.Tech CSE, SRM University).
