/** 
 * Highlight Searched Text JavaScript File
 * author(Joshua Thomas)
 * date(12.01.2022)
 * version:1.0
 */



//Grabbing the elements
const text = document.getElementById('text');
const search = document.getElementById('search');

//Create array list of words in text
let text_array = text.innerText.split(" ");

let found_words = [];

//Once the user presses the button...
const btn = document.getElementById('btn').addEventListener("click", (e)=>{
    //check if user hasn't inputted a word
    if(search.value == ""){
        alert("Enter a word");
        return;
    }
    
    for(let i = 0; i < text_array.length; i++){
        if(search.value == text_array[i]){
            found_words.push(search.value);
            
            for(let i = 0; i < found_words.length; i++){
                text.innerHTML = text.innerHTML.replaceAll(search.value, "<span class='selected' id='highlight'>" + search.value + "</span>");
                
            }
        }
        
    }  
})