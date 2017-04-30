$(function() {
	var body = $('body');
	var result = body.find("div.result");

	var e_form = $('.js-encrypt-form');
	var e_input = e_form.find(".js-encrypt-input");
	var e_submit = e_form.find(".js-encrypt-submit");

	var d_form = $('.js-decrypt-form');
	var d_input = d_form.find(".js-decrypt-input");
	var d_submit = d_form.find(".js-decrypt-submit");


	var map = {
	    a: 'q', b: 'w', c: 'e',
	    d: 'r', e: 't', f: 'y',
	    g: 'u', h: 'i', i: 'o',
	    j: 'p', k: 'a', l: 's',
	    m: 'd', n: 'f', o: 'g',
	    p: 'h', q: 'j', r: 'k',
	    s: 'l', t: 'z', u: 'x',
	    v: 'c', w: 'v', x: 'b',
	    y: 'n', z: 'm'
	};

	var post_result = function(map_result) {
		result.append("<p>" + map_result + "</p>");
		result.removeClass("hidden");
	}

	var transcribe = function(our_string) {
		return our_string.split('').filter(function(v) {
			// Filter out characters that are not in our list
       		return map.hasOwnProperty(v.toLowerCase());
		}).map(function(v) {
			// Replace the character with a new one from our map
			return map[v.toLowerCase()];
		}).join('');
	}
	
	e_submit.bind("click", function(e) {
		e.preventDefault();

		post_result(transcribe(e_input.val()));
	});

	d_submit.bind("click", function(e) {
		e.preventDefault();

		map = (function() {
        	var tmp = {};
            var k;

            // Populate the tmp variable
            for(k in map) {
                if(!map.hasOwnProperty(k)) continue;
                tmp[map[k]] = k;
            }

            return tmp;
        })();

        post_result(transcribe(d_input.val()));
	});
});

