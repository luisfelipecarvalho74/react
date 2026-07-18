import { ReactNode } from "react";

export function Caixa({ children }: { children: ReactNode }) {
    return <div className="bg-white text-2x1 text-center font-bold rounded-x1 p-5 shadow-lg">{children}</div>;
}