const { dollarToYen, yenToPound,euroToDollar } = require('./app.js');

test ('multiply 1.21 * 3 equal 3.63',()=>{

    let total=euroToDollar(3);
    expect(total).toBe(3.63);
});

test ('multiply 106.575996 * 1 equal 107',()=>{

    let total=dollarToYen(1);
    expect(total).toBe(107);
});



test ('multiply 0.0078* 3 equal 0.023',()=>{

    let total=yenToPound(3);
    expect(total).toBe(0);
});
