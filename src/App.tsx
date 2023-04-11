import { ContextoProvider } from "./context/contexto";
import Principal from "./pages/principal";

export default function App () {
  return(
    <ContextoProvider>
      <Principal />
    </ContextoProvider>
  );
}