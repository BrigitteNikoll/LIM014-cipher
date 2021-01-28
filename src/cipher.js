
const cipher = {

  encode: (offset, str) => {
        
          

        if (offset === "" || offset === "0" || offset === null) {
          throw new TypeError("Vuelve a intentar");
      } else if (str === "" || str === "0" || str === null) {
          throw new TypeError("Vuelve a intentar");
      }

      let nuevoTexto = '';
      for (let i = 0; i < str.length; i++){
          
         if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
              nuevoTexto += String.fromCharCode(((str.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65);
          } else if (str.charCodeAt(i) >= 97 &&  str.charCodeAt(i) <= 122) {
              nuevoTexto += String.fromCharCode(((str.charCodeAt(i) - 97 + parseInt(offset)) % 26) + 97);
          } else {
            nuevoTexto += str[i];
          }
            
      }
      
      return nuevoTexto; 

    },
   

  decode: (offset, str) => {

        if (offset === "" || offset === "0" || offset === null) {
          throw new TypeError("Vuelve a intentar");
      } else if (str === "" || str === "0" || str === null) {
          throw new TypeError("Vuelve a intentar");
      }

    
      let nuevoTexto = '';
      for (let i = 0; i < str.length; i++){
          
         if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
              nuevoTexto += String.fromCharCode(((str.charCodeAt(i) - 90 - parseInt(offset)) % 26) + 90);
          } else if (str.charCodeAt(i) >= 97 &&  str.charCodeAt(i) <= 122) {
              nuevoTexto += String.fromCharCode(((str.charCodeAt(i) - 122 - parseInt(offset)) % 26) + 122);
          } else {
            nuevoTexto += str[i];
          }
      }
      
      return nuevoTexto; 
   }
  

};

 export default cipher; 






