let input = document.getElementById("result1");
var res1;
function insertvalue(value)
{
    input.value = input.value + value ;
    res1=input.value;
    res1= eval(input.value)
}

function equal()
{
    res1=eval(input.value);
    input.value=res1;
}

function squre()
{
    if (input.value == "")
    {
        alert("enter something");
    }
    else
    {
        res1 = input.value * (input.value);
        input.value =res1 ; 
    }
}

function persent()
{
    if (input.value == "")
    {
        alert("enter something");
    }
    else
    {
        input.value = input.value /100;
        
    }   
}

function clr()
{
    input.value="";
    res1="";
}
