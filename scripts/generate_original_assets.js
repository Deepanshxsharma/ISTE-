import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Helper to save SVG string as webp with given dimensions
async function saveSvgToWebp(svgContent, outputPath, width, height) {
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const buffer = Buffer.from(svgContent);
    await sharp(buffer)
        .resize(width, height)
        .webp({ quality: 90 })
        .toFile(outputPath);
    console.log(`Generated: ${outputPath} (${width}x${height})`);
}

function escapeXml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// ==========================================
// 1. GALLERY CARDS (1024 x 2048)
// ==========================================

function createGalleryCardSvg({ title, tag, status, diagramSvg, isPainted, primaryColor = '#101522', accentColor = '#62E7DC' }) {
    const bgPaper = isPainted ? '#FAF8F4' : '#F4EFE6';
    const ink = isPainted ? primaryColor : '#222222';
    const accent = isPainted ? accentColor : '#444444';
    const border = isPainted ? accentColor : '#333333';
    const tagBg = isPainted ? '#101522' : '#2A2A2A';
    const tagText = isPainted ? accentColor : '#F0F0F0';
    const gridColor = isPainted ? 'rgba(98,231,220,0.08)' : 'rgba(0,0,0,0.04)';
    const safeTitle = escapeXml(title);
    const safeTag = escapeXml(tag);
    const safeStatus = escapeXml(status);

    return `
    <svg width="1024" height="2048" viewBox="0 0 1024 2048" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="sketch-filter" x="-5%" y="-5%" width="110%" height="110%">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <pattern id="card-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${gridColor}" stroke-width="1"/>
            </pattern>
        </defs>

        <!-- Base Paper Canvas -->
        <rect width="1024" height="2048" fill="${bgPaper}" />
        <rect width="1024" height="2048" fill="url(#card-grid)" />

        <!-- Hand-drawn Outer Border -->
        <rect x="36" y="36" width="952" height="1976" rx="16" fill="none" stroke="${border}" stroke-width="6" stroke-dasharray="16, 6" filter="url(#sketch-filter)" />
        <rect x="52" y="52" width="920" height="1944" rx="12" fill="none" stroke="${ink}" stroke-width="2" opacity="0.6" />

        <!-- Header Ribbon -->
        <g transform="translate(80, 100)">
            <!-- Category Badge -->
            <rect x="0" y="0" width="340" height="60" rx="30" fill="${tagBg}" />
            <text x="170" y="38" font-family="monospace" font-size="24" font-weight="bold" fill="${tagText}" text-anchor="middle" letter-spacing="2">${safeTag}</text>

            <!-- Status Indicator -->
            <circle cx="820" cy="30" r="12" fill="${isPainted ? accentColor : '#555555'}" />
            <circle cx="820" cy="30" r="20" fill="none" stroke="${isPainted ? accentColor : '#555555'}" stroke-width="2" opacity="0.5" />
            <text x="790" y="38" font-family="monospace" font-size="20" fill="${ink}" text-anchor="end">${safeStatus}</text>
        </g>

        <!-- Main Title -->
        <g transform="translate(80, 260)">
            <text x="0" y="50" font-family="'Courier New', monospace, sans-serif" font-size="64" font-weight="900" fill="${ink}" letter-spacing="3">${safeTitle}</text>
            <line x1="0" y1="85" x2="864" y2="85" stroke="${border}" stroke-width="4" stroke-dasharray="8, 4" filter="url(#sketch-filter)" />
        </g>

        <!-- Visual Diagram & Schematic Section -->
        <g transform="translate(80, 400)">
            <rect x="0" y="0" width="864" height="900" rx="12" fill="${isPainted ? 'rgba(16,21,34,0.04)' : 'rgba(0,0,0,0.02)'}" stroke="${ink}" stroke-width="3" />
            ${diagramSvg}
        </g>

        <!-- Architectural Blueprint Section -->
        <g transform="translate(80, 1360)">
            <text x="0" y="40" font-family="monospace" font-size="26" font-weight="bold" fill="${accent}" letter-spacing="2">SYSTEM ARCHITECTURE &amp; PIPELINE</text>
            
            <rect x="0" y="70" width="864" height="320" rx="8" fill="none" stroke="${border}" stroke-width="2" stroke-dasharray="6, 4" />
            
            <g transform="translate(30, 120)">
                <circle cx="30" cy="30" r="14" fill="${accent}" opacity="0.3" />
                <text x="30" y="36" font-family="monospace" font-size="18" font-weight="bold" fill="${ink}" text-anchor="middle">1</text>
                <text x="70" y="36" font-family="sans-serif" font-size="26" font-weight="bold" fill="${ink}">Verified Real-Time Telemetry &amp; Ingestion</text>

                <circle cx="30" cy="110" r="14" fill="${accent}" opacity="0.3" />
                <text x="30" y="116" font-family="monospace" font-size="18" font-weight="bold" fill="${ink}" text-anchor="middle">2</text>
                <text x="70" y="116" font-family="sans-serif" font-size="26" font-weight="bold" fill="${ink}">Modular Processing &amp; State Orchestration</text>

                <circle cx="30" cy="190" r="14" fill="${accent}" opacity="0.3" />
                <text x="30" y="196" font-family="monospace" font-size="18" font-weight="bold" fill="${ink}" text-anchor="middle">3</text>
                <text x="70" y="196" font-family="sans-serif" font-size="26" font-weight="bold" fill="${ink}">Interactive Client &amp; Responsive Feedback</text>
            </g>
        </g>

        <!-- Footer / Signature -->
        <g transform="translate(80, 1840)">
            <line x1="0" y1="0" x2="864" y2="0" stroke="${border}" stroke-width="2" />
            <text x="0" y="45" font-family="monospace" font-size="24" fill="${ink}">DEEPANSH SHARMA // ENG SPEC</text>
            <text x="864" y="45" font-family="monospace" font-size="22" fill="${accent}" text-anchor="end">SRM UNIVERSITY</text>
            <text x="0" y="90" font-family="monospace" font-size="18" fill="#777777">AUTONOMOUS BUILD SPEC v2026.04 // BEYOND THE SCREEN</text>
        </g>
    </svg>
    `;
}

// Diagram for TechXpert My Parking
const parkingDiagram = (isPainted) => `
    <g transform="translate(60, 60)">
        <!-- Parking Grid 2x2 -->
        <text x="0" y="40" font-family="monospace" font-size="24" font-weight="bold" fill="#333">SLOT ALLOCATION MAP</text>

        <!-- Slot A1 -->
        <rect x="0" y="70" width="340" height="260" rx="8" fill="${isPainted ? 'rgba(98,231,220,0.15)' : '#eee'}" stroke="#333" stroke-width="3" stroke-dasharray="6,4"/>
        <text x="30" y="120" font-family="monospace" font-size="28" font-weight="bold" fill="#111">BAY A-01</text>
        <rect x="30" y="150" width="160" height="40" rx="6" fill="${isPainted ? '#62E7DC' : '#444'}"/>
        <text x="110" y="177" font-family="monospace" font-size="20" font-weight="bold" fill="#101522" text-anchor="middle">AVAILABLE</text>
        <text x="30" y="240" font-family="sans-serif" font-size="20" fill="#555">Ultrasonic: Clear</text>

        <!-- Slot A2 -->
        <rect x="400" y="70" width="340" height="260" rx="8" fill="${isPainted ? 'rgba(255,100,100,0.15)' : '#ddd'}" stroke="#333" stroke-width="3"/>
        <text x="430" y="120" font-family="monospace" font-size="28" font-weight="bold" fill="#111">BAY A-02</text>
        <rect x="430" y="150" width="160" height="40" rx="6" fill="${isPainted ? '#FF5555' : '#111'}"/>
        <text x="510" y="177" font-family="monospace" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">OCCUPIED</text>
        <text x="430" y="240" font-family="sans-serif" font-size="20" fill="#555">Vehicle: IN LOT</text>

        <!-- QR Ticket Code Representation -->
        <g transform="translate(0, 390)">
            <rect x="0" y="0" width="740" height="340" rx="8" fill="${isPainted ? '#101522' : '#222'}" stroke="#333" stroke-width="2"/>
            <text x="40" y="50" font-family="monospace" font-size="24" fill="${isPainted ? '#62E7DC' : '#eee'}">QR DIGITAL PASS VERIFICATION</text>
            
            <!-- Stylized QR blocks -->
            <rect x="40" y="90" width="180" height="180" fill="#fff" rx="4"/>
            <rect x="60" y="110" width="50" height="50" fill="#000"/>
            <rect x="150" y="110" width="50" height="50" fill="#000"/>
            <rect x="60" y="200" width="50" height="50" fill="#000"/>
            <rect x="130" y="180" width="30" height="30" fill="#000"/>
            <rect x="170" y="220" width="30" height="30" fill="#000"/>

            <g transform="translate(260, 110)">
                <text x="0" y="25" font-family="monospace" font-size="22" fill="#fff">Pass: #TXP-9482-B7</text>
                <text x="0" y="65" font-family="monospace" font-size="20" fill="#aaa">Time Window: 14:00 - 18:00</text>
                <text x="0" y="105" font-family="monospace" font-size="20" fill="#aaa">Overstay Protection: ACTIVE</text>
                <text x="0" y="145" font-family="monospace" font-size="22" fill="${isPainted ? '#9C8CFF' : '#bbb'}">Status: AUTHENTICATED ✓</text>
            </g>
        </g>
    </g>
`;

// Diagram for TechXPark ANPR
const anprDiagram = (isPainted) => `
    <g transform="translate(60, 60)">
        <text x="0" y="40" font-family="monospace" font-size="24" font-weight="bold" fill="#333">COMPUTER VISION RECOGNITION PIPELINE</text>

        <!-- Pipeline Step 1: Camera Feed Frame -->
        <g transform="translate(0, 80)">
            <rect x="0" y="0" width="740" height="380" rx="8" fill="${isPainted ? '#101522' : '#222'}" stroke="#333" stroke-width="2"/>
            <text x="30" y="40" font-family="monospace" font-size="20" fill="${isPainted ? '#62E7DC' : '#fff'}">CAMERA FRAME [INP_FEED_01]</text>
            
            <!-- Vehicle silhouette shape -->
            <path d="M 120 220 L 220 130 L 520 130 L 620 220 L 660 250 L 660 300 L 80 300 L 80 250 Z" fill="none" stroke="${isPainted ? '#7D8CA5' : '#888'}" stroke-width="4" stroke-dasharray="6,4"/>
            <circle cx="200" cy="300" r="35" fill="none" stroke="#666" stroke-width="4"/>
            <circle cx="540" cy="300" r="35" fill="none" stroke="#666" stroke-width="4"/>

            <!-- YOLO Plate Bounding Box (Highlighted) -->
            <rect x="290" y="240" width="160" height="50" rx="4" fill="none" stroke="${isPainted ? '#62E7DC' : '#fff'}" stroke-width="4" stroke-dasharray="4,2"/>
            <text x="290" y="230" font-family="monospace" font-size="16" fill="${isPainted ? '#62E7DC' : '#fff'}">ROI: LICENSE_PLATE</text>
        </g>

        <!-- Extracted Plate OCR Result -->
        <g transform="translate(0, 500)">
            <rect x="0" y="0" width="740" height="240" rx="8" fill="${isPainted ? 'rgba(156,140,255,0.1)' : '#eee'}" stroke="#333" stroke-width="3"/>
            <text x="40" y="45" font-family="monospace" font-size="22" font-weight="bold" fill="#333">PADDLEOCR CHARACTER RECOGNITION</text>

            <!-- Plate box -->
            <rect x="40" y="70" width="660" height="130" rx="8" fill="#fff" stroke="#111" stroke-width="4"/>
            <text x="80" y="155" font-family="'Courier New', monospace" font-size="64" font-weight="900" fill="#111" letter-spacing="14">DL 01 AB 4096</text>
            
            <circle cx="620" cy="135" r="24" fill="${isPainted ? '#62E7DC' : '#333'}"/>
            <text x="620" y="143" font-family="monospace" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">✓</text>
        </g>
    </g>
`;

// Diagram for Hi TechXpert
const hiTechxpertDiagram = (isPainted) => `
    <g transform="translate(60, 60)">
        <text x="0" y="40" font-family="monospace" font-size="24" font-weight="bold" fill="#333">MULTIMODAL GEMINI ASSISTANT CORE</text>

        <!-- Chat bubble 1 (User) -->
        <g transform="translate(40, 90)">
            <rect x="0" y="0" width="660" height="130" rx="16" fill="${isPainted ? '#202633' : '#333'}"/>
            <text x="30" y="45" font-family="monospace" font-size="18" fill="${isPainted ? '#62E7DC' : '#bbb'}">USER INTENT INPUT</text>
            <text x="30" y="90" font-family="sans-serif" font-size="24" fill="#fff">"Optimize real-time slot state sync for parking lot A"</text>
        </g>

        <!-- Gemini Reasoning Core -->
        <g transform="translate(180, 260)">
            <circle cx="190" cy="80" r="70" fill="${isPainted ? '#101522' : '#222'}" stroke="${isPainted ? '#9C8CFF' : '#555'}" stroke-width="4"/>
            <text x="190" y="75" font-family="monospace" font-size="22" font-weight="bold" fill="${isPainted ? '#9C8CFF' : '#fff'}" text-anchor="middle">GEMINI</text>
            <text x="190" y="105" font-family="monospace" font-size="16" fill="#aaa" text-anchor="middle">REASONING</text>
        </g>

        <!-- Response Bubble -->
        <g transform="translate(40, 460)">
            <rect x="0" y="0" width="660" height="280" rx="16" fill="${isPainted ? 'rgba(98,231,220,0.12)' : '#eee'}" stroke="#333" stroke-width="2"/>
            <text x="30" y="45" font-family="monospace" font-size="18" font-weight="bold" fill="${isPainted ? '#101522' : '#333'}">ASSISTANT STREAMING ANSWER</text>
            <text x="30" y="95" font-family="monospace" font-size="20" fill="#222">1. Ingest MQTT delta packets with QoS 1</text>
            <text x="30" y="145" font-family="monospace" font-size="20" fill="#222">2. Maintain in-memory slot bitmap</text>
            <text x="30" y="195" font-family="monospace" font-size="20" fill="#222">3. Broadcast delta via WebSockets to client</text>
            <text x="30" y="240" font-family="monospace" font-size="18" fill="${isPainted ? '#9C8CFF' : '#666'}">[Latency: 12ms // Tokens: 184 // Status: Complete]</text>
        </g>
    </g>
`;

// Diagram for Jarvis AI
const jarvisDiagram = (isPainted) => `
    <g transform="translate(60, 60)">
        <text x="0" y="40" font-family="monospace" font-size="24" font-weight="bold" fill="#333">VOICE &amp; TOOL DISPATCH ARCHITECTURE</text>

        <!-- Voice Waveform Centerpiece -->
        <g transform="translate(0, 90)">
            <rect x="0" y="0" width="740" height="340" rx="12" fill="${isPainted ? '#101522' : '#222'}" stroke="#333" stroke-width="2"/>
            <text x="30" y="45" font-family="monospace" font-size="20" fill="${isPainted ? '#62E7DC' : '#fff'}">AUDIO WAVEFORM DSP SPECTRUM</text>
            
            <!-- Simulated Waveform Bars -->
            <g transform="translate(60, 190)">
                ${[20, 45, 75, 120, 80, 140, 180, 110, 160, 90, 130, 70, 150, 100, 60, 120, 40]
                    .map((h, i) => `
                        <rect x="${i * 36}" y="${-h/2}" width="18" height="${h}" rx="6" fill="${isPainted ? (i % 2 === 0 ? '#62E7DC' : '#9C8CFF') : '#ddd'}" />
                    `).join('')}
            </g>
            <text x="370" y="300" font-family="monospace" font-size="18" fill="#aaa" text-anchor="middle">VOICE ACTIVITY DETECTION: ACTIVE</text>
        </g>

        <!-- Tool Execution Pipeline -->
        <g transform="translate(0, 470)">
            <rect x="0" y="0" width="740" height="270" rx="12" fill="${isPainted ? 'rgba(156,140,255,0.08)' : '#eee'}" stroke="#333" stroke-width="2"/>
            <text x="30" y="45" font-family="monospace" font-size="20" font-weight="bold" fill="#333">LOCAL TOOLS &amp; HARDWARE DISPATCH</text>

            <g transform="translate(40, 80)">
                <rect x="0" y="0" width="200" height="140" rx="8" fill="#fff" stroke="#333" stroke-width="2"/>
                <text x="100" y="50" font-family="monospace" font-size="18" font-weight="bold" text-anchor="middle" fill="#111">TOOL: SEARCH</text>
                <text x="100" y="90" font-family="monospace" font-size="14" text-anchor="middle" fill="#666">Filesystem</text>

                <rect x="230" y="0" width="200" height="140" rx="8" fill="#fff" stroke="#333" stroke-width="2"/>
                <text x="330" y="50" font-family="monospace" font-size="18" font-weight="bold" text-anchor="middle" fill="#111">TOOL: TELEMETRY</text>
                <text x="330" y="90" font-family="monospace" font-size="14" text-anchor="middle" fill="#666">Sensors &amp; Pings</text>

                <rect x="460" y="0" width="200" height="140" rx="8" fill="#fff" stroke="#333" stroke-width="2"/>
                <text x="560" y="50" font-family="monospace" font-size="18" font-weight="bold" text-anchor="middle" fill="#111">TOOL: AUDIO</text>
                <text x="560" y="90" font-family="monospace" font-size="14" text-anchor="middle" fill="#666">Native TTS Output</text>
            </g>
        </g>
    </g>
`;

// Diagram for IoT Telemetry
const iotDiagram = (isPainted) => `
    <g transform="translate(60, 60)">
        <text x="0" y="40" font-family="monospace" font-size="24" font-weight="bold" fill="#333">HARDWARE SENSOR &amp; MQTT BUS</text>

        <!-- ESP32 Node Box -->
        <g transform="translate(40, 80)">
            <rect x="0" y="0" width="660" height="280" rx="12" fill="${isPainted ? '#101522' : '#222'}" stroke="#333" stroke-width="2"/>
            <text x="40" y="50" font-family="monospace" font-size="22" fill="${isPainted ? '#62E7DC' : '#fff'}">ESP32 / SENSOR NODE 01</text>
            
            <g transform="translate(40, 90)">
                <rect x="0" y="0" width="180" height="140" rx="8" fill="#fff" stroke="#111" stroke-width="2"/>
                <text x="90" y="45" font-family="monospace" font-size="16" font-weight="bold" fill="#111" text-anchor="middle">ULTRASONIC</text>
                <text x="90" y="85" font-family="monospace" font-size="24" font-weight="bold" fill="#62E7DC" text-anchor="middle">18.4 cm</text>
                <text x="90" y="115" font-family="monospace" font-size="14" fill="#666" text-anchor="middle">Presence: TRUE</text>

                <rect x="200" y="0" width="180" height="140" rx="8" fill="#fff" stroke="#111" stroke-width="2"/>
                <text x="290" y="45" font-family="monospace" font-size="16" font-weight="bold" fill="#111" text-anchor="middle">PULSE RATE</text>
                <text x="290" y="85" font-family="monospace" font-size="24" font-weight="bold" fill="#9C8CFF" text-anchor="middle">100 ms</text>
                <text x="290" y="115" font-family="monospace" font-size="14" fill="#666" text-anchor="middle">Sampling: OK</text>

                <rect x="400" y="0" width="180" height="140" rx="8" fill="#fff" stroke="#111" stroke-width="2"/>
                <text x="490" y="45" font-family="monospace" font-size="16" font-weight="bold" fill="#111" text-anchor="middle">MQTT BROKER</text>
                <text x="490" y="85" font-family="monospace" font-size="22" font-weight="bold" fill="#111" text-anchor="middle">CONNECTED</text>
                <text x="490" y="115" font-family="monospace" font-size="14" fill="#666" text-anchor="middle">QoS Level 1</text>
            </g>
        </g>

        <!-- Real-time Console Log -->
        <g transform="translate(40, 400)">
            <rect x="0" y="0" width="660" height="340" rx="8" fill="${isPainted ? '#202633' : '#111'}" stroke="#333" stroke-width="2"/>
            <text x="30" y="45" font-family="monospace" font-size="18" fill="#62E7DC">&gt; [MQTT] SUB /lot/bay_01/telemetry</text>
            <text x="30" y="90" font-family="monospace" font-size="18" fill="#aaa">&gt; [PAYLOAD] {"bay":"A-01", "dist_cm": 18.4, "occupied": true}</text>
            <text x="30" y="135" font-family="monospace" font-size="18" fill="#aaa">&gt; [SERVER] State updated in 4.2ms</text>
            <text x="30" y="180" font-family="monospace" font-size="18" fill="#9C8CFF">&gt; [WS_BROADCAST] Sent delta to 12 active client dashboards</text>
            <text x="30" y="225" font-family="monospace" font-size="18" fill="#aaa">&gt; [STATUS] Heartbeat ack from edge gateway (RSSI: -58dBm)</text>
            <text x="30" y="270" font-family="monospace" font-size="18" fill="#62E7DC">&gt; System healthy: 0 errors / 0 dropped packets</text>
        </g>
    </g>
`;

// ==========================================
// 2. STUDIO MONITORS (1474 x 737)
// ==========================================

function createMonitorSvg({ title, subtitle, isPainted, renderContent }) {
    const bg = isPainted ? '#101522' : '#222222';
    const fg = isPainted ? '#F2EDE3' : '#FFFFFF';
    const cyan = isPainted ? '#62E7DC' : '#CCCCCC';
    const violet = isPainted ? '#9C8CFF' : '#AAAAAA';
    const safeTitle = escapeXml(title);
    const safeSubtitle = escapeXml(subtitle);

    return `
    <svg width="1474" height="737" viewBox="0 0 1474 737" xmlns="http://www.w3.org/2000/svg">
        <rect width="1474" height="737" fill="${bg}" />
        <rect x="16" y="16" width="1442" height="705" rx="12" fill="none" stroke="${cyan}" stroke-width="4" stroke-dasharray="12, 6"/>

        <!-- Header -->
        <g transform="translate(60, 70)">
            <rect x="0" y="0" width="16" height="40" fill="${cyan}" />
            <text x="30" y="32" font-family="monospace" font-size="34" font-weight="bold" fill="${fg}" letter-spacing="2">${safeTitle}</text>
            <text x="1354" y="32" font-family="monospace" font-size="24" fill="${violet}" text-anchor="end">${safeSubtitle}</text>
            <line x1="0" y1="60" x2="1354" y2="60" stroke="#333" stroke-width="2" />
        </g>

        <!-- Body Content -->
        <g transform="translate(60, 160)">
            ${renderContent(isPainted, cyan, violet, fg)}
        </g>

        <!-- Footer -->
        <g transform="translate(60, 680)">
            <text x="0" y="0" font-family="monospace" font-size="18" fill="#888">DEEPANSH SHARMA // PLAYGROUND SIMULATOR // LIVE WEBGL MODULE</text>
            <text x="1354" y="0" font-family="monospace" font-size="18" fill="${cyan}" text-anchor="end">SYS_STATUS: ACTIVE</text>
        </g>
    </svg>
    `;
}

// ==========================================
// 3. ABOUT MILESTONES (2048 x 1024)
// ==========================================

function createMilestoneCardSvg({ title, institution, description, bulletPoints, bullets, isPainted }) {
    const bg = isPainted ? '#101522' : '#F4EFE6';
    const textMain = isPainted ? '#F2EDE3' : '#111111';
    const accent = isPainted ? '#62E7DC' : '#333333';
    const subText = isPainted ? '#7D8CA5' : '#555555';
    const cardBorder = isPainted ? '#9C8CFF' : '#222222';
    const safeTitle = escapeXml(title);
    const safeInstitution = escapeXml(institution);
    const safeDescription = escapeXml(description);
    const points = bulletPoints || bullets || [];

    return `
    <svg width="2048" height="1024" viewBox="0 0 2048 1024" xmlns="http://www.w3.org/2000/svg">
        <rect width="2048" height="1024" fill="${bg}" />
        <rect x="40" y="40" width="1968" height="944" rx="20" fill="none" stroke="${cardBorder}" stroke-width="6" stroke-dasharray="20,10" />

        <g transform="translate(120, 140)">
            <!-- Top badge -->
            <rect x="0" y="0" width="380" height="60" rx="30" fill="${isPainted ? '#202633' : '#222'}" />
            <text x="190" y="38" font-family="monospace" font-size="24" font-weight="bold" fill="${accent}" text-anchor="middle">${safeInstitution}</text>

            <!-- Title -->
            <text x="0" y="160" font-family="'Courier New', monospace" font-size="72" font-weight="900" fill="${textMain}" letter-spacing="3">${safeTitle}</text>
            <line x1="0" y1="200" x2="1808" y2="200" stroke="${accent}" stroke-width="4" />

            <!-- Description -->
            <text x="0" y="270" font-family="sans-serif" font-size="34" fill="${subText}" width="1800">${safeDescription}</text>

            <!-- Bullet list -->
            <g transform="translate(40, 360)">
                ${points.map((pt, idx) => `
                    <circle cx="0" cy="${idx * 80}" r="14" fill="${accent}" />
                    <text x="40" y="${idx * 80 + 10}" font-family="monospace" font-size="30" font-weight="bold" fill="${textMain}">${escapeXml(pt)}</text>
                `).join('')}
            </g>

            <!-- Bottom stamp -->
            <g transform="translate(0, 680)">
                <text x="0" y="0" font-family="monospace" font-size="24" fill="${subText}">ENGINEERING DOSSIER // DEEPANSH SHARMA</text>
                <text x="1808" y="0" font-family="monospace" font-size="24" fill="${accent}" text-anchor="end">SRM UNIVERSITY CSE</text>
            </g>
        </g>
    </svg>
    `;
}

// ==========================================
// 4. ENTRANCE SIGN & WINDOW AVATAR
// ==========================================

function createEntranceSignSvg() {
    return `
    <svg width="1802" height="901" viewBox="0 0 1802 901" xmlns="http://www.w3.org/2000/svg">
        <!-- Wooden / Handcrafted Wooden Board -->
        <rect x="100" y="120" width="1602" height="680" rx="30" fill="#E8DEC8" stroke="#332B20" stroke-width="12" />
        <rect x="120" y="140" width="1562" height="640" rx="20" fill="none" stroke="#685642" stroke-width="4" stroke-dasharray="16,8" />

        <!-- Mounting Chains -->
        <line x1="400" y1="20" x2="400" y2="120" stroke="#332B20" stroke-width="14" stroke-dasharray="16,8" />
        <line x1="1402" y1="20" x2="1402" y2="120" stroke="#332B20" stroke-width="14" stroke-dasharray="16,8" />

        <!-- Text Lines -->
        <g transform="translate(901, 300)">
            <text x="0" y="0" font-family="'Courier New', monospace" font-size="82" font-weight="900" fill="#1C1812" text-anchor="middle" letter-spacing="8">DEEPANSH SHARMA</text>
            <line x1="-550" y1="40" x2="550" y2="40" stroke="#332B20" stroke-width="6" />
            <text x="0" y="120" font-family="monospace" font-size="44" font-weight="bold" fill="#3A3024" text-anchor="middle" letter-spacing="4">CREATIVE DEVELOPER STUDIO</text>
            <text x="0" y="200" font-family="sans-serif" font-size="34" fill="#584838" text-anchor="middle">"I build things that connect code to the real world."</text>
            <text x="0" y="280" font-family="monospace" font-size="28" font-weight="bold" fill="#101522" text-anchor="middle">◈ ENTER TO EXPLORE ◈</text>
        </g>
    </svg>
    `;
}

function createWindowAvatarSvg() {
    return `
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <!-- Dark room background -->
        <rect width="1024" height="1024" fill="#101522" />

        <!-- Glowing monitor screen glow -->
        <circle cx="512" cy="620" r="320" fill="#62E7DC" opacity="0.18" />

        <!-- Developer Desk & Laptop Silhouette -->
        <g transform="translate(512, 650)">
            <!-- Laptop screen -->
            <rect x="-180" y="-120" width="360" height="220" rx="12" fill="#1C2434" stroke="#62E7DC" stroke-width="6" />
            <rect x="-160" y="-100" width="320" height="180" fill="#101522" />
            <!-- Code on screen -->
            <line x1="-140" y1="-70" x2="-20" y2="-70" stroke="#62E7DC" stroke-width="6" stroke-linecap="round" />
            <line x1="-140" y1="-40" x2="60" y2="-40" stroke="#9C8CFF" stroke-width="6" stroke-linecap="round" />
            <line x1="-140" y1="-10" x2="10" y2="-10" stroke="#7D8CA5" stroke-width="6" stroke-linecap="round" />
            <line x1="-140" y1="20" x2="120" y2="20" stroke="#62E7DC" stroke-width="6" stroke-linecap="round" />
            <line x1="-140" y1="50" x2="-50" y2="50" stroke="#F2EDE3" stroke-width="6" stroke-linecap="round" />

            <!-- Laptop base -->
            <path d="M -230 100 L 230 100 L 200 125 L -200 125 Z" fill="#202633" stroke="#62E7DC" stroke-width="4" />
        </g>

        <!-- Developer Silhouette (Head & Shoulders) -->
        <g transform="translate(512, 380)">
            <circle cx="0" cy="0" r="110" fill="#202633" stroke="#9C8CFF" stroke-width="6" />
            <!-- Glasses / Headphone accent -->
            <circle cx="-45" cy="-10" r="30" fill="none" stroke="#62E7DC" stroke-width="5" />
            <circle cx="45" cy="-10" r="30" fill="none" stroke="#62E7DC" stroke-width="5" />
            <line x1="-15" y1="-10" x2="15" y2="-10" stroke="#62E7DC" stroke-width="5" />

            <!-- Shoulders -->
            <path d="M -220 280 C -200 160, -120 120, 0 120 C 120 120, 200 160, 220 280 Z" fill="#202633" stroke="#7D8CA5" stroke-width="5" />
        </g>

        <!-- Window Frame Shadow Overlay -->
        <rect x="0" y="0" width="1024" height="1024" fill="none" stroke="#000000" stroke-width="40" />
    </svg>
    `;
}

// ==========================================
// EXECUTION: GENERATE ALL ASSETS
// ==========================================

async function main() {
    console.log('🚀 Starting generation of original assets for Deepansh Sharma...');

    // 1. Gallery Cards (1024 x 2048)
    const galleryItems = [
        {
            file: 'techxpert_parking',
            title: 'TECHXPERT PARKING',
            tag: 'FULL-STACK // IOT',
            status: 'VERIFIED PROTOTYPE',
            diagram: parkingDiagram,
            color: '#101522',
            accent: '#62E7DC'
        },
        {
            file: 'techxpark_anpr',
            title: 'TECHXPARK ANPR',
            tag: 'COMPUTER VISION',
            status: 'RESEARCH & PROTOTYPE',
            diagram: anprDiagram,
            color: '#101522',
            accent: '#9C8CFF'
        },
        {
            file: 'hi_techxpert',
            title: 'HI TECHXPERT',
            tag: 'MULTIMODAL AI AGENT',
            status: 'CONVERSATIONAL CORE',
            diagram: hiTechxpertDiagram,
            color: '#101522',
            accent: '#62E7DC'
        },
        {
            file: 'jarvis_ai',
            title: 'JARVIS PERSONAL AI',
            tag: 'VOICE AI // SYSTEM',
            status: 'SPEECH EXPERIMENT',
            diagram: jarvisDiagram,
            color: '#101522',
            accent: '#9C8CFF'
        },
        {
            file: 'iot_telemetry',
            title: 'SMART IOT NODE',
            tag: 'HARDWARE TELEMETRY',
            status: 'MQTT EXPERIMENT',
            diagram: iotDiagram,
            color: '#101522',
            accent: '#62E7DC'
        }
    ];

    for (const item of galleryItems) {
        // Sketch front version
        const svgFront = createGalleryCardSvg({
            title: item.title,
            tag: item.tag,
            status: item.status,
            diagramSvg: item.diagram(false),
            isPainted: false,
            primaryColor: item.color,
            accentColor: item.accent
        });
        await saveSvgToWebp(svgFront, `public/textures/gallery/${item.file}_front.webp`, 1024, 2048);

        // Painted color version
        const svgPainted = createGalleryCardSvg({
            title: item.title,
            tag: item.tag,
            status: item.status,
            diagramSvg: item.diagram(true),
            isPainted: true,
            primaryColor: item.color,
            accentColor: item.accent
        });
        await saveSvgToWebp(svgPainted, `public/textures/gallery/${item.file}_painted.webp`, 1024, 2048);
    }

    // 2. Studio Monitors (1474 x 737)
    const monitorItems = [
        {
            file: 'monitor_anpr',
            title: 'ANPR VISION RECOGNITION MATRIX',
            subtitle: 'YOLOv8 + OpenCV + PaddleOCR',
            content: (isPainted, cyan, violet, fg) => `
                <rect x="0" y="0" width="640" height="420" rx="8" fill="#1C2434" stroke="${cyan}" stroke-width="2"/>
                <text x="30" y="40" font-family="monospace" font-size="20" fill="${cyan}">LIVE CAMERA STREAM // BAY 01</text>
                <rect x="220" y="160" width="200" height="70" rx="4" fill="none" stroke="${cyan}" stroke-width="4"/>
                <text x="220" y="145" font-family="monospace" font-size="16" fill="${cyan}">ROI: DETECTED_PLATE</text>

                <g transform="translate(680, 0)">
                    <rect x="0" y="0" width="670" height="420" rx="8" fill="#1C2434" stroke="${violet}" stroke-width="2"/>
                    <text x="30" y="40" font-family="monospace" font-size="22" fill="${violet}">EXTRACTED STRING // CONFIDENCE: 98.4%</text>
                    <rect x="30" y="80" width="610" height="120" rx="6" fill="#fff"/>
                    <text x="60" y="160" font-family="'Courier New', monospace" font-size="52" font-weight="bold" fill="#111" letter-spacing="10">DL 01 AB 4096</text>
                    <text x="30" y="260" font-family="monospace" font-size="20" fill="${fg}">Processing Latency: 32ms</text>
                    <text x="30" y="300" font-family="monospace" font-size="20" fill="${fg}">Pre-filter: Adaptive Bilateral Gaussian</text>
                    <text x="30" y="340" font-family="monospace" font-size="20" fill="${cyan}">Access Validation: PERMITTED ✓</text>
                </g>
            `
        },
        {
            file: 'monitor_parking',
            title: 'TECHXPERT MY PARKING // FACILITY GRID',
            subtitle: '4-Bay Slot Allocation Map',
            content: (isPainted, cyan, violet, fg) => `
                <g transform="translate(20, 20)">
                    <rect x="0" y="0" width="300" height="380" rx="8" fill="#1C2434" stroke="${cyan}" stroke-width="3"/>
                    <text x="30" y="50" font-family="monospace" font-size="26" font-weight="bold" fill="#fff">BAY A-01</text>
                    <rect x="30" y="80" width="180" height="40" rx="6" fill="${cyan}"/>
                    <text x="120" y="108" font-family="monospace" font-size="18" font-weight="bold" fill="#101522" text-anchor="middle">AVAILABLE</text>
                    <text x="30" y="180" font-family="sans-serif" font-size="20" fill="#aaa">Sensors: Ultrasonic OK</text>
                    <text x="30" y="220" font-family="sans-serif" font-size="20" fill="#aaa">Last Freed: 4m ago</text>

                    <rect x="340" y="0" width="300" height="380" rx="8" fill="#1C2434" stroke="#FF5555" stroke-width="3"/>
                    <text x="370" y="50" font-family="monospace" font-size="26" font-weight="bold" fill="#fff">BAY A-02</text>
                    <rect x="370" y="80" width="180" height="40" rx="6" fill="#FF5555"/>
                    <text x="460" y="108" font-family="monospace" font-size="18" font-weight="bold" fill="#fff" text-anchor="middle">OCCUPIED</text>
                    <text x="370" y="180" font-family="sans-serif" font-size="20" fill="#aaa">Parked: DL 01 AB 4096</text>
                    <text x="370" y="220" font-family="sans-serif" font-size="20" fill="#aaa">Elapsed: 1h 14m</text>

                    <rect x="680" y="0" width="300" height="380" rx="8" fill="#1C2434" stroke="${violet}" stroke-width="3"/>
                    <text x="710" y="50" font-family="monospace" font-size="26" font-weight="bold" fill="#fff">BAY A-03</text>
                    <rect x="710" y="80" width="180" height="40" rx="6" fill="${violet}"/>
                    <text x="800" y="108" font-family="monospace" font-size="18" font-weight="bold" fill="#fff" text-anchor="middle">RESERVED</text>
                    <text x="710" y="180" font-family="sans-serif" font-size="20" fill="#aaa">ETA: 8 mins</text>
                    <text x="710" y="220" font-family="sans-serif" font-size="20" fill="#aaa">QR Code: Verified</text>

                    <rect x="1020" y="0" width="300" height="380" rx="8" fill="#1C2434" stroke="#FFAA00" stroke-width="3"/>
                    <text x="1050" y="50" font-family="monospace" font-size="26" font-weight="bold" fill="#fff">BAY A-04</text>
                    <rect x="1050" y="80" width="180" height="40" rx="6" fill="#FFAA00"/>
                    <text x="1140" y="108" font-family="monospace" font-size="18" font-weight="bold" fill="#101522" text-anchor="middle">OVERSTAY</text>
                    <text x="1050" y="180" font-family="sans-serif" font-size="20" fill="#aaa">Over limit: +24m</text>
                    <text x="1050" y="220" font-family="sans-serif" font-size="20" fill="#FFAA00">ALERT: DISPATCHED</text>
                </g>
            `
        },
        {
            file: 'monitor_gemini',
            title: 'GOOGLE GEMINI API MULTIMODAL CONVERSATION',
            subtitle: 'Context Stream & Tool Orchestration',
            content: (isPainted, cyan, violet, fg) => `
                <rect x="0" y="0" width="1354" height="420" rx="8" fill="#1C2434" stroke="${cyan}" stroke-width="2"/>
                <g transform="translate(40, 40)">
                    <text x="0" y="30" font-family="monospace" font-size="22" fill="${cyan}">&gt; [SYSTEM PROMPT] "You are Deepansh's technical engineering assistant..."</text>
                    <text x="0" y="90" font-family="monospace" font-size="22" fill="#fff">&gt; [USER] "Inspect slot telemetry buffer and report overstay outliers"</text>
                    <text x="0" y="150" font-family="monospace" font-size="22" fill="${violet}">&gt; [MODEL_REASONING] Invoking tool 'check_slot_timers()'...</text>
                    <text x="0" y="210" font-family="monospace" font-size="22" fill="#aaa">&gt; [TOOL_EXEC] Response: Bay A-04 elapsed time 3h 24m (exceeds 3h reservation)</text>
                    <text x="0" y="270" font-family="monospace" font-size="22" fill="${cyan}">&gt; [STREAM] "Bay A-04 has entered overstay status by 24 minutes. Notice sent to driver."</text>
                    <text x="0" y="330" font-family="monospace" font-size="20" fill="#666">[Tokens: 312 // Latency to first token: 160ms // Safety: 0 flags]</text>
                </g>
            `
        },
        {
            file: 'monitor_voice',
            title: 'JARVIS AUDIO WAVEFORM & SPEECH CORE',
            subtitle: 'Bidirectional Voice AI Loop',
            content: (isPainted, cyan, violet, fg) => `
                <rect x="0" y="0" width="1354" height="420" rx="8" fill="#1C2434" stroke="${violet}" stroke-width="2"/>
                <g transform="translate(60, 160)">
                    ${[30, 70, 110, 160, 240, 190, 130, 260, 310, 210, 150, 280, 220, 140, 80, 40]
                        .map((h, i) => `
                            <rect x="${i * 76}" y="${-h/2}" width="34" height="${h}" rx="12" fill="${i % 2 === 0 ? cyan : violet}" />
                        `).join('')}
                </g>
                <text x="677" y="320" font-family="monospace" font-size="24" fill="#fff" text-anchor="middle">SPEECH INPUT ACTIVE // REAL-TIME GEMINI LIVE AUDIO</text>
            `
        },
        {
            file: 'monitor_iot',
            title: 'EDGE NODE TELEMETRY & HARDWARE NETWORK',
            subtitle: 'ESP32 // Ultrasonic Sensors // MQTT Bus',
            content: (isPainted, cyan, violet, fg) => `
                <rect x="0" y="0" width="1354" height="420" rx="8" fill="#1C2434" stroke="${cyan}" stroke-width="2"/>
                <g transform="translate(40, 40)">
                    <text x="0" y="30" font-family="monospace" font-size="22" fill="${cyan}">TOPIC: /campus/parking/telemetry/live</text>
                    <text x="0" y="80" font-family="monospace" font-size="20" fill="#aaa">Packet #84920: {"node": "ESP32_01", "ping_ms": 14, "sensor_v": 3.3, "status": "NOMINAL"}</text>
                    <text x="0" y="130" font-family="monospace" font-size="20" fill="#aaa">Packet #84921: {"node": "ESP32_02", "ping_ms": 18, "sensor_v": 3.3, "status": "NOMINAL"}</text>
                    <text x="0" y="180" font-family="monospace" font-size="20" fill="${violet}">Packet #84922: {"node": "GATE_BARRIER", "rfid": "AUTH_CARD_992", "gate": "OPEN"}</text>
                    <text x="0" y="240" font-family="monospace" font-size="22" fill="${fg}">Hardware-Software Bridge: ACTIVE // Edge Sync: 0 packet loss</text>
                </g>
            `
        }
    ];

    for (const item of monitorItems) {
        const svgSketch = createMonitorSvg({
            title: item.title,
            subtitle: item.subtitle,
            isPainted: false,
            renderContent: item.content
        });
        await saveSvgToWebp(svgSketch, `public/textures/studio/${item.file}.webp`, 1474, 737);

        const svgPainted = createMonitorSvg({
            title: item.title,
            subtitle: item.subtitle,
            isPainted: true,
            renderContent: item.content
        });
        await saveSvgToWebp(svgPainted, `public/textures/studio/${item.file}_painted.webp`, 1474, 737);
    }

    // 3. About Milestone Cards (2048 x 1024)
    const milestones = [
        {
            file: 'milestone_srm',
            institution: 'EDUCATION & ACADEMICS',
            title: 'SRM UNIVERSITY',
            description: 'B.Tech in Computer Science and Engineering. Deep dive into algorithms, systems architecture, and software design.',
            bullets: [
                'Data Structures, Algorithms & Computational Complexity',
                'Computer Systems, Networks & Operating Systems',
                'Database Systems, Full-Stack Architecture & Microservices'
            ]
        },
        {
            file: 'milestone_cv_ai',
            institution: 'RESEARCH & EXPLORATION',
            title: 'COMPUTER VISION & AI',
            description: 'Applied machine learning experimentation combining OpenCV, YOLO object detection, and Google Gemini API.',
            bullets: [
                'Automatic License Plate Recognition Optical Pipeline',
                'Multimodal LLM Agent Grounding & Streaming Dialogue',
                'Contextual Audio & Speech Interaction Engineering'
            ]
        },
        {
            file: 'milestone_fullstack',
            institution: 'APPLICATION DEVELOPMENT',
            title: 'FULL-STACK SOFTWARE',
            description: 'Designing end-to-end applications bridging interactive web/mobile clients with robust backends and hardware sensors.',
            bullets: [
                'Real-World Parking Allocation & Ticket Flow (TechXpert)',
                'Responsive React, React Three Fiber & 3D Spatial Interfaces',
                'Event-Driven Node.js & WebSocket Communication Pipelines'
            ]
        },
        {
            file: 'milestone_skills',
            institution: 'ENGINEERING TOOLKIT',
            title: 'TECH STACK & TOOLS',
            description: 'Practical hands-on toolkit used across real development projects and experiments.',
            bullets: [
                'Languages: JavaScript, TypeScript, Python, C++',
                'Frameworks: React, React Native, Three.js / R3F, Node.js, FastAPI',
                'Tools: Git, Vite, OpenCV, PaddleOCR, MongoDB, MQTT, WebSockets'
            ]
        }
    ];

    for (const m of milestones) {
        const svgSketch = createMilestoneCardSvg({ ...m, isPainted: false });
        await saveSvgToWebp(svgSketch, `public/textures/about/${m.file}.webp`, 2048, 1024);

        const svgPainted = createMilestoneCardSvg({ ...m, isPainted: true });
        await saveSvgToWebp(svgPainted, `public/textures/about/${m.file}_painted.webp`, 2048, 1024);
    }

    // 4. Entrance Sign & Window Avatar
    const signSvg = createEntranceSignSvg();
    await saveSvgToWebp(signSvg, 'public/textures/entrance/sign_deepansh.webp', 1802, 901);

    const avatarWindowSvg = createWindowAvatarSvg();
    await saveSvgToWebp(avatarWindowSvg, 'public/textures/entrance/window_avatar_deepansh.webp', 1024, 1024);

    console.log('✅ All original assets successfully generated!');
}

main().catch(err => {
    console.error('Asset generation error:', err);
    process.exit(1);
});
