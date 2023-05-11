import React from 'react'

const Section = ({ children, className }: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <section className={`bg-white min-h-screen lg:px-20 ${className || ' '}`}>
            {children}
        </section>
    )
}

export default Section