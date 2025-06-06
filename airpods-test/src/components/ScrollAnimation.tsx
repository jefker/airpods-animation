import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = () => {
    const [frame, setFrame] = useState(101);
    const startFrame = 101;
    const totalFrames = 165;

    const imgRef = useRef<HTMLImageElement>(null);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScroll;
        const frameIndex = Math.min(
            totalFrames,
            startFrame + Math.floor(scrollFraction * (totalFrames - startFrame))
        );
        setFrame(frameIndex);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="h-[300vh] relative bg-black">
            <div className="fixed inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-9xl text-white font-semibold absolute z-0">AirPods Pro</h1>
                <img
                    ref={imgRef}
                    src={`./assets/png_sequence/${encodeURIComponent(`Untitled Linked Comp ${String(frame).padStart(4, '0')}.png`)}`}
                    alt={`Frame ${frame}`}
                    className="z-10 transition-opacity duration-300 ease-in-out"
                    />
            </div>
        </div>
    );
};

export default ScrollAnimation;
