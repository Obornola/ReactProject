class GET {
    static async getWords(){
        try{
            const responce = await fetch ('http://localhost:3001/words');
            const words = await responce.json();
            return words;

        }catch(event){
            console.error(event);
        }
    }

    static async getLanguages(){
        try{
            const responce = await fetch ('http://localhost:3001/languages');
            const languages = await responce.json();
            return languages;

        }catch(event){
            console.error(event);
        }
    }
}

export default GET;