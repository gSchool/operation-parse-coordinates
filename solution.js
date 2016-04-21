var fs  = require("fs");
var array = fs.readFileSync("data/map-05.txt").toString(); 

array = array.split("\n")

for (var i=1; i<array.length;i++) {
	for( var j=1; j<array[i].length;j++) {
		if (array[i][j] === "X") {
			console.log([(j-1),-(i-1)])
		}
	}
}