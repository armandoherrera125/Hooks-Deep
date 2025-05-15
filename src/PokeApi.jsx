import { Card } from "./components/Card";
import { Loading } from "./components/Loading";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

export const PokeApi = () => {
    
    const { handleCounterPlus, handleCounterLess, state } = useCounter(1);
    let url = `https://pokeapi.co/api/v2/pokemon/${state}`;
    const { data, loading, error } = useFetch(url);
    return (
        <>
            {
                loading ? <Loading /> : <Card data={data} handleCounterPlus={handleCounterPlus} handleCounterLess={handleCounterLess} />

            }
        </>
    )
}
