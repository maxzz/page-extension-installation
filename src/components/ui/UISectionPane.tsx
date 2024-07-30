import { HTMLAttributes } from 'react';
import { UIArrow } from './icons/normal/UIArrow';

const sectionClasses = "\
px-2 py-1 font-ui uppercase \
text-stone-100 \
bg-slate-500 \
cursor-pointer select-none \
flex items-center justify-between";

export function UISectionPane({ className, children, open = true, ...rest }: { open?: boolean; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={className || sectionClasses} {...rest} >

            {/* Section name */}
            {children}
            
            {/* Open/Close icon */}
            <UIArrow open={open} className="w-6 h-6 p-1 " />

        </div>
    );
}
