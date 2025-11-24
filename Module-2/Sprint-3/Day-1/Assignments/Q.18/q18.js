//Q.18: Scoping & Optional Chaining (Focus: let/const/var, block scope, optional chaining).

// a) What is the output?

if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // 20
console.log(x); // ReferenceError: x is not defined

// b) Optional Chaining: b) Access the following safely using optional chaining.
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log("Email:", profile.user.details.email); // test@mail.com
console.log("Phone:", profile.user.details.phone?.number); // undefined

// c) Optional Chaining prevents runtime error
const company = {
  name: "TechCorp",
  location: {
    city: "Mumbai"
    // address missing
  }
};
console.log("Street:", company.location.address?.street); // undefined
