const anchorForId=function(id,innerHTML){const anchor=document.createElement("a");anchor.href="#"+id;anchor.innerHTML=innerHTML
return anchor;};const linkifyAnchors=function(level,containingElement){const headers=containingElement.getElementsByTagName("h"+level);for(const header of headers){if(typeof header.id==="undefined"||header.id===""){continue}
const title=header.innerHTML
header.removeChild(header.firstChild)
header.appendChild(anchorForId(header.id,title));}};document.onreadystatechange=function(){if(this.readyState!=="complete"){return;}
const contentBlock=document.getElementsByClassName("content")[0]
if(!contentBlock){return;}
for(var level=2;level<=4;level++){linkifyAnchors(level,contentBlock);}};