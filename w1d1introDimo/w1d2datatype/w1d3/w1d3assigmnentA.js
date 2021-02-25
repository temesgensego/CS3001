//assigmnent w1d3
// W1D3 Selection Assignment
// 1. Write a program that helps a user choose the correct footwear for the day’s weather based on
// the table shown below. If the user enters any other weather type, your program should output
// “sneakers”
// Weather Footwear
// hot sandals
// rain galoshes
// snow boots

//Q1A1
// const  Weather = 'snow';
//  if( Weather=='hot' ){  console.log('sandals') } 
//  else if (Weather =='rain' ){ console.log('galoshoe') }
//   else if (Weather== 'snow'){ console.log('boot')}


//  Q2 Write a program that reads from the keyboard a student's name and number of completed
// Write a program that reads from the keyboard a student's name and number of completed
// credits and then outputs the student's name and label on following rules:
// a. "Freshman" if 0<credits<30
// b. "Sophomore" if 30<=credits<60
// c. "Junior" if 60<=credits<90
// d. "Senior" if credits>90
// const  name = 'freshman';
// const credit = 30;
//Q2A2
//  if( credit>0 && credit<30 ){ console.log('${name} is freshman' )} 
//  else if (credit>=30 && credit<60  ){ console.log('${name} is   sophomore') }
//   else if (credit>=60 && credit<90 ){ console.log('${name} is junior')}
//   else if( credit>90){
//     console.log('${name} is senior')
//   }
// Q3
//  Write a program that calculates down payment for a home loan based on following rules.
// Cost of House Down Payment
// $0 to less than 50K 5% of the cost
// $50K to less than 100K $1000 + 10% of (cost - $50K)
// $100K to less than 200K $2000 + 15% of (cost - $100K)
// $200K and above $5000 + 10% of (cost - $200K)
// const cost = 210000;
//Q3A3
// if( cost>=0 && cost<50000 ){ console.log(cost*0.05)}
// else if( cost>=50000 && cost<100000 ){ console.log(1000 + 10%(cost - 50000))} 
// else if( cost>=100000 && cost<200000 ){ console.log(2000 + 15% (cost - 100000))} 
// else  if( cost>=200000){ console.log(5000 + 10%(cost -200000))} 
// 4. A university library that loans book to students, faculty, and the public has a written policy that
// determines how long someone may borrow a book before it is due, which is shown on the table
// below. Write a defining table and JavaScript program that determines how long a person may
// borrow a book.
// Status Number of books Overdue Loan duration in weeks
// Student 0 6
// fewer than 3 4
// 3 or more 2
// Faculty 0 12
// fewer than 3 10
// 3 or more 8
// Other 0 4
// fewer than 3 3
// 3 or more 2
// // table defining 
// // input status and number of book 
// // output number of 






//Q5
// 5. Write a defining table and then a program that determines what time a child should go to bed.
// Your program must read a child’s age and the season (winter, spring, summer, or fall) from the
// keyboard and output the child’s bedtime according to this table:
// input is age and the season 
// output is bedtime 
//  Age Season Bed Time
// 5 or younger summer, fall 8:30 PM
// winter, spring 8:00 PM
// 6 to 12 summer 9:30 PM
// winter, spring, fall 8:30 PM
// 13 and older summer 10:30 PM
// winter, spring, fall 9:30 PM
//Q5A5
// const season=  winter;
// let age =30;
//   if(age<5&&season===summer || season ===fall){
//       if (age<5&&season===winter  || season ===spring){
//           console.log("bedtime 8:00pm");
//       }
//     console.log("bedtime 8:30pm");
//   }
//   else if(age=>6&&age<=12&&season===summer){
//     if (age=>6&&age<=12&&season===winter  || season ===spring || season===fall){
//         console.log("bedtime 8:30pm");
//     }
//   console.log("bedtime 9:30pm");
// }
// else if (age=>13&&season===summer){
//     if (age=>13&&season===winter  || season ===spring || season===fall){
//         console.log("bedtime 9:30pm");

//     }
//   console.log("bedtime 10:30pm");
// }


// if(condition) {
//     //Nested if else inside the body of "if"
//     if(condition2) {
//        //Statements inside the body of nested "if"
//     }
//     else {
//        //Statements inside the body of nested "else"
//     }
// }
// else {
//     //Statements inside the body of "else"
// }

