///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

//First I am going to find out how many total fuji apples were picked the entire week
let fuji_sum = 0;
for(let i = 0; i < fujiAcres.length ; i++){
    fuji_sum=fuji_sum+fujiAcres[i];
}
//Next I am going to find out how many total gala apples were picked the entire week
let gala_sum = 0;
for(let i = 0; i < galaAcres.length ; i++){
    gala_sum=gala_sum+galaAcres[i];
}
//Next I am going to find out how many total pink apples were picked the entire week
let pink_sum = 0;
for(let i = 0; i < pinkAcres.length ; i++){
    pink_sum=pink_sum+pinkAcres[i];
}
//Now I am going to add all three sums together to find the total amount of all apples for the week
let totalAcres = fuji_sum + gala_sum + pink_sum
//Finally I am going to log the total amount
console.log(totalAcres);




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

//First I am going to divde the total amount of acres in a week into 7 since there are 7 days in a week to find the averge amount
let averageDailyAcres = totalAcres/7
//Now I am going to print out the average amount of acres per day.
console.log(averageDailyAcres)





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/
let acresLeft = 174 
let days = 0

//First I declare that while the acres that are left are more than zero...
while (acresLeft > 0) {
    //every time there are acres left, a day will be added to the timeline...
    days = days + 1
    //As well as 9 acres will have been dealt with so I will remove them.
    acresLeft = acresLeft - 9
}
//Lastly I will print to see exactly how many days it would take to finish off the rest of the acres left
console.log(days)





// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

//First I make sure to copy or "slice" the original arrays. Now I can do the math to see how many apples are picked every day
let fujiTons = fujiAcres.slice()
let galaTons = galaAcres.slice()
let pinkTons = pinkAcres.slice()
//Since I kno whow many acres are picked per day per week I can now multiply each acre by 6.5 to find ho wmany fuji apples were picked out per day.
for(let i=0; i < fujiTons.length; i++){
    fujiTons[i] = fujiTons[i]*6.5
}
//Since I kno whow many acres are picked per day per week I can now multiply each acre by 6.5 to find ho wmany gala apples were picked out per day.
for(let i=0; i < galaTons.length; i++){
    galaTons[i] = galaTons[i]*6.5
}
//Since I kno whow many acres are picked per day per week I can now multiply each acre by 6.5 to find ho wmany pink apples were picked out per day.
for(let i=0; i < pinkTons.length; i++){
    pinkTons[i] = pinkTons[i]*6.5
}
//Now I am just going to print out the finall arrays to see exactlt how many tons of all three apples are picked every day of the week.
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons)





// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
//First I am going to declare these variables as zero so I can change the tons to pounds first
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;
//I am going to start off with the fuji apples, this way I am adding the tons, turning them to pounds AND declaring them to the variable I want
for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds += fujiTons[i]*2000;
}
//I am going to do the same with the gala aplles, three steps in one
for (let i = 0; i < galaTons.length; i++) {
    galaPounds += galaTons[i]*2000;
}
//Same thing with the pink apples!!
for (let i = 0; i < pinkTons.length; i++) {
    pinkPounds += pinkTons[i]*2000;
}
//Now I am just going to print out all three amounts.
console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
//First I am going to multiply the amount in pounds of apples to the amount given
let fujiProfit = fujiPounds*0.89
//I do the same for the gala and pink apples
let galaProfit = galaPounds*0.64
let pinkProfit = pinkPounds*0.55
//Now I will just print all three
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
//First I declare the total profit variable, then I add all the progit from all the apples.
let totalProfit = fujiProfit + galaProfit + pinkProfit;
//Then I just print out the total profit made.
console.log(totalProfit)
//DONE
