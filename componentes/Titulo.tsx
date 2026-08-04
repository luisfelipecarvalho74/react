export default function Titulo({ curso }: { curso: string }) {
    return (
        <div>
            <h1 className="bg-white text-slate-800 text-3xl p-3 rounded-lg text-center font-bold">{curso}</h1>
        </div>
    );
}