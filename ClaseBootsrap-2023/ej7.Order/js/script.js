let btnDesordenar =document.querySelector("#btnDesordenar");// lo pido por clase como css con el #

btnDesordenar.addEventListener("click",()=>{
    //console.log("Hola");
    let columnas = document.querySelectorAll(".container>div:first-child>div.col");//traigo el row el primero y de ese todos los col

    //recorro las columnas
    columnas[0].classList.add("order-3");
    columnas[1].classList.add("order-1");
    columnas[2].classList.add("order-2");


    console.log(columnas);
});