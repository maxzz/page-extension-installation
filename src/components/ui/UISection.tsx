import { ReactNode } from "react";
import { PrimitiveAtom, useAtom } from "jotai";
import { UISectionPane } from "./UISectionPane";
import { UIAccordion } from "./UIAccordion";
import { textShadow } from "../1-header";

const sectionClasses = "\
pl-4 px-2 py-2 font-ui uppercase \
text-stone-100 \
bg-title4 \
rounded cursor-pointer select-none \
flex items-center justify-between";

export function UISection({ title, children, openAtom }: { title: ReactNode; children: ReactNode; openAtom: PrimitiveAtom<boolean>; }) {
    const [open, setOpen] = useAtom(openAtom);
    return (
        <div>
            <UISectionPane
                className={sectionClasses}
                style={textShadow}
                open={open}
                onClick={() => setOpen(v => !v)}
            >
                {title}
            </UISectionPane>

            <UIAccordion open={open}>
                {children}
            </UIAccordion>
        </div>
    );
}
