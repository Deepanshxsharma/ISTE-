// Content is served from local config (src/config/portfolioData.js and
// src/components/canvas/rooms/Studio/contentData.js). These hooks keep the
// original call sites working: a null result tells each room to use its local data.

const cache = { projects: null, content: null, awards: null, loaded: true };

export const isSanityConfigured = false;

export function loadSanityData() {
    return Promise.resolve(cache);
}

export function isSanityDataLoaded() {
    return true;
}

export function useGalleryProjects() {
    return cache.projects;
}

export function useStudioContent() {
    return cache.content;
}

export function useAwards() {
    return cache.awards;
}
