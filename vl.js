var request = require('request');
var fs = require('fs');

var VL = module.exports = function(apiKey) {
	this.apiKey = apiKey;
};

VL.prototype.generate = function(image, options, callback) {
	if (!options.content) { 
		throw new Error("Content must be set");
	}

	if (options.redirect == 1 && !options.action) {
		throw new Error("Action must be set if redirection is enabled");
	}

	var url = 'https://api.visualead.com/v1/generate?api_key=' + this.apiKey + '&output_type=0' + '&image=' + image + '&content=' + options.content;

	if (options.redirect == 1) {
		url += '&redirect=' + options.redirect + '&action=' + options.action;
	} else {
		url += '&redirect=0';
	}

	if (options.qr_size) {
		url += '&qr_size=' + options.qr_size;
	}

	if (options.qr_x && !options.qr_gravity) {
		url += '&qr_x=' + options.qr_x;
	}

	if (options.qr_y && !options.qr_gravity) {
		url += '&qr_y=' + options.qr_y;
	}

	if (options.qr_gravity) {
		url += '&qr_gravity=' + options.qr_gravity;
	}

	if (options.qr_rotation) {
		url += '&qr_rotation=' + options.qr_rotation;
	}

	if (options.output_image_width) {
		url += '&output_image_width=' + options.output_image_width;
	}

	var stream = request(url);

	callback(stream);
};