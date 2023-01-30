/* 
Para usar jsonPlaceholder como una API REST falsa para simular el funcionamiento de una BD,
lo am que debemos de tener es nodejs, por tanto, habrá que seguir los pasos:
1) Visitar nodejs.org y descargar la versión que deseemmos o necesitemos
2) Instalar nodejs que hemos descargado
3) Podemos comprobar si se ha instalado bien desde el terminal de windows o del de Visual Studio Code con node -v 
4) Entrar en la página jsonPlaceholder que es la API que vamos a usar y enlazar con json-serve
5) Acceder y abajo viene como instalar json-serve para poder simular la API REST
6) Comando de instalación con el gestor de paquetes npm de nodejs: npm install -g json-server
7) Descargar la versión core de insomnia para manejar la API Falsa ( https://insomnia.rest/download/)
8) Iniciar insomnia
9) Ejecutar desde un terminal de visual estudio code: json-server -w -p puerto json, donde puerto
    por defecto es el 3333, pero podemos elegir otro para evitar conflictos, ej. 5555,
    y donde json es el objeto json a usar
10) Realizar las peticiones y pruebas necesarias
*/
const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();
    let     letrero = "am";
const getAll = async () => {
    try {
        let respuesta = await axios.get(`http://localhost:5555/${letrero}`),
            json = await respuesta.data;

        console.log(json);

        json.forEach((el) => {
            $template.querySelector(".clase").textContent = el.clase;
            $template.querySelector(".profesor").textContent = el.profesor;
            $template.querySelector(".hora").textContent = el.hora;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.clase = el.clase;
            $template.querySelector(".edit").dataset.profesor = el.profesor;
            $template.querySelector(".edit").dataset.hora = el.hora;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            //Create - POST
            try {
                let options = {
                        method: "POST",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        data: JSON.stringify({
                            clase: e.target.clase.value,
                            profesor: e.target.profesor.value,
                            hora: e.target.hora.value,
                            })
                        };
                let respuesta = await axios(`http://localhost:5555/${letrero}`, options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            //Update - PUT
            try {
                let options = {
                        method: "PUT",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        data: JSON.stringify({
                            clase: e.target.clase.value,
                            profesor: e.target.profesor.value,
                            hora: e.target.hora.value,
                            }),
                        };
                    let respuesta = await axios(`http://localhost:5555/${letrero}/${e.target.id.value}`,options );
                    let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
         //resetear los campos del formulario una vez editado un registro
         $form.clase.value=null;
         $form.profesor.value=null;
         $form.hora.value=null;
         $form.id.value=null;
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Clase";
        $form.clase.value = e.target.dataset.clase;
        $form.profesor.value = e.target.dataset.profesor;
        $form.hora.value = e.target.dataset.hora;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
        );

        if (isDelete) {
            //Delete - DELETE
            try {
                let options = {
                        method: "DELETE",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        };
                    let respuesta = await axios(`http://localhost:5555/${letrero}/${e.target.dataset.id}`,options);
                    let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});

document.addEventListener("click", (e) => {
    if (e.target.matches(".cambiar")) {
        if (d.getElementById("letrero").innerHTML == "mañana") {
            letrero = "pm";
            d.getElementById("letrero").innerHTML = "tarde";
        } else {
            letrero = "am";
            d.getElementById("letrero").innerHTML = "mañana";
        }
        deleteAll();
        getAll();
    }
});

const deleteAll = () => {
    let tabla = document.querySelector(".tbody");
    tabla.remove();
    let cuerpo = document.createElement("tbody");
    cuerpo.classList.add("tbody");
    document.querySelector(".crud-table").appendChild(cuerpo);
};
