const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}

const addToZero = (array) => {
    let newArr = []
    for(let x = 0;x < array.length;x++){
        array.forEach((element, index) => {
        if(element + array[x] === 0){ 
            cl(`these are the same ${element}  and ${array[x]}`)
            newArr.push('true')
                }
        });
}
   if(newArr.length > 0)
     {return true}
else {return false}
}
cl(addToZero([1,2,3,-2]))

const hasUniqChars = (string) => {
let newArr = string.split('')
for(let i = 0;i < newArr.length;i++){
    for(let j = 0;j < newArr.length;j++){
        if(newArr[i] === newArr[j] && i != j)
        {    return false
            console.log(`bruh moment at ${i} and ${j}`)
        }
 }
}
    return true
}
cl(hasUniqChars('hello'))


const isPangram = (string) => {
    let newString = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < alphabet.length; i++) {
        if (newString.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    


return true
}
cl(isPangram(`How would i know i used every letter without this useful tool`))
cl(isPangram(`How would i know i used every letter without this useful tool also qwaking is for veterns, my best zebra jumps city gangs x `))


const findlongestword = (array) => {
    let BiggestWord = 0 
    
    for(let i = 0; i < array.length;i++){
        if(array[i].length > BiggestWord){
            BiggestWord = array[i].length


        }
 
        
    }
return BiggestWord
    

}
cl(findlongestword(["hi", "hello"]))