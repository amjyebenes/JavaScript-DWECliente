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

        if(Array.isArray(pais)){
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
        document.write("<br>id: "+ this.getId + "<br>");
        document.write("titulo: "+ this.getTitulo + "<br>");
        document.write("director: "+ this.getDirector + "<br>");
        document.write("ano: "+ this.getAno + "<br>");
        document.write("calificacion: "+ this.getCalificacion + "<br>");
        document.write("pais: "+ this.getPais + "<br>");
        document.write("genero: "+ this.getGenero + "<br>");
        document.write("===============<br>");
    }
}

function mostrarPeliculas(){
    let peliculas = [["ab1111111","pelicula","director1","1999",["españa","francia"],"Action","+16"],
                    ["ab1234565","pelicula","director3","1990",["españa","portugal"],"Fantasy","+16"],
                    ["ab1234564","pelicula","director3","1991",["españa","italy"],"Mystery","+16"]]
    let pelis = new Array();
    for (let i = 0; i < peliculas.length; i++) {
        let peli = new Pelicula(peliculas[i][0],peliculas[i][1],peliculas[i][2],peliculas[i][3],
                                peliculas[i][4],peliculas[i][5],peliculas[i][6]);
        peli.fichaTecnica();
    }
}

document.addEventListener("load",mostrarPeliculas());