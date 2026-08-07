import { useState } from "react";

export function ContadorRetroativo() {
    const [n, setN] = useState<number>(0);
    return (
        <div className="flex flex-col w-25 text-center rounded-sm border ml-4 mb-3">
            <p className="text-3xl font-bold">{n}</p>
            <button className="bg-slate-800 text-white font-bold p-2 mb-2" onClick={() => setN(n + 1)}> + {n}
            </button>
            <button className="bg-slate-800 text-white font-bold p-2" onClick={() => setN(n - 1)}> - 1
            </button>
            <span className="text-center text-black font-bold">{n % 2 === 0 ? "Par" : "Ímpar"}</span>
        </div>
    );
}