export function Ola() {
    return (
        <div className="text-center">
            <button
            className="bg-slate-800 text-white font-bold p-5 rounded-lg mb-3" onClick={() => alert("Olá, Turma")}>
                Saudar
            </button>
        </div>
    );
}