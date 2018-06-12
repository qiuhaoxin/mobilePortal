function controlFileExtension(filename) {
   if(getFileExtension(filename) == "pdf" || getFileExtension(filename)=='rar' || getFileExtension(filename)=='zip' || getFileExtension(filename)=='mp4')
      return true;
   else
      return false;
}

function getFileExtension(filename){
   var ext = /^.+\.([^.]+)$/.exec(filename);
   return ext == null ? "" : ext[1];
}

export function downloadFile(dataUrl,fileName){
   console.log("dataUrl is "+dataUrl);
   if(controlFileExtension(dataUrl))
      {
         console.log("begin to daon");
         var a = document.createElement("a");
         a.href = dataUrl;
         a.setAttribute("download", fileName);
         var b = document.createEvent("MouseEvents");
         b.initEvent("click", false, true);
         a.dispatchEvent(b);
         return false;
      }
}