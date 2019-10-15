var day = 3;
var result = '';


//2.

switch (day) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;
    default: result = 'Input must be a number from 1 to 7';
        break;
}
console.log(result);

//3.

day = 7;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "It’s weekday";
        break;
    case 6:
    case 7:
        result = "It’s weekend";
        break;
    default: result = 'Input must be a number from 1 to 7';
        break;
}
console.log(result);

//4. 

var month = 3;
var result = '';

switch (month) {
    case 1:
        result = 'January';
        break;
    case 2:
        result = 'February';
        break;
    case 3:
        result = 'March';
        break;
    case 4:
        result = 'April';
        break;
    case 5:
        result = 'May';
        break;
    case 6:
        result = 'June';
        break;
    case 7:
        result = 'July';
        break;
    case 8:
        result = 'August';
        break;
    case 9:
        result = 'September';
        break;
    case 10:
        result = 'October';
        break;
    case 11:
        result = 'November';
        break;
    case 12:
        result = 'December';
        break;

    default: result = 'Input must be a number from 1 to 12';
        break;
}
console.log(result);

//5.

switch (month) {
    case 12:
    case 1:
    case 2:
        result = 'Winter';
        break;
    case 3:

    case 4:
    case 5:
        result = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Autumn';
        break;

    default: result = 'Input must be a number from 1 to 12';
        break;
}
console.log(result);

//6. 

var grade = 'd';
switch (grade) {
    case 'A':
    case 'a':
        result = 'Good job';
        break;
    case 'B':
    case 'b':
        result = 'Pretty good';
        break;
    case 'C':
    case 'c':
        result = 'Passed';
        break;
    case 'D':
    case 'd':
        result = 'Not so good';
        break;
    case 'F':
    case 'f':
        result = 'Failed';
        break;

    default: result = 'Unknown grade';
        break;
}
console.log(result);

//7.

var city = 'Beograd';
var country = '';

switch (city) {
    case 'Beograd':
    case 'Kragujevac':
    case 'Novi Sad':
    case 'Loznica':
    case 'Krusevac':
        country = 'Srbija';
        break;
    case 'Berlin':
    case 'Minhen':
    case 'Keln':
    case 'Hanover':

        country = 'Nemacka';
        break;
    case 'Budva':
    case 'Herceg Novi':
    case 'Bar':

        country = 'Crna Gora';
        break;
    case 'Bijeljina':
    case 'Sarajevo':

        country = 'Bosna i Hercegovina';
        break;
    case 'Pariz':

        country = 'Francuska';
        break;

    default: result = 'Please choose a different city';
        break;
}
console.log(country);

//8.

var number1 = 10;
var number2 = 0;
var operation = '/'
var res;

switch (operation) {
    case '+':
        res = number1 + number2;
        break;
    case '-':
        res = number1 - number2;
        break;
    case '*':
        res = number1 * number2;
        break;
    case '/':
        if (number2 === 0)
            console.log('Watch out for division by zero!');
        res = number1 / number2;
        break;

    default: res = 'Input must be an arithmetic operation';
        break;
}
console.log(res);





