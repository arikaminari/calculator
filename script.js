var initial = 100;
console.log(initial);

var edu, worth, caste, skills, age, reputation;

function education(value){
    
    if(value=="bachelor"){
        edu = 1.5;
    }
    else if(value=="college"){
        edu = 1.2;
    }
    else if(value=="high_school"){
        edu = 1.05;
    }
    else if(value=="middle_school"){
        edu = 0.9;
    }
    console.log(edu);
}

function familyNetWorth(value){

    if(value=="upper_class"){
        worth = 2;
    }
    else if(value=="middle_class"){
        worth = 1.5;
    }
    else if(value="lower_class"){
        worth = 1.2;
    }
    console.log(worth);
}

function solCaste(value)
{
    switch(value){
        case "B":
            caste = 100;
            break;
        case "K":
            caste = 50;
            break;
        case "V":
            caste = 20;
            break;
        case "S":
            caste = 10;
            break;
        case "-V":
            caste = -50;
            break;
    }
    console.log(caste);
}

// function skill(value){
    
//     if(value=="musician" && value=="singer"){
//         skills= 10;
//     } else if(value=="cooker"){
//         skills = 20;
//     }else if(value=="good_person"){
//         skills = 15;
//     }

//     var sk = document.getElementsByTagName('Skills');
//     for (var i = 0; i < sk.length; i++)
//     {
//         if (sk[i].checked==true) {
//             skills += parseFloat(sk[i].value);
//         }
//     }
//     console.log(skills);
// }
 

function Age(value){
    
    switch(value){
        case "young":
            age = 1.5;
            break;
        case "adult":
            age = 1.2;
            break;
        case "elder":
            age = 0.95;
            break;
    }
    console.log(age);
}

var total;
function calcResult(){
    
    total = (initial*edu*worth+caste)*age;
    document.getElementById("submit").innerHTML = total + '$';
}