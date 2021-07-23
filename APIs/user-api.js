const exp=require("express")
const userApi=exp.Router()
const jwt=require("jsonwebtoken")
const bcryptjs=require("bcryptjs")
const expressAsyncHandler=require("express-async-handler")

userApi.use(exp.json())


const multerObj=require("./middlewares/multerCloudinaryUser")

userApi.post("/register",multerObj.single('photo'),expressAsyncHandler(async (req,res,next)=>{

    let usersCollectionObj=res.app.get("usersCollectionObj")
   // let newUser=req.body()
    let newUser=JSON.parse(req.body.userObj);
   // console.log("in the API",newUser)

    let user=await usersCollectionObj.findOne({$or:[{firstname:newUser.firstname},{email:newUser.email}]})

    //console.log(user,"😎")
   //user !== null
    if(user !== undefined)
    {
        if(user.firstname===newUser.firstname && user.email===newUser.email)
          res.send({message:"firstname and email id already exists"})
        else if(user.firstname===newUser.firstname)
          res.send({message:"firstname already exists"})
        else
          res.send({message:"emailId already exists"})
    }
 
    else  
    {
        //hash password
        let hashedPassword = await bcryptjs.hash(newUser.password, 7)
        //replace password
        newUser.password = hashedPassword;
        //insert
        newUser.profileImage=req.file.path;
        delete newUser.photo;
        delete newUser.cpassword;

       await  usersCollectionObj.insertOne(newUser)
       res.send({message:"registration successfull"})
     }

}))  



userApi.post("/login",expressAsyncHandler(async (req,res,next)=>{

  let user=req.body
 
  let usersCollectionObj=res.app.get("usersCollectionObj")
  
  let userObj= await usersCollectionObj.findOne({firstname:user.username})

  if(userObj!==undefined)
  {
      let result= await bcryptjs.compare(user.password,userObj.password)
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

userApi.post("/addtodaymood",expressAsyncHandler(async (req,res,next)=>{

   let newstatusObj=req.body 
   let usermoodCollectionObj=res.app.get("usermoodCollectionObj")
   let pstStatusObj=await usermoodCollectionObj.findOne({firstname:newstatusObj.firstname})
   
 if(pstStatusObj == undefined) 
   {
       status=[];
       let tObj=newstatusObj.todayObj
       tObj.todayscore=200 + Number(tObj.mood)
       newstatusObj.score=200+Number(tObj.mood)
       newstatusObj.lastdate=tObj.date;
       status.push(newstatusObj.todayObj)
       console.log(newstatusObj) 

       let finalStatusObj={};
       finalStatusObj.firstname=newstatusObj.firstname;
       finalStatusObj.status=status;
       finalStatusObj.score=newstatusObj.score;
       finalStatusObj.lastdate=newstatusObj.lastdate;
     
       await usermoodCollectionObj.insertOne(finalStatusObj)

      // console.log("😥😥😣😣😏",finalStatusObj)
       res.send({message:"added first day to status"})
   }
   else
   {
      //pstStatusObj=finalStatusObj
       //status=[]
       let tObj=newstatusObj.todayObj
       let nObj={...newstatusObj.todayObj}
       nObj.todayscore=pstStatusObj.score+Number(tObj.mood)
       pstStatusObj.score=nObj.todayscore
       pstStatusObj.lastdate=nObj.date
       pstStatusObj.status.push(nObj)
     // console.log("😪😥",pstStatusObj)
      
       await usermoodCollectionObj.updateOne({firstname:pstStatusObj.firstname},{$set:{...pstStatusObj}})

      res.send({message:"just exsits here"})
   }

}))

userApi.get("/getusermood/:name",expressAsyncHandler(async (req,res,next)=>{
 
     let fn=req.params.name
     let usermoodCollectionObj=res.app.get("usermoodCollectionObj")
   let usermoodObj=await usermoodCollectionObj.findOne({firstname:fn})
   if(usermoodObj == undefined)
   {
      res.send({message:"usermood not tracked yet"})
   }
   else
   {
      res.send({message:"usermoodobj exists",data:usermoodObj})
   }
}))


module.exports=userApi