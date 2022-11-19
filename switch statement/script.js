//switch case

// let grade = "A";

//S
//A
//B
//E
//U

// switch (grade) {
//     case "S":
//         console.log("Super Grade");
//         break;

//     case "A":
//         case "B":
//         console.log("Excellent Grade");
//         break;

//     case "E":
//         console.log("Just Pass!");
//         break;

//     case "U":
//         console.log("Failed Grade");
//         break;

//     default:
//         console.log("Unknown Grade");
// }


let marks = 20;

switch (true) {
    case marks > 90:
        console.log("Super Grade");
        break;

    case marks > 50:
        console.log("Pass");
        break;

    case marks < 50:
        console.log("Failed");
        break;

    default:
        console.log("Unknown Grade");
        break;
}