function Header() { return <header className="bg-slate-800 text-white px-5 py-3 rounded-x1 font-bold w-full text-center">Mural da Turma</header>; }
function Contador() { return <span className="bg-cyan-100 text-blue-500 rounded-full px-4 py-1 font-bold">11 Alunos</span>; }
function Rodape() { return <footer className="text-white text-sm">© 2026 Luis Felipe</footer>; }

export function MuralDaTurma() {
    return(
        <div className="flex flex-col gap-3 items-center">
            <Header /><br />
            <Contador />
            <div className="flex flex-wrap gap-3 justify-center">
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Luis Felipe</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Daniel</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">João</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Pedro</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Ana</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">David</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Silas</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Manuela</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Thais</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Pedro</div>
                <div className="bg-white px-4 py-2 rounded text-slate-800 font-bold">Gustavo</div>
            </div>
            <Rodape />
        </div>
    );
}