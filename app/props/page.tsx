import { Caixa } from "@/componentes/Caixa";
import { Card } from "@/componentes/Card";
import { Idade } from "@/componentes/Idade";
import { Lista } from "@/componentes/Lista";
import { Ola } from "@/componentes/Ola";
import { Perfil } from "@/componentes/Perfil";
import { Pessoas } from "@/componentes/Pessoas";
import { Saudacao } from "@/componentes/Saudacao";
import { Status } from "@/componentes/Status";

function Badge({ texto }: any) {
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

function Vip({ nome, vip, online }: any) {
  return (
    <div className="absolute top-45 left-200 bg-slate-300 w-30 rounded-2x1 p-6 shadow-lg text-center">
      <h3 className="text-x1 text-black font-bold">{nome}</h3>
      {vip && <span>⭐Vip</span>} <br />
      {online ? "🟢 online" : "⚪offline"}
    </div>
  );
}

function Produtos({ id, nome, preco }: any) {
  const produtos = [
    { id: 1, nome: "Teclado", preco: 100 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Fone", preco: 70}
  ];
  return (
    <ul className="text-black space-y-1">
      {produtos.map(p => <li key={p.id} className="bg-white rounded-x1 px-4 py-2 w-40 shadow-sm">{p.nome} - R$ {p.preco}</li>)}
    </ul>
  );
}

function App({ id, nome, ativo }: any) {
  const pessoas = [
    { id: 1, nome: "Luis", ativo: true },
    { id: 2, nome: "Ana", ativo: false },
    { id: 3, nome: "Pedro", ativo: true }
  ]
  return (
    <div className="flex flex-gap-3">
      {pessoas.filter(p => p.ativo).map(p => <div key={p.id} className="bg-white shadow-lg rounded-x1 p-4 font-bold">{p.nome}</div>)}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <Saudacao nome="Luis" />

      <Perfil cargo="Desenvolvedor" />

      <Card nome="Luis"  cargo="Back-end" />
      
     <Idade idade={22} />

     <Status />

    <Caixa>
      <h3>Lingueagem: Java Framework: SpringBoot</h3>
    </Caixa>

    <Ola />

    <Lista />

    <Pessoas /><br />

    <Vip nome="Luis" vip="vip" online="online"/>

    <App nome="Luis, Daniel"/>

    <Produtos />

    <Badge texto="Back-end"/>
    <Badge texto="Front-end"/>
    <Badge texto="Dados"/>
    </div>
  );
}