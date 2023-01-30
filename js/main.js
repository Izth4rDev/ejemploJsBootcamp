


function cambiar(imagen){


   let img = document.querySelector('img');
   let titulo = document.querySelector('h1');
    let fondo = document.querySelector('body');
   img.style.width = '50%';

   switch(imagen){

    case 1: img.src='img/descarga.jpeg';
            titulo.textContent = 'rana 1';
            fondo.style.backgroundColor = 'grey';
            break;
    case 2: img.src='img/descarga (1).jpeg';
            titulo.textContent = 'rana 2';
            fondo.style.backgroundColor = 'yellow';
            break;
    case 3: img.src='img/kermin-2.0.jpg';
        titulo.textContent = 'rana 3';
        fondo.style.backgroundColor = 'green';
            break;
   }

}