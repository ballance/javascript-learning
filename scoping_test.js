var satoshi = {
	_coins: 1000,
	getQuantity: function() {
		return this._coins;
	},
	mine: function(x) {
		if (x == undefined) x = 0;
		if (y == undefined) y = 0;
		else this._coins += (x + y);	
	}
};

function mineCoins() {
	var x = y = 25;
	if (x == y) satoshi.mine(x);
}

mineCoins();

var stealCoins = satoshi.getQuantity;
thief = stealCoins();
console.log(thief);

satoshi.mine();
console.log(satoshi.GetQuantity());
