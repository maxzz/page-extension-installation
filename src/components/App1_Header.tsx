import React from 'react';
import { IconHIDLogo } from './UI/UIIcons';

export const textShadow = { textShadow: '1px 1px 2px #000' };
export const elevation4Shadow = { boxShadow: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)' };

export function App1_Header() {
    return (<>
        <div className="px-6 py-5 flex items-center justify-between bg-title3 shadow-sm cursor-default"> {/* bg-title4 */}
            <div className="flex items-center space-x-4">
                <a href="https://www.hidglobal.com/sites/default/files/crossmatch/AltusAddons/g01/pagedp/index.html" className="cursor-pointer">
                    <div className="w-20 py-2 flex items-center justify-center bg-white rounded-md">
                        <IconHIDLogo className="px-2 fill-title5" stroke="currentColor" strokeWidth={0.2} fill="none" />
                    </div>
                </a>
                <h1 className="pb-1 text-sm md:text-xl tracking-tighter font-light text-slate-100 whitespace-normal sm:whitespace-nowrap" style={textShadow}>
                    <span className="inline-block">DigitalPersona</span>
                    <span className="inline-block">&#174;</span> Password Manager Extension <span className="inline-block">for Chrome / Microsoft Edge</span>
                </h1>
            </div>
        </div>
        <div className="h-1 bg-title5" style={elevation4Shadow}></div>
    </>);
}
