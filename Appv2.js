

var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var StringBuilder = require("stringbuilder");
var mysql = require("mysql");
var Location = "";
var Ethnicity = "";
var Gender = "";
var Age = 0;
var x = 1;

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
      //  processAllFieldsOfTheForm(req, res);
        processFormFieldsIndividual(req, res);
        
       
    }
    	 
       
    });

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

 function processFormFieldsIndividual(req, res) {
    //Store the data from the fields in your data store.
    //The data store could be a file or database or any other store based
    //on your application.
    var fields = [];
    var form = new formidable.IncomingForm();
    form.on('field', function (field, value) {
        console.log(field);
        console.log(value);
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////SETTING VARIABLES START HERE///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////SETTING Location START HERE///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        if (value.toLowerCase() == 'alabama') {
        	  Location = 'Alabama';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'alaska' ) {
        	  Location = 'Alaska'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'arizona') {
        	  Location = 'Arizona';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'arkansas' ) {
        	  Location = 'Arkansas'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'california') {
        	  Location = 'California';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'colorado' ) {
        	  Location = 'Colorado'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'connecticut') {
        	  Location = 'Connecticut';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'delaware' ) {
        	  Location = 'Delaware'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'florida') {
        	  Location = 'Florida';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'georgia' ) {
        	  Location = 'Georgia'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'hawaii') {
        	  Location = 'Hawaii';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'idaho' ) {
        	  Location = 'Idaho'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'illinois') {
        	  Location = 'Illinois';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'iowa' ) {
        	  Location = 'Iowa'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'kansas') {
        	  Location = 'kansas';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'kentucky' ) {
        	  Location = 'Kentucky'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'louisana') {
        	  Location = 'Louisana';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'maine' ) {
        	  Location = 'Maine'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'maryland') {
        	  Location = 'Maryland';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'massachusetts' ) {
        	  Location = 'Massachusetts'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'michigan') {
        	  Location = 'Michigan';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'minnesota' ) {
        	  Location = 'Minnesota'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'mississippi') {
        	  Location = 'Mississippi';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'missouri' ) {
        	  Location = 'Missouri'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'montana') {
        	  Location = 'Montana';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'nebraska' ) {
        	  Location = 'Nebraska'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'nevada') {
        	  Location = 'Nevada';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'new hampshire' ) {
        	  Location = 'New Hampshire'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'new jersey') {
        	  Location = 'New Jersey';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'new mexico' ) {
        	  Location = 'New Mexico'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'new york') {
        	  Location = 'New York';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'north carolina' ) {
        	  Location = 'North Carolina'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'north dakota') {
        	  Location = 'North Dakota';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'ohio' ) {
        	  Location = 'Ohio'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'oklahoma') {
        	  Location = 'Oklahoma';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'oregon' ) {
        	  Location = 'Oregon'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'pennsylvania') {
        	  Location = 'Pennsylvania';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'rhode island' ) {
        	  Location = 'Rhode Island'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'south carolina') {
        	  Location = 'South Carolina';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'south dakota' ) {
        	  Location = 'South Dakota'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'tennessee') {
        	  Location = 'Tennessee';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'texas' ) {
        	  Location = 'Texas'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'utah') {
        	  Location = 'Utah';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'vermont' ) {
        	  Location = 'Vermont'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'virgina') {
        	  Location = 'Virgina';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'washington' ) {
        	  Location = 'Washington'
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'west virgina') {
        	  Location = 'West Virgina';
        	  }
        	 	 
        	  else if (value.toLowerCase() == 'wisconsin' ) {
        	  Location = 'Wisconsin'
        	  }
        	  else if(value.toLowerCase() == 'wyoming') {
        	 	Location = 'Wyoming'
        	  }
        	  else if(value.toLowerCase() == 'washington d.c') {
        	 	Location = 'Washington D.C'
        	  }
        	 	 console.log(Location);
        	 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        	 ///////////////////////////////////////////SETTING Location END HERE///////////////////////////////////////////////////
        	 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        	  if(value.toLowerCase() == 'white') {
        	 	Ethnicity = 'White'
        	  }
        	  else if(value.toLowerCase() == 'black'){
        	 	Ethnicity = 'Black'
        	  }
        	  else if(value.toLowerCase() == 'asian'){
        	 	Ethnicity = 'Asian'
        	  }
        	  else if(value.toLowerCase() == 'hispanic or latino'){
        	 	Ethnicity = 'Hispanic or Latino'
        	  }
        	  else if(value.toLowerCase() == 'amerindian alaska native '){
        	 	Ethnicity = 'Amerindian Alaska Native'
        	  }
        	  else if(value.toLowerCase() == 'pacific islander'){
        	 	Ethnicity = 'Pacific Islander'
        	  }
        	  else if(value.toLowerCase() == 'mixed'){
        	 	Ethnicity = 'Mixed'
        	  }
        	  //////////////////////////////////////////////////////////////////////////////////////////////////
        	  if(value.toLowerCase() == 'male') {
        	 	Gender = 'Male'
        	  }
        	  else if (value.toLowerCase() == 'female') {
        	 	Gender = 'Female'
        	  }
     	 	 

        		 	 
        		  else if( value < 150) {
        			  Age = value;
        		  }
        		 	 
        	  
        	  console.log(Ethnicity);
        	  console.log(Age);
        		        		 	 
//        	 Location = Location;
//        	 Ethnicity = Ethnicity;
//        	 Gender = Gender;
//        	 Age = Age;
        	 
        	 console.log('Location = ' +Location);
        	 console.log('Ethnicity = ' + Ethnicity);
        	 console.log('Gender = ' + Gender);
        	 console.log('Age = ' + Age);

        	 
         if (x === 4)  {
        	 var con = mysql.createConnection({
   		  host: "localhost",
   		  user: "root",
   		  password: "MyNewPass", 
   		  database: "mysql"
   		});
   	con.connect(function(err){
   		  if(err){
   		    console.log('Error connecting to Db');
   		    return;
   		  }
   		  console.log('Connection established');
   		});
   	
   	
   	var entry = [
   		
   		[Location,Ethnicity,Gender,Age] 
   		 ];
   	
   		
   	console.log(entry);
   	
   	
	con.query("TRUNCATE TABLE entries", function(err,res){
 		  if(err){ console.error(err);
 		  return;}
 		//  console.log('Last insert ID:', res.insertId);
 	console.error(res);	
 	});
	
   	con.query("INSERT INTO entries(location, ethnicity, gender, age) VALUES ?", [entry], function(err,res){
   		  if(err){ console.error(err);
   		  return;}
   		//  console.log('Last insert ID:', res.insertId);
   	console.error(res);	
   	});
   		con.end(function(err) {
   		  // The connection is terminated gracefully
   		  // Ensures all previously enqueued queries are still
   		  // before sending a COM_QUIT packet to the MySQL server.
   		});
        	 
        	 
         }
        	 x += 1; 
        	 
        	 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        	 ///////////////////////////////////////////SETTING VARIABLES END HERE///////////////////////////////////////////////////
        	 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        	 
        
        //  fields[field] = value;
//        	 var con = mysql.createConnection({
//        		  host: "localhost",
//        		  user: "root",
//        		  password: "MyNewPass", 
//        		  database: "mysql"
//        		});
//        	con.connect(function(err){
//        		  if(err){
//        		    console.log('Error connecting to Db');
//        		    return;
//        		  }
//        		  console.log('Connection established');
//        		});
//        	var entry = [
//        		
//        		[Location,Ethnicity,Gender,Age] 
//        		 ];
//        		
//        	console.log(entry);
//        	con.query("INSERT INTO entries(location, ethnicity, gender, age) VALUES ?", [entry], function(err,res){
//        		  if(err){ console.error(err);
//        		  return;}
//        		//  console.log('Last insert ID:', res.insertId);
//        	console.error(res);	
//        	});
//        		con.end(function(err) {
//        		  // The connection is terminated gracefully
//        		  // Ensures all previously enqueued queries are still
//        		  // before sending a COM_QUIT packet to the MySQL server.
//        		});
//        
    });
    
//   var con = mysql.createConnection({
//        		  host: "localhost",
//        		  user: "root",
//        		  password: "MyNewPass", 
//        		  database: "mysql"
//        		});
//        	con.connect(function(err){
//        		  if(err){
//        		    console.log('Error connecting to Db');
//        		    return;
//        		  }
//        		  console.log('Connection established');
//        		});
//        	var entry = [
//        		
//        		[Location,Ethnicity,Gender,Age] 
//        		 ];
//        		
//        	console.log(entry);
//        	con.query("INSERT INTO entries(location, ethnicity, gender, age) VALUES ?", [entry], function(err,res){
//        		  if(err){ console.error(err);
//        		  return;}
//        		//  console.log('Last insert ID:', res.insertId);
//        	console.error(res);	
//        	});
//        		con.end(function(err) {
//        		  // The connection is terminated gracefully
//        		  // Ensures all previously enqueued queries are still
//        		  // before sending a COM_QUIT packet to the MySQL server.
//        		});
         
    
    
    
    var sb = new StringBuilder({newline: "\r\n"});
    function displayMap(res) {
    	  
    	   sb.appendLine("<html>");
    	   sb.appendLine("<body>");
    	   sb.appendLine("<iframe");
    	   sb.appendLine("width='600'");
    	   sb.appendLine("height='450'");
    	   sb.appendLine("frameborder='0' style='border:0'");
    	   sb.appendLine("src='https://www.google.com/maps/embed/v1/place?key=AIzaSyArachr4wV0UMSG7EiDsQrTrWy7NkVk0Ts&q="+ Location +"+ Canada' allowfullscreen>");
    	   sb.appendLine("</iframe>");
    	   sb.appendLine("</body>");
    	   sb.appendLine("</html>");
    	   sb.build(function (err) {

    		           res.end();
    		       });
    	}
    
  
// displayMap(res);
    form.on('end', function () {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<html><body><iframe width="600"height="450" frameborder="0" style="border:0"src="https://www.google.com/maps/embed/v1/place?key=AIzaSyArachr4wV0UMSG7EiDsQrTrWy7NkVk0Ts &q=' +Location+'+USA" allowfullscreen> </iframe></body></html>');    
    });
    form.parse(req);
}

server.listen(1194);
console.log("server listening on 1194");

//var con = mysql.createConnection({
//	  host: "localhost",
//	  user: "root",
//	  password: "MyNewPass", 
//	  database: "mysql"
//	});
//con.connect(function(err){
//	  if(err){
//	    console.log('Error connecting to Db');
//	    return;
//	  }
//	  console.log('Connection established');
//	});
//var entry = [
//	
//	[Location,Ethnicity,Gender,Age] 
//	 ];
//	
//console.log(entry);
//con.query("INSERT INTO entries(location, ethnicity, gender, age) VALUES ?", [entry], function(err,res){
//	  if(err){ console.error(err);
//	  return;}
//	//  console.log('Last insert ID:', res.insertId);
//console.error(res);	
//});
//	con.end(function(err) {
//	  // The connection is terminated gracefully
//	  // Ensures all previously enqueued queries are still
//	  // before sending a COM_QUIT packet to the MySQL server.
//	});
