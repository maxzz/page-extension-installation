import { Atom, atom, Getter, Setter } from 'jotai';
import { Atomize, atomWithCallback } from '@/hooks/atomsX';
import { debounce } from '@/utils/debounce';
import { toastError } from '@/components/ui/UiToaster';
import { uuid } from '@/utils/uuid';

//#region LocalStorage

namespace Storage {
    const KEY = 'react-installation-page';

    type Store = {
        open: StorageOpenSections;
    };

    export let initialData: Store = {
        open: {
            source: false,
            presets: false,
            variants: false,
        },
    };

    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;
                initialData = { ...initialData, ...obj };
            } catch (error) {
            }
        }
    }
    load();

    export const saveDebounced = debounce(function _save(get: Getter) {
        let newStore: Store = {
            open: {
                source: get(openSections.sourceAtom),
                presets: get(openSections.presetsAtom),
                variants: get(openSections.variantsAtom),
            },
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => Storage.saveDebounced(get);
}

//#endregion LocalStorage

//#region UI sections state

type StorageOpenSections = {
    source: boolean;    // generated source code
    presets: boolean;   // shape collection previews
    variants: boolean;  // multiplication
};

export const openSections: Atomize<StorageOpenSections> = {
    sourceAtom: atomWithCallback<boolean>(Storage.initialData.open.source, Storage.save),
    presetsAtom: atomWithCallback<boolean>(Storage.initialData.open.presets, Storage.save),
    variantsAtom: atomWithCallback<boolean>(Storage.initialData.open.variants, Storage.save),
};

//#endregion UI sections state
