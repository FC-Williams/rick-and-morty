import { useEffect } from "react";
import Character from "../../classes/Character";

const Home = () => {

    const fetchData = () => {
        Character.getAll();
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <></>
    )
}

export default Home;