import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const api_url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
// const config = {
//     headers:{
//     apiKey : "1",

//     }
// };


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", async(req,res)=>{
    try{
        
        const result = await axios.get(api_url);
        console.log(result.data.drinks[0]);
        // res.send("<h1>yes</h1>");
        res.render("index.ejs",{content:JSON.stringify(result.data.drinks[0])});
    }catch(e){
        console.log("error msg");
        console.log(e);
        // res.send("<h1>no</h1>");
        res.status(404).send(e.message);
        
    }


});

app.listen(port,()=>{
    console.log(`server up and running on port ${port}`);
})
