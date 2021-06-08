function scuberGreetingForFeet(feet = 400){
  let freeSample;
  if (feet <= 400){
    return 'This one is on me!'
  }
  if (feet <= 2001){
    return "I will gladly take your thirty bucks."
  }
 else if (feet > 2500){
    return "No can do."
  }
  

}

function ternaryCheckCity(travel){ 
 return (travel == "NYC")? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tips){
  let charm;
  switch(tips){
    case "generous":
      charm = "Thank you so much.";
      break;
      case "not as generous":
        charm = 'Thank you.';
        break;
        default:
          charm = "Bye."
  }
  return charm;
 
}