'use client'
import { useEffect, useState } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = ({children}:any) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') {
            AOS.init({
                duration: 800,
                once: false,
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
