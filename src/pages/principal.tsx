import Megasena from "../components/Megasena";
import { useContexto } from "../hooks";

export default function Principal () {
    const {megasena} = useContexto();

    return(
        <>
            {
            megasena ?
            <span>
                <Megasena />
            </span> :
            <span>
                no contexto man
            </span>
            }
        </>
    );
}