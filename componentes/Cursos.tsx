export function Cursos() {
    const cursos: string[] = ["Front-end", "Back-end", "Dados"];
    return (
        <ul className="bg-slate-800 text-white text-center fon-bold space-y-2 p-6 mb-3">
            {cursos.map(c => <li key={c}>• {c}</li>)}
        </ul>
    )
}