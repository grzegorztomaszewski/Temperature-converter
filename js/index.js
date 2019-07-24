const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");
const kelvin = document.querySelector(".kelvin");
const inputs = document.querySelectorAll("input[type='number']");
const btn = document.querySelector(".btn");

//Reset button
btn.addEventListener("click", () => {
    for(let i = 0; i <= 2; i++)
            inputs[i].value = "";
    });
    
//Convert units
for(const input of inputs){
        input.addEventListener("keyup" , function() {

            let celToFah = 32 + 9/5 * Number(this.value);
            let celToKel = Number(this.value) + 273.15;

            let fahToCel = 5/9 * (Number(this.value) - 32);
            let fahToKel = ((Number(this.value) -32) / 1.8000) + 273.15;

            let kelToCel = Number(this.value) - 273.15;
            let kelToFah = (Number(this.value) * 9/5) - 459.67;

            //Round the result
            switch(this){
            case inputs[0]:
            inputs[1].value = Math.round(celToFah * 100) / 100;
            inputs[2].value = Math.round(celToKel * 100) / 100;
            break;

            case inputs[1]:
            inputs[0].value = Math.round(fahToCel * 100) / 100;
            inputs[2].value = Math.round(fahToKel * 100) / 100;
            break;

            case inputs[2]:
            inputs[0].value = Math.round(kelToCel * 100) / 100;
            inputs[1].value = Math.round(kelToFah * 100) / 100;
            break;
            }
            
        //if input is empty = clear all inputs
        if(this.value == ""){
            for(let i = 0; i <= 2; i++){
                inputs[i].value = "";
            }
        }
    });
}