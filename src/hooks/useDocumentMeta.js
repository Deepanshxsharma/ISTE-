import { useEffect, useRef } from 'react';
import { useScene } from '../context/SceneContext';

/**
 * useDocumentMeta — Dynamic Meta Tags & Virtual Routing (History API)
 * 
 * Updates the browser URL, page title, and meta description
 * whenever the user enters/exits a 3D room. Also handles the
 * browser back/forward buttons for seamless navigation.
 */

const ROOM_META = {
    null: {
        path: '/',
        title: 'Deepansh Sharma — Beyond the Screen',
        description: 'Interactive 3D portfolio of Deepansh Sharma, B.Tech CSE student at SRM University: app development, computer vision for parking, and AI assistant experiments.',
    },
    about: {
        path: '/about',
        title: 'About — Deepansh Sharma',
        description: 'Deepansh Sharma — B.Tech Computer Science and Engineering student at SRM University and aspiring full-stack app developer.',
    },
    gallery: {
        path: '/gallery',
        title: 'Projects — Deepansh Sharma',
        description: 'TechXpert My Parking, TechXPark ANPR, Hi TechXPert, Jarvis and an OCR attendance calculator.',
    },
    studio: {
        path: '/studio',
        title: 'Project Labs — Deepansh Sharma',
        description: 'How the projects work: number-plate recognition, slot occupancy, AI assistants and an OCR web app.',
    },
    contact: {
        path: '/contact',
        title: 'Contact — Deepansh Sharma',
        description: 'Get in touch with Deepansh Sharma: deepanshsharma622@gmail.com.',
    },
};

// Map URL paths back to room IDs for deep linking
const PATH_TO_ROOM = {
    '/': null,
    '/about': 'about',
    '/gallery': 'gallery',
    '/studio': 'studio',
    '/contact': 'contact',
};

// The site may be served from a sub-path (e.g. /ISTE-/ on GitHub Pages).
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/+$/, '');
const withBase = (path) => `${BASE_PATH}${path}`;

/**
 * Returns the room ID that the initial URL points to (for deep linking).
 * Call this once at app startup to determine if we need to auto-teleport.
 */
export function getInitialRoomFromUrl() {
    let path = window.location.pathname;
    if (BASE_PATH && path.startsWith(BASE_PATH)) path = path.slice(BASE_PATH.length);
    path = path.replace(/\/+$/, '') || '/';
    return PATH_TO_ROOM[path] !== undefined ? PATH_TO_ROOM[path] : null;
}

export function useDocumentMeta() {
    const { currentRoom, teleportTo, hasEntered } = useScene();
    const isHandlingPopState = useRef(false);
    const lastPushedRoom = useRef(undefined); // Track what we last pushed to avoid duplicates

    // Update document meta and URL when room changes
    useEffect(() => {
        const roomKey = currentRoom === null ? 'null' : currentRoom;
        const meta = ROOM_META[roomKey] || ROOM_META['null'];

        // Update the page title
        document.title = meta.title;

        // Update meta description
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
            descTag.setAttribute('content', meta.description);
        }

        // Update OG meta tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', meta.title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', meta.description);

        const origin = window.location.origin;
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `${origin}${withBase(meta.path)}`);

        // Update canonical link to ensure virtual routes are correctly indexable as separate pages
        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
            canonicalTag.setAttribute('href', `${origin}${withBase(meta.path)}`);
        }

        // Push to browser history (only if not handling a popstate event and room actually changed)
        if (!isHandlingPopState.current && lastPushedRoom.current !== currentRoom) {
            // Use replaceState for the very first load, pushState for subsequent navigations
            if (lastPushedRoom.current === undefined) {
                window.history.replaceState({ room: currentRoom }, '', withBase(meta.path));
            } else {
                window.history.pushState({ room: currentRoom }, '', withBase(meta.path));
            }
            lastPushedRoom.current = currentRoom;
        }

        isHandlingPopState.current = false;
    }, [currentRoom]);

    // Handle browser back/forward buttons
    useEffect(() => {
        const handlePopState = (event) => {
            isHandlingPopState.current = true;
            const targetRoom = event.state?.room ?? null;
            lastPushedRoom.current = targetRoom;

            if (targetRoom === null) {
                // Going back to corridor — we don't teleport, just need to trigger exit
                // The SceneContext requestExit will handle the animation
                // For now, we update meta immediately
                const meta = ROOM_META['null'];
                document.title = meta.title;
            } else if (hasEntered) {
                // Teleport to the target room
                teleportTo(targetRoom);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [teleportTo, hasEntered]);
}
