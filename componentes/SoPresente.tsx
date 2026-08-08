import { useState } from "react";

type Aluno = { id: number; nome: string; presente: boolean; }

export function SoPresente() {
    const [so, setSo] = useState<boolean>(false);
    const [alunos] = useState<Aluno[]>([
        { id: 1, nome: "Luis Felipe", presente: true },
        { id: 2, nome: "Daniel Guimarães", presente: false }
    ]);

    return(
        <div className="text-center">
            <button className="bg-slate-800 hover:bg-slate-600 text-white font-bold px-4 py-2 rounded-sm mb-3" onClick={() => setSo(!so)}>Só presentes</button>
            <ul>{alunos.map(a => (!so || a.presente) && <li key={a.id}>{a.nome}</li>)}</ul>
        </div>
    );
}