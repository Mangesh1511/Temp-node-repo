const {readFile,writeFile}=require('fs');
console.log("start");
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result);
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(`Error while reading the Secod file`);
            console.log(err);
            return;
        }
        console.log(result);
        const second=result;
        writeFile('./content/second.txt',`Its aschyncronous file module's result:  ${first},${second}`,(err,result)=>
        {
            if(err)
            {
                console.log('Error while writing the file ');
                console.log(err);
                return;
            }
            console.log("done with this task\n");
            console.log(result);
            
        })
    })

    
})
console.log("Starting the next task");