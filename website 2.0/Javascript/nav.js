const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML= `<div class="nav">
    <img src="/picture/logo.png" class ="brand-logo" alt ="">
    <div class="nav-items">
        <div class="search">
            <input type="search" class="search-box" placeholder="search here..">
            <button class ="search-btn" onclick ="alert()">search</button>
        </div>

        <a href="http://127.0.0.1:5500/webpages/login.htm#"><img src="/picture/user.png" alt=""></a>
        <a href="#"><img src="/picture/cart.png" alt=""></a>
    </div>
</div>
    </nav>
            <ul class="link-container">
            <li class="link-item"><a href="http://127.0.0.1:5500/webpages/index.htm" alt="" class="link">home</a></li>
            <li class="link-item"><a href="http://127.0.0.1:5500/webpages/product.html" alt="" class="link">books</a></li>
            <li class="link-item"><a href="http://127.0.0.1:5500/webpages/Library.html#" alt="" class="link">Library and collection</a></li>
            <li class="link-item"><a href="http://127.0.0.1:5500/webpages/Blog.htm" alt="" class="link">Blog</a></li>
            <li class="link-item"><a href="http://127.0.0.1:5500/webpages/contact.htm" alt="" class="link">Contact</a></li>
    </ul>`;
}

createNav();
