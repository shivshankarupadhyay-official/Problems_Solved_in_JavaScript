let str = "Hello JavaScript";
let vowels = ['a','i','e','o','u'];
let count = 0;

for (let i = 0; i<str.length;i++){
    if(vowels.includes(str[i].toLocaleLowerCase())){
        count++;
    }
}
console.log(count);