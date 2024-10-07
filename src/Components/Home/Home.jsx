import "./Home.css";
import banner1 from '../Images/banner/banner-1.jpg'
import banner2 from '../Images/banner/banner-2.jpg'
import banner3 from '../Images/banner/banner-3.jpg'
import productSale from '../Images/Img/product-sale.png'
import calender from '../Images/icon/calendar.png'
import blog1 from '../Images/blog/blog-1.jpg'
import blog2 from '../Images/blog/blog-2.jpg'
import blog3 from '../Images/blog/blog-3.jpg'
import instagram1 from '../Images/instagram/instagram-1.jpg'
import instagram2 from '../Images/instagram/instagram-2.jpg'
import instagram3 from '../Images/instagram/instagram-3.jpg'
import instagram4 from '../Images/instagram/instagram-4.jpg'
import instagram5 from '../Images/instagram/instagram-5.jpg'
import instagram6 from '../Images/instagram/instagram-6.jpg'
import hero1 from '../Images/hero/hero-1.jpg'
import Card from "./Card";



function Home(){

    return(
        <div>
  <div className="hero" style={{background:`url(${hero1})`,backgroundSize:"cover",backgroundPosition:"center"}}>
    <div className="main-hero">
      <i className="fa-solid fa-arrow-left-long" id="left-arrow" />
      <div className="img-text">
        <h6>SUMMER COLLECTION</h6>
        <h1>Fall - Winter Collections 2030</h1>
        <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to
          exceptional quality.</p>
        <button>SHOP NOW<i className="fa-solid fa-arrow-right-long" style={{marginLeft: 5}} /></button>
        <ul>
          <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
          <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
          <li><a href="#"><i className="fa-brands fa-pinterest" /></a></li>
          <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
        </ul>
      </div>
      {/* <i class="fa-solid fa-arrow-right-long" id="right-arrow"></i> */}
    </div>
  </div>


  <div className="banner-1">
    <img src={banner1} alt />
    <h2>Clothing <br /> Collections 2030</h2>
    <a href="#">SHOP NOW</a>
  </div>


  <div className="banner">
    <div className="banner-2">
      <img src={banner2} alt />
      <h2>Accessories</h2>
      <a href="#">SHOP NOW</a>
    </div>
    <div className="banner-3">
      <img src={banner3} alt />
      <h2>Shoes Spring <br /> 2030</h2>
      <a href="#">SHOP NOW</a>
    </div>
  </div>


  <div className="card-header">
    <ul>
      <li><a href="#" style={{color: 'black'}}>Best Sellers</a></li>
      <li><a href="#">New Arrivals</a></li>
      <li><a href="#">Hot Sales</a></li>
    </ul>
  </div>

  
      <Card />


  {/* </div>
    </div>
</div>
</div> */}
  <div className="bag">
    <div className="category-1">
      <h2>Clothing Hot</h2>
      <span>Shoe Collection</span>
      <h2>Accessories</h2>
    </div>
    <div className="category-2">
      <div className="circle-tag">
        <p>Sale Of</p>
        <h3>$29.99</h3>
      </div>
      <img src={productSale} alt />
    </div>
    <div className="category-3">
      <span>Deal of the week</span>
      <h2>Multi-Pocket Chest <br /> Bag Black</h2>
      <div className="countdown">
        <div className="cd-item">
          <h1>30 &nbsp;&nbsp;: &nbsp; 09 &nbsp;&nbsp;:&nbsp;&nbsp; 42 &nbsp;&nbsp;:&nbsp;&nbsp; 39</h1> <br />
        </div>
        <div className="cd-item">
          <p>Days &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hours &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Minute
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seconds</p>
        </div>
        <button>Shop now</button>
      </div>
    </div>
  </div>


  <div className="image-insta">
    <div className="image-grid-6">
      <div className="item item--2"><img src={instagram1} alt /></div>
      <div className="item item--1"><img src={instagram2} alt /></div>
      <div className="item item--3"><img src={instagram3} alt /></div>
      <div className="item item--4"><img src={instagram4} alt /></div>
      <div className="item item--5"><img src={instagram5} alt /></div>
      <div className="item item--6"><img src={instagram6} alt /></div>
    </div>
    <div className="insta">
      <h2>Instagram</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing <br />elit. Odio aut delectus numquam veniam placeat ad
        <br /> esse vero quis ratione nesciunt.</p>
      <h2 style={{color: '#e53637'}}>#Male_Fashion</h2>
    </div>
  </div>

  
  <div className="fashion">
    <h5>latest news</h5>
    <h2>Fashion New Trends</h2>
    <div className="img-news">
      <div className="blog-img"><img src={blog1} alt />
        <div className="blog">
          <i><img src={{calender}} alt /> 16 Februry 2020 <br /> </i>
          <h4>What Curling Irons Are The <br /> Best Ones</h4>
          <a href="#">READ MORE</a>
        </div>
      </div>
      <div className="blog-img"><img src={blog2} alt />
        <div className="blog">
          <i><img src={calender} alt /> 21 Februry 2020 <br /> </i>
          <h4>Eternity Bands Do Last <br /> Forever</h4>
          <a href="#">READ MORE</a>
        </div>
      </div>
      <div className="blog-img"><img src={blog3} alt />
        <div className="blog">
          <i><img src={calender} alt /> 28 Februry 2020 <br /> </i>
          <h4>The Health Benefits Of <br /> Sunglasses</h4>
          <a href="#">READ MORE</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Home;
