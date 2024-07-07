function showResults(){
let score=0;
const totalQ=10;
const answers ={
    q1: "West Indies",
    q2: "Sachin Tendulkar",
    q3: "400",
    q4: "Lord's",
    q5: "AB de Villiers",
    q6: "Both b and c",
    q7: "11",
    q8: "Duck",
    q9: "England",
    q10: "Bangladesh"
};

for (let i = 1; i <= totalQ; i++) {
    const q = document.querySelector(`input[name="q${i}"]:checked`);
    if (q && q.value === answers[`q${i}`]) {
        score++;
    }
}
const result = document.getElementById('result');
result.innerHTML = 'You scored '+score+' out  of 10!';
if(score > 5){
  result.innerHTML += " Excellent! You know your cricket." ; 
}
else {
    result.innerHTML += " Not bad.";
}
}