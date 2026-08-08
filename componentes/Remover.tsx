import { useState } from "react";

export function Remover() {
    const [turma, setTurma] = useState<string[]>(["Daniel Guimarães", "Luis Felipe"]);
    return(
        <div className="bg-slate-800 w-50 text-white tex-center p-4 rounded-sm mb-3">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-sm" onClick={() => setTurma(turma.filter((_, index) => index !== 1))}>
                - Remover Luis Felipe</button>
                <ul>{turma.map((nome, i) => <li key={i}>{nome}</li>)}</ul>
        </div>
    );
}