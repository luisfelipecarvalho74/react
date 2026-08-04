type painelProps = {
    children: React.ReactNode;
    titulo: string;
};

export function Painel({ titulo, children }: painelProps) {
    return (
        <div className="bg-slate-800 text-white p-4  shadow">
            <h2 className="text-xl font-bold text-white">{titulo}</h2>
            {children}
        </div>
    )
}