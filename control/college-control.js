const student=require("../model/college-model")
//create
module.exports.createstudent=(req,res)=>{
    const{studentname,studentid,section,bloodgroup}=req.query
    student.create({
        studentname,
        studentid,
        section,
        bloodgroup
    }).then(()=>{
        res.json({
            message:"created successfully"
        })
    }).catch(()=>{
        res.json({
            message:"not created"
        })
    })
}
//read
module.exports.getstudent=(req,res)=>{
    student.find().then(allstudent=>{
        res.json({
           allstudent
        })
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
    
}
//update
module.exports.patchstudent=(req,res)=>{
    student.findOneAndUpdate({studentname:req.query.studentname,bloodgroup:req.query.bloodgroup},{bloodgroup:req.query.bloodgroup1}).then(message=>{
        res.json({
            message:"updated successfully"
        })
    }).catch(err=>{
        res.json({
           message: err.message
        })
    })
}
//delete
module.exports.deletestudent=(req,res)=>{
    student.deleteOne({studentname:req.query.studentname}).then(message=>{
        res.json({
            message:"deleted successfully"
        })
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
}