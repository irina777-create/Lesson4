//Вывести на сторінку в один рядок через кому числа від 10 до 20//
let numberStrings="";
for(let i=10;i<=20;i++);{
    if(i<20){
        numberStrings+=',';
    }
}
console.log(numberStrings);
//Вивести квадрати чисел від 10 до 20//
let Numbers=[];
for (let i=10;i<=20;i++){
    Numbers.push(1*1);

}
console.log(Numbers);
//Знайти суму всіх цілих чисел від 1 до 15//
let sumNumbers=0;
for(let i=1;i<=15;i++){
sumNumbers +=i;
}
console.log(sumNumbers);
//Знайти добуток усіх цілих чисел від 15 до 35//
let product=0;
for(let i=15;i<=35;i++){
    product=product*1
}
console.log(product);
//Знайти середне арифметичне всіх цілих чисел від 1 до 500//
let summ=0;
for(let i=1;i<=500;i++){
    summ=summ+1;
}
const summArifmetic=summ/500;
console.log(summArifmetic);
//Вивести суму лише парних чисел в діапазоні від 30 до 80//
let summDiap=0;
for(let i=30;i<=80;i++){
    if(i%2===0){
    }
}
console.log(`${summDiap}`);
//Вивести всі числа в діапазоні від 100 до 200 кратні 3//
for(let i=100;i<=200;i++){
    if(i%3===0){
    }
}
console.log(i);
//Дано натуральне число.Знайти  та вивестина сторінку всі його дільники.//
let numberNatural=+prompt('вивести всі його натуральні числа');
for(let i=2;numberNatural>=i;i++){
    if(numberNatural % i===0){
        console.log(`${numberNatural}`);
    }
}