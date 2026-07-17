function Header() { return <header className="bg-slate-500 text-white px-5 py-3 rounded-x1 font-bold">Turma Front-end</header>; }
function CardAluno() { return <div className="bg-white text-black px-4 py-3 rounded-x1 font-bold">Luis Felipe</div> }
function Rodape() { return <footer className="text-white text-sm">© 2026 Luis Felipe</footer> }

export function Pagina() {
    return (
        <div className="flex flex-col gap-3 items-center">
            <Header/>
            <CardAluno/>
            <Rodape/>
            <p></p>
            <div>
                {/*Cards de alunos*/}
                <h2 className="bg-slate-500 p-10 py-10 text-slate font-bold">Turma 2026</h2>
            </div>
        </div>
    );
}