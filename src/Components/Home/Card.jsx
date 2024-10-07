import React from 'react'
import icon1 from '../Images/icon/heart.png'
import icon2 from '../Images/icon/compare.png'
import icon3 from '../Images/icon/search.png'
import product from '../Produt/Product' 

function Card() {
  return (
    <div className="card">
    <div className="card-upper">
      {product.map((item)=>(
        <div className="card-1">
        <p>NEW</p>
        {/* <div class="right-icon">
  <i class="fa-regular fa-heart"></i>

  <i class="fa-solid fa-magnifying-glass"></i>
    </div> */}
        <img src={item.image} alt width={"200"} height={"200"}/>
        <h4>+ {item.name}</h4>
        <h6>Pique Sport Shoes</h6>
        <div className="rating">
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <h5>$67.24 </h5>
        <div className="checkbox">
          <i className="fa-solid fa-circle" style={{border: '1px solid gainsboro'}} />
          <i className="fa-solid fa-circle" style={{color: 'rgb(79, 26, 26)'}} />
          <i className="fa-solid fa-circle" style={{color: 'yellowgreen'}} />
        </div>
        
      </div>
      ))}
      
      <div className="h-c-s">
          <div className="heart">
            <img src={icon1} alt /> 
          </div>
          <div className="compare">
            <img src={icon2} alt />
          </div>
          <div className="search">
            <img src={icon3} alt />
          </div>
        </div>


      {/* <div className="card-2">
        <img src={product2} alt />
        <h4>+ Add To Cart</h4>
        <h6>Pique Biker Jacket</h6>
        <div className="rating">
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <h5>$43.48</h5>
        <div className="checkbox">
          <i className="fa-solid fa-circle" style={{border: '1px solid gainsboro'}} />
          <i className="fa-solid fa-circle" style={{color: 'rgb(79, 26, 26)'}} />
          <i className="fa-solid fa-circle" style={{color: 'yellowgreen'}} />
        </div>
        <div className="h-c-s">
          <div className="heart">
            <img src={icon1} alt /> 
          </div>
          <div className="compare">
            <img src={icon2} alt />
          </div>
          <div className="search">
            <img src={icon3} alt />
          </div>
        </div>
      </div>
      <div className="card-3">
        <p>SALE</p>
        <img src={product3} alt />
        <h4>+ Add To Cart</h4>
        <h6>Ankle Boots</h6>
        <div className="rating">
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <h5>$67.24</h5>
        <div className="checkbox">
          <i className="fa-solid fa-circle" style={{border: '1px solid gainsboro'}} />
          <i className="fa-solid fa-circle" style={{color: 'rgb(79, 26, 26)'}} />
          <i className="fa-solid fa-circle" style={{color: 'yellowgreen'}} />
        </div>
        <div className="h-c-s">
          <div className="heart">
            <img src={icon1} alt /> 
          </div>
          <div className="compare">
            <img src={icon2} alt />
          </div>
          <div className="search">
            <img src={icon3} alt />
          </div>
        </div>
      </div>
      <div className="card-4">
        <img src={product4} alt />
        <h4>+ Add To Cart</h4>
        <h6>Diagonal Textured Cap</h6>
        <div className="rating">
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <h5>$60.09</h5>
        <div className="checkbox">
          <i className="fa-solid fa-circle" style={{border: '1px solid gainsboro'}} />
          <i className="fa-solid fa-circle" style={{color: 'rgb(79, 26, 26)'}} />
          <i className="fa-solid fa-circle" style={{color: 'yellowgreen'}} />
        </div>
        <div className="h-c-s">
          <div className="heart">
            <img src={icon1} alt /> 
          </div>
          <div className="compare">
            <img src={icon2} alt />
          </div>
          <div className="search">
            <img src={icon3} alt />
          </div>
        </div>
      </div> */}
    </div>
  </div>
  )
}

export default Card
