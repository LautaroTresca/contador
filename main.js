const botonIncrease = document.getElementById("botonIncrease");
const botonDecrease = document.getElementById("botonDecrease");
const botonReset = document.getElementById("botonReset");
const contadorEnPantalla = document.getElementById("contadorEnPantalla");
let contador = 0;



//------------------FUNCIONES-------------------------

function incrementar() {
    contador += 1;
}

function reducir() {
    if(contador > 0){
        contador -= 1;
    }
}

function reset() {
    contador = 0;
}

//-------------------EVENTOS--------------------------

botonIncrease.addEventListener("click", () => {
    incrementar();
    contadorEnPantalla.innerText = contador;
})

botonDecrease.addEventListener("click", () => {
    reducir();
    contadorEnPantalla.innerText = contador;
})

botonReset.addEventListener("click", () => {
    Swal.fire({
        title: 'Estas seguro que quieres reiniciar el contador?',
        showCancelButton: true,
        confirmButtonText: 'Seguro',
        confirmButtonColor: '#dc3545',
      }).then((result) => {
        if (result.isConfirmed) {
            reset();
            contadorEnPantalla.innerText = contador;
            Toastify({
                text: "Reiniciado",
                duration: 1500,  
                gravity: "top",
                position: "right", 
                style: {
                  background: "#0d6efd",
                  boxShadow: "none",
                },
                onClick: function(){} 
              }).showToast();
        }
      })
})