const {readFile}=require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        else
        console.log(result);
})


///Here's the complete programs taken under await async pattern

const {readFile, read, writeFile}=require('fs').promises;
// const util=require('util');
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

const start = async()=>{
        try{
            const first=await readFile('./content/first.txt','utf8')
            const second=await readFile('./content/second.txt','utf8')
            await writeFile(
                './content/result-mind-grenade.txt',`THIS IS AWESOME: ${first},${second}`,{flag:'a'}
            )  
            console.log(first,second);
        }
        catch(err){
                console.log(err);
        }
}


start()
// getText('../content/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//                 if(err)
//                     reject(err)
//                 else
//                     resolve(data)
                
//         })
//     })
// }
 
// const start =async() =>{
//     try{
//         const first =await getText('./content/first.txt');
//         const second=await getText('./content/second.txt');
//         console.log(first);
//         console.log(second);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
    
// }

