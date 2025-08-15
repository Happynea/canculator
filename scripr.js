 function append(value){
    let display = document.getElementById("display")
    display.value += value

    }
    function clearDisplay () { 
    display.value = "" ;
    }
   function deleteLast() {
    display.value = 
    display.value.slice(0 , -0 );
   }
   function square() { 
        display.value = 
        Math.sqrt(eval(display.value), 2)
    }
    function cube() {  
        display.value = 
        Math.sqrt(eval(display.value), 3)
    }
   
   function sqrt() {
       display.value = 
       Math.sqrt(eval(display.value))
   }
   
   function cbrt () {
        display.value = 
        Math.sqrt(eval(display.value))
   }
   
    function factorial() {
        if (display.value) {
            let num = parseInt(eval(display.value));
            if (num < 0) {
                display.value = "Ошибка";
                return;
            }
            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            display.value = fact;
        }
    }

    function calculate () {
      display.value =  eval(display.value)
      
    }