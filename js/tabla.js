export const crearTabla = (data)=>{

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const cabecera = document.createElement("tr");    
    
    //cargo el thead
    for (const key in data[0]) {
        if(key !== "id"){
            const th = document.createElement("th");
            const contenido = document.createTextNode(key);
            th.appendChild(contenido);
            cabecera.appendChild(th);
            
            ///CABECERA CUSTOM - CAMBIAR DEPENDIENDO DE LA TABLA
            switch(key){
                case "titulo":
                    th.textContent = "Título";
                    break;
                case "transaccion":
                    th.textContent = "Transacción";
                    break;
                case "precio":
                    th.textContent = "Precio";
                    break;
                case "puertas":
                    th.textContent = "Nº Puertas";
                    break;
                case "potencia":
                    th.textContent = "Potencia";
                    break;
                case "descripcion":
                    th.textContent = "Descripción";
                    break;
                case "kms":
                    th.textContent = "Kilometraje";
                    break;
                case "polarizado":
                    th.textContent = "Polarizado";
                    break;
                case "cierre":
                    th.textContent = "Cierre Centralizado";
                    break;  
                case "alarma":
                    th.textContent = "Alarma";
                    break; 
                case "seguro":
                    th.textContent = "Seguro";
                    break;  
                default:
                    th.textContent = key;
                    break;
            }
        }                
    }

    thead.appendChild(cabecera);
    tabla.appendChild(thead);
    
    //cargo el tbody
    data.forEach((element) => {
        const tr = document.createElement("tr");
        for (const key in element) {
            if(key === "id"){
                tr.setAttribute("id", element[key]);
            }
            else{
                const td = document.createElement("td");
                switch (element[key]) {
                    case true:
                        td.textContent = "SI";                        
                        break;
                    case false:
                        td.textContent = "NO";                        
                        break;                
                    default:
                        td.textContent = element[key];
                        break;
                }

                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);    
    });

    tabla.appendChild(tbody)

    return tabla;
}