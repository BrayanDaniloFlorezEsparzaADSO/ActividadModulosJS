import formulario from "./formulario.js";
export default{
    name: document.querySelector("#rta"),
    data: [],
    frag: document.createDocumentFragment(),
    Api: async function(){
        let peticion = await fetch("./config.json");
        let json = await peticion.json();
        this.data = json;
    },
    
    Traditional(p1) {
        this.data.Traditional.forEach((val, id) => {
            if (p1 == id) {
                console.log(val[0], val[1]);
            }
        })
    },
    PointRange(p1){
        this.data["14-Point-Range"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    Letter(p1){
        this.data.Letter.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    SBGRating(p1){
        this.data["SBG-Rating"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    ProficiencyLevelWithStandard(p1){
        this.data["Proficiency-Level-With-Standard"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    datso() {
        let dat = formulario.data[0]
        this.data.Traditional.forEach((val,id)=>{
            if(dat.nota >= val[0] && dat.nota <= val[1]) {
                this.Traditional(id);
                this.PointRange(id);
                this.Letter(id);
                this.SBGRating(id);
                this.ProficiencyLevelWithStandard(id);
                this.solucion(id)
            }
        })

    },
    solucion(val) {
        this.frag = document.createDocumentFragment();
        console.log(formulario.data);
        let tab = document.createElement("TR")
        let tabTd = document.createElement("TD")
        tabTd.insertAdjacentText("beforeend", this.data.Traditional[val])
        let tab1Td = document.createElement("TD")
        tab1Td.insertAdjacentText("beforeend", this.data["14-Point-Range"][val])
        let tab2Td = document.createElement("TD")
        tab2Td.insertAdjacentText("beforeend", this.data.Letter[val])
        let tab3Td = document.createElement("TD")
        tab3Td.insertAdjacentText("beforeend", this.data["SBG-Rating"][val])
        let tab4Td = document.createElement("TD")
        tab4Td.insertAdjacentText("beforeend", this.data["Proficiency-Level-With-Standard"][val])
        tab.append(tabTd, tab1Td, tab2Td, tab3Td, tab4Td)
        this.frag.append(tab);
        this.name.append(this.frag);
    }
}