import { Card } from "@/componentes/Card";
import { Perfil } from "@/componentes/Perfil";
import { Saudacao } from "@/componentes/Saudacao";

export default function Page() {
  return (
    <div>
      <Saudacao nome="Luis" />

      <Perfil cargo="Desenvolvedor" /><br />

      <Card nome="Pedro"  cargo="Engenheiro"/>
    </div>
  );
}