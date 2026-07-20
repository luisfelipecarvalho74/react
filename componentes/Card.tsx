export function Card({ nome, cargo }: any) {
    return (
        <div className="rounded-sm absolute top right-70 bg white p-6 w-100 shadow-lg text-center">
            <h3 className="text-x1 font-bold text-black">{nome}</h3>
            <p className="text-slate-400">{cargo}</p>
        </div>
    );
}