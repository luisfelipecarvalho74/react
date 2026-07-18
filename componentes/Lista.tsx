export function Lista() {
    const nomes = ["Luis", "Ana", "Daniel"];
    return (
        <ol className="w-30 text-x1 space-y-1">
             {nomes.map((n, i) => <li key={i}>{i + 1}. {n}</li>)}
        </ol>
    );
}