function mostrar()
{   var numerouno;
    var numerodos;
    var num1;
    var num2;
    var resultado;

    numerouno=prompt("ingrese primero numero");
    numerodos=prompt("ingrese segundo numero");

    if(numerouno==numerodos);
    { 
        resultado=numerouno+numerodos;
    }
        else
        {
            if(numerouno>numerodos);
        {
                resultado=numerouno-numerodos;
        }
            else
            {
                num1=parseInt(numerouno);
                num2=parseInt(numerodos);
                resultado=num1+num2;
                if(total>10)
                {
                    total=total + "es mayor a 10 ";

                }
            }
                
                


            
        
        }
alert(resultado);
}
