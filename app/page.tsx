'use client';

import CardAluno from "@/componentes/CardAluno";
import Rodape from "@/componentes/Rodape";
import Titulo from "@/componentes/Titulo";
import { Header } from "@/componentes/Header";
import { Contador } from "@/componentes/Contador";
import { SecaoTurma } from "@/componentes/SecaoTurma";
import { Pagina } from "@/componentes/Pagina";
import { MuralDaTurma } from "@/componentes/Muraldaturma";
import { Painel } from "@/componentes/Painel";
import { Alunos } from "@/componentes/Alunos";
import { Lista } from "@/componentes/Lista";
import { Turma } from "@/componentes/Turma";
import { Cursos } from "@/componentes/Cursos";
import { PropNumero } from "@/componentes/PropNumero";
import { Ola } from "@/componentes/Ola";
import { useState } from "react";
import { ContadorMaisUm } from "@/componentes/ContadorMaisUm";
import { ContadorRetroativo } from "@/componentes/ContadorRetroativo";
import { LigaDesliga } from "@/componentes/LigaDesliga";
import { TrocaCor } from "@/componentes/TrocaCor";

function MostarEsconder() {
  const [visivel, setVisivel] = useState<boolean>(false)
  return (
    <div className="flex text-center ml-4">
      <button className="bg-slate-800 hover:bg-slate-700 rounded-sm text-white font-bold px-4 py-2 mb-2"
        onClick={() => setVisivel(!visivel)}>Mudar</button>
        {visivel && <p className="text-xl text-black">Aluno ativo!</p>}
    </div>
  );
}

function InputControlado() {
  const [text, setText] = useState<string>("");
  return(
    <div className="bg-slate-800 flex flex-col rounded-lg p-4 mb-3 w-100">
        <input className="bg-slate-400 rounded-sm ml-4" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="Olá, estudante!"
      /> 
        <p className="text-white ml-4">Você digitou: {text} <br />
          Caracteres: {text.length}
        </p>
        <div className="text-center">
        <button onClick={() => setText("")} className="bg-slate-400 hover:bg-slate-500 px-2 py-2 rounded-sm">Limpar</button>
        </div>
    </div>
  );
}

export default function Home() {
  const nome = "Daniel Guimarães";
  const curso = "Front-end";
  return (
    <div>
      <Titulo nome="Curso Front-end"/>
      <LigaDesliga />

      <InputControlado />

      <Ola/>

      <MostarEsconder />

      <ContadorMaisUm />
 
      <ContadorRetroativo />

      <TrocaCor />

      <Painel titulo="Turma Front-end" children="11 alunos matriculados">
      </Painel>

      <div className="flex gap-2 p-5 bg-slate-800">
        <CardAluno aluno={{ nome: "Luis Felipe", curso: "Front-end", nota: 7, presente: true, bolsista: true }} />
        <CardAluno aluno={{ nome: "Daniel Guimarães", curso: "Front-end", nota: 5, presente: false, bolsista: true }} />
        <CardAluno aluno={{ nome: "Ana Silva", curso: "Front-end", nota: 8, presente: true }} />
      </div>

      <Alunos nome="Luis Felipe" curso="Front-end" situacao="aprovado" cor="verde"/>

      <Turma />

      <Lista />

      <Cursos />

      <PropNumero nome="Luis Felipe" nota={7} />

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