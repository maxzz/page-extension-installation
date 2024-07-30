// import { useAtomValue } from 'jotai';
// import { UIToaster } from './components/UI/UiToaster';
// import { UISymbolsDefs } from './components/UI/UIIcons';
import { App1_Header } from './components/1-header';
import { App2_Main } from './components/2-main';
import { App3_Footer } from './components/3-footer';

// function DataLoader() {
//     useAtomValue(dataLoadAtom);
//     return null;
// }

// function PopperRoot() {
//     return (
//         <div className="absolute z-50">
//             <div id="portal"></div>
//         </div>
//     );
// }

export function App() {
    return (<>
        {/* <UIToaster />
        <PopperRoot />
        <UISymbolsDefs /> */}

        {/* <DataLoader /> */}

        <div className="min-h-full overflow-hidden bg-slate-50"> {/* debug-screens */}

            {/* // <div className="h-screen flex flex-col bg-[#036eb3] text-white"> */}
            <div className="h-screen flex flex-col bg-gradient-to-t from-primary-50 to-[#036eb3] text-primary-900">

                <App1_Header />
                <App2_Main />
                <App3_Footer />

            </div>
        </div>
    </>);
}
