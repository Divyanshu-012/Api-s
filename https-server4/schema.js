// schema is an independent library
// it do not require express to run
// it is useful in checking the inputs violation 
// usage case is we need to pass how we want our input to be look alike 

// for ex. -->

const zod = require("zod");

// if this is an array of number with atleast 1 input , return true , else return false 

function validateInput(arr) {

    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    // this one line of code is able to check, which might have taken very big lines of code to check
    console.log(response);
}

validateInput([1, 2, 3])


// for ex-->
// {
//   email: string=> email
//   password : atleast 8 letters
//   country : "IN", "US"
// }


//function validateinput(obj){
//     const schema = zod.object({
//     email: string().email(),
//     password: z.string().min(8),
//     country: z.literal("IN").or(z.literal("US"))
// })
//
//   const response = schema.safeParse(obj);
//   console.log(response);
//}

//
//validateInput({
//  email: "hwefhu@gmail.com"
//  password : "123123123123"
//
//
//)}