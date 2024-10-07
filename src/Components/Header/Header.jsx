import React from "react"
import "./Header.css"
import logo from '../Images/logo.png'
function Header() {
    return (
        <>
            <div>
                <div className="header">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                    <ul>
                        <li><button>SIGN IN</button></li>
                        <li><button>FAQS</button></li>
                        <li><button>USD</button></li>
                    </ul>
                </div>
                <div className="tab">
                    <div className="logo">
                        <img src={logo} alt />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="index.html" style={{ borderBottom: '2px solid red' }}>Home</a></li>
                            <li><a href="shop.html">Shop</a></li>
                            <div className="page-dropdown">
                                <li><a href="#">Pages</a>
                                    <div className="dropdown-content">
                                        <p><a href="about.html">About Us</a></p>
                                        <p><a href="shopdetail.html">Shop Details</a></p>
                                        <p><a href="shoppingcart.html">Shopping Cart</a></p>
                                        <p><a href="checkout.html">Check Out</a></p>
                                        <p><a href="blogdetail.html">Blog Details</a></p>
                                    </div>
                                </li>
                            </div>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-magnifying-glass" />
                        <i className="fa-regular fa-heart" />
                        <i className="fa-solid fa-bag-shopping"> &nbsp; $0.00</i>
                    </div>
                    <div className="bar">
                        <i className="fa-solid fa-bars" />
                        <style dangerouslySetInnerHTML={{ __html: "\n                .bar i {\n                    border: 1px solid black;\n                    padding: 6px;\n                    border-radius: 2px;\n                }\n            " }} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
