# About the package
This package can be used as a way to calculate the time left to reach a specified date. Or the time elapsed since that date

# How to use this package?
## First download it
```shell
npm install days-counter
```
## Example code
```javascript
const countDays = require("days-counter");

const date = {
    year: 2022,
    month: 10,
    day: 20
}

const result = countDays(date); //Returns 361 (days)
```

## The parameters
The below shows what arguments can be set before calling the function

```javascript
const date = {
    year: 2022, //Optional
    month: 10, //Optional
    day: 20, //Optional
    hours: 18, //Optional
    minutes: 30, //Optional
    seconds: 50 //Optional
}

/*
Note that if none of the above are set, 
then the returned value will be 0
(difference between the same dates)
*/
const result = countDays(); //Returns 0
```
