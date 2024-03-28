function sendToWhatsapp() {
    let number = "+96176906107";
    let name = document.getElementById('name').value;
    let pnumber = document.getElementById('number').value;
    let address = document.getElementById('address').value;
    let service = document.getElementById('service').value; // Correct way to get selected value

    var url = "https://wa.me/" + number + "?text=" +
        "Name : " + name + "%0a" +
        "Phone Number : " + pnumber + "%0a" +
        "Address : " + address + "%0a%0a" +
        "Service : " + service + "%0a";

    window.open(url, '_blank').focus();
}
