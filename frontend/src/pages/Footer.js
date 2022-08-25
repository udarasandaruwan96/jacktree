import React from 'react'
import { Link } from "react-router-dom";


export default function () {
  return (
      <div>
          <footer class="reg_image_bck" data-color="#292929">
        <div class="container">
            
            {/* <!-- help --> */}
            <div id="reg_footer_block" data-0="@class:noactive" data-300-end="@class:active">
                <i class="ti flaticon-reception-bell"></i><span class="reg_subtitle">Need Help. <b>+44 (0) 20 4455 6677</b></span>
                <p>If you hate forms (and who doesn’t?) or if you want to talk to a human being (and who doesn’t?), then you can ring us on the following number.</p>
            </div>
            {/* <!-- help end --> */}
    
            <div class="row reg_wht_txt">
                <div class="col-md-5 col-sm-3">
                    <div class="reg_subtitle">Regal Hostels</div>
                    <h3>Berlin-London</h3>
                    <p>© 2016 Regal</p>
                </div>
                <div class="col-md-2 col-sm-3">
                    <h4>Address</h4>
                    <p>68 Cardamon Place, Melbourne Vic 3000
                    Berlin</p>
                </div>
                <div class="col-md-3 col-sm-3">
                    <h4>Contact</h4>
                    <p><Link to="mailto:contact@regalhostels.com">contact@regalhostels.com</Link>
                    T / +44 (0) 20 4455 6677
                    <Link to="mailto:jobs@regalhostels.com">jobs@regalhostels.com</Link>
                    </p>
                </div>
                <div class="col-md-2 col-sm-3">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><Link to="#">Behance</Link></li>
                        <li><Link to="#">Facebook</Link></li>
                        <li><Link to="#">Dribble</Link></li>
                    </ul>
                </div>
                
            </div>
            {/* <!-- row end --> */}
        </div>
        {/* <!-- container end --> */}
    </footer>
    </div>
  )
}
