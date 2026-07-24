
const API_URL = "http://localhost:8000/api"

export const Api = async (endpoints , token) => {
    // console.log("Endpoint:", `${API_URL}${endpoints}`);
    // console.log("Token:", token);
    try {

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
