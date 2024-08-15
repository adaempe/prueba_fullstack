import { useEffect } from "react";
import { usePoke } from "../context/pokesContext";

export function PokesPage() {
  const { pokes, getPokes } = usePoke();

  useEffect(() => {
    getPokes();
  }, []);

  return (
    <>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      <h1 className="text-2xl font-bold">Pokes Guardados</h1>


        {pokes.map((pokes) => (
          <i key={pokes._id}>{pokes.atributo} </i>
        ))}
      </div>
    </>
  );
}
