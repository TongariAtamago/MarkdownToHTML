const fs = require('fs');
const path = require('path');
  
  var FileinDir = fs.readdir('.', function(err, files){
    if (err) throw err;
    console.log(files);
  });
  
  for (var i = 0; i < FileinDir.length ; i++) {
    if (FileinDir[i].match(.)===null) {
      continue;
    }else{
      fs.readFile('.\\'+FileinDir[i],'utf8', function(err,data) {
        if (err) throw err;
        var text = data.text;
        if (text === "#") {
          text.replace( /#/g, "<h1>" );
          text.replace( /##/g, "<h2>" );
          text.replace( /###/g, "<h3>" );
          text.replace( /####/g, "<h4>" );
          text.replace( /#####/g, "<h5>" );
          text.replace( /######/g, "<h6>" );
          text.replace( /__/g, "<strong>" );
          text.replace( /\*+/g, "<strong>" );
          text.replace( /\*/g, "<h1>" );
        }
      });
    }
  }
        
  fs.writeFile('C:\\Users\\takuy\\Desktop\\'+'.html', output ,'utf8', function (err) {
    if (err===null){
      //この if (err===null) の部分は消さないでください
    }else{
      console.error( err );
    }
  });
