//--------------------------------------
// FUNCTION: Card Generator
//--------------------------------------

function createCard(title, cname, veiws, monthsold, duration, thumbnail) {

let veiwstr = "";

if (veiws < 1000) {
    veiwstr = veiws;
}
else if (veiws < 100000) {  
    veiwstr = (veiws / 1000) + "K";      // Thousand
}
else if (veiws < 10000000) {  
    veiwstr = (veiws / 100000) + "L";    // Lakh
}
else if (veiws < 1000000000) {  
    veiwstr = (veiws / 10000000)+ "Cr"; // Crore
}
else {
    veiwstr = (veiws / 1000000000) + "B"; // Billion
}



    let html = `
        <div class="card">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="Thumbnail">
                <div class="duration">${duration}</div>
            </div>

            <div class="title">
                <p><b>${title}</b></p>
            </div>

            <div class="cname-veiws-monthsold">
                <p>${cname} • ${veiwstr} Views • ${monthsold} months ago</p>
            </div>
        </div>
    `;

    document.querySelector(".container").innerHTML += html;
}



//--------------------------------------
// FORM OPEN TOGGLE
//--------------------------------------
function addform() {
    document.getElementById("form").classList.toggle("display-view");
}



//--------------------------------------
// FORM INPUT → CREATE CARD
//--------------------------------------

function AddEnteredDetails(){

    let file = document.getElementById("Thumbnail").files[0];
    let title = document.getElementById("Title").value;
    let cname = document.getElementById("Cname").value;
    let veiws = document.getElementById("Veiws").value;
    let monthsold = document.getElementById("month").value;
    let duration = document.getElementById("duration").value;

    if(!file || !title || !cname || !veiws || !monthsold || !duration){
        alert("⚠ Please fill all fields!");
        return;
    }

    // Convert file → image URL
    let thumbnailURL = URL.createObjectURL(file);

    // FINAL CARD CREATION CALL
    createCard(title, cname, veiws, monthsold, duration, thumbnailURL);

    // CLEAR FORM INPUTS
    document.getElementById("Title").value = "";
    document.getElementById("Cname").value = "";
    document.getElementById("Veiws").value = "";
    document.getElementById("month").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("Thumbnail").value = "";

    document.getElementById("form").classList.remove("display-view");

}
