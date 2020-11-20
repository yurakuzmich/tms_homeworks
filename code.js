//Task1 hello1()
function hello1() {
    return('Привет, JavaScript!');
}

//Task 2 hello2()
function hello2(name) {
    return name ? `Hello, ${name}` : `Hello, guest!`;
}
console.log(hello2());


//Task 3 mul(n, m)
function mul(n, m) {
    return n*m;
}
console.log(mul(3,8));

//Task 4 repeat(str, n)
function repeat(str = '', n = 2) {
    let output = '';
    while(n) {
        output += str;
        n--;
    }
    return output;
}
console.log(repeat('mama', 5));


//Task 5 rgb(a, b, c)
function rgb(a = 0, b = 0, c = 0) {
    let color = `rgb(${a}, ${b}, ${c})`;
    return color;
}
console.log(rgb(12, 24, 36));

// Task 6 avg()
function avg(...args) {
    let output = 0;
    args.forEach(el => {
        output += el;
    });
    return output / args.length;
}
console.log(avg(3, 5, 6, 8 , 9, 454));

//Task 7 words(n)
function words(n) {
    let texts = ['товар', 'товара', 'товаров'];
    let n1 = Math.abs(n) % 100; 
    let n2 = n % 10;
    if (n1 > 10 && n1 < 20) { return `${n} ${texts[2]}`; }
    if (n2 > 1 && n2 < 5) { return `${n} ${texts[1]}` }
    if (n2 == 1) { return `${n} ${texts[0]}`; }
    return `${n} ${texts[2]}`;

}

for(let i = 1000; i <= 1055; i++) {
    console.log(words(i));
}

// Task 8
function quad(a, b, c) {
    let d = b * b - 4 * a * c;
    let x1, x2;
    switch (true) {
        case d < 0:
            return 'Уравнение не имеет решений';
            break;
        case d == 0: 
            x1 = x2 =  (-1 * b) / (2 * a);
            return `x1 = x2 = ${x1}`;
        case d > 0:
            x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
            x2 = (-1 * b - Math.sqrt(d)) / (2 * a); 
            return `x1 = ${x1}, x2 = ${x2}`;
    }
}

console.log(quad(8, -40, -192));