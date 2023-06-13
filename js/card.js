function show() {
    document.getElementById('plasmatron-card').style.display = "flex";
}
function back() {
    document.getElementById('plasmatron-card').style.display = "none";
}
function showBenefit1() {
    document.getElementById('benefits-row1').style.display = "none";
    document.getElementById('benefits-card1').style.display = "flex";
}
function backBenefit1() {
    document.getElementById('benefits-row1').style.display = "flex";
    document.getElementById('benefits-card1').style.display = "none";
}
function showBenefit2() {
    document.getElementById('benefits-row2').style.display = "none";
    document.getElementById('benefits-card2').style.display = "flex";
}
function backBenefit2() {
    document.getElementById('benefits-row2').style.display = "flex";
    document.getElementById('benefits-card2').style.display = "none";
}
function showBenefit3() {
    document.getElementById('benefits-row3').style.display = "none";
    document.getElementById('benefits-card3').style.display = "flex";
}
function backBenefit3() {
    document.getElementById('benefits-row3').style.display = "flex";
    document.getElementById('benefits-card3').style.display = "none";
}
function showBenefit4() {
    document.getElementById('benefits-row4').style.display = "none";
    document.getElementById('benefits-card4').style.display = "flex";
}
function backBenefit4() {
    document.getElementById('benefits-row4').style.display = "flex";
    document.getElementById('benefits-card4').style.display = "none";
}

window.show = show;
window.back = back;
window.showBenefit1 = showBenefit1;
window.backBenefit1 = backBenefit1;
window.showBenefit2 = showBenefit2;
window.backBenefit2 = backBenefit2;
window.showBenefit3 = showBenefit3;
window.backBenefit3 = backBenefit3;
window.showBenefit4 = showBenefit4;
window.backBenefit4 = backBenefit4;