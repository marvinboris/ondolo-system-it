import Image from 'next/image';
import React from 'react';

interface ServiceBlockProps {
    photo: string;
    title: string;
    description: string;
}

export default function ServiceBlock({photo, title, description}: ServiceBlockProps) {
    return <div className="grid md:grid-cols-2 items-center gap-20 group">
        <div className="aspect-square md:group-even:order-2">
            <Image width={1000} height={1000} src={photo} alt={title} className="w-full h-full object-contain" />
        </div>

        <div className="space-y-[30px] text-center md:text-left md:group-even:order-1">
            <h3 className="text-[30px] md:text-[35px] font-bold">{title}</h3>

            <p className="text-sm">{description}</p>
        </div>
    </div>
}