import { useState } from "react";

export function LigaDesliga() {
    const [presente, setPresente] = useState<boolean>();
    return (
        <div className=" absolute top-6 left-430 rounded-sm text-xl text-white text-center mb-3">
            <button onClick={() => setPresente(!presente)}>
                {presente ? "🟢 Presente" : "⚪ Ausente"}
            </button>
        </div>
    );
}