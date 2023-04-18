class DELETE {
    static async deleteData(id) {
            try {
                await fetch(`http://localhost:3001/words/${id}`, 
                {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"}
                });
            }catch(e){
                console.error(e);
            }
        }
    }

export default DELETE;