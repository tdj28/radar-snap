document.addEventListener('DOMContentLoaded', function(){

var myloc = localStorage["loc_choice"];
 if (!myloc) {
    var myloc="SOX";
  }

myloc = myloc.toUpperCase();
var htmllist = new Array(8);
htmllist[0]="http://radar.weather.gov/ridge/Overlays/Topo/Short/"+myloc+"_Topo_Short.jpg";
htmllist[1]="http://radar.weather.gov/ridge/RadarImg/N0R/"+myloc+"_N0R_0.gif";
htmllist[2]="http://radar.weather.gov/ridge/Overlays/County/Short/"+myloc+"_County_Short.gif";
htmllist[3]="http://radar.weather.gov/ridge/Overlays/Cities/Short/"+myloc+"_City_Short.gif";
htmllist[4]="http://radar.weather.gov/ridge/Overlays/Rivers/Short/"+myloc+"_Rivers_Short.gif";
htmllist[5]="http://radar.weather.gov/ridge/Overlays/Highways/Short/"+myloc+"_Highways_Short.gif";
htmllist[6]="http://radar.weather.gov/Warnings/Short/"+myloc+"_Warnings_0.gif";
htmllist[7]="http://radar.weather.gov/Legend/N0R/"+myloc+"_N0R_Legend_0.gif";
  
var imgs=htmllist.map(function(URL){
   var img = new Image();
   img.setAttribute('class', 'overlayImage');
   img.src = URL;
   document.body.appendChild(img);
   return img;
});


});

