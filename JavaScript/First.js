
function add()
{
    const num1 = parseFloat(document.getElementById('a').value);
    const num2 = parseFloat(document.getElementById('b').value);
    document.getElementById('Result').innerHTML = `Result: ${num1+num2}`;
}
function sub()
{
    const num1 = parseFloat(document.getElementById('a').value);
    const num2 = parseFloat(document.getElementById('b').value);
    document.getElementById('Result').innerHTML = `Result: ${num1-num2}`;
}
function mul()
{
    const num1 = parseFloat(document.getElementById('a').value);
    const num2 = parseFloat(document.getElementById('b').value);
    document.getElementById('Result').innerHTML = `Result: ${num1*num2}`;
}
function div()
{
    const num1 = parseFloat(document.getElementById('a').value);
    const num2 = parseFloat(document.getElementById('b').value);
    document.getElementById('Result').innerHTML = `Result: ${num1/num2}`;
}

