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


module.exports=userApi