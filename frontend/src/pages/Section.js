import React from 'react'

export default function Section() {
  return (
      <React.Fragment>
           <section id="reg_content" class="reg_content">

        {/* <!-- section -->
        <section class="reg_section" id="about"> */}
            <div class="container text-center">
                <h2>About Regal</h2><br></br>
                <h3 class="reg_subtitle">Our Story</h3>
                

                    <div class="row reg_auto_height">

                        {/* <!-- col --> */}
                        <img src="http://regal.maskandesign.com/html/images/slider/shutterstock_245330569.jpg"/>
                        <div class="col-md-6 reg_image_bck reg_wht_txt" data-image="http://regal.maskandesign.com/html/images/slider/shutterstock_245330569.jpg">
                            <div class="reg_over" data-color="#333" data-opacity="0.8"></div>
                            <a href="https://www.youtube.com/watch?v=BsekcY04xvQ" class="video reg_fullwidth_link"></a>
                            <div class="reg_block_center">
                                <h3>
                                    <span class="reg_underline_title">Watch</span>  
                                    <br></br>
                                    <span class="reg_underline_title">About Regal</span>   
                                    <br></br>
                                    <span class="reg_underline_title">in 1 Minute</span>
                                </h3>
                            </div>
                        </div>
                        {/* <!-- cole end --> */}

                        {/* <!-- col --> */}
                        <div class="col-md-6 reg_image_bck" data-color="#f2f2f2">
                            <div class="reg_simple_block text-left">
                                <h2>Essential Info</h2>
                                <h3>About Regal</h3>
                                <p>Our hostel is located in the capital’s hippest and trendiest district: Shoreditch. We are all about East London! Our accommodation is the talk of the town and is ideal for guests who want to be part of the creative and cutting-edge world that is East London. There are literally hundreds of cool bars, quirky boutiques and alternative coffee shops all around us.</p>
                                <h3>Jonathan Hayes</h3>
                                <p>Co-founder</p>
                                <img src="images/signature.png" height="80" alt=""></img>
                            </div>
                        </div>
                        {/* <!-- cole end --> */}
                    </div>
                    {/* <!-- row end --> */}


            </div>
            {/* <!-- container end --> */}
        </section>
        
        {/* <!-- section end --> */}

        {/* <!-- section --> */}
        <section class="reg_section reg_image_bck" data-color="#f2f2f2" id="rooms">
            <div class="container text-center">
                <h2>Explore</h2><br></br>
                <h3 class="reg_subtitle">Rooms & Prices</h3>
        
                <div class="row row_no_pd reg_auto_height">
                    
                    {/* <!-- item --> */}
                    <div class="col-md-6" >
                        <div class="reg_single_carousel reg_rooms_carousel reg_wht_txt">
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Living Room</div>
                            </div>
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Kitchen</div>
                            </div>
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Bathroom</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 reg_image_bck" data-color="#fff">
                        <div class="reg_simple_block text-left">
                            <h2>Mixed dorms <a href="#reg_page" class="reg_go"><i class="ti ti-tag"></i><b>Book Now</b></a></h2>
                            <h4>Stylish 4-6, 8-10 and 18-bed dorms!</h4>
                            <ul>
                                <li>18-bed dorm has pod beds with dividing panels, equipped with a bed light and small locker for comfort and privacy</li>
                                <li>8-10 bedded dorm room are mostly used for groups and parties, so everybody can stay together</li>
                                <li>Smaller dorms have normal bunk beds</li>
                                <li>The bigger the room, the cheaper it is! Our 18-bed dorm is the cheapest option for travellers…</li>
                            </ul>
                            <h3>From <span class="reg_underline_title">$13</span> per bed per night </h3>
                        </div>
                    </div>
                    {/* <!-- item end --> */}

                    {/* <!-- item --> */}
                    <div class="col-md-6 col-md-push-6" >
                        <div class="reg_single_carousel reg_rooms_carousel reg_wht_txt">
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Living Room</div>
                            </div>
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Kitchen</div>
                            </div>
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Kitchen</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 reg_image_bck col-md-pull-6" data-color="#fff">
                        <div class="reg_simple_block text-left">
                            <h2>Girls-only dorms <a href="#reg_page" class="reg_go"><i class="ti ti-tag"></i><b>Book Now</b></a></h2>
                            <h4>Girls-only (no guys – sorry!)</h4>
                            <ul>
                                <li>All girls dorms have the same clean and cosy decor and facilities</li>
                                <li>A good value option for girls on a budget, helping you save money and giving you the opportunity to meet fellow travellers, without being surrounded by snoring boys</li>
                                <li>18-bed dorm has pod beds with dividing panels, equipped with a bed light and small locker for comfort and privacy</li>
                            </ul>
                            <h3>From <span class="reg_underline_title">$13</span> per bed per night </h3>
                        </div>
                    </div>
                    
                    {/* <!-- item end --> */}
                    
                    {/* <!-- item --> */}
                    <div class="col-md-6" >
                        <div class="reg_single_carousel reg_rooms_carousel reg_wht_txt">
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Private Room</div>
                            </div>
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Private Kitchen</div>
                            </div>
                            <div class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                {/* <!-- vertical text --> */}
                                <div class="reg_slider_copyright">Private Pool</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 reg_image_bck" data-color="#fff">
                        <div class="reg_simple_block text-left">
                            <h2>Private rooms <a href="#reg_page" class="reg_go"><i class="ti ti-tag"></i><b>Book Now</b></a></h2>
                            <h4>Private rooms offer you a bit more intimacy. And a cup of tea or coffee.</h4>
                            <ul>
                                <li>18-bed dorm has pod beds with dividing panels, equipped with a bed light and small locker for comfort and privacy</li>
                                <li>8-10 bedded dorm room are mostly used for groups and parties, so everybody can stay together</li>
                                <li>Smaller dorms have normal bunk beds</li>
                                <li>The bigger the room, the cheaper it is! Our 18-bed dorm is the cheapest option for travellers…</li>
                            </ul>
                            <br></br>
                            <h3>From <span class="reg_underline_title">$20</span> per bed per night </h3>
                        </div>
                    </div>
                    {/* <!-- item end --> */}

                </div>
                {/* <!-- row end --> */}
           
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- section end --> */}

        {/* <!-- section --> */}
        <section class="reg_section reg_image_bck reg_fixed reg_wht_txt" data-stellar-background-ratio="0.2" data-image="http://placehold.it/1400x800" id="reviews">

            {/* <!-- over --> */}
            <div class="reg_over" data-color="#292929" data-opacity="0.7"></div>


            <div class="container text-center">
                
                <h2>Reviews</h2><br></br>
                <h3 class="reg_subtitle">In Social Networks</h3>

                <div class="reg_auto_height reg_single_carousel reg_blc_txt">
                    

                    {/* <!-- item --> */}
                    <div class="reg_review_item">
                        <div class="col-md-6 reg_image_bck" data-image="http://placehold.it/1000x1000"></div>
                        <div class="col-md-6 reg_image_bck" data-color="#292929">
                            <div class="reg_simple_block">
                                <h2><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i></h2>
                                <h3>Once again, another great stay at Regal!! </h3>
                                <p>Once again, another great stay at Regal!! Great location, great atmosphere, fab staff- so friendly, welcoming and always willing to help.</p>
                                <p><a href="#" class="btn">Read Full Review</a></p>
                                <p><img src="http://placehold.it/200x80" alt=""></img></p>
                            </div>
                        </div>
                    </div>
                    

                    {/* <!-- item --> */}
                    <div class="reg_review_item">
                        <div class="col-md-6 reg_image_bck" data-image="http://placehold.it/1000x1000"></div>
                        <div class="col-md-6 reg_image_bck" data-color="#292929">
                            <div class="reg_simple_block">
                                <h2><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i></h2>
                                <h3>Great stay!!</h3>
                                <p>Thank you for a perfect stay, every thing was very clean and tidy. We were in a private room with a private restroom. Breakfast included, very active bar space and funny people, atmosfere was really nice.</p>
                                <p><a href="#" class="btn">Read Full Review</a></p>
                                <p><img src="http://placehold.it/200x80" alt=""></img></p>
                            </div>
                        </div>
                    </div>
                    

                    {/* <!-- item --> */}
                    <div class="reg_review_item">
                        <div class="col-md-6 reg_image_bck" data-image="http://placehold.it/1000x1000"></div>
                        <div class="col-md-6 reg_image_bck" data-color="#292929">
                            <div class="reg_simple_block">
                                <h2><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i><i class="ti ti-star"></i></h2>
                                <h3>Definitely would recommend staying here</h3>
                                <p>Very clean and comfortable hostel in a great location. The atmosphere was very fun and lively. Definitely would recommend staying here. </p>
                                <p><a href="#" class="btn">Read Full Review</a></p>
                                <p><img src="http://placehold.it/200x80" alt=""></img></p>
                            </div>
                        </div>
                    </div>

                    
                </div>
                {/* <!-- carousel end --> */}
                
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- section end --> */}

        {/* <!-- section --> */}
        <section class="reg_section" id="services">
            <div class="container text-center">
                <h2>Services</h2><br></br>
                <h3 class="reg_subtitle">Explore Regal</h3>

                {/* <!-- icon boxes --> */}
                <div class="reg_icon_boxes row">
                    
                    {/* <!-- animation --> */}
                    <div data-animation="animation_blocks" data-bottom="@class:noactive" data--100-bottom="@class:active">
                        
                        {/* <!-- item --> */}
                        <div class="reg_icon_box col-md-4 col-sm-6">
                            <i class="ti flaticon-hotel"></i>
                            <div class="reg_icon_box_content">
                                <h4><b>Central</b> Location</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                            
                        </div>

                        {/* <!-- item --> */}
                        <div class="reg_icon_box col-md-4 col-sm-6">
                            <i class="ti flaticon-family-room"></i>
                            <div class="reg_icon_box_content">
                                <h4><b>Familiar</b> & Homely</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div> 

                        {/* <!-- item --> */}
                        <div class="reg_icon_box col-md-4 col-sm-6">
                            <i class="ti flaticon-bar"></i>
                            <div class="reg_icon_box_content">
                                <h4><b>Super</b> Social</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div> 

                        {/* <!-- item --> */}
                        <div class="reg_icon_box col-md-4 col-sm-6">
                            <i class="ti flaticon-laundry-service"></i>
                            <div class="reg_icon_box_content">
                                <h4><b>Totally</b> Equipped</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div> 

                        {/* <!-- item --> */}
                        <div class="reg_icon_box col-md-4 col-sm-6">
                            <i class="ti flaticon-hotel-staff"></i>
                            <div class="reg_icon_box_content">
                                <h4><b>Local</b> Knowledge</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div> 

                        {/* <!-- item --> */}
                        <div class="reg_icon_box col-md-4 col-sm-6">
                            <i class="ti flaticon-wifi-room"></i>
                            <div class="reg_icon_box_content">
                                <h4><b>Friendly</b>Staff</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div>
                    
                    </div>
                    {/* <!-- anmation end --> */}

                </div>
                {/* <!-- icon boxes end --> */}
                
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- section end --> */}

        {/* <!-- section --> */}
        <section class="reg_section reg_image_bck" data-color="#f2f2f2" id="gallery">
            <div class="container text-center">
                <h2>Gallery</h2><br></br>
                <h3 class="reg_subtitle">Have a look around!</h3>



                <div class="row reg_gallery reg_auto_height reg_wht_txt">

                    {/* <!-- item --> */}
                    <div class="col-md-6" >
                        <div class="reg_gallery_carousel_txt reg_over" data-color="#292929" data-opacity="0.8">
                            <h2>Social Spaces</h2>
                        </div>
                        <div class="reg_single_carousel reg_gallery_carousel reg_rooms_carousel">
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- item --> */}
                    <div class="col-md-6" >
                        <div class="reg_gallery_carousel_txt reg_over" data-color="#292929" data-opacity="0.8">
                            <h2>Rooms & Dorms</h2>
                        </div>
                        <div class="reg_single_carousel reg_gallery_carousel reg_rooms_carousel">
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- item --> */}
                    <div class="col-md-6" >
                        <div class="reg_gallery_carousel_txt reg_over" data-color="#292929" data-opacity="0.9">
                            <h2>Kitchen</h2>
                        </div>
                        <div class="reg_single_carousel reg_gallery_carousel reg_rooms_carousel">
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">  
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- item --> */}
                    <div class="col-md-6" >
                        <div class="reg_gallery_carousel_txt reg_over" data-color="#292929" data-opacity="0.8">
                            <h2>Regal Bar</h2>
                        </div>
                        <div class="reg_single_carousel reg_gallery_carousel reg_rooms_carousel">
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                            <div class="reg_room_block reg_gallery_item reg_image_bck" data-image="http://placehold.it/1000x1000">
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- row end --> */}
                
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- section end --> */}

        {/* <!-- section --> */}
        <section class="reg_section" id="instagram">
            <div class="container text-center">
                <h2>Instagram</h2><br></br>
                <h3 class="reg_subtitle">Follow Us on #maskan</h3>
                
                {/* <!-- instagram --> */}
                <div id="instagram-carousel" class="insta_slider clearfix"></div>

                
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- section end --> */}

        {/* <!-- section --> */}
        <section class="reg_section" id="team">
            <div class="container text-center">
                <h2>Team</h2><br></br>
                <h3 class="reg_subtitle">Friendly & Professional</h3>

                {/* <!-- boxes --> */}
                <div class="reg_icon_boxes row text-center">
                          

                    {/* <!-- slider -->   */}
                    <div class="reg_team_slider">
                        
                        {/* <!-- item --> */}
                        <div class="reg_icon_box reg_team_box">
                            <div class="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt=""></img>
                            </div>
                            <h4><b>William Sanchez</b> <br></br>CEO/Founder</h4>
                        </div> 

                        {/* <!-- item --> */}
                        <div class="reg_icon_box reg_team_box">
                            <div class="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt=""></img>
                            </div>
                            <h4><b>Amber Richards</b> <br></br>Managing director</h4>
                        </div> 
    
                        {/* <!-- item --> */}
                        <div class="reg_icon_box reg_team_box">
                            <div class="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt=""></img>
                            </div>
                            <h4><b>Harold Henry</b> <br></br>Computer programmer</h4>
                        </div> 

                        {/* <!-- item --> */}
                        <div class="reg_icon_box reg_team_box">
                            <div class="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt=""></img>
                            </div>
                            <h4><b>Austin Burton</b> <br></br>Events organiser</h4>
                        </div> 
                        
                        {/* <!-- item --> */}
                        <div class="reg_icon_box reg_team_box"> 
                            <div class="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt=""></img>
                            </div>
                            <h4><b>Jean Gray</b> <br></br>Publisher</h4>
                        </div> 

                        {/* <!-- item --> */}
                        <div class="reg_icon_box reg_team_box">
                            <div class="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt=""></img>
                            </div>
                            <h4><b>Joseph Baker</b> <br></br>Engineer</h4>
                        </div> 
                                    
                    </div>
                    {/* <!-- slider end --> */}
                </div>
                {/* <!-- boxes end --> */}
                
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- section end --> */}

        {/* <!-- section --> */}
        <section class="reg_section reg_image_bck" data-color="#f2f2f2" id="map">
            <div class="container text-center">
                <h2>Find Us</h2><br></br>
                <h3 class="reg_subtitle">On the Map</h3>
                
                {/* <!-- google map --> */}
                <div class="reg_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38852.53604898047!2d13.352403003182175!3d52.51020916491075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x042120465b5e3b70!2sBerlin%2C+Germany!5e0!3m2!1sen!2sru!4v1465312283068" allowfullscreen></iframe>
                </div>
                {/* <!-- google map end --> */}
                
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- section end --> */}



        {/* <!-- section --> */}
        <section class="reg_section" id="offers">
            <div class="container text-center">
                <h2>Special Offers</h2><br></br>
                <h3 class="reg_subtitle">Best rates guarantee</h3>

                <div class="row">

                    {/* <!-- item --> */}
                    <div class="col-md-4 reg_special_offers_item">
                        <div class="reg_special_offers reg_image_bck reg_wht_txt text-left" data-color="#292929">
                            <div class="reg_special_offers_best"><b>Best Rates</b> Guarantee</div>
                            <h3>Put A Pound Back In Your Pocket</h3>
                            <h4>3 nights in LDN from just $60</h4>
                            <ul>
                                <li>Get: 3 nights from $60</li>
                                <li>In: Regal</li>
                                <li>During:  27th - 30th of August</li>
                                <li>Book by:  30th June</li>
                            </ul>
                            <span class="btn">More info and how to book</span>
                            <a href="#" class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                <b class="btn">More info and how to book</b>
                            </a>
                        </div>
                    </div>
                    
                    {/* <!-- item --> */}
                    <div class="col-md-4 reg_special_offers_item">
                        <div class="reg_special_offers reg_image_bck reg_wht_txt text-left" data-color="#292929">
                            <div class="reg_special_offers_best"><b>Best Rates</b> Guarantee</div>
                            <h3>Bands and live performances</h3>
                            <h4>3 nights in LDN from just $60</h4>
                            <ul>
                                <li>Get: 3 nights from $60</li>
                                <li>In: Regal</li>
                                <li>During:  27th - 30th of August</li>
                                <li>Book by:  30th June</li>
                            </ul>
                            <span class="btn">More info and how to book</span>
                            <a href="#" class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                <b class="btn">More info and how to book</b>
                            </a>
                        </div>
                    </div>
                    
                    {/* <!-- item --> */}
                    <div class="col-md-4 reg_special_offers_item">
                        <div class="reg_special_offers reg_image_bck reg_wht_txt text-left" data-color="#292929">
                            <div class="reg_special_offers_best"><b>Best Rates</b> Guarantee</div>
                            <h3>Big Night Out pub crawl</h3>
                            <h4>3 nights in LDN from just $60</h4>
                            <ul>
                                <li>Get: 3 nights from $60</li>
                                <li>In: Regal</li>
                                <li>During:  27th - 30th of August</li>
                                <li>Book by:  30th June</li>
                            </ul>
                            <span class="btn">More info and how to book</span>
                            <a href="#" class="reg_room_block reg_image_bck" data-image="http://placehold.it/1000x1000">
                                <b class="btn">More info and how to book</b>
                            </a>
                        </div>
                    </div>
                    
                </div>
                {/* <!-- row end --> */}
                
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- section end --> */}

    
   </React.Fragment >
       
  )
}
