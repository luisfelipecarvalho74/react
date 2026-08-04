export function PropNumero({ nome, nota }: { nome: string; nota: number }) {
  return (
    <div className="bg-slate-800 text-white text-center font-bold">
      <span>{nome} - nota {nota}</span>
    </div>
  );
}