/*const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';

let nombreDeLaVariable = 'Bob';
nombreDeLaVariable = 'Steve';
nombreDeLaVariable;

let helado = 'chocolate';
if (helado === 'chocolate') {
  alert('¡Sí, amo el helado de chocolate!');
} else {
  alert('Awwww, pero mi favorito es el de chocolate...');
}

function multiplica(num1,num2) {
  let resultado = num1 * num2;
  return resultado;
}

document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}*/
let miImage = document.querySelector('img');
let personaje = document.querySelector('h1');

miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');

    if (miSrc === 'images/isaac.png') {
      miImage.setAttribute('src','images/magdalene.png');
      personaje.textContent = 'Magdalene';
    }else if (miSrc === 'images/magdalene.png'){
      miImage.setAttribute('src', 'images/cain.png');
      personaje.textContent = 'Cain';
    }else if (miSrc === 'images/cain.png') {
      miImage.setAttribute('src','images/eve.png');
      personaje.textContent = 'Eve';
    }else if (miSrc === 'images/eve.png') {
      miImage.setAttribute('src','images/judas.png');
      personaje.textContent = 'Judas';
    }else if (miSrc === 'images/judas.png') {
      miImage.setAttribute('src','images/desconocido.png');
      personaje.textContent = 'Desconocido';
    }else if (miSrc === 'images/desconocido.png') {
      miImage.setAttribute('src','images/samson.png');
      personaje.textContent = 'Samson';
    }else if (miSrc === 'images/samson.png') {
      miImage.setAttribute('src','images/lazaro.png');
      personaje.textContent = 'Lazaro';
    }else if (miSrc === 'images/lazaro.png') {
      miImage.setAttribute('src','images/azazel.png');
      personaje.textContent = 'Azazel';
    }else if (miSrc === 'images/azazel.png') {
      miImage.setAttribute('src','images/eden.png');
      personaje.textContent = 'Eden';
    }else if (miSrc === 'images/eden.png') {
      miImage.setAttribute('src','images/thelost.png');
      personaje.textContent = 'The Lost';
    }else if (miSrc === 'images/thelost.png') {
      miImage.setAttribute('src','images/lilith.png');
      personaje.textContent = 'Lilith';
    }else if (miSrc === 'images/lilith.png') {
      miImage.setAttribute('src','images/keeper.png');
      personaje.textContent = 'Keeper';
    }else if (miSrc === 'images/keeper.png') {
      miImage.setAttribute('src','images/apollyon.png');
      personaje.textContent = 'Apollyon';
    }else if (miSrc === 'images/apollyon.png') {
      miImage.setAttribute('src','images/theforgotten.png');
      personaje.textContent = 'The Forgotten';
    }else {
      miImage.setAttribute('src', 'images/isaac.png');
      personaje.textContent = 'Isaac';
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Escriba su nombre aqui:');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Hola ' + miNombre+','+' ten un buen dia :D';
  }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hola ' + nombreAlmacenado+','+' ten un buen dia :D';
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}