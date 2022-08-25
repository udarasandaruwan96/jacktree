import React from 'react'
 
export default function () {
  return (
      <div>
          {/* <!-- Slider --> */}
    <div className="reg_slider reg_image_bck reg_fixed" data-stellar-background-ratio="0.2" style={{backgroundImage: 'url("https://i.ikman-st.com/modern-it-office-floor-space-for-rent-near-sliit-malabe-for-rent-colombo/e315df20-560f-45c4-8805-9c69e32ecc19/620/466/fitted.jpg")'}}>
        <div className="reg_over" data-color="#333" data-opacity="0.3" data-0="opacity:0.3;" data--400-bottom="opacity:0;"></div>

        <div className="container">
            <div className="reg_slider_content reg_wht_txt">
                {/* <!-- vertical text --> */}
                <div className="reg_slider_copyright reg_slider_copyright_right">© Regal 2016</div>

                {/* <!-- Slider Texts --> */}
                <div className="reg_slide_txt reg_slide_center_middle text-center"  data-0="opacity:1;" data--400-bottom="opacity:0;">
                    
                    <div className="reg_slide_title">Regal.</div>
                    <div className="reg_slide_subtitle">Our hostel is located in the capital’s hippest and trendiest district.</div>

                </div>
                {/* <!-- Slider Texts End --> */}

                {/* <!-- Slide Down --> */}
                <a className="reg_scroll_down reg_go" href="#reg_content">
                    <b></b>
                    Scroll
                </a>
            </div>


            {/* <!-- Booking --> */}
        <div id="reg_slider_review" data-0="@className:noactive" data-200="@className:active">
            <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12">
                     <span className="reg_subtitle">
                        <span className="reg_book_close"><span></span><span></span></span>
                        Book Now
                    </span>
                </div>
                <div className="col-md-9 col-sm-12 col-xs-12">
                    <div className="reg_slider_review_form">
                        <div className="row">

                            {/* <!-- Form --> */}
                            <form className="reg_form" action="https://formspree.io/your@email.com" method="POST">
                                <div className="col-md-2 reg_book_item">
                                    <input type="text" value="" className="form-control date_picker" name="arrival" required placeholder="Arrival"></input>
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <input type="text" value="" className="form-control date_picker" name="departure" required placeholder="Departure"></input>
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <input type="text" value="" className="form-control" name="name" required placeholder="Full Name"></input>
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <input type="text" value="" className="form-control" name="phone" required placeholder="Phone"></input>
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <select className="form-control" id="room" name="room">
                                        <option>Mixed dorms</option>
                                        <option>Girls-only dorms</option>
                                        <option>Private rooms</option>
                                    </select>
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <input type="submit" className="btn btn-white submit" value="Send"></input>
                                </div>
                            </form>
                            {/* <!-- Form End --> */}
                        </div>
                        {/* <!-- row end --> */}
                    </div>
                </div>
            </div>
           
            
        </div>
        {/* <!-- booking end --> */}
        
        </div>
        {/* <!-- container end --> */}

    </div>
          {/* <!-- Slider End --> */}
      </div>
  )
}
