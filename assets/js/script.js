const contenido = document.querySelector("#contenido");
const personaje = document.querySelector("#personaje");
const context = document.querySelector("#context");
const conload = document.querySelector("#conload");

const duracionTransicion = 1000;
let posicion = 0;

const data =[
  {
    name:"Fondo 1",
    image:"url(assets/images/uno.jpg)",
    title:"Tutorial",
    description:"Animación de spriter con css y javascript",
    animationEntrada:[ { left:"-120px" }, { left:"0px" } ],
    durationEntrada:{ duration:2000, fill:'forwards' },
    animationSalida:[ { left:"0%" }, { left:"100%" } ],
    durationSalida:{ duration:8000, fill:'forwards' },
    animationText:[{let:'-450px'},{left:'0px'}],
    durationText:{ duration:1000, fill:'forwards' }
  },
  {
    name:"Fondo 2",
    image:"url(assets/images/dos.jpg)",
    title:"Tutorial 2",
    description:"Animación de spriter con css y javascript",
    animationEntrada:[ { left:"-120px", bottom:'0px' }, { left:"0px", bottom:'0px' } ],
    durationEntrada:{ duration:2000, fill:'forwards' },
    animationSalida:[ { left:"0%", bottom:'0px' }, { left:"100%", bottom:'0px' } ],
    durationSalida:{ duration:8000, fill:'forwards' },
    animationText:[{let:'-450px'},{left:'0px'}],
    durationText:{ duration:1000, fill:'forwards' }
  },
  {
    name:"Fondo 3",
    image:"url(assets/images/tres.jpg)",
    title:"Tutorial 3",
    description:"Animación de spriter con css y javascript",
    animationEntrada:[ { left:"-120px" }, { left:"0px" } ],
    durationEntrada:{ duration:2000, fill:'forwards' },
    animationSalida:[ { left:"0%" }, { left:"100%" } ],
    durationSalida:{ duration:8000, fill:'forwards' },
    animationText:[{let:'-450px'},{left:'0px'}],
    durationText:{ duration:1000, fill:'forwards' }
  },
  {
    name:"Fondo 4",
    image:"url(assets/images/cuatro.jpg)",
    title:"Tutorial 4",
    description:"Animación de spriter con css y javascript",
    animationEntrada:[ { left:"-120px" }, { left:"0px" } ],
    durationEntrada:{ duration:2000, fill:'forwards' },
    animationSalida:[ { left:"0%" }, { left:"100%" } ],
    durationSalida:{ duration:8000, fill:'forwards' },
    animationText:[{let:'-450px'},{left:'0px'}],
    durationText:{ duration:1000, fill:'forwards' }
  }
];
let datos;

window.onload = function(){  
  datos = data[posicion];
  contenido.style.backgroundImage = datos.image;
  load();
}
function load(){
  conload.style.display = 'inline-block';
  animacion(conload,[{opacity:1, opacity:0}], { duration:1000, fill:'forwards' }, function(){   
    conload.style.display = 'none'; 
    init(); 
  })  
}
function init(){

  

  document.querySelector("#context h1").innerHTML = datos.title;
  document.querySelector("#context p").innerHTML = datos.description;

  
  personaje.classList.add('caminar');
  animacion(personaje, datos.animationEntrada, datos.durationEntrada, function(){
    personaje.classList.remove('caminar');
    animacion(context, datos.animationText, datos.durationText, function(){
      
      personaje.classList.add('caminar');
      animacion(personaje, datos.animationSalida, datos.durationSalida, function(){
        personaje.classList.remove('caminar');

        if(posicion >= data.length-1){ 
          conload.innerHTML = "Fin :)";
        }
        conload.style.display = 'inline-block';
        animacion(conload,[{opacity:0, opacity:1}], { duration:1000, fill:'forwards' }) 
        setTimeout(() => {
          posicion++;
          if(posicion>=data.length){ 
            conload.innerHTML = "Fin :)";
          
          } else{
            
            datos = data[posicion];
            animacion(context, [{left:'0px'}, {left:'-450px'}], {duration:0, fill:'forwards'});
            contenido.style.backgroundImage = datos.image;
            load();
          }
        }, duracionTransicion);
      });


    })
  })

}