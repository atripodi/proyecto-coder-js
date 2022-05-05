const getData = async () => {
    try {
        // ejecuto este código y si hay algún error lo capturo con catch. Await para esperar la request, y lo almaceno en la variable "response"
        const response = await fetch ("/stock.json") // --> en formato Json
        const data = await response.json(); // parseo, formato array de objetos
        console.log(data);

        return data;
    } catch (error) {
        console.log("Hubo un error", error) //muestro el error
    }
}

export {getData}

