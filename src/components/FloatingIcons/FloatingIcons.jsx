import { useEffect, useRef } from "react";
import "./FloatingIcons.css";

export default function FloatingIcons() {
    const iconsRef = useRef([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            iconsRef.current.forEach((el, i) => {
                const speed = (i + 1) * 0.08;
                const x = (window.innerWidth / 2 - e.pageX) * speed;
                const y = (window.innerHeight / 2 - e.pageY) * speed;
                el.style.transform = `translate(${x}px, ${y}px)`;
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="floating-icons">
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                    key={i}
                    className="icon"
                    ref={(el) => (iconsRef.current[i] = el)}
                >
                    ✚
                </div>
            ))}
        </div>
    );
}
