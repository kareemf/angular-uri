(function(root) {
	'use strict';
	var angular = root.angular;
	
	return angular
		.module('angular-uri', [])
		.factory('URI', function(){
			return root.URI;
		});
})(window);