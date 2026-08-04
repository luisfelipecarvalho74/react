type Aluno = { nome: string
    curso: string;
    nota: number;
    presente: boolean;
    bolsista?: boolean;
 };

export default function CardAluno({ aluno }: { aluno: Aluno }) {
    return(
        <div className="bg-blue-900 rounded font-bold px-6 py-2 text-center items-center justify-center">
           <div className="text-2-1">😎</div>
           <h3 className="text-center font-bold text-slate-200">{aluno.nome} {aluno.bolsista && "🎓"}</h3>
           <div className="text-center text-slate-200">{aluno.curso} • nota {aluno.nota} {aluno.nota >= 6 ? "✅" : "❌"}</div>
           <div className="text-center">{aluno.presente ? "🟢" : "⚪"}</div>
        </div>
    );
}