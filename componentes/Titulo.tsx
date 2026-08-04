export default function Titulo({ nome }: { nome: string }) {
    return (
        <div className="bg-slate-800 text-white font-bold p-5 mb-3">{nome}</div>
    );
}