// Create class for obtaining meaningful values from form
class UsrValue {
    constructor(name) {
        this.name = name
    }

    get value() {
        return this.calcValue();
    }

    calcValue() {
        var formData = document.forms["kittyform"];
        var baseNum = formData.elements[this.name]
        var scaleNum = formData.elements[''.concat(this.name, 'scale')]
        return baseNum * 10**scaleNum;
    }
}


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
const square = new Rectangle(10, 10);
console.log(square.area);


function calculateTotal()
{
    //Obtain relevant data from form
    const goalamount = new UsrValue('goalamount')
    const currentearning = new UsrValue('currentearning')

    // conversion logic: time = $$ / ($$ / time)
    var waitSeconds = goalamount.value/currentearning.value * 10;
}

function displayTotal()
{
    let diffTime = Math.abs(new Date().valueOf() - new Date('2021-11-22T18:30:00').valueOf());
    let days = diffTime / (24*60*60*1000);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let secs = (minutes % 1) * 60;
    [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
    
    //display the result
    var divobj = document.getElementById('waitTime');
    divobj.style.display='block';
    divobj.innerHTML = "Time till $$$"+days+"Days";
}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}