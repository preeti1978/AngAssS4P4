/*******************************
class Greeter<T> { //T can be any type
    name: T; //property is defined of type T
    constructor() {
      //blank constrcuctor
    }
    getName() { //getter
        return this.name;
    }
    setName(name: T) { //setter
          this.name = name;
    }
}
//data type : string
let greeter = new Greeter<string>();
greeter.setName("preeti");
console.log(greeter.getName());

//data type: boolean
let boolGreeter = new Greeter<boolean>();
boolGreeter.setName(true);
console.log(boolGreeter.getName());

//data type: enum
let anyGreeter = new Greeter<any>();
enum orderStatus { placed, returned, pending };
let myOrderStatus: orderStatus = orderStatus.placed;
anyGreeter.setName(myOrderStatus);
console.log(anyGreeter.getName());
********************************/
var Greeter = (function () {
    function Greeter() {
        //blank constrcuctor
    }
    Greeter.prototype.getName = function () {
        return this.name;
    };
    Greeter.prototype.setName = function (name) {
        this.name = name;
    };
    return Greeter;
}());
//data type : string
var greeter = new Greeter();
greeter.setName("preeti");
console.log(greeter.getName());
//data type: boolean
var boolGreeter = new Greeter();
boolGreeter.setName(true);
console.log(boolGreeter.getName());
//data type: enum
var anyGreeter = new Greeter();
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["placed"] = 0] = "placed";
    orderStatus[orderStatus["returned"] = 1] = "returned";
    orderStatus[orderStatus["pending"] = 2] = "pending";
})(orderStatus || (orderStatus = {}));
;
var myOrderStatus = orderStatus.placed;
anyGreeter.setName(myOrderStatus);
console.log(anyGreeter.getName());
