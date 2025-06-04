export async function PeticionPaxina(){
    let token = localStorage.getItem("token")
                console.log("entro ... token? ",token)
                const peticion = await fetch("/paxina-app",{
                    method:"GET",
                    headers:{
                        "Authorization": token
                    }
                })
                
                const paxinaText = await peticion.text()
                console.log("paxina ?",paxinaText)
                document.body.innerHTML = paxinaText;

                sair.addEventListener("click",()=>{
                        console.log("sair")
                        localStorage.removeItem("token");
                        location.replace("/");
                    })
}
const peticionTarefas = await fetch(endpoints.tarefas, objetoEnvio);
const tarefasText = await peticionTarefas.json();
console.log("tareas: ", tarefasText);





   const tarefas = await fetch(endpoints.tareas,obxetoEnvio)
                const tarefasJson = await tarefas.json()
  

 for (let propiedade in tarefasJson) {
        console.log(tarefasJson[propiedade], propiedade);
        let elementoP = document.createElement("p");
        elementoP.innerHTML = tarefasJson[propiedade];
        console.log("elementoP", elementoP);
        elementoDiv.append(elementoP);
        console.log(elementoDiv);
      }


const salir = document.querySelector("#salir");
salir.addEventListener("click", () => {
    console.log("salir");
    localStorage.removeItem("token");
    location.replace("/");
});
