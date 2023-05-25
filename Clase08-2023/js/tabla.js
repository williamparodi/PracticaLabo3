//va a crear la tabla y va a llamar a las demas funciones
export const crearTabla =(data,colorCabecera)=>
{

    if(!Array.isArray(data)) return null//si no es un array escapo
    
    const tabla = document.createElement("table");
    tabla.appendChild(crearCabecerA(data[0],colorCabecera));
    tabla.appendChild(crearCuerpo(data));
    return tabla;
}

//creo el thead 
const crearCabecerA = (elemento,color)=>
{
    const tHead = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.style.setProperty("background-color","red");
    //creo una th por cada iteracion , es un forin
    for (const key in elemento) 
    {
        if(key === "id")continue;//omito el id sin llaves, salteo en este caso, no construyo
        const th = document.createElement("th");
        th.textContent = key;
        headRow.appendChild(th);
    }
    tHead.appendChild(headRow);

    return tHead;
}

const crearCuerpo = (data) =>
{
    if(!Array.isArray(data)) return null//si no es un array escapo

    const tBody = document.createElement("tbody");

    data.forEach((elemento,index)=>//tiene el elemento y como segundo parametro un index 
    {
        const tr =document.createElement("tr");
        //tr.addEventListener("click",handlerClick);//agrego manejador de eventos a cada tr
        if(index % 2 == 0)//agrego en numero par color
        {
            tr.classList.add("rowPar")
        }
        for (const key in elemento) 
        {
            if(key === "id")
            {
                tr.dataset.id= elemento[key];//a travez de property
                //tr.setAttribute("data-id",elemento[key])//a travez de atributo
            }
            else
            {
                const td = document.createElement("td");
                td.textContent = elemento[key];
                tr.appendChild(td);
            }       
        }
        tBody.appendChild(tr);
    });

    return tBody;
}

//agrego a todo el navegador el click, aca programo los manejador es mas eficiente

//limpio la tabla y la acyualiza
export const actualizarTabla = (contenedor,data)=>
{
    while(contenedor.hasChildNodes())//mientras tenga hijos
    {
        contenedor.removeChild(contenedor.firstElementChild);
    }
    contenedor.appendChild(crearTabla(data,"coral"));
}
/*
function handlerClick(e)//recive un objeto event
{
    //cualquiera esta bien para obtener el padre.
    const id = e.target.parentElement.getAttribute("data-id");
    //const id = e.target.parentElement.data.id;

    console.log(id);
    //console.log(e);//trae datos me interesa el target.
}
/*
function handlerClickTd(e)
{
    console.log("Soy el manejador del td");
}


function handlerClickTabla(e)
{
    console.log("Soy el manejador del tabla",e.target);
}*/