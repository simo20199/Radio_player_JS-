class color{

constructor(){

  this.color1 = document.getElementById('color1');
  this.color1.addEventListener("click", ()=>{
  this.selectColor('color1');
  });
    this.color2 = document.getElementById('color2');
  this.color2.addEventListener("click", ()=>{
  this.selectColor('color2');
  });
    this.color3 = document.getElementById('color3');
  this.color3.addEventListener("click", ()=>{
  this.selectColor('color3');
  });
    this.color4 = document.getElementById('color4');
  this.color4.addEventListener("click", ()=>{
  this.selectColor('color4');
  });

  if(localStorage.getItem("COLOR")== null){
  document.body.style.background ='linear-gradient(#e66465, #9198e5)';

  }

  this.selectColor(localStorage.getItem("COLOR"));

}

  selectColor(color){
    if(color == "color1"){
      document.body.style.background ='linear-gradient(0.25turn, #3f87a6, #ebf8e1, #7CD892)';

    }
        if(color == "color2"){
      document.body.style.background ='linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)';

    }
    if(color == "color3"){
      document.body.style.background ='linear-gradient(0.25turn, #4FEFF4, #ebf8e1, #f69d3c)';

    }
    if(color == "color4"){
      document.body.style.background ='linear-gradient(0.25turn, #3f87a6, #ebf8e1, #EA9BF6)';

    }

    localStorage.setItem("COLOR",color);


  }

}
onload = new color();
