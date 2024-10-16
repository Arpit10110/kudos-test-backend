import express from "express";
const router = express.Router();
import {SignUP,login,sendotproute, Fpassword,profile,addnewaddress} from "../controllers/user.js"
import {getcollections,getAll,getBoys,getGirls,getAccessories,getToys} from "../controllers/store.js"
import {createorder,fetchAllOrders} from "../controllers/order.js"
import {checkout,paymentverification} from "../controllers/payment.js"
router.get("/",(req,res)=>{
    return(
        res.send("Welcome to the backend of Kudosware!")
    )
})
router.get("/port",(req,res)=>{
    return(
        res.send(`Port is ${process.env.PORT}`)
    )
})
 

// users routes
router.post("/signup",SignUP);
router.post("/login",login);
router.post("/fpassword",Fpassword);
router.post("/profile",profile);
router.post("/sendotproute",sendotproute);

//store routes
router.get("/getcollections",getcollections);
router.get("/getall",getAll);
router.get("/getboys",getBoys);
router.get("/getgirls",getGirls);
router.get("/getaccessories",getAccessories);
router.get("/gettoys",getToys);
router.post("/addnewaddress",addnewaddress)

// Payments routes
router.post("/checkout",checkout);
router.post("/paymentverification",paymentverification);

// orders routes
router.post("/createorder",createorder);
router.get("/fetchAllOrders",fetchAllOrders);




export default router;