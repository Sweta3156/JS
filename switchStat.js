function caseSwitch(val)  {
    var answer = "";
    switch(val){
        case 1 : 
          answer = "aplha";
          break;
        case 2 :
          answer = "beta";
          break;
        case 3 :
          answer = "gamma";
          break;
        case 4 :
          answer = "delta";
          break;
        default :
          answer = "error";
    }
    return answer;
}
console.log(caseSwitch(0))





function sequentialSizes(val) {
    var ans = "";
    switch (val){
        case 1:
        case 2:
        case 3:
          ans = "low";
          break;
        case 4:
        case 5:
        case 6:                  
          ans = "medium";
          break;
        case 7:
        case 8:
        case 9:
          ans = "high";
          break;
        default: 
           ans= "error";
           break;
    }
    return ans;
}
console.log(sequentialSizes(9));