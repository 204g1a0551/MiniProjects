const a=[1,3,4,2];
function find()
{
    const element=
    document.getElementById('number').value;
    if(a.includes(element))
    {
        document.getElementById("result2").innerHTML="true";
    }
    else{
        document.getElementById("result2").innerHTML="false";
        a.push(element);
    }
}