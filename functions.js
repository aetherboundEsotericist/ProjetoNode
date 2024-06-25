const funAnon = () =>
{
    return "hello world!";
}

//console.log(funAnon());

function makeMult(mult)
{
    return (n) =>
    {
        return n * mult;
    }
}

const duplicate = makeMult(2);
const triplicate = makeMult(3);

//console.log(makeMult(2)(10));
//console.log(duplicate(10));



function mapArray(array, fn)
{
    for(let i = 0; i < array.length; i++)
    {
        array[i] = fn(array[i])
    }
}

const array = [0, 1, 2, 3, 4, 5];
//mapArray(array, triplicate);



//console.log(array);
//console.log(duplicate.toString());

function sumArray(arrayValue, arrayIndex, arrayFull)
{
    let totalValue = 0
    for (let i = 0; i <= arrayIndex; i++)
    {
        totalValue += arrayFull[i]
    }
    return totalValue
}

newArray = array.map(sumArray);
console.log(array);
console.log(newArray);