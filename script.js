// DAY 5 TASK
// (Q1) FOR THE GIVEN JSON ITERATE OVER ALL FOR LOOPS

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload = function()
{
    var data = request.response;
    var result = JSON.parse(data);
    //iterating using for loop
    for(let i=0;i<result.length;i++)
    {
        console.log(result[i].region);
    }

    //iterating using for in loop (majorly used for objects)
    console.log("PRINTING ITEMS USING FOR IN")

    for(let key in result)
    {
        console.log(result[key].subregion,result[key].area)
    }

    console.log("PRINTING ITEMS USING FOR OF")

    for(let val of result)
    {
        console.log(val.name.common)
    }
}


// (Q2) CREATE YOUR OWN RESUME DATA IN JSON FORMAT

const resumeData = {
    name: "Manikandan R",
    Role: "Software Developer",
    Qualification:"B.E. CSE",
    address: {state:"Tamilnadu",city:"Chennai",area:"nungambakkam"},
    skills:["React","Javascript","SAP","Angular"],
    experience:[{Role:"SDE",company:"TCS",duration:"2020-2022"},{Role:"QA",company:"Amazon",duration:"2016-2019"}],
    academics:{SSLC:"95%",HSC:"88%",UG:"8.5 CGPA"},
    phone:"7904782957"
}
console.log(resumeData);
