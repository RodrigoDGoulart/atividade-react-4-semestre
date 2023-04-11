import { useContexto } from "../../hooks";

export default function Megasena() {
    const {megasena} = useContexto();
    return(
        <div>
            {megasena.numeroDoConcurso}
        </div>
    );
}