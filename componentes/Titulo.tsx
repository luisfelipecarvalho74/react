export default function Titulo({ nome }: { nome: string }) {
    return (
        <div className="bg-slate-800 text-3xl text-white text-center font-bold p-8 mb-3">{nome}</div>
    );
}