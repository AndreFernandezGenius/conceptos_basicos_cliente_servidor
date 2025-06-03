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


const refMain = document.querySelector("main");


for (let tarefa in tarefasText) {
    refMain.innerHTML += `<li>${tarefasText[tarefa]}</li>`;
}


const salir = document.querySelector("#salir");
salir.addEventListener("click", () => {
    console.log("salir");
    localStorage.removeItem("token");
    location.replace("/");
});
