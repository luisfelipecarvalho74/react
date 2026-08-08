import { useState } from "react";

export function Curtidas() {
    const [curtida, setCurtida] = useState<number>(0);
    return(
        <div className="bg-slate-800 w-50 text-white p-4 rounded-sm text-center mb-3"> Daniel Guimarães
            Curtidas: {curtida}
            <button onClick={() => setCurtida(curtida + 1)} className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-sm ml-2">
                ❤️
            </button>
        </div>
    );
}
