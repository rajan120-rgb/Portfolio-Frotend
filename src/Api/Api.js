
const API_URL = "http://localhost:8000/api"

export const Api = async (endpoints) => {
   try {
     const token = "1|CgqkCkppmp4fwHVLOmkd62IlVJZNEBw7U7dZx57bcbcb1122"
    const response = await fetch(`${API_URL}${endpoints}`, {
         method: "GET",
        headers: {
            // "Content-Type": "application/json",
            "Accept": "application/json",
             "Authorization": `Bearer ${token}`,
        }
    })
    const data = await response.json();
    // console.log(data);
    return data;
   } catch (error) {
    console.log("Something went wrong")
    return null
   }
}
