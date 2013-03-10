node-visualead
==============

Node.js wrapper for Visualead visual QR code API v1.0

Installation
------------

	npm install node-visualead
	
Usage
-----

    var VL = require('node-visualead');
    var fs = require('fs');

    var vl = new VL('API KEY');

    /*
     * Please refer to the API documentation for available options
     *
     * Supported options are redirect, qr_size, qr_x, qr_y, qr_gravity, qr_rotation, output_image_width
     *
     */
     
    var options = {
        content: 'http://www.example.com'
    };

    vl.generate('http://image_url.jpg', options, function(stream) {
        var file = fs.createWriteStream('./output.jpg');
        
        stream.on('end', function() {
          console.log('done!');
        });
  
        stream.pipe(file);  
    }); 


Supported Methods
-----------------

    generate(imageUrl, options, callback);

