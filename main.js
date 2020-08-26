function Map(){
    this.color=function(element,colorfill,coloropacity){
        element.style.transition="0.5s 0.1s all ease";
        element.style.fill=colorfill;
        if(typeof coloropacity != "undefined"){
            element.style.fillOpacity=coloropacity;
        }
    }
}

let list_region=document.querySelectorAll(".amcharts-map-area");//Link the dom
for(let i=0;i<list_region.length;++i){//Attribute to all tag with class are amcharts-map-area the following instruction
    list_region[i].addEventListener("click",function(e){
        let map=new Map();
        if(e.currentTarget.style.fill=="red"){
            map.color(e.currentTarget,"white");
        }else{
            map.color(e.currentTarget,"red",1);
        }
        
        
    },false);
    
}