import { IconHIDLogo } from "@/components/ui";

export const textShadow = {
    textShadow: '1px 1px 2px #000',
};

export const elevation4Shadow = {
    boxShadow: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
};

const pageQAUrl = "https://digitalpersona.hidglobal.com/g02/pagedp/index.html";

const h1Classes = "pb-1 text-sm md:text-xl tracking-tighter font-light text-slate-100 whitespace-normal sm:whitespace-nowrap";

export function App1_Header() {
    return (<>

        <div className="px-6 py-5 flex items-center justify-between bg-title3 shadow-sm cursor-default"> {/* bg-title4 */}
            <div className="flex items-center space-x-4">

                <a href={pageQAUrl} className="cursor-pointer" target="_blank">
                    <IconHIDLogo className="w-20 p-2 fill-title5 stroke-none bg-white rounded-md" />
                </a>

                <h1 className={h1Classes} style={textShadow}>
                    <span className="inline-block">
                        DigitalPersona
                    </span>

                    <span className="inline-block">
                        &#174;
                    </span>

                    {' '} Password Manager Extension {' '}

                    <span className="inline-block">
                        for Chrome / Microsoft Edge
                    </span>
                </h1>

            </div>
        </div>

        <div className="h-1 bg-title5" style={elevation4Shadow} />
    </>);
}
