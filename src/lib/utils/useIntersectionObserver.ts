import { useEffect, useRef } from 'react'

const useIntersectionObserver = (
    callback,
    options = { rootMargin: '10%', threshold: 0.3 },
) => {
    const observer = useRef(null)

    useEffect(() => {
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry.target)
                }
            })
        }, options)

        return () => observer.current.disconnect()
    }, [callback, options])

    const observe = (element) => {
        if (observer.current && element) {
            observer.current.observe(element)
        }
    }

    return { observe }
}

export default useIntersectionObserver
