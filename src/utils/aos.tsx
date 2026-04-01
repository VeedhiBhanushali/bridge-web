'use client'
import { useEffect, useState, type ReactNode } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = ({ children }: { children: ReactNode }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') {
            AOS.init({
                duration: 450,
                once: true,
                offset: 48,
                easing: "ease-out-quad",
            });
        }
    }, []);

    if (!isClient) {
        return <div>{children}</div>;
    }

    return (
        <div>
            {children}
        </div>
    );
}

export default Aoscompo
