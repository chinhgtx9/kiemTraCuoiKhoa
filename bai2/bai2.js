let input= [60, 40, 55, 75, 64];

function alternatingSums(a) {
    let output= [];
    let team1 = [];
    let sum1 = 0;
    let team2 = [];
    let sum2 = 0;
    team1.push(a[0]);
    for (let i=1; i<a.length; i++){
        if(i % 2 == 0){
            team1.push(a[i]);
        }else{
            team2.push(a[i]);
        }
    }
    for(value of team1){
        sum1 += value;
    }
    for(value of team2){
        sum2 += value;
    }
   return output = [sum1, sum2];
}
console.log(alternatingSums(input));