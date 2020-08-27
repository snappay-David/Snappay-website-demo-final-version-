import React from 'react'
import "./shop.css"
import Button from '@material-ui/core/Button';
import shopIcon from "./../Pic/shopIcon.png"
import hat from "./../Pic/hat.png"


export class Shop extends React.Component {
    jump(e) {
        window.location.href = '/cart'
    }


    render() {
        return (
            <body id='container1'>
                <div id="header">
                    <img class='shopIcon' src={shopIcon} alt='shopIcon is not displayed properly'/>
                    <h2 id="headContent1">FASHION SHOP</h2>
                    <h4 id="headContent2">MAN</h4>
                    <h4 id="headContent3">WOMEN</h4>
                    <h4 id="headContent3">KID</h4>
                    <h4 id="headContent3">SALE</h4>
                </div>
                <div id="banner">
                    <h1 id="content"> LAST PARTIES OF 2019</h1>
             	</div>
                <div className="container1">
                    <img class='hatPic' src={hat} alt='hatPic is not displayed properly'/> <span/><span/>
                    <h2>PURPLE CAP</h2> <span/>
                    <p>$30</p>
                    <Button variant="contained" color="secondary" htmlType="back" onClick={this.jump.bind(this)}>
                      Buy it now!
                    </Button>
                </div>
                <div id="footer">
                    <p id="footerContent">ShopIsle powered by WordPress</p>
                </div>
            </body>
        )
    }
}

export default Shop
