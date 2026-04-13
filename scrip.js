const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
});

faders.forEach(f => observer.observe(f));

function calcular(){
  let ingreso = document.getElementById('ingreso').value;
  let resultado = document.getElementById('resultado');

  if(ingreso > 0){
    let necesidades = ingreso * 0.5;
    let deseos = ingreso * 0.3;
    let ahorro = ingreso * 0.2;

    resultado.innerHTML = `Necesidades: $${necesidades.toFixed(2)}<br>Deseos: $${deseos.toFixed(2)}<br>Ahorro: $${ahorro.toFixed(2)}`;
  } else {
    resultado.innerText = "Ingresa un valor válido";
  }
}
