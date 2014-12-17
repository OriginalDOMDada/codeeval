/* Author: William Mannie */

/*-------READ ME--------*/

/* Hello, This is the fizzbuzz plugin by William Mannie

  to get this working, 

  1. place the script.js and plugin.js files into your js folder and link the script on your 
  index.html page's footer.

  2. Next initalize the fizbuzz plug-in by going to  plugin.js in your js folder and Attach the 
  .fizzBuzz() function to the containing element into which you'd like to exectue the function on.

  3. Choose specific table you want to select by changing the getElementById('') method perameters 
  in the variable table. (Be sure that this function does not start running until the entire page is loaded) 

  4. And Tah-Dah!

 */


( function($){ 

  $.fn.fizzBuzz = function() {

    var tbl = document.getElementById('my_table'), // Chooses table by changing perameters
        i;
    // open loop for each row and append cell
    for (i = 1; i < tbl.rows.length; i++) {
        if (i % 3 === 0 && i % 5 === 0){
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "FizzBuzz", 'col');
        }
        else if (i%3 == 0) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Fizz", 'col');
        }
        else if (i%5 == 0){
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Buzz", 'col');
        }
        else {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Uncool", 'col');  
      }
    }

    // create DIV element and append to the table cell
    function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE 
    cell.appendChild(div);                   // append DIV to the table cell
    }

    // adds status text for second-row header
    var tr = document.getElementById('my_table').tHead.children[0],
        th = document.createElement('th');
    th.innerHTML = "Status"; 
    tr.appendChild(th);
  };

})(jQuery);









