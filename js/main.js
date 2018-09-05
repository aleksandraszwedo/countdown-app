document.getElementById("countdown").addEventListener("click", function () {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value - 1;
    var day = document.getElementById("day").value;
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;
    var countDownDate = new Date(year, month, day, hour, minute).getTime();


    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;


        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (now > countDownDate) {
            document.getElementById("count").innerHTML = "This event is already happening!<br>Click <i class=\"fas fa-undo-alt\"></i> and try again with correct date."
        } else {
        document.getElementById("count").innerHTML = "days: <span>" + days + "</span><br> hours: <span>" + hours + "</span><br> minutes: <span>" + minutes + "</span><br> seconds: <span>" + seconds + "</span><br> left for your event!";
        }
    });

    // ---- add classes ---- //
    document.getElementById("form").classList.add("clear");
    document.getElementById("count").classList.add("count-add");

    // ---- reload ---- //
    document.getElementById("reload").innerHTML = "<i class=\"fas fa-undo-alt\"></i>";
    document.getElementsByClassName("fas").addEventListener("click", function () {
        document.location.reload();
    });

})

document.getElementById("holiday").addEventListener("click", function () {
    document.getElementById("main").removeAttribute("class");
    document.getElementById("main").classList.add("holiday");
})

document.getElementById("birthday").addEventListener("click", function () {
    document.getElementById("main").removeAttribute("class");
    document.getElementById("main").classList.add("birthday");
})

document.getElementById("wedding").addEventListener("click", function () {
    document.getElementById("main").removeAttribute("class");
    document.getElementById("main").classList.add("wedding");
})
