import { useState } from "react";

export function Presente() {
    const [presente, setPresente] =useState<boolean>(false);
    return(
        <div className="bg-slate-800 w-50 text-white p-4 rounded-sm text-center mb-3">Ana Carolina <p></p>
            <button onClick={() => setPresente(!presente)}>{presente ? "🟢" : "⚪"}</button>
        </div>
    );
}