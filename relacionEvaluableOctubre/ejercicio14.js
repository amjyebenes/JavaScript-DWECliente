class Pelicula{
    constructor(id, titulo, director, ano, pais, genero, calificacion){
        
        if((/^\[A-Z]{2}d{7}$/.test(id))){
            this.id=id;
        }else alert("error al introducir el id");

        if((/^\[A-Z]{100}$/.test(titulo))){
            this.titulo = titulo;
        }else alert("error al introducir el titulo");

        this.director = director;
        
        if((/^\d{4}$/.test(ano))){
            this.ano = ano;
        }else alert("error al introducir el ano");

        if(typeof pais == 'object'){
            this.pais = pais;
        }else alert("error al introducir el pais");

        if(comprobarGenero(genero)){
            this.genero = genero;
        }else alert("error al introducir el genero");
        
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

    get generos(){
        return ["Action", "Adult", "Adventure", "Animation", 
        "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", 
        "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", 
        "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", 
        "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    comprobarGenero(eleccion){
        return this.generos().indexOf(eleccion) > 0 ? true:false;
    }

    fichaTecnica(){
        let p = document.createElement("p");
        let id = document.createTextNode("id: "+ this.getId());
        let titulo = document.createTextNode("titulo: "+ this.getTitulo());
        let director = document.createTextNode("director: "+ this.getDirector());
        let ano = document.createTextNode("ano: "+ this.getAno());
        let calificacion = document.createTextNode("calificacion: "+ this.getCalificacion());
        let pais = document.createTextNode("pais: "+ this.getPais());
        let genero = document.createTextNode("genero: "+ this.getGenero());
        p.appendChild(id);
        p.appendChild(titulo);
        p.appendChild(director);
        p.appendChild(ano);
        p.appendChild(calificacion);
        p.appendChild(pais);
        p.appendChild(genero);
        document.body.appendChild(p);

    }
    
}