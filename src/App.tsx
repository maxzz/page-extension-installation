// import { useAtomValue } from 'jotai';
// import { UIToaster } from './components/UI/UiToaster';
// import { UISymbolsDefs } from './components/UI/UIIcons';
import { App2_Main } from './components/App2_Main';

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
            <App2_Main />
        </div>
    </>);
}

export default App;
