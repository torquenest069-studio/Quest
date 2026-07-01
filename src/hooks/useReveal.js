'use client';
import { useEffect, useRef } from 'react';

const useReveal = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target && entry.target.classList) {
                        entry.target.classList.add('active');
                    }
                    if (options.once !== false) observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            ...options
        });

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return ref;
};

export default useReveal;
