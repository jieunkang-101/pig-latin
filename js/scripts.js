//business logic








//user interface logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
 
    var input = $("input#input").val();
    var wordArr = input.split(" ");
    
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
      vowels.forEach(function(vowel){
        if (vowel.includes(input[0][0])) {
          $("#result").text(input + "way")
       // } else if (wordArr.charAt(0) !== vowel) {
         // for (i=0; i<wordArr.length; i++) {

          //}

        }



      });
    












    
    //console.log(slipByChar);
    var vowels = ["a", "e", "i", "o", "u" ];
    
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    var splitByChar = input//.split("") 
    var sliced =[];
    consonants.forEach(function(consonant) {
      
      //sliced = splitByChar.slice(0, 2);
      
      if (input.charAt(0) === consonant  && input.charAt(1) === consonant && input.charAt(3) === consonant){

      sliced = splitByChar.slice(0, 3);
       
      }
      
    
      
      // if (input.charAt(0) === consonant && input.charAt(1) === consonant && input.charAt(2) === consonant) {
      //   sliced = splitByChar.slice(0, 2);
      
      // } else if (input.charAt(0) === consonant && input.charAt(1) === consonant) {
      //   sliced =  splitByChar.slice(0, 1);

      // } else if (input.charAt(0) === consonant) {
      //   sliced =  splitByChar.slice(0);
      // }

        
        
        
      //}
      
     
      
     });
     
     //console.log(sliced);  
    });
    
        //   var sliceCon = input.slice(num);
        //   $("#result").text(sliceCon + "ay")
        // }
          //slicedArr = input.slice(0,2);
       
       
        
          
        
        //$("#result").text(input + "ay")
      });
      //console.log(resultCon) 
    

            
       
      
        
        
     
        

