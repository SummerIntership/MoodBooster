//create express app
const exp = require("express")
const app = exp();
const path = require("path")

app.use(exp.static(path.join(__dirname, './dist/MoodBooster/')))


app.use(exp.json()) 
const mc=require('mongodb').MongoClient;

//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority" 
//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority"
const databaseUrl="mongodb://agnes:Vanellope.3@littlebox-shard-00-00.u6gxv.mongodb.net:27017,littlebox-shard-00-01.u6gxv.mongodb.net:27017,littlebox-shard-00-02.u6gxv.mongodb.net:27017/App_Database?ssl=true&replicaSet=atlas-vn3g55-shard-0&authSource=admin&retryWrites=true&w=majority"
//const databaseUrl="mongodb+srv://agnes:Vanellope.3@littlebox.u6gxv.mongodb.net/App_Database?retryWrites=true&w=majority"

//const databaseUrl="mongodb://agnes:Vanellope.3@littlebox-shard-00-00.u6gxv.mongodb.net:27017,littlebox-shard-00-01.u6gxv.mongodb.net:27017,littlebox-shard-00-02.u6gxv.mongodb.net:27017/App_Database?ssl=true&replicaSet=atlas-vn3g55-shard-0&authSource=admin&retryWrites=true&w=majority"

let usersCollectionObj;
let adminCollectionObj;
let doctorCollectionObj;
let usermoodCollectionObj;
let contactUsCollectionObj;
let cardCollectionObj;

mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err)
    {
        console.log("err in MoodBooster connection",err)
    }
    else{
        console.log("connected to database  ಠ_ಠ  :)")
        databaseObj=client.db("MoodBooster")
        usersCollectionObj=databaseObj.collection("user_Collection")
        app.set("usersCollectionObj",usersCollectionObj);
        adminCollectionObj=databaseObj.collection("admin_Collection")
        app.set("adminCollectionObj",adminCollectionObj)
        doctorCollectionObj=databaseObj.collection("doctors_Collection")
        app.set("doctorCollectionObj",doctorCollectionObj)
        usermoodCollectionObj=databaseObj.collection("usermood_Collection")
        app.set("usermoodCollectionObj",usermoodCollectionObj)
        contactUsCollectionObj=databaseObj.collection("contactUs_Collection")
        app.set("contactUsCollectionObj",contactUsCollectionObj)
         cardCollectionObj=databaseObj.collection("cards_Collection")
         app.set("cardCollectionObj",cardCollectionObj)
    }
})


const userApi=require("./APIs/user-api")
const adminApi=require("./APIs/admin-api")

app.use("/user",userApi)
app.use("/admin",adminApi)

const port=3001;
app.listen(port,res=>{console.log(`server is listening on ${port} successfully`)})