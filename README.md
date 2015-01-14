# angular-uri
An angular module that allows [URI.js](http://medialize.github.io/URI.js/) to be dependency injected

### Installation

Download via [bower](http://bower.io/)

```bash
bower install angular-uri
```

Include URI.js

```html
<script type="text/javascript" src="bower_components/uri.js/src/URI.js"></script>
```

Include angular-uri after angular.js and URI.js

```html
<script type="text/javascript" src="bower_components/angular-uri/angular-uri.js"></script>
```

### Usage

Load the module

```javascript
angular.module('app', ['angular-uri']);
```

Inject the URI dependency

```javascript
.controller('appController', function($scope, URI) {
	$scope.url = URI("example.com").addSearch({a:'b'}).toString();
});
```
