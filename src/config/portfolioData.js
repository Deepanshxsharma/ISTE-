/**
 * Personal content for the portfolio — edit here, not in the 3D scene code.
 *
 * Keep it honest: no invented numbers (accuracy, latency, users), and only
 * links that actually open. A project with `url: null` shows "Code is private".
 */

export const PROJECTS_DATA = [
    {
        id: 'techxpert-parking',
        title: 'TECHXPERT MY PARKING',
        front: 'textures/gallery/techxpert_parking_front.webp',
        painted: 'textures/gallery/techxpert_parking_painted.webp',
        url: null,
        description:
            'The TechXPark parking module of the TechXpert Flutter app: find a lot, pick a slot and a time, choose how to pay, and get a QR ticket with a live timer you can extend. Backed by a Node.js + Express API.',
        techStack: ['textures/gallery/firebaselogo.webp']
    },
    {
        id: 'techxpark-anpr',
        title: 'TECHXPARK ANPR',
        front: 'textures/gallery/techxpark_anpr_front.webp',
        painted: 'textures/gallery/techxpark_anpr_painted.webp',
        url: null,
        description:
            'Number-plate recognition prototype for parking gates. A camera grabs frames with OpenCV, YOLOv8 finds the plate, PaddleOCR reads it, and the result is sent to the parking API.',
        techStack: []
    },
    {
        id: 'hi-techxpert',
        title: 'HI TECHXPERT',
        front: 'textures/gallery/hi_techxpert_front.webp',
        painted: 'textures/gallery/hi_techxpert_painted.webp',
        url: null,
        description:
            'An AI assistant prototype for employee-facing workflows, built on the Gemini API while I experiment with different Gemini models.',
        techStack: []
    },
    {
        id: 'jarvis',
        title: 'JARVIS',
        front: 'textures/gallery/jarvis_ai_front.webp',
        painted: 'textures/gallery/jarvis_ai_painted.webp',
        url: 'https://github.com/Deepanshxsharma/jarvis',
        description:
            'My fork of isair/jarvis, a local-first voice assistant, tuned for an M4 MacBook Air. Wake word, speech with MLX Whisper, replies from a local Ollama model, spoken back with Piper. A development checkpoint, not a release.',
        techStack: []
    },
    {
        id: 'attendance-calculator',
        title: 'ATTENDANCE CALCULATOR',
        front: 'textures/gallery/attendance_ocr_front.webp',
        painted: 'textures/gallery/attendance_ocr_painted.webp',
        url: 'https://deepanshxsharma.github.io/attendance-calculator/',
        description:
            'Upload a screenshot of the college attendance portal, Tesseract.js reads it in the browser, and the app works out your percentage against the 75% target.',
        techStack: ['textures/gallery/htmllogo.webp', 'textures/gallery/csslogo.webp', 'textures/gallery/jslogo.webp']
    }
];

/* Cards that open from the floating islands in the About room. */
export const ABOUT_OVERLAY_CARDS = {
    academics: {
        id: 'card-academics',
        layout: 'certificate_grid',
        title: 'Education',
        items: [
            {
                label: 'B.Tech, Computer Science and Engineering',
                date: 'SRM University · current',
                description: 'Coursework alongside the projects in this portfolio.',
                image: 'textures/about/milestone_srm.webp',
                url: null
            },
            {
                label: 'Java Full Stack — module projects',
                date: 'Inventory system · multi-threaded CSV processor',
                description: 'OOP, collections, serialization, file I/O, ExecutorService and the Builder pattern.',
                image: 'textures/about/milestone_fullstack.webp',
                url: 'https://github.com/Deepanshxsharma/myanatomy-java-stack'
            }
        ],
        platformConfig: { label: 'EDUCATION', color: '#101522', icon: '🎓' }
    },
    interests: {
        id: 'card-interests',
        layout: 'certificate_grid',
        title: 'What I explore',
        items: [
            {
                label: 'Computer vision for parking',
                date: 'YOLOv8 · ByteTrack · PaddleOCR',
                description: 'Reading number plates at the gate and working out which slots are free from a single camera.',
                image: 'textures/about/milestone_cv_ai.webp',
                url: null
            },
            {
                label: 'AI assistants',
                date: 'Gemini API · local voice',
                description: 'Hi TechXPert on the Gemini API, and Jarvis — a local voice assistant fork I tune on my Mac.',
                image: 'textures/about/milestone_skills.webp',
                url: 'https://github.com/Deepanshxsharma/jarvis'
            }
        ],
        platformConfig: { label: 'EXPLORING', color: '#101522', icon: '⚡' }
    },
    toolkit: {
        id: 'card-toolkit',
        layout: 'certificate_grid',
        title: 'Tools I build with',
        items: [
            {
                label: 'Apps & frontend',
                date: 'Flutter · Dart · Ionic · Angular · React',
                description: 'Flutter for the parking app, Ionic + Angular for the earlier version, React and Three.js for this site.',
                image: 'textures/about/milestone_fullstack.webp',
                url: null
            },
            {
                label: 'Back end, data & vision',
                date: 'Node.js · Express · TypeScript · Python',
                description: 'The parking API in Node.js + Express + TypeScript, Firebase for notifications, Python with OpenCV for the camera work.',
                image: 'textures/about/milestone_skills.webp',
                url: null
            }
        ],
        platformConfig: { label: 'TOOLKIT', color: '#101522', icon: '🛠️' }
    }
};

/* Empty strings are hidden. Only add links you have checked. */
export const CONTACT_INFO = {
    email: 'deepanshsharma622@gmail.com',
    github: 'https://github.com/Deepanshxsharma',
    linkedin: ''
};
