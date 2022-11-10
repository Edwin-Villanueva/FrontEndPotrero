
    function informar(){

        alert(" Creador :\n    nombre : Edwin Villanueva \n    email : edwinv.dev92@gmail.com")
    }
    function cambiarColores(){
        if(document.getElementById("modoOscuro").innerText === "ModoOscuro"){
            
            //CAMBIO EL ESTILO DEL BOTON
            document.getElementById("modoOscuro").style.backgroundColor="white";
            document.getElementById("modoOscuro").style.color="black";
            //
            //CAMBIO EL BACKGROUND
            console.log("entre");
            document.getElementById("modoOscuro").innerText="ModoClaro"
            document.body.style.backgroundColor="black";
            document.getElementsByTagName("aside")[0].style.color="white";
            document.getElementById("pasos").style.color="white";
            document.getElementById("reseña").style.color="white";
            document.getElementById("titulo").style.color="white";
            document.getElementById("parrafo1").style.color="red";
            for (const elem of document.getElementsByClassName("links")) {
                elem.style.color="white"
            }
            
            
            
            //
        }
        else{
            document.getElementById("modoOscuro").innerText= "ModoOscuro";
            document.getElementById("modoOscuro").style.backgroundColor="black";
            document.getElementById("modoOscuro").style.color="white";
            document.getElementById("modoOscuro").innerText="ModoOscuro"
            document.body.style.backgroundColor="white";
            document.getElementsByTagName("aside")[0].style.color="black";
            document.getElementById("pasos").style.color="black";
            document.getElementById("reseña").style.color="black";
            document.getElementById("titulo").style.color="black";
            document.getElementById("parrafo1").style.color="black";
            for (const elem of document.getElementsByClassName("links")) {
                elem.style.color="#0d6efd"
            }
            
            

        }
    }
       
