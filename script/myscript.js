'use strict';


function carFun() {
    var b = prompt('Currently, you are hungry or full (not hungry) ?');
    var a = prompt('What is the degree of your satiety or hunger? from 0-10');
    var logo=0;//defined
    for (var i = 0; i < a; i++) {
        if (b === 'hungry') {
            logo = logo + '<img src ="https://image.flaticon.com/icons/png/128/742/742880.png">';
        } else if (b === 'full') {
            logo = logo + '<img src ="https://www.susans.org/wp-content/uploads/2015/02/dont-eat.png">'
        }
    }
return logo

    
}



//{<SCript>document.write('<h2 class="fun">' + numOne() + '</h2>');</SCript>}
//<button class="try" onclick="myFunction()">Click Me</button>
//<button class="mass" onclick="testBmi()">Test Your BMI</button>