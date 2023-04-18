import { useState, useEffect, createContext } from "react";
import GET from '../Services/GET';
import Loading from "../components/Loading/Loading";

export const globalContext = createContext();

export function ContextProvider ({children}){
    const [words, setWords] = useState();
    const [languages, setLanguages] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    async function getServiceData(){
        const wordsResponce = await GET.getWords();
        const languagesResponce = await GET.getLanguages();
        setWords(wordsResponce);
        setLanguages(languagesResponce);
    }
    
    useEffect(() => {
        getServiceData();
    }, [isLoaded]);

    if(!words && !languages){
        return <Loading/>
    }
    const value = {words, setWords, languages, setLanguages, isLoaded, setIsLoaded};

    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    );
}