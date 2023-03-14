import tabla from "./tabla.js";
export default {
    name : document.querySelector("#myForm"),
    data: [],
    Enviar(){
        this.name.addEventListener("submit", (e)=>{
            this.data.push(Object.fromEntries(new FormData (e.target)))
            this.name.reset();
            e.preventDefault();
            tabla.datso();
            this.data = []
        })
    }
}