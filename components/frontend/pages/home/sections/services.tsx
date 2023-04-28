import React from 'react';

interface HomeServicesSectionProps {
    services: React.ReactNode;
}

export default function HomeServicesSection({
    services
}: HomeServicesSectionProps) {
    return <section className="py-[60px] grid grid-cols-1 gap-[120px] container">
        {services}
    </section>
}