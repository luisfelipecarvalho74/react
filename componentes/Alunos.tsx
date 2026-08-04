type Aluno = { id: number;
  nome: string;
  curso: string;
  situacao: "aprovado" | "recuperacao";
  cor: string;
 }

export function Alunos ({ nome, curso, situacao, cor }: { nome: string; curso: string; situacao: "aprovado" | "recuperacao"; cor: "verde" | "vermelho"; }) {
  const cores = cor === "verde" ? "bg-green-500 text-green-100" : "bg-red-500 text-red-500";
    const a: Aluno = { id: 1, nome, curso, situacao, cor }
        return (
          <div className="bg-slate-800 text-center text-white p-4">
            <h3 className="text-xl font-bold text-white">{a.nome}</h3>
            <p className="text-slate-400">{a.curso}</p>
            <p className="text-slate-400">{situacao}</p>
            <p className={`px-4 roudend font-bold"  ${cores}`}>{cor}</p>
          </div>
        );
};

    
