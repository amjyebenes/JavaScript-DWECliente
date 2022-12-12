const textos = document.querySelectorAll('p');

let aumentar = document.getElementById('aumentar');

var classes = ["h1", "h2", "h3", "h4", "h5"];
var classIndex = 0;


aumentar.addEventListener('click', function() {
    let previousClass = classIndex;
    classIndex++;
    classIndex = (classIndex == classes.length) ? classes.length - 1 : classIndex;
    changeClass(previousClass, classIndex);
  });

function changeClass(previous, next) {
    if(previous != next) {
        textos.forEach(e =>{
            e.classList.remove(classes[previous]);
            e.classList.add(classes[next]);
        })
    }
}

document.getElementById('anadir').addEventListener('click', function(){
    let pNuevo = document.createElement("p");
    let t = document.createTextNode("Este es el parrafo añadido al pulsar sobre el boton anadir parrafo");
    pNuevo.appendChild(t);
    aumentar.insertAdjacentElement("beforebegin", pNuevo);
})

document.getElementById('invertir').addEventListener("click",function(){
    textos.forEach(element => {
        let nuevot = element.textContent.split().reverse()[0];
        let p = document.createElement('p');
        let texto = document.createTextNode(nuevot.split().reverse());
        p.appendChild(texto);
        document.body.removeChild(element);
        document.body.appendChild(p);
    });
});

textos[0].addEventListener('mouseover', function(){
    textos[0].style.backgroundColor = 'black';
    textos[0].style.color = 'white';
})
textos[0].addEventListener('mouseleave', function(){
    textos[0].style.backgroundColor = 'white';
    textos[0].style.color = 'black';
})
  