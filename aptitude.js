const express=require("express")
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Question=require("./question.js");
const logicques=require("./logicques.js");
const cques=require("./cques.js");
app.set("views",path.join(__dirname,"views"));
app.set("views engine","ejs");
main()
.then(()=>{
    console.log("connnection");
})
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/question")
}
Question.insertMany([
    {question: "Percentages : A product is discounted by 20%. If the discounted price is $120, what was the original price? ", option1: "(a) $100 ", option2: "(b) $144 ", option3: "(c) $150 ", option4: "(d) $160", c_option: "(d) $160"},
    {question: "Ratios : If there are 3 red balls and 7 blue balls in a bag, what is the ratio of red balls to blue balls? ", option1: "(a) 3:10 ", option2: "(b) 1:7 ", option3: "(c) 3:7 ", option4: "(d) 7:3", c_option: "(c) 3:7 "},
    {question: "Averages : The average score of 5 students is 80. What is the total score of all 5 students? ", option1: "(a) 320 ", option2: "(b) 350 ", option3: "(c) 400 ", option4: "(d) 480", c_option: "(c) 400 "},
    {question: "Time & Speed : A car travels 200 km in 4 hours. What is the speed of the car in km/h? ", option1: "(a) 30 ", option2: "(b) 40 ", option3: "(c) 50 ", option4: "(d) 60", c_option: "(c) 50 "},
    {question: "Work & Time : If A can complete a job in 6 hours and B can complete the same job in 8 hours, how long will it take them to complete the job if they work together? ", option1: "(a) 2.4 hours ", option2: "(b) 3 hours ", option3: "(c) 4 hours", option4: "(d) 4.8 hours", c_option: "(d) 4.8 hours"},
    {question: "Number Properties : If a number is divisible by both 4 and 6, what can you conclude about the divisibility of that number by 12? ", option1: "(a) Not necessarily divisible ", option2: "(b) Divisible only if even ", option3: "(c) Divisible only if odd ", option4: "(d) Always divisible", c_option: "(d) Always divisible"},
    {question: "Probability : A bag contains 2 red balls, 3 blue balls, and 1 yellow ball. What is the probability of drawing a red ball? ", option1: "(a) 1/3", option2: "(b) 1/2 ", option3: "(c) 2/6 ", option4: "(d) 3/5", c_option: "(c) 2/6 "},
    {question: "Algebra : Solve for x in the equation 2x + 5 = 11 ", option1: "(a) x = 2 ", option2: "(b) x = 3 ", option3: "(c) x = 3 ", option4: "(d) x = 4", c_option: "(c) x = 3 "},
    {question: "Geometry : The area of a rectangle is 30 cm^2. If the length is 6 cm, what is the width? ", option1: "(a) 2 cm ", option2: "(b) 4 cm ", option3: "(c) 5 cm ", option4: "(d) 7 cm", c_option: "(c) 5 cm "},
    {question: "Permutations : In how many ways can you arrange 4 distinct letters? ", option1: "(a) 4 ", option2: "(b) 8 ", option3: "(c) 12 ", option4: "(d) 24", c_option: "(d) 24"},
    {question: "Combinations : In how many ways can you choose 2 items from a set of 5 distinct ", option1: "(a) 5 ", option2: "(b) 10 ", option3: "(c) 15 ", option4: "(d) 10", c_option: "(d) 10"},
    {question: "LCM & HCF : What is the least common multiple (LCM) of 12 and 18? ", option1: "(a) 24 ", option2: "(b) 36 ", option3: "(c) 36 ", option4: "(d) 72", c_option: "(c) 36 "},
    {question: "Data Interpretation : A bar chart shows the sales of different products over a month. How can you determine the product with the highest sales? ", option1: "(a) Identify the tallest bar ", option2: "(b) Identify the tallest bar ", option3: "(c) Calculate the average sales ", option4: "(d) Subtract the lowest sales from the highest", c_option: "(b) Identify the tallest bar "},
    {question: "Series Completion : What is the next number in the sequence 2, 5, 8, 11? ", option1: "(a) 13 ", option2: "(b) 14 ", option3: "(c) 14 ", option4: "(d) 15", c_option: "(c) 14 "},
    {question: "Percentages: A software company increases its sales by 20% from $100,000. What is the new sales figure? ", option1: "(a) $110,000 ", option2: "(b) $120,000", option3: "(c) $130,000", option4: "(d) $140,000", c_option: "(a) $110,000 "},
    {question: "Ratios: If a team of 6 developers can complete a project in 12 weeks, how many weeks would it take 8 developers to complete the same project? ", option1: "(a) 8 weeks", option2: "(b) 9 weeks", option3: "(c) 10 weeks", option4: "(d) 11 weeks", c_option: "(a) 8 weeks"},
    {question: "Averages: A server's average response time over 5 requests is 200 milliseconds. If the first 4 requests had an average response time of 180 milliseconds, what was the response time for the 5th request? ", option1: "(a) 220 milliseconds ", option2: "(b) 230 milliseconds", option3: "(c) 240 milliseconds", option4: "(d) 250 milliseconds", c_option: "(a) 220 milliseconds "},
    {question: "Work and Time: Pipe A can fill a tank in 8 hours, and Pipe B can fill it in 12 hours. Working together, how long will it take them to fill the tank?", option1: "(a) 4 hours ", option2: "(b) 4.8 hours", option3: "(c) 5.3 hours", option4: "(d) 6 hours", c_option: "(a) 4 hours "},
    {question: "Profit and Loss: A company buys a laptop for $800 and sells it at a 10% profit. What is the selling price?", option1: "(a) $880 ", option2: "(b) $890", option3: "(c) $900", option4: "(d) $910", c_option: "(a) $880"},
    {question: "Number Systems: Convert the binary number 1011 to decimal.", option1: "(a) 8 ", option2: "(b) 9", option3: "(c) 10", option4: "(d) 11", c_option: "(a) 8 "},
    {question: "Algebra: Solve for x in the equation 2x + 5 = 11", option1: "(a) x = 2 ", option2: "(b) x = 3", option3: "(c) x = 4", option4: "(d) x = 5", c_option: "(a) x = 2"},
    {question: "Probability: A bag contains 3 red balls, 2 blue balls, and 1 green ball. What is the probability of drawing a blue ball?", option1: "(a) 1/3 ", option2: "(b) 1/4", option3: "(c) 1/5", option4: "(d) 1/6", c_option: "(a) 1/3 "},
    {question: "Data Interpretation: A line graph shows the website traffic for an online store over a week. How can you determine the busiest day?", option1: "(a) Identify the point with the highest y-axis value. ", option2: "(b) Calculate the average traffic for the week.", option3: "(c) Find the slope of the line.", option4: "(d) Analyze the pattern of the line.", c_option: "(a) Identify the point with the highest y-axis value. "},
    {question: "Time and Distance: A car travels 200 km at a speed of 80 km/h. How long does the journey take?", option1: "(a) 2.5 hours ", option2: "(b) 3 hours", option3: "(c) 3.5 hours", option4: "(d) 4 hours", c_option: "(a) 2.5 hours "},
    {question: "Permutations: How many unique arrangements (permutations) are there for the letters in the word 'CODE'? ", option1: "(a) 4! = 24 ", option2: "(b) 3! = 6", option3: "(c) 2! = 2", option4: "(d) 1", c_option: "(a) 4! = 24 "},
    {question: "Combinations: How many ways can you choose 2 items from a set of 5 different books?", option1: "(a) 5! / 3!2! = 10 ", option2: "(b) 5! = 120", option3: "(c) 4! = 24", option4: "(d) 3! = 6", c_option: "(a) 5! / 3!2! = 10 "},
    {question: "Percentages: A software company offers a 10% discount on their product that originally costs $150. What is the final price after the discount? ", option1: "(a) $135 ", option2: "(b) $120 ", option3: "(c) $105 ", option4: "(d) $90 ", c_option: "(d) $90 "},
    {question: "Ratios: If a web developer can write 5 lines of code in 2 minutes, how many lines can they write in 10 minutes? ", option1: "(a) 10 ", option2: "(b) 15 ", option3: "(c) 25 ", option4: "(d) 50", c_option: "(d) 50"},
    {question: "Averages: There are 4 servers in a data center with average temperatures of 40°C, 45°C, 50°C, and 35°C. What is the average temperature of all servers? ", option1: "(a) 40°C ", option2: "(b) 42.5°C ", option3: "(c) 45°C ", option4: "(d) 170°C ", c_option: "(b) 42.5°C "},
    {question: "Time and Work: If 2 painters can paint a room in 6 hours, how long would it take 3 painters to paint the same room? ", option1: "(a) 4 hours ", option2: "(b) 5 hours ", option3: "(c) 8 hours ", option4: "(d) 12 hours  ", c_option: "(a) 4 hours "},
    {question: "Speed and Distance: A car travels 200 km in 4 hours. What is the car's average speed? ", option1: "(a) 40 km/h ", option2: "(b) 50 km/h ", option3: "(c) 60 km/h ", option4: "(d) 80 km/h  ", c_option: "(b) 50 km/h "},
    {question: "Probability: In a bag of 10 candies, there are 3 chocolates and 7 lollipops. What is the probability of picking a chocolate candy? ", option1: "(a) 0.3 ", option2: "(b) 0.4 ", option3: "(c) 0.6 ", option4: "(d) 0.7 ", c_option: "(a) 0.3 "},
    {question: "Number Systems: Convert the binary number 1010 (base 2) to decimal. ", option1: "(a) 5 ", option2: "(b) 8 ", option3: "(c) 10 ", option4: "(d) 12 ", c_option: "(a) 5 "},
    {question: "Data Sufficiency: Is the information sufficient to calculate the total cost of 7 books if the cost of one book is $10? ", option1: "(a) Yes ", option2: "(b) No ", c_option: "(a) Yes "},
    {question: "Algebra: Solve for x in the equation: 2x + 5 = 11 ", option1: "(a) x = 2 ", option2: "(b) x = 3 ", option3: "(c) x = 4 ", option4: "(d) x = 5  ", c_option: "(b) x = 3 "},
    {question: "Permutations: How many unique ways can you arrange 3 letters (A, B, C)? ", option1: "(a) 3 ", option2: "(b) 6 ", option3: "(c) 9 ", option4: "(d) 12 ", c_option: "(b) 6 "},
    {question: "Combinations: How many ways can you choose 2 people from a group of 5 friends to go for lunch? ", option1: "(a) 5 ", option2: "(b) 10 ", option3: "(c) 15 ", option4: "(d) 20 ", c_option: "(c) 15 "},
    {question: "LCM (Least Common Multiple): Find the least common multiple of 12 and 18. ", option1: "(a) 24 ", option2: "(b) 36 ", option3: "(c) 54 ", option4: "(d) 72 ", c_option: "(c) 54 "},
    {question: "HCF (Highest Common Factor): Find the highest common factor of 20 and 30. ", option1: "(a) 5 ", option2: "(b) 10 ", option3: "(c) 15 ", option4: "(d) 20", c_option: "(a) 5 "},
    {question: "Find out the wrong number in the series : 7, 8, 18, 57, 228, 1165, 6996. ", option1: "(a) 8 ", option2: "(b) 18 ", option3: "(c) 57 ", option4: "(d) 228", c_option: "(d) 228"},
]);

app.get("/questions",async(req,res)=>{
    let questions=await Question.find();
    console.log(questions);
    res.render("aptitude.ejs",{questions});
})
app.get("/logicals",async(req,res)=>{
    let questions=await logicques.find();
    console.log(questions);
    res.render("logical.ejs",{questions});
  
})
app.get("/c",async(req,res)=>{
    let questions=await cques.find();
    console.log(questions);
    res.render("clanguage.ejs",{questions});
 
})
app.get("/",(req,res)=>{
    res.send("hi bc");
})
app.listen(8080,()=>{
    console.log("listening");
})