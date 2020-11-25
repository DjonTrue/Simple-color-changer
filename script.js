
 let inputs = document.querySelectorAll("input[type='number']"); //global variable for storing the 3 inputs
 let ranges = document.querySelectorAll("input[type='range']"); //global variable for storing the 3 ranges
 function colorChanger1() {
      let r = inputs[0].value; ranges[0].value = r
      let g = inputs[1].value; ranges[1].value = g
      let b = inputs[2].value; ranges[2].value = b
      let rgb = "rgb(" + r + "," + g + "," + b + ")";
       
      document.body.style.backgroundColor = rgb;
            
 }
 function colorChanger2() {
      let r = ranges[0].value; inputs[0].value = r;
      let g = ranges[1].value; inputs[1].value = g;
      let b = ranges[2].value; inputs[2].value = b;
      colorChanger1();
   
 }     

 

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", colorChanger1);
        ranges[i].addEventListener("change", colorChanger2);
        //cancel event
        inputs[i].addEventListener("keydown", (e) => { e.preventDefault() });
    }

       
