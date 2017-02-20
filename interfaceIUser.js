/*Typescript code
//Defined interface
interface IUser { 
 userID: string;
 userName: string;

} 


//Define some property in interface and use them in class. 


class User<T extends IUser> { 
    userID = "1234";
    userName = "Mr ABC";
} 

let userObj: User<IUser> = new User<IUser>();
//Display output using console. 
console.log(`user ID ${userObj.userID} and user name ${userObj.userName}`);
*/
//Define some property in interface and use them in class. 
var User = (function () {
    function User() {
        this.userID = "1234";
        this.userName = "Mr ABC";
    }
    return User;
}());
var userObj = new User();
//Display output using console. 
console.log("user ID " + userObj.userID + " and user name " + userObj.userName);
