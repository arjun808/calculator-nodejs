const express= require("express")
const app=express();
const bodyParser=require("body-parser");
// {
// WHY WE USE BODYPARSER HEAR
// for passing http request we use body-parsing request
// }
// {
//     URL encoded ---->{
//         it is used for acces the form data
//     }
// }
app.use(bodyParser.urlencoded({extended:"true"}))
app.get("/",(req,res)=>{
   res.sendFile(__dirname + "/index.html")
})

app.post("/",(req,res)=>{           // POST is a request method supported by HTTP used by the World Wide Web. The HTTP POST method sends data to the server.
   let n1=Number(req.body.num1);
   let n2=Number(req.body.num2);
  let result=n1+n2;
  res.send("the result is" +"   "+ result);
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port Number 3000")
})