$(document).ready(async function() {
    let mechanics = await $.get("/mechanic/mechanics ");
    console.log(mechanics);
    let images = ["images/mec12.jpeg", "images/image1.jpg", "images/image3.jpg", "images/image2.jpg", "images/image7.jpg", "images/mec16.jpeg", "images/mech3.jpg", "images/mec12.jpeg", "images/mec9.jpeg", "images/mec17.jpeg", "images/mec14.jpeg", "images/mec14.jpeg", "images/mec15.jpeg", "images/mec17.jpeg", "images/mec9.jpeg", "images/image7.jpg", "images/mec14.jpeg", "images/mec16.jpeg", "images/mec9.jpeg"

    ]
    let education = [
        ["Bsc in mechanical and mecheatronics", "Expert in solid mechanics(engine expert)"],
        ["Diploma in General car mantainance", "expert in general mantainance"],
        ["Certificate in mechnanics and meterials", "expert in engine transmission and mantainance"],
        ["Diploman in general car mantainace", "expert in general car mantainance"],
        ["Bsc in automotiveengineering", "expert in engine repair and mantrainance"],
        ["Masters in mobile,automotive and transpportation", "expert in gerneal csr mantainance"],
        ["Bsc in mechanical and mecheatronics", "Expert in solid mechanics(engine expert)"],
        ["Diploma in General car mantainance", "expert in general mantainance"],
        ["Certificate in mechnanics and meterials", "expert in engine transmission and mantainance"],
        ["Diploman in general car mantainace", "expert in general car mantainance"],
        ["Bsc in automotiveengineering", "expert in engine repair and mantrainance"],
        ["Masters in mobile,automotive and transpportation", "expert in gerneal csr mantainance"],
        ["Bsc in mechanical and mecheatronics", "Expert in solid mechanics(engine expert)"],
        ["Diploma in General car mantainance", "expert in general mantainance"],
        ["Certificate in mechnanics and meterials", "expert in engine transmission and mantainance"],
        ["Diploman in general car mantainace", "expert in general car mantainance"],
        ["Bsc in automotiveengineering", "expert in engine repair and mantrainance"],
        ["Masters in mobile,automotive and transpportation", "expert in gerneal csr mantainance"],
        ["Masters in mobile,automotive and transpportation", "expert in gerneal csr mantainance"]
    ]
    let distance = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    mechanics.map(function(mechanic) {
        mechanic.image = images["0", "1", "2", "3"]

    })
    const buildMap = (mechanics, images) => {
        const map = new Map();
        for (let i = 0; i < mechanics.length; i++) {
            map.set(mechanics[i], images[i]);
        };
        return map;
    };
    console.log((mechanics, images));
    let image = buildMap(mechanics, images);
    console.log(image.get(mechanics[0]));

    // const showEducation = (mechanics, education) => {
    //     const map = new Map();
    //     for (let i = 0; i < mechanics.length; i++) {
    //         map.set(mechanics[i], education[i]);
    //     };
    //     return map;
    // };
    console.log((mechanics, education));
    let educational = buildMap(mechanics, education);
    console.log(educational.get(mechanics[0]));

    const getDistance = (mechanics, distance) => {
        const map = new Map();
        for (let i = 0; i < mechanics.length; i++) {
            map.set(mechanics[i], images[i]);
        };
        return map;
    };
    console.log((mechanics, images));
    let image = buildMap(mechanics, images);
    console.log(image.get(mechanics[0]));

    const showEducation = (mechanics, education) => {
        const map = new Map();
        for (let i = 0; i < mechanics.length; i++) {
            map.set(mechanics[i], education[i]);
        };
        return map;
        mechanics.map(function(mechanic) {
            console.log(educational.get(mechanic));
            $(" #mechanics ").append(`
                                    <div id=` + mechanic.phone + `>
        <div class=" row myMechanics ">
            <div class=" col-md-4 names ">
                <label>
                    <h4>Name</h4>
                </label>
                <br />` + mechanic.name + `<br />
                <label>
                    <h4>Locality</h4>
                </label><br />` + mechanic.location + `
                <br />
                <label>
                    <h4>Distance:</h4>
                </label><br />
            </div>
            <div class=" col-md-4 images ">
                <div class=" flip-card ">
                    <div class=" flip-card-inner ">
                        <div class=" flip-card-front ">
                            <img src="` +
                image.get(mechanic) + `" class=" img-fluid " />
                        </div>
                        <div class=" flip-card-back ">


                            <h2>` + educational.get(mechanic)[0] + ` </h2>
                            <p> ` + educational.get(mechanic)[1] + `
                                < /p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" col-md-4 ratings ">
            <h3> Ratings</h3>
            <span class=" fa fa-star checked ">
            </span>
            <span class=" fa fa-star checked ">
            </span>
            <span class=" fa fa-star checked ">
            </span>
            <span class=" fa fa-star ">
            </span>
            <span class=" fa fa-star ">
            </span>

        </div>
        <button type="button" class="btn btn-primary" class="btn btn - primary btn - lg" onclick="modalCall()">
            <h3>
                <b> Make An Appointment!
                </b>
            </h3>
        </button>
        <br>
        <br>
        <hr style="height:2px;width:110%;color:red;background-color:gred ">
    </div>            
                            `);

        });
    };
});


function confirmSelection() {
    document.getElementById('id01').style.display = "block"
}
var x = document.getElementById(" location-demo ");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = " Geolocation is not supported by this browser. ";
    }
}

function revealMechanics() {
    console.log(revealMechanics)
    $('#mechanics').addClass('show').removeClass('hide')

}

function showPosition(position) {
    let x = document.getElementById('location-demo');
    x.innerHTML = " Latitude: " + position.coords.latitude +
        " <br>Longitude: " + position.coords.longitude;
} // Get the modal var modal = document.getElementById("myModal"); // Get the button that opens the modal // var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
let button = document.getElementById("")
onclick = function() {
    modal.style.display = "block"
}

function removeModal() {
    let modal = document.getElementById('myModal')
    modal.style.display = "none"
}

function modalCall() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block"

}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    let modal = document.getElementById('myModal')
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let modal = function closeModal() {
        onclick = "removeModal()"
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let confirmAppointment = document.getElementById("confirmAppointment");
//  console.log(confirmAppointment) confirmAppointment.addEventListener("click", function() {
//   let appointment = {
//  Name: document.getElementByValue("").val(),
//Datetime: Date.now(),
// Contacts: document.getElementByValue("").val(),
//typeOfService: document.getElementByValue("#services").val(),
//carModel: document.getElementByValue("#model").val(),
//briefDescription: document.getElementByValue("#description").val(),
//};
//  document.getElemetById("").innerHtml = "";
//  });