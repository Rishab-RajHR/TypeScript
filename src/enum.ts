// without enums 
// let statusCode = "Success";


// With enums

// enum Direction {
//     up,
//     down,
//     left,
//     right
// }
// console.log(Direction.up);  // 1



// Custom enums

// enum Direction {
//     up = "East",
//     down = "West",
//     left = "North",
//     right = "South"
// }

// console.log(Direction.right);



// Custom enums with number

// enum StatusCode{
//     Success = 200,
//     NotFound = 404,
//     ServerError = 500
// }
// console.log(StatusCode.Success);



// enum through function 

enum PaymentStatus {
    pending = "PENDING",
    success = "SUCCESS",
    failed = "FAILED"
}

function checkPayment(status:PaymentStatus){
     console.log(status);
}
checkPayment(PaymentStatus.success)