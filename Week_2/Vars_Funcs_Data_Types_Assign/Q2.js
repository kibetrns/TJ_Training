function checkLongestWordGivenString(input) {

    let longest = "";
    let words = input.split(" ");
    try {
        for(let i = 0; i < words.length; i++) {
            if(words[i].length > longest.length) {
                longest = words[i]
            }
        
        } 
    
        console.log(` "${longest}" is the the longest word`);
        
    } catch (error) {
      console.error(error)
        
    }
    
    
}