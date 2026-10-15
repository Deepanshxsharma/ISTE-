/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
    x: {
        color: '#000000',
        accentColor: '#14171A',
        icon: '𝕏',
        label: 'X (Twitter)',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Codrops',
        shape: 'monitor',
    },
};

// Deepansh Sharma - Studio Playground Modules
const RAW_CONTENT_DATA = [
    {
        id: 'studio-cv-01',
        platform: 'youtube',
        title: 'TechXPark ANPR Optical Vision Core',
        description: 'Interactive computer vision pipeline simulating license plate detection, perspective transform, and character recognition.',
        frontTexture: '/textures/studio/monitor_anpr.webp',
        paintedFrontTexture: '/textures/studio/monitor_anpr_painted.webp',
        url: 'https://github.com/deepansh-sharma/techxpark-anpr',
        date: '2026-03-15',
        views: 'CV-PIPELINE',
        duration: 'Real-time',
    },
    {
        id: 'studio-parking-02',
        platform: 'blog',
        title: 'TechXpert Smart Parking Allocation Simulator',
        description: 'Simulated multi-bay smart parking allocation grid showing real-time slot state changes: Available, Occupied, Reserved, and Overstay alerts.',
        frontTexture: '/textures/studio/monitor_parking.webp',
        paintedFrontTexture: '/textures/studio/monitor_parking_painted.webp',
        url: 'https://github.com/deepansh-sharma/techxpert-my-parking',
        date: '2026-02-28',
        views: 'SLOT-MATRIX',
        readTime: 'Real-time',
    },
    {
        id: 'studio-gemini-03',
        platform: 'blog',
        title: 'Hi TechXpert: Multimodal Gemini Reasoning Core',
        description: 'Conversational agent architecture demonstrating multimodal reasoning, system prompt injection, and tool call dispatching.',
        frontTexture: '/textures/studio/monitor_gemini.webp',
        paintedFrontTexture: '/textures/studio/monitor_gemini_painted.webp',
        url: 'https://github.com/deepansh-sharma/hi-techxpert',
        date: '2026-01-20',
        views: 'LLM-AGENT',
        readTime: 'Multimodal',
    },
    {
        id: 'studio-voice-04',
        platform: 'youtube',
        title: 'Jarvis Audio Waveform Stream & Tool Orchestration',
        description: 'Voice-controlled assistant experiment demonstrating low-latency speech intent recognition and automated tool dispatching.',
        frontTexture: '/textures/studio/monitor_voice.webp',
        paintedFrontTexture: '/textures/studio/monitor_voice_painted.webp',
        url: 'https://github.com/deepansh-sharma/jarvis-personal-ai',
        date: '2026-01-05',
        views: 'VOICE-DSP',
        duration: 'Voice Loop',
    },
    {
        id: 'studio-iot-05',
        platform: 'tiktok',
        title: 'Edge Node Telemetry & Hardware Network',
        description: 'ESP32 microcontroller integration transmitting ultrasonic sensor and RFID barrier telemetry via MQTT bus.',
        frontTexture: '/textures/studio/monitor_iot.webp',
        paintedFrontTexture: '/textures/studio/monitor_iot_painted.webp',
        url: 'https://github.com/deepansh-sharma/iot-telemetry',
        date: '2025-12-18',
        views: 'IOT-MQTT',
        likes: '3.3V Core',
    },
    {
        id: 'studio-cv-06',
        platform: 'youtube',
        title: 'Real-Time YOLOv8 Plate Bounding Box Engine',
        description: 'Optimizing inference speed for vehicular license plate detection on edge GPU and WebGL backends.',
        frontTexture: '/textures/studio/monitor_anpr.webp',
        paintedFrontTexture: '/textures/studio/monitor_anpr_painted.webp',
        url: 'https://github.com/deepansh-sharma/techxpark-anpr',
        date: '2025-12-01',
        views: 'CV-PIPELINE',
        duration: '15ms Latency',
    },
    {
        id: 'studio-parking-07',
        platform: 'blog',
        title: 'Dynamic QR Ticket & Gate Barrier Sync',
        description: 'Secure, time-bounded QR ticket generation and optical scanning for automated parking gate clearance.',
        frontTexture: '/textures/studio/monitor_parking.webp',
        paintedFrontTexture: '/textures/studio/monitor_parking_painted.webp',
        url: 'https://github.com/deepansh-sharma/techxpert-my-parking',
        date: '2025-11-20',
        views: 'SLOT-MATRIX',
        readTime: 'System Architecture',
    },
    {
        id: 'studio-gemini-08',
        platform: 'blog',
        title: 'Structured Prompt Engineering & Tool Grounding',
        description: 'System design for feeding structured JSON schemas to multimodal LLMs for zero-hallucination slot queries.',
        frontTexture: '/textures/studio/monitor_gemini.webp',
        paintedFrontTexture: '/textures/studio/monitor_gemini_painted.webp',
        url: 'https://github.com/deepansh-sharma/hi-techxpert',
        date: '2025-11-05',
        views: 'LLM-AGENT',
        readTime: 'AI Research',
    },
    {
        id: 'studio-voice-09',
        platform: 'youtube',
        title: 'Voice Activity Detection & Fast Fourier Transform',
        description: 'Visualizing microphone input frequencies in real-time using Web Audio API and custom Three.js mesh rings.',
        frontTexture: '/textures/studio/monitor_voice.webp',
        paintedFrontTexture: '/textures/studio/monitor_voice_painted.webp',
        url: 'https://github.com/deepansh-sharma/jarvis-personal-ai',
        date: '2025-10-25',
        views: 'VOICE-DSP',
        duration: 'Audio DSP',
    },
    {
        id: 'studio-iot-10',
        platform: 'tiktok',
        title: 'Ultrasonic Distance Profiling for Parking Bays',
        description: 'Benchmarking HC-SR04 sensor accuracy across different vehicle bumper materials and angles.',
        frontTexture: '/textures/studio/monitor_iot.webp',
        paintedFrontTexture: '/textures/studio/monitor_iot_painted.webp',
        url: 'https://github.com/deepansh-sharma/iot-telemetry',
        date: '2025-10-10',
        views: 'IOT-MQTT',
        likes: 'Hardware Lab',
    },
    {
        id: 'studio-anpr-11',
        platform: 'blog',
        title: 'PaddleOCR Text Extraction Optimization',
        description: 'Tuning OCR recognition models for low-contrast license plate images captured in night conditions.',
        frontTexture: '/textures/studio/monitor_anpr.webp',
        paintedFrontTexture: '/textures/studio/monitor_anpr_painted.webp',
        url: 'https://github.com/deepansh-sharma/techxpark-anpr',
        date: '2025-09-28',
        views: 'CV-PIPELINE',
        readTime: 'OCR Models',
    },
    {
        id: 'studio-parking-12',
        platform: 'youtube',
        title: 'WebSocket Live State Broadcasting in Parking Systems',
        description: 'Synchronizing multi-client dashboard state with 0 dropped frames using Node.js event emitters.',
        frontTexture: '/textures/studio/monitor_parking.webp',
        paintedFrontTexture: '/textures/studio/monitor_parking_painted.webp',
        url: 'https://github.com/deepansh-sharma/techxpert-my-parking',
        date: '2025-09-12',
        views: 'SLOT-MATRIX',
        duration: 'Full-Stack',
    }
];

const studioFallbacks = [
    { front: '/textures/studio/monitor_anpr.webp', painted: '/textures/studio/monitor_anpr_painted.webp' },
    { front: '/textures/studio/monitor_parking.webp', painted: '/textures/studio/monitor_parking_painted.webp' },
    { front: '/textures/studio/monitor_gemini.webp', painted: '/textures/studio/monitor_gemini_painted.webp' },
    { front: '/textures/studio/monitor_voice.webp', painted: '/textures/studio/monitor_voice_painted.webp' },
    { front: '/textures/studio/monitor_iot.webp', painted: '/textures/studio/monitor_iot_painted.webp' },
];

let fallbackIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item, idx) => {
    const fallback = studioFallbacks[idx % studioFallbacks.length];
    return {
        ...item,
        frontTexture: item.frontTexture || fallback.front,
        paintedFrontTexture: item.paintedFrontTexture || fallback.painted
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
