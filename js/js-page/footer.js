import details from "./details.js";

let content = `

<div class="box-container">
 
    <div class="box">
            <h3>quick links</h3>
            <a href="index.html">home</a>
            <a href="about.html">about</a>
            <a href="shop.html">shop</a>
    </div>
 
    <div class="box">
            <h3>contact info</h3>
            <p> <i class="fas fa-phone"></i> +123-456-7890 </p>
            <p> <i class="fas fa-phone"></i> +09[test] </p>
            <p> <i class="fas fa-envelope"></i> test@gmail.com </p>
            <p> <i class="fas fa-map-marker-alt"></i> Basta </p>
    </div>
 
    <div class="box">
            <h3>follow us</h3>
            <a href="#"><i class="fab fa-facebook-f"></i>facebook</a>
            <a href="#"><i class="fab fa-twitter"></i>twitter</a>
            <a href="#"><i class="fab fa-instagram"></i>instagram</a>
    </div>
 
</div>
 
    <div class="credit">&copy; copyright @<span id="c-year">${details.credits.year}</span> by <span id="c-name">${details.credits.name}</span> </div>

`;

document.getElementById("footer-temp").innerHTML = content;