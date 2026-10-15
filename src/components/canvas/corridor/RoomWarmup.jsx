import { useRef, useState, useEffect, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

// Eagerly import all room components
import GalleryRoom from '../rooms/Gallery/GalleryRoom';
import StudioRoom from '../rooms/Studio/StudioRoom';
import AboutRoom from '../rooms/About/AboutRoom';
import ContactRoom from '../rooms/Contact/ContactRoom';
import { isSanityDataLoaded } from '../../../hooks/useSanityData';

/**
 * RoomWarmup Component
 * 
 * Mounts all 4 rooms off-screen during the preloader phase to force
 * shader compilation and texture upload to GPU. After a few frames,
 * it unmounts the rooms to free memory. This ensures the first room
 * entry has zero shader compilation stutter.
 * 
 * Positioned 500 units below the scene so nothing is visible.
 * Audio components won't be audible at this distance.
 */
const RoomWarmup = ({ onWarmupComplete, isLowTier }) => {
    const [isDone, setIsDone] = useState(false);
    const frameCount = useRef(0);
    const completeFired = useRef(false);
    const { gl, scene, camera } = useThree();

    // Wait for rooms to render a few frames, then compile and unmount
    const warmupStart = useRef(performance.now());

    const finishWarmup = () => {
        if (completeFired.current) return;
        completeFired.current = true;
        const warmupDuration = ((performance.now() - warmupStart.current) / 1000).toFixed(2);
        
        requestAnimationFrame(() => {
            setIsDone(true);
            onWarmupComplete?.();
        });
    };

    // Absolute fallback: signal warmup complete after 1200ms no matter what
    useEffect(() => {
        const timer = setTimeout(() => {
            finishWarmup();
        }, 1200);
        return () => clearTimeout(timer);
    }, [onWarmupComplete]);

    useFrame(() => {
        if (isDone || completeFired.current) return;

        // Wait until Sanity data is loaded before starting warmup
        if (!isSanityDataLoaded()) return;

        frameCount.current++;

        // Wait 1 frame for entrance to mount
        const targetFrames = isLowTier ? 1 : 2;

        if (frameCount.current >= targetFrames) {
            // On low tier, bypass gl.compile to save memory
            if (isLowTier) {
                finishWarmup();
                return;
            }

            // Force compile all shaders with a 500ms safety timeout
            if (gl.compileAsync) {
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 500));
                Promise.race([
                    gl.compileAsync(scene, camera, scene).catch(() => {}),
                    timeoutPromise
                ]).then(() => {
                    finishWarmup();
                });
            } else {
                try {
                    gl.compile(scene, camera);
                } catch (e) {
                    // Ignore compilation errors during warmup
                }
                finishWarmup();
            }
        }
    });

    if (isDone) return null;

    // Do not mount rooms at all on low end devices to prevent WebGL Context Lost
    if (isLowTier) return null;

    // Dummy handlers to prevent errors (rooms expect these props)
    const noop = () => {};

    return (
        <group position={[0, -500, 0]}>
            {/* Mount all rooms in Suspense - positioned far below camera */}
            <Suspense fallback={null}>
                <group position={[-20, 0, 0]}>
                    <GalleryRoom showRoom={true} onReady={noop} isExiting={false} isWarmup={true} />
                </group>
            </Suspense>
            <Suspense fallback={null}>
                <group position={[20, 0, 0]}>
                    <StudioRoom showRoom={true} onReady={noop} isExiting={false} isWarmup={true} />
                </group>
            </Suspense>
            <Suspense fallback={null}>
                <group position={[-20, 0, -50]}>
                    <AboutRoom showRoom={true} onReady={noop} isExiting={false} isWarmup={true} />
                </group>
            </Suspense>
            <Suspense fallback={null}>
                <group position={[20, 0, -50]}>
                    <ContactRoom showRoom={true} onReady={noop} isExiting={false} isWarmup={true} />
                </group>
            </Suspense>
        </group>
    );
};

export default RoomWarmup;
