const{createstudent,getstudent,patchstudent,deletestudent}=require("../control/college-control")
const collegerouter=require("express")
const router=collegerouter()
router.post("/createstudent",createstudent)
router.get("/getstudent",getstudent)
router.patch("/patchstudent",patchstudent)
router.delete("/deletestudent",deletestudent)
module.exports=router