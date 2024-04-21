function currentDate() {
    
    var currentDate = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString( options);
    return formattedDate;
}
function Timer() {
    var Thistime = new Date();
    var hours = Thistime.getHours();
    var minutes = Thistime.getMinutes();
    var seconds = Thistime.getSeconds();
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    var Timenow = hours + ":" + minutes + ":" + seconds;
    return Timenow;
}
function picturebytime(){
    var Thistime = new Date();
    var hours = Thistime.getHours();
    hours = (hours < 10 ? "0" : "") + hours;
    if((hours>=22&&hours<=24)||(hours<=6))  {
        document.getElementById('background').style.backgroundImage='url("https://gravity.az/images/ada1.jpg")'; 
    } else if (hours>6&&hours<=17){
        document.getElementById('background').style.backgroundImage='url("https://www.ada.edu.az/frq-content/plugins/yourfuture_content_x1/entry/20181226142927_16125700.jpg")' 
    } else {
        document.getElementById('background').style.backgroundImage='url("https://www.ada.edu.az/frq-content/plugins/about_content_x1/entry/20200513131135_88907000.jpg")';
    }

}   
window.onload = function() {
    picturebytime();
};

function calculateAge(birthdateString) {
    
    var parts = birthdateString.split('-');
    var birthYear = parseInt(parts[0]);
    var birthMonth = parseInt(parts[1]) - 1;
    var birthDay = parseInt(parts[2]);
    var birthdate = new Date(birthYear, birthMonth, birthDay);
    var currentDate = new Date();

    var difference = currentDate - birthdate;
    var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    return age;
}
 function forImage(){

let modalOpen = false;
document.querySelectorAll('.image-container img').forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');

        if (modalOpen) {
            overlay.style.display = 'none';
            modal.style.display = 'none';
            modalOpen = false;
        } else {
            document.getElementById('expanded-img').src = image.src;
            overlay.style.display = 'block';
            modal.style.display = 'block';
            modalOpen = true;
        }
    });
});

document.querySelector('.overlay').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    overlay.style.display = 'none';
    modal.style.display = 'none';
    modalOpen = false;
});
}
function forImage2(){

    let modal2Open = false;
    document.querySelectorAll('.image-container_2 img').forEach(image => {
        image.addEventListener('click', () => {
            const modal2 = document.querySelector('.modal2');
            const overlay = document.querySelector('.overlay');
    
            if (modal2Open) {
                overlay.style.display = 'none';
                modal2.style.display = 'none';
                moda2lOpen = false;
            } else {
                document.getElementById('expanded-img').src = image.src;
                overlay.style.display = 'block';
                modal2.style.display = 'block';
                modal2Open = true;
            }
        });
    });
    
    document.querySelector('.overlay').addEventListener('click', () => {
        const modal2 = document.querySelector('.modal2');
        const overlay = document.querySelector('.overlay');
    
        overlay.style.display = 'none';
        modal2.style.display = 'none';
        modal2Open = false;
    });
    }