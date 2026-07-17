export function Header() {
    return (
        <header className="flex items-center justify-between bg-slate-800 text-white px-5 py-3 rounded-x1">
            <b>Turma Front-end</b>
            <nav className="flex-gap-5">
                <a href="">Inicio</a>
                <a href="">Turma</a>
            </nav>
        </header>
    );
}