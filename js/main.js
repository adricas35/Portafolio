
document.getElementById('menuOpen').addEventListener('click', function() {
    document.getElementById('menuOpen').style.display = "none";
    document.getElementById('menuClose').style.display = "flex";
    document.getElementById('navbarNav').style.display = "flex";
});

document.getElementById('menuClose').addEventListener('click', function() {
    document.getElementById('menuClose').style.display = "none";
    document.getElementById('menuOpen').style.display = "flex";    
    document.getElementById('navbarNav').style.display = "none";
});