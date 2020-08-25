var list_region=document.querySelectorAll(".amcharts-map-area");//Link the dom
for(var i=0;i<list_region.length;++i){//Attribute to all tag with class are amcharts-map-area the following instruction
    list_region[i].addEventListener("click",function(e){
        
        if(e.currentTarget.style.fill=="red"){
            e.currentTarget.style.fill="white";
        }else{
            e.currentTarget.style.transition="0.5s 0.1s all ease";
            e.currentTarget.style.fill="red";
            e.currentTarget.style.fillOpacity=1;
        }
        
        
    },false);
    
}