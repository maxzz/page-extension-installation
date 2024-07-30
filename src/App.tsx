// import { useAtomValue } from 'jotai';
// import { UIToaster } from './components/UI/UiToaster';
// import { UISymbolsDefs } from './components/UI/UIIcons';
import { App1_Header } from './components/App1_Header';
import { App2_Main } from './components/App2_Main';
import { App3_Footer } from './components/App3_Footer';

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

function App() {
    return (<>
        {/* <UIToaster />
        <PopperRoot />
        <UISymbolsDefs /> */}
        {/* <DataLoader /> */}
        <div className="min-h-full overflow-hidden bg-slate-50"> {/* debug-screens */}

            {/* // <div className="h-screen flex flex-col bg-[#036eb3] text-white"> */}
            <div className="h-screen flex flex-col bg-gradient-to-t from-primary-50 to-[#036eb3] text-primary-900"> {/* debug-screens */}
                <App1_Header />
                <App2_Main />
                <App3_Footer />
            </div>
        </div>
    </>);
}

export default App;
