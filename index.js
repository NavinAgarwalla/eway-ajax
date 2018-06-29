const express = require('express');
const bodyParser = require('body-parser');
const contactinfo = require('./file.js');


const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);});

const memory = req.body.conversation.memory;
    const state= memory.state;
    const district = memory.district;
$.ajax({
  url : `http://192.168.2.11:7001/sap/opu/odata/sap/ZEWAYBILL_CONTACT_SRV/getContactListSet?$filter=State eq '"+ state +"' and District eq '" + district + "'`,
  method : "GET",
  headers : {
	"Accept" : "application/json",
	"Content-Type" : "application/json",
	"X-Requested-With" : "XMLHttpRequest"
  },
  username: 'bcuser',
  password: 'Password',
  beforeSend : function(){
  },
  success: function(result,response){
  
  },
  error: function(err){
	
  },
  complete : function(oXHR,vStatus){
  }
});