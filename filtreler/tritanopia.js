if (document.getElementById("stil_kimligi")) {
    stilID = document.getElementById("stil_kimligi").remove();
    filtreID = document.getElementById("filtre_kimligi").remove();
}


filtreID = document.createElement('div');
filtreID.id = "filtre_kimligi";
filtreID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filtreID);

stilID = document.createElement('style');
stilID.id = "stil_kimligi";
document.body.appendChild(stilID);

filtreID.innerHTML = '<svg id="renk-filtreleri" style="display: none"> <defs> <filter id="Tritanopia"> <feColorMatrix type="matrix" values="1,0,-0.2,0,0 0,1,0,0,0 -0.4,0,1,-1.1,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stilID.innerHTML = 'html{-webkit-filter:url(#Tritanopia);-moz-filter:(#Tritanopia);-ms-filter:(#Tritanopia);-o-filter:(#Tritanopia);filter:(#Tritanopia);}'
