import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { classNames } from '@/utils/classnames';
import { IconGithubLogo } from './UI/UIIcons';

function Link({ className, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a target="_blank" className={classNames(" hover:text-primary-200 hover:scale-y-110 transition-all", className)} {...rest}>
            {children}
        </a>
    );
}

export function App3_Footer() {
    return (
        <div className="px-2 sm:px-4 py-2 text-sm flex items-center justify-between space-x-1 bg-title3 text-primary-400/75 text-[.65rem] leading-3 ">
            <Link href="https://www.hidglobal.com/products/software/digitalpersona/digitalpersona" className="md:text-xs transition-all">
                <span className="inline-block">© 2022 HID Global Corporation, part of ASSA ABLOY.</span> <span className="inline-block">All rights reserved.</span>
            </Link>
            <div className="flex items-center space-x-4">
                {/* <Link href="https://www.hidglobal.com/sites/default/files/crossmatch/AltusAddons/g01/PrivacyPolicy.txt" target="_blank">Privacy policy</Link> */}
                <Link href="https://www.hidglobal.com/sites/default/files/crossmatch/AltusAddons/g01/pagedp/EULA.html" target="_blank">End User License Agreement</Link>
                {/* title="Open the source code of the project on Github" */}
            </div>
        </div>
    );
}
