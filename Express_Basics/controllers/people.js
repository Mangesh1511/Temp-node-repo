let {people}=require('../data')
const getPeople=(req,res)=>{
    res.status(200).json({success:true,data:people})
}

const createPersonPostman=(req,res)=>{
    const {name}=req.body
    if(!name)
    {
        res.status(400).json({success:false,mgs:'please provide name!!'})
    }
    
    res.status(201).json({success:true,data:[...people,name]})
}

const updatePersonPostman=(req,res)=>{
    const {id}=req.params
    const {name}=req.body

    const item=people.find((people)=>people.id===Number(id))

    if(!item)
        return res.status(404).send(`No individual exits with id:${id}`);
        
    const newPeople=people.map((v)=>{
        if(v.id===Number(id)){
            v.name=name
        }
        return v
    })

    return res.status(200).json({success:true,data:newPeople})
}

const deletePersonPostman=(req,res)=>{

    const {id}=req.params

    const item =people.find((people)=>people.id==Number(id));
    if(!item)
    {
        res.status(404).json({success:false,msg:`No data found with given id:${id}`})

    }
    const newPeople=people.filter((person)=>person.id!=Number(id));
    return res.status(200).json({success:true,data:newPeople})
}


module.exports={
    getPeople,createPersonPostman,deletePersonPostman,updatePersonPostman
}