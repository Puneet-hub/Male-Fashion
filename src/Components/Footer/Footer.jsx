import "./Footer.css";
function Footer(){
    return(
<div>
  <div className="the-end">
    <div className="footer-1">
      <img src={"footer-logo.png"} alt />
      <p>The customer is at the heart of our <br />unique business model, which includes <br /> design.</p>
      <img src="payment.png" alt />
    </div>
    <div className="footer-2">
      <div className="shopping-1">
        <h6>shopping</h6>
        <ul>
          <li><a href="#">Clothing Store</a></li>
          <li><a href="#">Trending Shoes</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
      </div>
      <div className="shopping-2">
        <h6>shopping</h6>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Payment Methods</a></li>
          <li><a href="#">Delivery</a></li>
          <li><a href="#">Return &amp; Exchanges</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-3">
      <h6>newletter</h6>
      <p>Be the first to know about new <br /> arrivals, look books, sales &amp; promos!</p>
      <form action>
        <label htmlFor="email">
          <input type="email" name="Email" id placeholder="Your email" />
          <i className="fa-regular fa-envelope" />
        </label>
      </form>
    </div>
  </div>
  <div className="main-footer">
    <p>Copyright © 20242020 All rights reserved | This template is made with <img src="icon/heart.png" alt /> by Colorlib</p>
  </div>
</div>

    )
}
export default Footer;
