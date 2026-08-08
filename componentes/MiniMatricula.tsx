import { useState } from "react";

export function MiniMatricula() {
    const [nome, setNome] = useState<string>("");
    const [turma, setTurma] = useState<string[]>([]);
    const adicionar = () => {setTurma([...turma, nome]); setNome("")};
    return(
        <div className="text-center">
            <input className="border rounded-sm px-3 py-2" value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}/>
            <button className="bg-slate-800 hover:bg-slate-600 text-white font-bold px-4 rounded-sm ml-2" onClick={adicionar}>Matricular</button>
            <ul className="mt-3">{turma.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </div>
    );
}