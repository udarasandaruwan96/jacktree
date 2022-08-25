import React from 'react'
import { Link } from "react-router-dom";

export default function 
() {
  return (
    <React.Fragment>
      <div class="reg_page" id="reg_page">
        {/* <!-- To Top --> */}
        <Link
          to="#reg_page"
          class="reg_top ti ti-arrow-up reg_go"
        ></Link>

        {/* <!-- Header --> */}
        <header>
          <div class="container reg_wht_txt">
            {/* <!-- Header Phone --> */}
            <div class="reg_header_phone">+44 (0) 20 4455 6677</div>
            {/* <!-- Header Phone End--> */}

            {/* <!-- Header Social Buttons --> */}
            <div class="reg_header_soc">
              <b>Share</b>
              kkkkkkkkkkk
              <div class="reg_header_soc_btns">
                <Link to="#" class="ti ti-facebook"></Link>
                <Link to="#" class="ti ti-twitter"></Link>
                <Link to="#" class="ti ti-instagram"></Link>
                <Link to="#" class="ti ti-google"></Link>
              </div>
            </div>
            {/* <!-- Header Social Buttons End--> */}
          </div>

          {/* <!-- Menu Btn --> */}
          <div
            class="reg_menu clearfix"
            data-301-end="left:0px"
            data-300-end="left:-200px"
          >
            <div class="reg_menu_btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <b>Regal.</b>
          </div>
          {/* <!-- Menu Btn End--> */}

          {/* <!-- Booking Btn --> */}
          <div class="reg_book clearfix">
            <i class="ti ti-tag"></i>
          </div>
          {/* <!-- Booking Btn End--> */}

          {/* <!-- Menu Hover --> */}
          <div class="reg_menu_cont reg_image_bck" data-color="#292929">
            <div class="reg_menu_cont_txt">
              {/* <!-- Logo + Close Btn --> */}
              <div class="reg_menu_cont_logo">
                <div class="reg_menu_cont_logo_close">
                  <span></span>
                  <span></span>
                </div>
                Regal.
              </div>
              <ul>
                <li>
                  <Link to="#about">
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="#rooms">
                    <span>Rooms & Prices</span>
                  </Link>
                </li>
                <li>
                  <Link to="#reviews">
                    <span>Reviews</span>
                  </Link>
                </li>
                <li>
                  <Link to="#services">
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="#gallery">
                    <span>Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link to="#instagram">
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link to="#team">
                    <span>Team</span>
                  </Link>
                </li>
                <li>
                  <Link to="#offers">
                    <span>Special Offers</span>
                  </Link>
                </li>
              </ul>

              {/* <!-- Social Btns --> */}
              <div class="reg_menu_cont_social">
                Follow Us
                <Link to="#" class="ti ti-facebook"></Link>
                <Link to="#" class="ti ti-twitter"></Link>
                <Link to="#" class="ti ti-instagram"></Link>
                <Link to="#" class="ti ti-google"></Link>
              </div>
              {/* <!-- Social Btns End--> */}
            </div>
          </div>
          {/* <!-- Menu Hover End--> */}
        </header>
        {/* <!-- Header End --> */}
      </div>
    </React.Fragment>
  );
}
