class PUT {
    static async putServer(id, object) {
            try {
                await fetch(`http://localhost:3001/words/${id}`, 
                {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(object)
                });
            }catch(e){
                console.error(e);
            }
        }
    }

export default PUT;