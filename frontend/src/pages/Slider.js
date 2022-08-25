import React from 'react'

export default function () {
  return (
      <div>
          {/* <!-- Slider --> */}
    <div class="reg_slider reg_image_bck reg_fixed" data-stellar-background-ratio="0.2" data-image="http://placehold.it/1400x800">
        <div class="reg_over" data-color="#333" data-opacity="0.3" data-0="opacity:0.3;" data--400-bottom="opacity:0;"></div>

        <div class="container">
            <div class="reg_slider_content reg_wht_txt">
                {/* <!-- vertical text --> */}
                <div class="reg_slider_copyright reg_slider_copyright_right">© Regal 2016</div>

                {/* <!-- Slider Texts --> */}
                <div class="reg_slide_txt reg_slide_center_middle text-center"  data-0="opacity:1;" data--400-bottom="opacity:0;">
                    
                    <div class="reg_slide_title">Regal.</div>
                    <div class="reg_slide_subtitle">Our hostel is located in the capital’s hippest and trendiest district.</div>

                </div>
                {/* <!-- Slider Texts End --> */}

                {/* <!-- Slide Down --> */}
                <a class="reg_scroll_down reg_go" href="#reg_content">
                    <b></b>
                    Scroll
                </a>
            </div>


            {/* <!-- Booking --> */}
        <div id="reg_slider_review" data-0="@class:noactive" data-200="@class:active">
            <div class="row">
                <div class="col-md-3 col-sm-12 col-xs-12">
                     <span class="reg_subtitle">
                        <span class="reg_book_close"><span></span><span></span></span>
                        Book Now
                    </span>
                </div>
                <div class="col-md-9 col-sm-12 col-xs-12">
                    <div class="reg_slider_review_form">
                        <div class="row">

                            {/* <!-- Form --> */}
                            <form class="reg_form" action="https://formspree.io/your@email.com" method="POST">
                                <div class="col-md-2 reg_book_item">
                                    <input type="text" value="" class="form-control date_picker" name="arrival" required placeholder="Arrival"></input>
                                </div>
                                <div class="col-md-2 reg_book_item">
                                    <input type="text" value="" class="form-control date_picker" name="departure" required placeholder="Departure"></input>
                                </div>
                                <div class="col-md-2 reg_book_item">
                                    <input type="text" value="" class="form-control" name="name" required placeholder="Full Name"></input>
                                </div>
                                <div class="col-md-2 reg_book_item">
                                    <input type="text" value="" class="form-control" name="phone" required placeholder="Phone"></input>
                                </div>
                                <div class="col-md-2 reg_book_item">
                                    <select class="form-control" id="room" name="room">
                                        <option>Mixed dorms</option>
                                        <option>Girls-only dorms</option>
                                        <option>Private rooms</option>
                                    </select>
                                </div>
                                <div class="col-md-2 reg_book_item">
                                    <input type="submit" class="btn btn-white submit" value="Send"></input>
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
