var _ = require('lodash');
var Prop = function() {
  _.bindAll(this);
}

Prop.prototype.getPrivateCode = function(exchange) {
	if(exchange == 'GDAX'){
		return {
			key: '',
  			secret: '',
  			username: '', // your username, only required for specific exchanges.
  			passphrase: '' // GDAX, requires a passphrase.
		}
	} else if(exchange == 'Bitfinex'){
		return {
			// BITFINX
  			key: '',
  			secret: '',
  			username: '', // your username, only required for specific exchanges.
  			passphrase: '' // GDAX, requires a passphrase.
		}
	} 
}

module.exports = new Prop();