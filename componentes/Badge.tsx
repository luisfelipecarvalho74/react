export function Badge({ texto }: any) {
  return <span className="px-3 py-1rounded-full bg-slate-400 text-black font-bold">{texto}</span>
}
function Ap() {
  return (
      <div className="flex gap-2">
          <Badge texto="Back-end"/>
          <Badge texto="Front-end"/>
          <Badge texto="Dados"/>
      </div>
  );
}