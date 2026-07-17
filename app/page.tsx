import CardAluno from "@/componentes/CardAluno";
import Rodape from "@/componentes/Rodape";
import Titulo from "@/componentes/Titulo";
import { Header } from "@/componentes/Header";
import { Contador } from "@/componentes/Contador";
import { SecaoTurma } from "@/componentes/SecaoTurma";
import { Pagina } from "@/componentes/Pagina";
import { MuralDaTurma } from "@/componentes/Muraldaturma";


export default function Home() {
  const nome = "Daniel Guimarães";
  const curso = "Front-end";
  return (
    <div>
      <Titulo/>

      <div className="flex gap-2 p-5">
        <CardAluno/>
        <CardAluno/>
        <CardAluno/>
      </div>
      <p className="p-1 text-slate-600">{`${nome} - ${curso}`}</p>

      <p className="font-sans p-1">Nota final: {8 + 1}</p>

      <p className="bg-white rounded-2x1 w-50 px-6 shadow-lg text-slate-800 font-bold">Daniel Guimarães</p>

      <img src="https://placehold.co/70x70/55C8E6/152C69?text=Aluno" alt="Avatar do aluno" className="rounded-full shadow-md"/>
      
      <>
        <h3>{`${nome} - ${curso}`}</h3>
      </>

      <SecaoTurma/> <br />

      <Header/><br />

      <Contador/>

      <Rodape/><br />

      <Pagina/><br />

      <MuralDaTurma/>
    </div>
    );
}