class Pelicula{
    constructor(id, titulo, director, ano, pais, genero, calificacion){
        
        if((/^[a-zA-Z]{2}\d{7}$/.test(id))){
            this.id=id;
        }else alert("error al introducir el id " + id);

        if((/^[a-zA-Z]{1,100}$/.test(titulo))){
            this.titulo = titulo;
        }else alert("error al introducir el titulo " + titulo);

        this.director = director;
        
        if((/^\d{4}$/.test(ano))){
            this.ano = ano;
        }else alert("error al introducir el ano " + ano);

        if(typeof pais == "string"){
            this.pais = pais;
        }else alert("error al introducir el pais " + pais);

        if(this.generos().includes(genero)){
            this.genero = genero;
        }else alert("error al introducir el genero " + genero);
        
        this.calificacion = calificacion;
    }

    get getId(){
        return this.id;
    }

    get getTitulo(){
        return this.titulo;
    }

    get getDirector(){
        return this.director;
    }

    get getAno(){
        return this.ano;
    }

    get getPais(){
        return this.pais;
    }

    get getGenero(){
        return this.genero;
    }

    get getCalificacion(){
        return this.calificacion;
    }

    generos(){
        return ["Action", "Adult", "Adventure", "Animation", 
        "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", 
        "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", 
        "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", 
        "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    

    fichaTecnica(){
        let p = document.createElement("p");
        let id = document.createTextNode("id: "+ this.getId);
        let titulo = document.createTextNode("titulo: "+ this.getTitulo);
        let director = document.createTextNode("director: "+ this.getDirector);
        let ano = document.createTextNode("ano: "+ this.getAno);
        let calificacion = document.createTextNode("calificacion: "+ this.getCalificacion);
        let pais = document.createTextNode("pais: "+ this.getPais);
        let genero = document.createTextNode("genero: "+ this.getGenero);
        let salto = document.createElement("br");
        let salto2 = document.createElement("br");
        let salto3 = document.createElement("br");
        let salto4 = document.createElement("br");
        let salto5 = document.createElement("br");
        let salto6 = document.createElement("br");

        p.appendChild(id);
        p.appendChild(salto);
        p.appendChild(titulo);
        p.appendChild(salto2);
        p.appendChild(director);
        p.appendChild(salto3);
        p.appendChild(ano);
        p.appendChild(salto4);
        p.appendChild(calificacion);
        p.appendChild(salto5);
        p.appendChild(pais);
        p.appendChild(salto6);
        p.appendChild(genero);
        document.body.appendChild(p);

    }
}

function mostrarPeliculas(){
    let peli1 = new Pelicula("ab1111111","pelicula","director1","1999","españa","Action","+16");
    let peli2 = new Pelicula("ab1234565","pelicula","director3","1990","españa","Fantasy","+16");
    let peli3 = new Pelicula("ab1234564","pelicula","director3","1991","españa","Mystery","+16");

    document.write(peli1.fichaTecnica());
    document.write("===============");
    document.write(peli2.fichaTecnica());
    document.write("===============");
    document.write(peli3.fichaTecnica());
}

document.addEventListener("load",mostrarPeliculas());