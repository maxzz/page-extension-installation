import React from 'react';
import { App1_Header } from './App1_Header';
import { App3_Footer } from './App3_Footer';
import hidBuilding from '../assets/sources/fromhid-website/corporate-building.webp';
import { Section1_Policy } from './sections/Section1_Policy';
import { Section2_Eula } from './sections/Section2_Eula';

export function App2_Main() {
    return (
        // <div className="h-screen flex flex-col bg-[#036eb3] text-white">
        <div className="h-screen flex flex-col bg-gradient-to-t from-primary-50 to-[#036eb3] text-primary-900">
            {/* debug-screens */}
            <App1_Header />

            <div className="flex-1 overflow-y-auto" style={{ overflow: 'overlay' }}>

                <div className="h-full flex flex-col mx-auto max-w-[50ch] md:max-w-[65ch]">
                    <div className="flex-1 flex flex-col items-start justify-center space-y-4">

                        <div className="prose">
                            <h3>Instalation</h3>
                        </div>

                        {/* TODO: You must install the extension from the Google Store. */}
                        {/* TODO: You must install the extension from trusted places such as the Google Store. */}
                        <p>You must install the extension from trusted places such as the Google Store.</p>
                        <p>
                            To install the Password Manager Chrome extension, click the Install Extension button and follow the onscreen instructions.
                        </p>

                        {/* TODO: Go to the installation page in the Google Store. */}
                        {/* TODO: Install the extension from the Google Store. */}
                        {/* TODO: Open the Google Store installation page. */}
                        {/* TODO: Open the Google Store extension installation page. */}
                        <a
                            className="px-4 py-3 text-primary-900 bg-primary-300 border-primary-400 border rounded shadow active:scale-[.97]"
                            href="https://chrome.google.com/webstore/detail/digitalpersona-altus/piimgpjgnagkckjlhjcppbkbjjfjmnbh"
                            target="_blank"
                        >
                            Install Extension
                        </a>

                        <Section2_Eula />
                        <Section1_Policy />
                    </div>

                    

                    {/* <div className="self-start w-full h-96">
                        <div className="w-full h-full scale-50 origin-bottom"
                            style={{
                                backgroundImage: `url(${hidBuilding})`,
                                backgroundPosition: '0% 0%',
                                WebkitMaskImage: 'linear-gradient(to left, transparent 5%, black 75%, transparent 95%)',
                                maskImage: 'linear-gradient(to left, transparent 5%, black 75%, transparent 95%)',
                                // WebkitMaskImage: 'linear-gradient(to bottom, transparent 25%, black 75%)',
                                // maskImage: 'linear-gradient(to bottom, transparent 25%, black 75%)',
                                textAlign: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                        </div>
                    </div> */}

                    {/* <div className="self-start w-full h-96">
                        <div className="w-full h-full scale-50 origin-bottom"
                            style={{
                                // backgroundImage: `linear-gradient(89deg, rgba(255, 255, 255, 0) 10%, rgb(34, 119, 184), rgba(255, 255, 255, 0) 87%), url(${hidBuilding})`,
                                backgroundImage: `url(${hidBuilding})`,
                                textAlign: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                        </div>
                    </div>
                    */}

                    {/* <div className="self-start w-full h-96"
                        style={{
                            // backgroundImage: `linear-gradient(180deg, rgb(255 255 255 / 0%), rgb(34 119 184)), url(${hidBuilding})`,
                            backgroundImage: `linear-gradient(180deg, rgb(255 255 255 / 0%), rgb(34 119 184)), url(${hidBuilding})`,
                            textAlign: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </div>
 */}
                    {/* <div className="self-start">
                        <img className="h-40 opacity-50" src={hidBuilding} alt="HID building" />
                    </div> */}
                    {/* TODO: overlay w/ gradient */}
                </div>
            </div>

            <App3_Footer />
        </div>
    );
}

//TODO: grid; with calc; vertical layout on small size
