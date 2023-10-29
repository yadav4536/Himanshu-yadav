document.getElementById("convertbutton").addEventListener("click", function() {
    let inputtemp=document.getElementById("inputtemp").value;
    let fromunit = document.getElementById("fromunit").value;
    let tounit = document.getElementById("tounit").value;
    let result= document.getElementById("result");

    if(fromunit==="celsius" && tounit==="farenheit"){
        result.innerHTML=(inputtemp*9/5+32)+ " FARENHEIT";
    }
    if(fromunit==="farenheit" && tounit==="celcius"){
        result.innerHTML=((inputtemp-32)*5/9)+ " CELCIUS";
    }
    
    if(fromunit==="kelvin" && tounit==="celsius"){
        result.innerHTML=(inputtemp - 273.15)+ " CELSIUS";
    }
    if(fromunit==="celsius" && tounit==="kelvin"){
        result.innerHTML=(inputtemp -(-273.15))+ " KELVIN";
    }
    if(fromunit==="farenheit" && tounit==="kelvin"){
        result.innerHTML=((inputtemp-32)*5/9+273.15)+ " KELVIN";
    }
    if(fromunit==="kelvin" && tounit==="farenheit"){
        result.innerHTML=((inputtemp-273.15)*9/5+32)+ " FARENHEIT";
    }
}
);
