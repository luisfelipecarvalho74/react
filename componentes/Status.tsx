export function Status( ativo: any ) {
    return <span className="text-black font-bold">{ativo ? "Ativo" : "Inativo"}</span>;
}