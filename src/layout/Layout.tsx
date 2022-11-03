import {PropsWithChildren} from "react";

export function Layout({children}: PropsWithChildren) {
    return <div className="min-h-screen">
        {children}
    </div>
}