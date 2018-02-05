/**
 * CSP Activity 2.2.2 IntroducingPHP
 * 
 * 222indexB.php models use of PHP in conjunction with MySQL, JavaScript, and CSS
 * @copyright 2014 Project Lead The Way, Inc.
 * 
 */

var popping = "";

function hideDetailedView() {
    var unpopped = document.getElementById("popout");
    unpopped.innerHTML = "";
    unpopped.id = popping;
}

function showDetailedView(currentDiv, firstname, image_path, image_name) {
    var popframe = document.getElementById(currentDiv);
    popping = popframe.id;
    popframe.id = "popout";
    popframe.innerHTML = `<br /><TABLE><TR><TH rowspan='3'><img src="http://${window.location.hostname}/${image_path}" width='250'><TH align='left'>Artist's Name: <TH align='left'>${firstname}<TR><TH align='left'>File Name: <TH align='left'>${image_name}<TR></TABLE>`;
    var unpopped = document.getElementById(currentDiv);
    unpopped.onmouseout = hideDetailedView;
}
