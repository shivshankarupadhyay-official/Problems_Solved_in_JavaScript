let s = "javascript";

function reverseString(s){
    let reversed = "";
    for (let i = s.length -1;i>=0;i--){
        reversed +=s[i];

    }
    console.log(reversed);

}

reverseString(s);