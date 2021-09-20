function calcular (){
    var num1 = parseInt(document.getElementById("num-1").Value);
    var num1 =  parseInt(document.getElementById("num-2").Value);
    var operacion =  document.getElementById ("operacion").value;
    if (operacion == 1){
    
    Document.getElementById("resultado").value = num1+ num2;
    
    }else{
        document.getElementById("resultado").value = num1-num2;
    }

    

    $("#btn-calcula").click(function(){

    });

    document.getElementById("btn-calcular").click(function(){
        alert();
    });
}