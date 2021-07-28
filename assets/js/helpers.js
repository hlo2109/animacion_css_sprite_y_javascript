function animacion(objecto, data,options,callback=false){
  let animacion = objecto.animate(data,options);
  animacion.onfinish = function(){
    if(callback){
       return callback(true);
    }
  }
}
