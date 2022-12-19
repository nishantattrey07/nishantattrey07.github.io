const lnumber="";
        var result = "";
        
        function largerNumber(){
            
            var a = document.getElementById("en1").value;
            var b = document.getElementById("en2").value;
            if(a > b){
                result = a;
            }
            else{
                result = b;
            }
            alert(result)
        }


function printnum(){
    for (let x=0; x<10; x++){
        document.write(x)
    }
}