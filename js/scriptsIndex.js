
const anuncios =  JSON.parse( localStorage.getItem( 'anuncios' )) || [] ;

console.log(anuncios);

actualizarAnucios();


function actualizarAnucios(){
    anuncios.forEach((element)=>{

        const titulo = document.createElement("h3");
        const descripcion = document.createElement("h4");
        const precio = document.createElement("p");
        const puertas = document.createElement("p");
        const kilometros = document.createElement("p");
        const potencia = document.createElement("p");
        const polarizado = document.createElement("p");
        const cierre = document.createElement("p");
        const alarma = document.createElement("p");
        const divisor = document.createElement("p");

        for (const key in element) {
            switch(key){
                case "titulo":
                    titulo.innerHTML = element[key];
                    break;
                case "descripcion":
                    descripcion.innerHTML = element[key];
                    break;
                case "precio":
                    precio.innerHTML = "$ " + element[key];
                    break;
                case "puertas":
                    puertas.innerHTML = "Puertas: " + element[key];
                    break;
                case "kms":
                    kilometros.innerHTML ="Kilometros: " + element[key];
                    break;
                case "potencia":
                    potencia.innerHTML ="Potencia: " + element[key];
                    break;
            }
            divisor.innerHTML = "----------------------------";                              
        }    

        document.getElementById('divAnuncios').appendChild(titulo);
        document.getElementById('divAnuncios').appendChild(descripcion);
        document.getElementById('divAnuncios').appendChild(precio);
        document.getElementById('divAnuncios').appendChild(puertas);
        document.getElementById('divAnuncios').appendChild(kilometros);
        document.getElementById('divAnuncios').appendChild(potencia);
        document.getElementById('divAnuncios').appendChild(polarizado);
        document.getElementById('divAnuncios').appendChild(cierre);
        document.getElementById('divAnuncios').appendChild(alarma);
        document.getElementById('divAnuncios').appendChild(divisor);
    });
};


function actualizarAnuciosNew () {

    const $divNuevo = document.getElementById("divAnuncios");
  
    anuncios.forEach((element) => {
        
        const $articulo = document.createElement("article");
  
        $articulo.classList.add("mainArticle");
        const $titulo = document.createElement("h3"); 
  
        $titulo.classList.add("mainTexto");
  
        $titulo.textContent = element.titulo;
        $articulo.appendChild($titulo);
       const $descripcion = document.createElement("p");
       $descripcion.classList.add("mainTexto");
        $descripcion.textContent = element.descripcion;
        $articulo.appendChild($descripcion);     
         const $precio = document.createElement("p");
        $precio.classList.add("mainPrecio");
        $precio.textContent = "$" + element.precio + ".-";
        $articulo.appendChild($precio);
  
  
        const $ul = document.createElement("ul");  
  
        const $li1 = document.createElement("li");
        $li1.setAttribute("class", "liAnuncio");
  
        const $img1 = document.createElement("img");
        $img1.setAttribute("src", "../assets/puerta.png");
        $img1.setAttribute("width", "20px");
        $img1.setAttribute("alt", "puertas");
        $img1.setAttribute("padding", "11px");
        $img1.classList.add("iconos");
  
        $li1.appendChild($img1);
  
        const $span1 = document.createElement("span");
  
        $span1.classList.add("iconos");
  
        $span1.textContent = element.puertas;
        $li1.appendChild($span1);  
  
        $ul.appendChild($li1);  
        const $li2 = document.createElement("li");
        $li2.setAttribute("class", "liAnuncio");

        const $img2 = document.createElement("img");  
        $img2.setAttribute("src", "../assets/tacometro.png");  
        $img2.setAttribute("width", "20px"); 
  
        $img2.setAttribute("alt", "km");
        $img2.classList.add("iconos");
  
        $li2.appendChild($img2);  
        const $span2 = document.createElement("span");
        $span2.classList.add("iconos");
        $span2.textContent = element.kms;
        $li2.appendChild($span2);
        $ul.appendChild($li2);
  
        const $li3 = document.createElement("li");
        $li3.setAttribute("class", "liAnuncio");
        
        const $img3 = document.createElement("img");
  
        $img3.setAttribute("src", "../assets/motor.png");
        $img3.setAttribute("width", "20px");
        $img3.setAttribute("alt", "potencia");
  
        $img3.classList.add("iconos");
  
        $li3.appendChild($img3);
        const $span3 = document.createElement("span");
        $span3.classList.add("iconos");
        $span3.textContent = element.potencia;
        $li3.appendChild($span3);
        $ul.appendChild($li3);
  
        $articulo.appendChild($ul);
        const $br = document.createElement("br");
        $articulo.appendChild($br);
        const $a = document.createElement("a");
        $a.setAttribute("href", "#");
        $a.textContent = "Ver Vehiculo";  
        $articulo.appendChild($a);  
        $divNuevo.appendChild($articulo);
  
    });}
