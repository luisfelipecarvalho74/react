export default function CardAluno({ nome, curso = "Front-end", nota, presente, bolsista }: { nome: string; curso: string; nota: number; presente: boolean; bolsista: boolean; }) {
    return(
        <div className="bg-blue-900 rounded-2xl font-bold px-4 py-2 text-center">
           <div className="text">😎</div>
           <div className="text-center font-bold text-white">{nome}</div>
           <div className="text-center text-slate-300">{curso}</div>
           <div className="text-center text black">{nota}</div>
           <div className="text-center text-black">{presente ? "🟢" : "⚪"}</div>
           <div className="text-center text-black">{bolsista && <span>🎓</span>}</div>
        </div>
    );
}