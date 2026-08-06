"use client";
import { useState } from "react";


export function NomeTurma( {cep, rua, bairro, cidade, uf}: any ){
    const [form, setForm] = useState<{ nome: string; idade: string; turma: string }>({ nome: "", idade: "", turma: ""});

    return(
        <div className="flex flex-col items-center gap-3 p-5 bg-slate-400 w-100">
            <h1 className="text-black text-3xl text-center font-bold m-4">Formulário</h1>
            <input className="bg-white text-black" 
            value={form.nome}
            onChange={(e) => {setForm({...form, nome : e.target.value})}} 
            />
            <p>{form.nome}</p>
            
            <input className="bg-white text-black"
            value={form.idade}
            onChange={(e) => {setForm({...form, idade : e.target.value})}}
            />
            <p>{form.idade}</p>
            
            <input className="bg-white text-black"
            value={form.turma}
            onChange={(e) => {setForm({...form, turma : e.target.value})}}
            />
            <p>{form.turma}</p>
                
            
        </div>
    );
}

