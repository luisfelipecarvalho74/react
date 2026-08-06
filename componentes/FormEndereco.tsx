import { useState } from "react";

export function FormEndereco() {
    const [form, setForm] = useState({ cep: "", rua: "", numero: "", bairro: "", cidade: "", estado: "" })

    const inputs = (e: React.ChangeEvent<HTMLInputElement>) => { const { name, value } = e.target; 
    setForm({ ...form, [name]: value}) }

    const [erro, setErro] = useState("");

    const handleCep = async () => {
        const cepLimpo = form.cep.replace(/\D/g, "");

        setErro("");
        if (cepLimpo.length !== 8) {
            return;
        }

        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const dados = await resposta.json();

            if (dados.erro) {
                setErro("CEP nã encontrado");
                return;
            }
            setForm({
                ...form,
                rua: dados.logradouro || "",
                numero: dados.complemento || "",
                bairro: dados.bairro || "",
                cidade: dados.localidade || "",
                estado: dados.estado || "",
            });
        } catch (error) {
            setErro("Erro ao buscar o CEP")
        }
    }

    return (
        <div className=" text-center flex flex-col gap-4 p-4 bg-slate-500 items-center">
            <h2 className="text-xl font-bold mb-3">Formulário de Endereço</h2>
            
            <form className="flex flex-col ap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-black"></label>
                    <input type="text" name="cep" value={form.cep} onChange={inputs} onBlur={handleCep} placeholder="CEP(ex.:01310100)"  className=" w-full px-3 py-2 border rounded-md" />

                    <label className="text-sm font-medium text-black"></label>
                    <input type="text" name="rua" value={form.rua} onChange={inputs} placeholder="Rua" className="w-full px-3 py-2 border rounded-md"/>

                    <label className="text-sm font-medium text-black"></label>
                    <input type="text" name="numero" value={form.numero} onChange={inputs} placeholder="Complemento" className="w-full px-3 py-2 border rounded-md"/>

                    <label className="text-sm font-medium text-black"></label>
                    <input type="text" name="cidade" value={form.cidade} onChange={inputs} placeholder="Cidade" className="w-full px-3 py-2 border rounded-md"/>

                    <label className="text-sm font-medium text-black"></label>
                    <input type="text" name="estado" value={form.estado} onChange={inputs}placeholder="Estado" className="w-full px-3 py-2 border rounded-md"/>
                </div>
            </form>
        </div>
    );
}