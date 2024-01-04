
// ------------------------------------------------------

// display value
function displayValue(val) {
    document.getElementById("result").value += val;
  }
  

  // evaluates the digit and return result
  function solve() {
    let x = document.getElementById("result").value;
    console.log(x, typeof(x))
    if (x.includes('+')){
        var num = x.split(/\+|\-|\*|\÷/g)
        console.log(typeof(num))
        var sum=0
        for (let i=0;i<num.length;i++ ){
            sum += Number(num[i]) ;
        }
        document.getElementById("result").value = sum;
    }
    else if(x.includes('-')){
        var num = x.split(/\+|\-|\*|\÷/g)
        var diff = 0
        var aa=0
        let i=num.length;
        aa = (num[i-i])
        for(let j=1;j<num.length;j++){
            diff = (aa -= num[i-(i-j)])
            console.log(diff, aa)
        }   
        document.getElementById("result").value = diff;
    }
    else if(x.includes('*')){
        var num = x.split('*')
        console.log(num)
        var prod=1
        for (let i=0;i<num.length;i++ ){
            prod *= Number(num[i]) ;
        }
        document.getElementById("result").value = prod;
    }
    else if(x.includes('÷')){
        var num = x.split(/\÷/g)
        var division = 0
        var aa=0
        let i=num.length;
        aa = (num[i-i])
        for(let j=1;j<num.length;j++){
            division = (aa /= num[i-(i-j)])
            console.log(division)
        }   
        document.getElementById("result").value = division;
    }
}
    
    
  
  
  // clear the result
  function clearResult() {
    document.getElementById("result").value = "";
  }
  //--------------------------------------------------------

  