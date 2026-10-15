/**
 * Studio Content Data
 *
 * Each item is shown on a monitor in the Studio tower (the tower repeats items
 * to fill its rings). `platform` picks the device shape and label; `date` is the
 * short status line shown in the overlay. `url: null` hides the link button.
 */

export const PLATFORM_CONFIG = {
    app: {
        color: '#62E7DC',
        accentColor: '#3cbcb2',
        icon: '📱',
        label: 'App',
        shape: 'phone',
    },
    vision: {
        color: '#9C8CFF',
        accentColor: '#7a69e0',
        icon: '👁',
        label: 'Computer vision',
        shape: 'tv',
    },
    ai: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '✦',
        label: 'AI',
        shape: 'monitor',
    },
    web: {
        color: '#F2A65A',
        accentColor: '#d4883c',
        icon: '🌐',
        label: 'Web app',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    {
        id: 'studio-anpr',
        platform: 'vision',
        title: 'TechXPark ANPR',
        description: 'Gate camera → YOLOv8 plate detection → PaddleOCR → result sent to the parking API. Separate entry and exit runners save annotated captures for debugging.',
        frontTexture: 'textures/studio/monitor_anpr.webp',
        paintedFrontTexture: 'textures/studio/monitor_anpr_painted.webp',
        url: null,
        date: 'Prototype · Python, OpenCV, YOLOv8, PaddleOCR',
    },
    {
        id: 'studio-occupancy',
        platform: 'vision',
        title: 'Parking Occupancy Detector',
        description: 'YOLOv8 finds vehicles, ByteTrack follows them between frames, and a calibrated slot map turns that into free / occupied status, smoothed over time so a passing car does not flip a slot.',
        frontTexture: 'textures/studio/monitor_parking.webp',
        paintedFrontTexture: 'textures/studio/monitor_parking_painted.webp',
        url: null,
        date: 'Prototype · YOLOv8, ByteTrack',
    },
    {
        id: 'studio-hi-techxpert',
        platform: 'ai',
        title: 'Hi TechXPert',
        description: 'An AI assistant prototype for employee-facing workflows, built on the Gemini API while I experiment with different Gemini models.',
        frontTexture: 'textures/studio/monitor_gemini.webp',
        paintedFrontTexture: 'textures/studio/monitor_gemini_painted.webp',
        url: null,
        date: 'Prototype · Gemini API',
    },
    {
        id: 'studio-jarvis',
        platform: 'ai',
        title: 'Jarvis',
        description: 'My fork of isair/jarvis tuned for an M4 MacBook Air: wake word, MLX Whisper speech recognition, a local Ollama model and Piper speech, all running on the Mac. A development checkpoint, not a release.',
        frontTexture: 'textures/studio/monitor_voice.webp',
        paintedFrontTexture: 'textures/studio/monitor_voice_painted.webp',
        url: 'https://github.com/Deepanshxsharma/jarvis',
        date: 'Fork · development checkpoint',
    },
    {
        id: 'studio-attendance',
        platform: 'web',
        title: 'Attendance Calculator',
        description: 'Upload a screenshot of the attendance portal; Tesseract.js reads it in the browser and the app works out your percentage against the 75% target.',
        frontTexture: 'textures/studio/monitor_iot.webp',
        paintedFrontTexture: 'textures/studio/monitor_iot_painted.webp',
        url: 'https://deepanshxsharma.github.io/attendance-calculator/',
        date: 'Live · HTML, CSS, JavaScript, Tesseract.js',
    },
];

export const CONTENT_DATA = RAW_CONTENT_DATA;

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => CONTENT_DATA[0];
