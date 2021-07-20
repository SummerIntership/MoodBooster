const exp=require("express")
const adminApi=exp.Router()
const expressAsyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")

adminApi.use(exp.json())

const multerObj=require("./middlewares/multerCloudinaryDoctor")

adminApi.post("/login",expressAsyncHandler(async (req,res,next)=>{

    
    let user=req.body
   // console.log(req.body)
    let adminCollectionObj=res.app.get("adminCollectionObj")
    
    let userObj= await adminCollectionObj.findOne({username:user.username})

    if(userObj!==undefined)
    {
        let result=(user.password===userObj.password)
        if(result===false)
        {
             res.send({message:"Invalid password"})
        }
        else
        {
           let sToken=jwt.sign({firstname:user.username},'MoodBoosters',{expiresIn:"2d"})
           res.send({message:"login successfull",userObj:userObj,token:sToken,firstname:user.username})
        }
    }
    else{
        res.send({message:"Invalid user"})
    }


}))

adminApi.post("/adddoctor",multerObj.single('photo'),expressAsyncHandler(async (req,res,next)=>{

     console.log(req.body," ",req.body.docObj)
      let newDoc=JSON.parse(req.body.docObj);

      let doctorCollectionObj=res.app.get("doctorCollectionObj")

      let doctor= await doctorCollectionObj.findOne({$or:[{name:newDoc.name},{email:newDoc.email}]})

      console.log("🙄🙄🙄",newDoc,"\n\n\n",doctor)

      if(doctor !== undefined)
      {
         if((doctor.email==newDoc.email) && (doctor.name==newDoc.name)) 
            res.send({message:"name and email already exsits"})
         else if((doctor.email==newDoc.email))
            res.send({message:"email/doctor already exists"})
         else
            res.send({message:"name/doctor already exists"})
      }
      else
      {
         newDoc.profileImage=req.file.path;
         await doctorCollectionObj.insertOne(newDoc)
         res.send({message:"doctor added successfully"})
      }

}))

adminApi.get("/getdoctors",expressAsyncHandler(async (req,res,next)=>{

   let doctorCollectionObj=res.app.get("doctorCollectionObj")

   let doctors=await doctorCollectionObj.find().toArray()

   if(doctors !== undefined)
   {
      
      res.send({message:"doctors data",doctors:doctors})
   }
   else
   {
      res.send({message:"No doctors Available"})
   }

}))

adminApi.delete("/deletedoctor/:name",expressAsyncHandler(async (req,res,next)=>{

   let dname=req.params.name
   let doctorCollectionObj=res.app.get("doctorCollectionObj")
   let doctor=await doctorCollectionObj.findOne({name:dname})
   if(doctor!==undefined)
   {
      await doctorCollectionObj.deleteOne({name:doctor.name})
      res.send({message:"deleted successfully"})
   }
   else{
      res.send({message:"doctor unavailable"})
   }

}))

module.exports=adminApi