function ReverseCharacters(str){
    let ReverseArray='';    
    for(let i = str.length -1 ; i >= 0 ; i--){
    ReverseArray += str[i];
    }
    return ReverseArray;
}
console.log(ReverseCharacters("My name is Mohammad"));
console.log(ReverseCharacters("palestine"));
console.log(ReverseCharacters("I am 23 years old"));
