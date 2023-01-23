const {writeFileSync}=require('fs')

for(let i=0;i<10000;i++)
{
    writeFileSync('./content/big.txt',`helloworld ${i}\n`,{flag:'a'})
}