const {readFile, readFileSync}=require('fs')

console.log('starting first task');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;

    }
    console.log(result)
    console.log('Completed the first task');

})
console.log('Starting the Second task');