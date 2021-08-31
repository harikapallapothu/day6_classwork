

const students = [{ name: "Adhi", gender: "male", score:  90 },
{ name: "Ahamed", gender: "male", score:  80 },
{ name: "Rutika Kadam", gender: "female" , score:  75},
{ name: "Priyadharsini", gender: "female", score:  60 },
{ name: "Deepak", gender : "male", score: 35},
{ name: "Satish", gender: "male", score: 55}];
var resultArray = [];
var result = students.map(students=> students.score);
console.log(result)
for (i=0;i<result.length;i++){
    if(result[i]>79)
    {
        resultArray.push("A")
    }
    if(result[i]>59&&result[i]<80)
    {
        resultArray.push("B")
    }
    if(result[i]>39&&result[i]<60)
    {
        resultArray.push("C")
    }
    if(result[i]<40)
    {
        resultArray.push("F")
    }
}
console.log(resultArray);
var topMark = Math.max(...result);
var topper = (students.filter(value=>value.score==topMark));
console.log(topper.map(value=>value.name));
