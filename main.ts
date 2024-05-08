//Question no : 1 Install Node.js, TypeScript and VS Code on your computer.
// Question no 2:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//solution:
let personName : string ="Eric";
console.log(`Hello ${personName},would you like to learn some python today?`)
//Question no :3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//solution:
let name1 : string = "ahmed";
console.log(`Lowercase:${name1.toLocaleLowerCase()}`);
console.log(`Upeercase : ${name1.toUpperCase()}`);
console.log(`Titlecase :${name1.charAt(0).toUpperCase()+name1.slice(1).toLowerCase()}`);
//Question no :4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Solution:
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
//Question no :5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//Solution:
let famous_person: string = "Malala Yousafzai";
let quote1: string = "We realize the importance of our voices only when we are silenced.";
let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);
//Question no :6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//Solution:
let nameWithWhitespace: string = "\t\n   John Doe   \n\t";
console.log("Name with whitespace:", nameWithWhitespace);

let strippedName: string = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);
//Question no :7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Solution:
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2); 
console.log("Division:", 16 / 2); 
//Question no :8 You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
//Solution:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Question no :9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//Solution:
let favoriteNumber: number = 7;
console.log(`My favorite number is: ${favoriteNumber}`);
//Question no : 10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Solution:
let person1: string = "Fatima";
console.log(`Assalam-o-Alaikum, ${person1}! Welcome to the program.`);//this program said welcome
let person2: string = "Ali";
console.log(`Khuda Hafiz, ${person2}! Thank you for using the program.`);//this program said thank you
//Quuestion no : 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

//Solution:
let namesofPersons: string[] = ["Ahmed", "Fatima", "Ali", "Aisha"];

for (let i = 0; i < namesofPersons.length; i++) {
    console.log(namesofPersons[i]);
}
//Question no :12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//solution:
let names: string[] = ["Ahmed", "Fatima", "Ali", "Aisha"];
let messagein: string = "Assalam-o-Alaikum, NAME! I hope you're having a great day.";

for (let i = 0; i < names.length; i++) {
    let personalizedMessage: string = messagein.replace("NAME", names[i]);
    console.log(personalizedMessage);
}
//Question no : 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// solution:
let favoriteTransportation: string[] = ["Tesla Model S", "BMW M5", "Harley-Davidson Iron 883"];

for (let i = 0; i < favoriteTransportation.length; i++) {
    console.log(`I would like to own a ${favoriteTransportation[i]}.`);
}
//Question no : 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Solution:;
let guestList: string[] = ["Malala Yousafzai", "Abdul Sattar Edhi", "Imran Khan"];

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please let us know if you can join us.`);
}
//Question no :15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

//Solution:
let guestListof: string[] = ["Malala Yousafzai", "Abdul Sattar Edhi", "Imran Khan"];
let guestWhoCantMakeIthere: string = guestListof.splice(1, 1)[0];
console.log(`${guestWhoCantMakeIthere} can't make it to the dinner.`);
guestListof.push("Allama Iqbal");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestListof[i]}, you are cordially invited to dinner. Please let us know if you can join us.`);
}
//Question no :16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//Solution:
let guestListofguest: string[] = ["Malala Yousafzai", "Abdul Sattar Edhi", "Imran Khan"]
let guestWhoCantMakeIt: string = guestListofguest.splice(1, 1)[0];
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`)
guestList.push("Allama Iqbal");
for (let i = 0; i < guestListofguest.length; i++) {
    console.log(`Dear ${guestListofguest[i]}, you are cordially invited to dinner. Please let us know if you can join us.`);
}
console.log("We've found a bigger dinner table! We can now invite more guests.");
guestListofguest.unshift("Quaid-e-Azam Muhammad Ali Jinnah", "Benazir Bhutto", "Pervez Musharraf");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestListofguest[i]}, you are cordially invited to dinner. Please let us know if you can join us.`);
}
//Question no : 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Solution:
let guestList1: string[] = [
    "Quaid-e-Azam Muhammad Ali Jinnah",
    "Benazir Bhutto",
    "Pervez Musharraf",
    "Malala Yousafzai",
    "Abdul Sattar Edhi",
    "Imran Khan",
    "Allama Iqbal"
];

console.log("We've found a bigger dinner table! We can now invite more guests.");
guestList1.unshift("New Guest 1", "New Guest 2", "New Guest 3");
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are cordially invited to dinner. Please let us know if you can join us.`);
}

console.log("We've just been informed that the new dinner table won't arrive in time. We can now invite only two guests.");
while (guestList1.length > 2) {
    let removedGuest: string|undefined = guestList1.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are still invited to dinner. Please let us know if you can join us.`);
}
guestList1.pop();
guestList1.pop();
console.log("Final guest list:", guestList1);
//  Question no:18 Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Solution:
let placesToVisit: string[] = [
    "Paris",
    "Tokyo",
    "New York",
    "Venice",
    "Dubai"
];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Still in original order:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Still in original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
//Question no : 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//solution:
let guestList0: string[] = [
    "Quaid-e-Azam Muhammad Ali Jinnah",
    "Benazir Bhutto",
    "Pervez Musharraf",
    "Malala Yousafzai",
    "Abdul Sattar Edhi",
    "Imran Khan",
    "Allama Iqbal"
];

console.log(`We've found a bigger dinner table! We can now invite more guests. Total guests invited: ${guestList0.length}`);
guestList0.unshift("New Guest 1", "New Guest 2", "New Guest 3");
for (let i = 0; i < guestList0.length; i++) {
    console.log(`Dear ${guestList0[i]}, you are cordially invited to dinner. Please let us know if you can join us.`);
}

console.log("We've just been informed that the new dinner table won't arrive in time. We can now invite only two guests.");
while (guestList0.length > 2) {
    let removedGuest: string |undefined= guestList0.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
//Question no : 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//Solution:


//Question no : 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let apple = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

let banana = {
    name: "Banana",
    color: "Yellow",
    taste: "Sweet"
};

let orange = {
    name: "Orange",
    color: "Orange",
    taste: "Tangy"
};

console.log(apple);
console.log(banana);
console.log(orange);
let item1: { name: string, price: number } = { name: "Laptop", price: 1000 };
let item2: { name: string, price: number } = { name: "Mobile Phone", price: 500 };
let item3: { name: string, price: number } = { name: "Watch", price: 100 };
console.log("Item 1:", item1);
console.log("Item 2:", item2);
console.log("Item 3:", item3);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are still invited to dinner. Please let us know if you can join us.`);
}
guestList.pop();
guestList.pop();
console.log("Final guest list:", guestList);
//Question no : 22  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//solution:
let guestList4: string[] = [
    "Quaid-e-Azam Muhammad Ali Jinnah",
    "Benazir Bhutto",
    "Pervez Musharraf",
    "Malala Yousafzai",
    "Abdul Sattar Edhi",
    "Imran Khan",
    "Allama Iqbal"
];
let guestWhoCantMakeIt2: string = guestList4[3]; 

console.log(`${guestWhoCantMakeIt2} can't make it to the dinner.`);
//Question no 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//soltion:
let age: number = 25;
let isStudent: boolean = true;
let country: string = "Pakistan";
let city: string = "Karachi";
console.log("Is age greater than 18? I predict true.");
console.log(age > 18);
console.log("Is the person a student? I predict true.");
console.log(isStudent);
console.log("Is the country Pakistan? I predict true.");
console.log(country === "Pakistan");
console.log("Is the city Lahore? I predict false.");
console.log(city === "Lahore");
console.log("Is age less than 20? I predict false.");
console.log(age < 20);
console.log("Is the person not a student? I predict false.");
console.log(!isStudent);
console.log("Is the country not India? I predict true.");
console.log(country !== "India");
console.log("Is the city Islamabad? I predict false.");
console.log(city === "Islamabad");
console.log("Is age equal to 30? I predict false.");
console.log(age === 30);
console.log("Is the person a student and the country Pakistan? I predict true.");
console.log(isStudent && country === "Pakistan");
//Question no :24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//solution:
let name8: string = "Ali";
let age2: number = 25;
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Is name equal to 'Ali'? I predict true.");
console.log(name8 === "Ali");

console.log("Is name not equal to 'Ahmed'? I predict true.");
console.log(name8 !== "Ahmed");
console.log("Is name in lowercase equal to 'ali'? I predict true.");
console.log(name8.toLowerCase() === "ali");


console.log("Is age equal to 25? I predict true.");
console.log(age2 === 25);
console.log("Is age greater than 18? I predict true.");
console.log(age2> 18);
console.log("Is age less than 30? I predict true.");
console.log(age2 < 30);
console.log("Is age greater than or equal to 25? I predict true.");
console.log(age2 >= 25);
console.log("Is age less than or equal to 30? I predict true.");
console.log(age2 <= 30);
console.log("Is age greater than 20 and less than 30? I predict true.");
console.log(age2 > 20 && age < 30);
console.log("Is age less than 20 or greater than 30? I predict false.");
console.log(age2 < 20 || age > 30);
console.log("Is 3 in the numbers array? I predict true.");
console.log(numbers.includes(3));
console.log("Is 6 not in the numbers array? I predict true.");
console.log(numbers.includes(6));
//Question no :25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//solution:
let alien_color: string = 'green';
if (alien_color === 'green') {
    console.log('Player just earned 5 points.');
}
if (alien_color === 'red') {
    console.log('Player just earned 5 points.');
}
//Question no : 26 :Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
//Solution:
let alien_color2: string = 'green';

// If-else chain
if (alien_color2 === 'green') {
    console.log('Player just earned 5 points for shooting the alien.');
} else {
    console.log('Player just earned 10 points.');
}
//Question no 27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//•If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//solution:
let alien_color3: string = 'green'; // Change the color to 'yellow' or 'red' to see different messages

if (alien_color3 === 'green') {
    console.log('Player earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('Player earned 10 points.');
} else if (alien_color3 === 'red') {
    console.log('Player earned 15 points.');
} else {
    console.log('Invalid alien color.');
}
//Question no :28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
//solution:
let age7: number = 25;

if (age7 < 2) {
    console.log("The person is a baby.");
} else if (age7 >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age7 >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age7 >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age7 >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
//Question no : 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//Solution:
let favorite_fruits: string[] = ["apple", "banana", "orange"];

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
console.log(favorite_fruits);
//Question no : 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//Solution:
let usernames: string[] = ["admin", "ali", "bilal", "kaif", "rehman"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Question no : 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
//Solution:
let usernames2: string[] = ["admin", "ali", "saima", "samreen", "ahmed"];

if (usernames2.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames2) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

usernames2 = [];

if (usernames2.length === 0) {
    console.log("We need to find some users!");
}
//Question no : 32Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//Solution:f
let current_users: string[] = ["ali", "waiza", "hamza", "wanina", "samina"];
let new_users: string[] = ["abdullah", "jawwad", "sara", "jhon", "sam"];

for (let new_username of new_users) {
    let is_duplicate: boolean = false;
    for (let current_username of current_users) {
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            is_duplicate = true;
            break;
        }
    }
    if (is_duplicate) {
        console.log(`Username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_username}' is available.`);
    }
}
//Question no : 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//solution:
let numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers2) {
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
//Question no : 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
//solution:
let pizzas: string[] = ["Margherita", "Pepperoni", "Chicken Tikka"];

for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");
//Question no: 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

//solution:
let animals: string[] = ["dog", "cat", "rabbit"];

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");
//Question no : 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

//solution:
function make_shirt1(size: string, message: string): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}
make_shirt("Large", "I love TypeScript!");
//Question no : 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//solution:
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Hello, World!");
make_shirt("XL", "TypeScript is awesome!");
//Question no : 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
//solution:
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Dubai", "UAE");
//Question no : 39City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
//solution:
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with different city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
//Question no : 40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
//Solution:
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}


let album1 = make_album("Atif Aslam", "Jal Pari");
let album2 = make_album("Nusrat Fateh Ali Khan", "Sangam");
let album3 = make_album("Ali Zafar", "Jhoom", 12);
console.log(album1);
console.log(album2);
console.log(album3);
//Question  no : 41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Solution:
function show_magician(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
show_magician(magicians);

//question no :42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


//solution:
function show_magicians2(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => {
        return `the Great ${magician}`;
    });
}
let magicians1: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let great_magicians: string[] = make_great(magicians);
show_magicians2(great_magicians);
//Question no 43 : Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//Solution : 
function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great3(magicians: string[]): string[] {
    return magicians.map((magician) => {
        return `the Great ${magician}`;
    });
}

let magiciansin: string[] = ["Junaid Akram", "Zakir Khan", "Moin Akhtar", "Umar Sharif"];

let great_magiciansis: string[] = make_great3([...magicians]); 
show_magicians(magicians);

console.log("\n"); 
show_magicians(great_magicians);
//Question no 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//Solution:
function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("  - Just bread");
    } else {
        items.forEach((item, index) => {
            console.log(`  - ${index + 1}. ${item}`);
        });
    }
    console.log("---");
}

makeSandwich("Cheese", "Tomato", "Lettuce", "Mayonnaise");
makeSandwich("chicken", "Cheese");
makeSandwich();
//Question no : 45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//Solution:
function createCar(manufacturer: string, model: string, ...args: [string, any][]): Record<string, any> {
    let car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    args.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

let carInfo = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);

console.log(carInfo);



