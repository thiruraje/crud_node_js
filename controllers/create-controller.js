var createModel=require('../models/create-model');
module.exports={
crudForm:function(req, res) {
  console.log("form");
    res.render('crud-form');

},
createData:function(req,res){

  const inputData= {
    full_name:     req.body.full_name,
    email_address: req.body.email_address,
    city:         req.body.city,
    country:      req.body.country
  };
  createModel.createData(inputData,function(data){
      res.redirect('/crud/read');
      console.log(data.affectedRows + " record created");
    });
}

}