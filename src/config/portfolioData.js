/**
 * Centralized Portfolio Configuration for Deepansh Sharma
 * "DEEPANSH — BEYOND THE SCREEN"
 * 
 * Edit all identity facts, projects, playground modules, milestones,
 * and contact links here without touching 3D scene code.
 */

export const PERSONAL_INFO = {
    name: 'Deepansh Sharma',
    handle: 'deepansh',
    title: 'DEEPANSH — BEYOND THE SCREEN',
    tagline: 'I build things that connect code to the real world.',
    role: 'Aspiring Full-Stack Application Developer',
    education: {
        institution: 'SRM University',
        degree: 'B.Tech in Computer Science and Engineering',
        status: 'Undergraduate Student',
        focus: 'Application Development, Intelligent Systems & Computer Vision'
    },
    bio: "I'm Deepansh Sharma, a Computer Science student exploring application development, intelligent systems, computer vision, and interactive experiences. I enjoy turning ideas into projects that combine software, design, and technology.",
    interests: [
        'Interactive 3D & Modern UI',
        'Mobile Application Development',
        'AI Assistants & Multimodal Agents',
        'Computer Vision & OCR Pipelines',
        'IoT & Hardware-Software Interfaces'
    ],
    skills: {
        core: ['JavaScript / TypeScript', 'Python', 'React', 'Three.js / React Three Fiber', 'Node.js', 'React Native'],
        ai_cv: ['Google Gemini API', 'OpenCV', 'YOLOv8 Detection', 'PaddleOCR', 'FastAPI'],
        tools_db: ['Git', 'Vite', 'MongoDB', 'PostgreSQL', 'WebSockets', 'MQTT']
    }
};

export const PROJECTS_DATA = [
    {
        id: 'techxpert-parking',
        title: 'TECHXPERT MY PARKING',
        shortTitle: 'MY PARKING',
        subtitle: 'Smart Parking Allocation & Slot Management',
        category: 'Full-Stack Application',
        status: 'Core Application Prototype',
        front: '/textures/gallery/techxpert_parking_front.webp',
        painted: '/textures/gallery/techxpert_parking_painted.webp',
        url: 'https://github.com/deepansh-sharma/techxpert-my-parking',
        demoUrl: null,
        description: 'TechXpert My Parking is a real-world parking allocation application designed to solve urban congestion. It explores real-time slot availability, GPS-assisted parking discovery, flexible slot reservation, dynamic cancellations, QR-code digital ticket validation, and automated overstay tracking.',
        extendedDescription: `The TechXpert My Parking system bridges everyday drivers with intelligent parking facility infrastructure. 

Key Architecture & Verified Features:
• Real-time Slot Availability: Live mapping of occupied, reserved, and open parking spots across multi-level lots.
• Instant Booking & QR Generation: Secure reservation workflow that generates verifiable encrypted QR tickets.
• Automated Overstay Detection: Time-stamped entry and exit validation to prevent unauthorized space hoarding.
• Responsive Mobile-First Client: Built with a cross-platform interface allowing rapid one-tap navigation.`,
        techStack: [
            '/textures/gallery/reactlogo.webp',
            '/textures/gallery/jslogo.webp',
            '/textures/gallery/tailwindlogo.webp',
            '/textures/gallery/htmllogo.webp'
        ],
        techLabels: ['React Native / React', 'Node.js', 'Express', 'MongoDB', 'QR Engine'],
        highlights: [
            'Interactive slot allocation map',
            'Reservation and instant cancellation flow',
            'Time-based overstay calculation algorithm',
            'QR-ticket authentication scanner flow'
        ]
    },
    {
        id: 'techxpark-anpr',
        title: 'TECHXPARK ANPR',
        shortTitle: 'ANPR VISION',
        subtitle: 'Automated Number Plate Recognition Pipeline',
        category: 'Computer Vision & OCR',
        status: 'Computer Vision Research & Prototype',
        front: '/textures/gallery/techxpark_anpr_front.webp',
        painted: '/textures/gallery/techxpark_anpr_painted.webp',
        url: 'https://github.com/deepansh-sharma/techxpark-anpr',
        demoUrl: null,
        description: 'An applied computer vision experimentation pipeline designed to detect vehicle license plates in real-time. Built using OpenCV image preprocessing, YOLO-based bounding box localization, and PaddleOCR text extraction for automated parking access validation.',
        extendedDescription: `TechXPark ANPR explores modern optical pipelines to recognize vehicle registration plates under challenging conditions such as angles, glare, and varying lighting.

Visual Processing Pipeline:
1. CAMERA INGESTION: Video stream or snapshot frame capture.
2. VEHICLE & PLATE DETECTION: YOLO-based convolutional model localizes the vehicle and extracts the region of interest (ROI).
3. IMAGE NORMALIZATION: OpenCV bilateral filtering, grayscale thresholding, and perspective rectification.
4. OPTICAL CHARACTER RECOGNITION: PaddleOCR extracts character sequences with confidence scoring.`,
        techStack: [
            '/textures/gallery/phplogo.webp', // Used as generic badge fallback
            '/textures/gallery/jslogo.webp',
            '/textures/gallery/htmllogo.webp',
            '/textures/gallery/firebaselogo.webp'
        ],
        techLabels: ['Python', 'OpenCV', 'YOLOv8', 'PaddleOCR', 'FastAPI'],
        highlights: [
            '4-stage visual pipeline: Capture → Detect → Crop → OCR',
            'Dynamic license plate contour rectification',
            'Character confidence verification system',
            'Local experimentation runner for benchmarking'
        ]
    },
    {
        id: 'hi-techxpert',
        title: 'HI TECHXPERT',
        shortTitle: 'HI TECHXPERT',
        subtitle: 'Multimodal Conversational AI Assistant',
        category: 'AI Assistant & LLM Engineering',
        status: 'Conversational AI Prototype',
        front: '/textures/gallery/hi_techxpert_front.webp',
        painted: '/textures/gallery/hi_techxpert_painted.webp',
        url: 'https://github.com/deepansh-sharma/hi-techxpert',
        demoUrl: null,
        description: 'An experimental intelligent assistant powered by Google Gemini API integration. Features structured context grounding, multi-turn reasoning, and adaptive system prompts to deliver accurate technical guidance, code problem solving, and user support.',
        extendedDescription: `Hi TechXpert demonstrates conversational intelligence built on Google Gemini foundational models. 

Core Capabilities:
• Multimodal Reasoning: Processing natural language requests alongside code snippets and technical queries.
• Dynamic System Prompting: Context injection tailored for technical troubleshooting and application support.
• Low-Latency Streaming: Real-time chunked token streaming for natural back-and-forth interaction.
• Session State Memory: Maintains multi-turn context without memory degradation over extended dialogues.`,
        techStack: [
            '/textures/gallery/reactlogo.webp',
            '/textures/gallery/tailwindlogo.webp',
            '/textures/gallery/jslogo.webp',
            '/textures/gallery/netlifylogo.webp'
        ],
        techLabels: ['Gemini API', 'React', 'Node.js', 'WebSockets', 'Tailwind CSS'],
        highlights: [
            'Streaming token delivery with real-time markdown rendering',
            'Domain-guided prompt engineering for tech assistance',
            'Adaptive fallback mechanisms for API resilience'
        ]
    },
    {
        id: 'jarvis-ai',
        title: 'JARVIS PERSONAL AI',
        shortTitle: 'JARVIS AI',
        subtitle: 'Voice Interaction & System Copilot',
        category: 'Voice AI & Local Tools',
        status: 'Voice & Tool System Experiment',
        front: '/textures/gallery/jarvis_ai_front.webp',
        painted: '/textures/gallery/jarvis_ai_painted.webp',
        url: 'https://github.com/deepansh-sharma/jarvis-personal-ai',
        demoUrl: null,
        description: 'An exploratory personal AI companion experimenting with voice-driven interaction, system automation, and Gemini native audio capabilities. Designed to test real-time speech capture, tool invocation, and spoken task feedback.',
        extendedDescription: `Jarvis is a hands-on exploration into voice-first computing. Rather than simple text-in text-out chatbots, Jarvis aims to understand spoken intent and execute local developer actions.

Experimental Architecture:
• Audio Pipeline: Real-time microphone audio capture with noise suppression.
• Speech Intent Analysis: Parsing user voice input through Gemini multimodal reasoning.
• Tool Integration: Dispatching automated functions (e.g. system stats check, file search, notes).
• Natural Audio Response: Synthesized clear voice output with reactive 3D waveform visuals.`,
        techStack: [
            '/textures/gallery/jslogo.webp',
            '/textures/gallery/htmllogo.webp',
            '/textures/gallery/csslogo.webp',
            '/textures/gallery/firebaselogo.webp'
        ],
        techLabels: ['Python', 'Gemini Live Audio API', 'SpeechRecognition', 'System Automation'],
        highlights: [
            'Voice activity detection (VAD) audio loop',
            'Interactive audio frequency waveform visualization',
            'Extensible command registry for tool execution',
            'Conceptual blueprint for local desktop pairing'
        ]
    },
    {
        id: 'iot-telemetry',
        title: 'IOT EDGE NODE & SENSORS',
        shortTitle: 'IOT TELEMETRY',
        subtitle: 'Hardware-to-Cloud Sensor Network',
        category: 'Hardware & Embedded',
        status: 'Hardware Experiment',
        front: '/textures/gallery/iot_telemetry_front.webp',
        painted: '/textures/gallery/iot_telemetry_painted.webp',
        url: 'https://github.com/deepansh-sharma/iot-telemetry',
        demoUrl: null,
        description: 'Microcontroller experimentation connecting ultrasonic range sensors, RFID readers, and environmental sensors over MQTT to cloud dashboards. Prototypes hardware integration for physical smart parking slots.',
        extendedDescription: `The IoT Edge Node experiment tests physical detection of parked vehicles using ultrasonic range sensors connected to ESP32 microcontrollers. Distance telemetry is broadcast via lightweight MQTT packets to a central broker for sub-second database updates.`,
        techStack: [
            '/textures/gallery/htmllogo.webp',
            '/textures/gallery/csslogo.webp',
            '/textures/gallery/jslogo.webp',
            '/textures/gallery/netlifylogo.webp'
        ],
        techLabels: ['ESP32 / Microcontrollers', 'MQTT Protocol', 'C++', 'Node.js', 'WebSockets'],
        highlights: [
            'Ultrasonic distance profiling for vehicle presence',
            'Low-overhead MQTT payload serialization',
            'Hardware-in-the-loop testing for parking logic'
        ]
    }
];

export const PLAYGROUND_MODULES = [
    {
        id: 'playground-anpr',
        title: 'ANPR Vision Pipeline',
        platform: 'Computer Vision',
        description: 'Interactive visualization of license plate localization and character recognition: Raw Video -> YOLO Bounding Box -> Contour Warp -> PaddleOCR.',
        frontTexture: '/textures/studio/monitor_anpr.webp',
        paintedFrontTexture: '/textures/studio/monitor_anpr_painted.webp',
        date: '2026-03-15',
        views: 'CV-PIPELINE',
        duration: 'Real-time',
        url: 'https://github.com/deepansh-sharma/techxpark-anpr',
        type: 'pipeline',
        steps: [
            { label: 'Camera Input', desc: '1080p vehicle stream ingestion' },
            { label: 'YOLOv8 ROI', desc: 'License plate bounding box localization' },
            { label: 'Preprocessing', desc: 'Adaptive Gaussian blur & thresholding' },
            { label: 'PaddleOCR', desc: 'High-confidence alphanumeric extraction' }
        ]
    },
    {
        id: 'playground-parking',
        title: 'Smart Parking Bay Simulator',
        platform: 'Systems Design',
        description: 'Simulated 4-bay smart parking allocation grid showing real-time slot state changes: Available, Occupied, Reserved, and Overstay alerts.',
        frontTexture: '/textures/studio/monitor_parking.webp',
        paintedFrontTexture: '/textures/studio/monitor_parking_painted.webp',
        date: '2026-02-28',
        views: 'SLOT-MATRIX',
        duration: 'Interactive',
        url: 'https://github.com/deepansh-sharma/techxpert-my-parking',
        type: 'simulator',
        slots: [
            { id: 'BAY-01', status: 'OCCUPIED', time: '1h 14m' },
            { id: 'BAY-02', status: 'AVAILABLE', time: '--' },
            { id: 'BAY-03', status: 'RESERVED', time: 'Arriving 10m' },
            { id: 'BAY-04', status: 'OVERSTAY', time: '+24m alert' }
        ]
    },
    {
        id: 'playground-gemini',
        title: 'Gemini Assistant Dialogue Core',
        platform: 'AI Systems',
        description: 'Conversational agent architecture demonstrating multimodal reasoning, system prompt injection, and tool call dispatching.',
        frontTexture: '/textures/studio/monitor_gemini.webp',
        paintedFrontTexture: '/textures/studio/monitor_gemini_painted.webp',
        date: '2026-01-20',
        views: 'LLM-AGENT',
        duration: 'Multimodal',
        url: 'https://github.com/deepansh-sharma/hi-techxpert',
        type: 'ai_core'
    },
    {
        id: 'playground-voice',
        title: 'Jarvis Audio Waveform Stream',
        platform: 'Voice AI',
        description: 'Low-latency microphone capture loop with voice activity detection and synthesized response dispatch.',
        frontTexture: '/textures/studio/monitor_voice.webp',
        paintedFrontTexture: '/textures/studio/monitor_voice_painted.webp',
        date: '2025-12-15',
        views: 'VOICE-DSP',
        duration: 'Bidirectional',
        url: 'https://github.com/deepansh-sharma/jarvis-personal-ai',
        type: 'voice_stream'
    },
    {
        id: 'playground-iot',
        title: 'Edge Microcontroller MQTT Bus',
        platform: 'IoT & Telemetry',
        description: 'Live sensor telemetry bridge routing ultrasonic distance readings from edge microcontrollers to WebGL overlays.',
        frontTexture: '/textures/studio/monitor_iot.webp',
        paintedFrontTexture: '/textures/studio/monitor_iot_painted.webp',
        date: '2025-11-05',
        views: 'MQTT-BROKER',
        duration: 'Telemetry',
        url: 'https://github.com/deepansh-sharma/iot-telemetry',
        type: 'iot_bus'
    }
];

export const ABOUT_MILESTONES = [
    {
        id: 'intro',
        position: [0, 0, -15],
        type: 'intro',
        title: 'DEEPANSH',
        subtitle: '< beyond the screen />',
        tagline: 'Aspiring Full-Stack Developer & Systems Explorer'
    },
    {
        id: 'academics',
        position: [0, 0, -55],
        type: 'academics',
        title: 'SRM UNIVERSITY',
        subtitle: 'B.Tech in Computer Science & Engineering',
        tagline: 'Foundations of Systems, Data Structures & Algorithms'
    },
    {
        id: 'journey',
        position: [0, 0, -95],
        type: 'journey',
        title: 'INTERESTS',
        subtitle: 'Application Dev • Computer Vision • AI Assistants • IoT',
        tagline: 'Connecting software with physical environments'
    },
    {
        id: 'skills',
        position: [0, 0, -135],
        type: 'skills',
        title: 'TOOLKIT',
        subtitle: 'React • Three.js • Python • OpenCV • Node.js • Git',
        tagline: 'Building reliable, interactive, and intelligent software'
    }
];

export const ABOUT_OVERLAY_CARDS = {
    academics: {
        id: 'card-academics',
        layout: 'certificate_grid',
        title: 'Academic Foundations',
        items: [
            {
                label: 'B.Tech Computer Science & Engineering',
                date: 'SRM University (Current)',
                description: 'Comprehensive undergraduate coursework covering Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Software Design.',
                image: '/textures/about/milestone_srm.webp',
                url: null
            },
            {
                label: 'Software Engineering & System Architecture',
                date: 'Core Specialization',
                description: 'Focusing on full-stack application frameworks, API design, event-driven systems, and hardware-software integration.',
                image: '/textures/about/milestone_fullstack.webp',
                url: null
            }
        ],
        platformConfig: { label: 'EDUCATION', color: '#101522', icon: '🎓' }
    },
    interests: {
        id: 'card-interests',
        layout: 'certificate_grid',
        title: 'Technical Explorations',
        items: [
            {
                label: 'Computer Vision & Optical Recognition',
                date: 'Applied Research',
                description: 'Hands-on experiments with OpenCV, YOLO-based object detection, and PaddleOCR text extraction for license plate identification.',
                image: '/textures/about/milestone_cv_ai.webp',
                url: null
            },
            {
                label: 'Multimodal AI Assistants & Voice Agents',
                date: 'Intelligence Engineering',
                description: 'Building practical conversational agents using Gemini API, streaming tokens, context grounding, and voice command pipelines.',
                image: '/textures/about/milestone_skills.webp',
                url: null
            }
        ],
        platformConfig: { label: 'RESEARCH', color: '#101522', icon: '⚡' }
    },
    toolkit: {
        id: 'card-toolkit',
        layout: 'certificate_grid',
        title: 'Technical Skills & Toolkit',
        items: [
            {
                label: 'Frontend & Interactive Web',
                date: 'React, Three.js, GSAP, SCSS',
                description: 'Crafting spatial 3D web interfaces, responsive layouts, and accessible component architectures.',
                image: '/textures/about/milestone_fullstack.webp',
                url: null
            },
            {
                label: 'Backend & Systems Engineering',
                date: 'Node.js, Python, Express, FastAPI, MongoDB',
                description: 'Developing RESTful APIs, WebSocket communication channels, and microcontroller MQTT pipelines.',
                image: '/textures/about/milestone_skills.webp',
                url: null
            }
        ],
        platformConfig: { label: 'TOOLKIT', color: '#101522', icon: '🛠️' }
    }
};

export const CONTACT_INFO = {
    email: 'deepanshsharma.dev@gmail.com',
    github: 'https://github.com/deepansh-sharma',
    linkedin: 'https://linkedin.com/in/deepansh-sharma',
    portfolioUrl: 'https://deepanshsharma.dev',
    location: 'SRM University, India',
    status: 'Open to technical collaborations, full-stack development, and internships',
    socials: [
        { label: 'GITHUB', url: 'https://github.com/deepansh-sharma' },
        { label: 'LINKEDIN', url: 'https://linkedin.com/in/deepansh-sharma' },
        { label: 'PORTFOLIO', url: '#' },
        { label: 'MESSAGE', action: 'mail' }
    ]
};

export const THEME = {
    navy: '#101522',
    graphite: '#202633',
    paper: '#F2EDE3',
    slate: '#7D8CA5',
    cyan: '#62E7DC',
    violet: '#9C8CFF',
    accent: '#62E7DC'
};
