class POST {
    static async postServer(object) {
            try {
                await fetch('http://localhost:3001/words', 
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(object)
                });
            }catch(e){
                console.error(e);
            }
        }
    }

export default POST;