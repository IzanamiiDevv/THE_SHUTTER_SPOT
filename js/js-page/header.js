import details from "./details.js";
const content = `

<div class="flex">
  
          <a href="home.html" class="logo">${details.projectName}</a>
  
          <nav class="navbar">
              <ul>
                  <li><a href="home.html">home</a></li>
                  <li><a href="#">pages</a>
                      <ul>
                          <li><a href="about.html">about</a></li>
                      </ul>
                  </li>
                  <li><a href="shop.html">shop</a></li>
              </ul>
          </nav>
  
          <div class="icons">
              <div id="menu-btn" class="fas fa-bars"></div>
              <a href="search_page.html" class="fas fa-search"></a>
              <a href="wishlist.html"><i class="fas fa-heart"></i>
              <a href="cart.html"><i class="fas fa-shopping-cart"></i>
          </div>
  
</div>

`;
document.getElementById("header-temp").innerHTML = content;
document.getElementById("title").innerText = details.projectNames 