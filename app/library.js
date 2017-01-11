

module.exports = {
 
words: function(word){
          var result={};
           x = word.split(" ").forEach(function(i){
               result[i]=(result[i] || 0)+1 
           });
           return result;
        }
}    

