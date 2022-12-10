document.addEventListener("click", e => {
    let primercursoDAW = ["ED", "BD", "PROG", "ISO", "FOL1"];
    let segundocursoDAW = ["DWEC", "DWES", "DEW", "DIW", "EMP1"];
    let primercursoSMR = ["APO", "RL", "SOM", "MME", "FOL2"];
    let segundocursoSMR = ["AW", "SI", "SR", "SOR", "EMP2"];

    let checkboxs = document.querySelectorAll("input[type=checkbox]");
    checkboxs.forEach(element => {
        if (e.target.parentNode.parentNode.name == "formulario1" && e.target.parentNode.name =="curso1") {
            if (e.target.value == '1º') {
                if (primercursoDAW.includes(element.id)) {
                    element.checked = true;
                }
                if (segundocursoDAW.includes(element.id)) {
                    element.checked = false;
                }
            } else if (e.target.value == '2º') {
                if (primercursoDAW.includes(element.id)) {
                    element.checked = false;
                }
                if (segundocursoDAW.includes(element.id)) {
                    element.checked = true;
                }
            }
        } else if (e.target.parentNode.parentNode.name == "formulario2" && e.target.parentNode.name =="curso2") {
            if (e.target.value == '1º') {
                if (primercursoSMR.includes(element.id)) {
                    element.checked = true;
                }
                if (segundocursoSMR.includes(element.id)) {
                    element.checked = false;
                }
            } else if (e.target.value == '2º') {
                if (primercursoSMR.includes(element.id)) {
                    element.checked = false;
                }
                if (segundocursoSMR.includes(element.id)) {
                    element.checked = true;
                }
            }
        }
        });
})

document.addEventListener("click", function (e) {
    let padre = e.target.parentNode.name;
    let inputs = document.querySelectorAll("input");
    let descripciones = document.querySelectorAll("textarea");

    if(e.target.value=="Enviar"){
        inputs.forEach(element => {
            if(element.parentNode.name == padre ){
                if(element.checked || element.type=="text" || element.type=="number" || element.localName == "label" || e.localName == "textarea") {
                    document.write(element.value,"<br>");
                }
            }
        });
        descripciones.forEach(element =>{
            if(element.parentNode.name == padre){
                document.write(element.value);
            }
        })
    }
})

