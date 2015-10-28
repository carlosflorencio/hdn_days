// Append result
document.getElementById("carlos-result").innerHTML = getDays(dates.carlos);
document.getElementById("paulo-result").innerHTML = getDays(dates.paulo);
document.getElementById("edu-result").innerHTML = getDays(dates.edu);
document.getElementById("ricardo-result").innerHTML = getDays(dates.ricardo);
document.getElementById("nuno-result").innerHTML = getDays(dates.nuno);

function getDays(str) {
    return daydiff(parseDate(str), parseDate(todayDate()))
}

function parseDate(str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[1], mdy[0]-1);
}

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

function todayDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }

    if(mm<10){
        mm='0'+mm
    }

    return dd+'/'+mm+'/'+yyyy;
}