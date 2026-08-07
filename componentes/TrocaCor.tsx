import { useState } from "react";

export function TrocaCor() {
    const [cor, setCor] = useState<string>("#4A525A");
    return(
        <div className="flex flex-col w-29 ml-4 ">
            <div className="w-30 h-30 rounded-sm mx-auto mb-3" style={{ backgroundColor: cor }}></div>
            <div className="flex gap-2 justify-center">
                <button className="bg-slate-800 hover:bg-blue-800 text-white font-bold rounded-lg px-2 py-1" onClick={() => setCor("#1E40AF")}>Azul</button>
                <button className="bg-slate-800 hover:bg-cyan-600 text-white font-bold rounded-lg px-2 py-1" onClick={() => setCor("#0891B2")}>Ciano</button>
            </div>
        </div>
    );
}