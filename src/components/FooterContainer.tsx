import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
@media(max-width:560px){
  margin-top:100px;
}
`

const FooterContainer = () => {
  return <Footer>

    <div className="container community" id="aboutus">
      <h4 className="text-heading mb-5">About Us!</h4>

      <p className="text-justify">
        We are one of the top Nft minting platforms.We provide the best, the ideal and the unic Nfts.All the Nfts we
        designd by understanding the need of our
        client by presicely working on the client centric approach.We ensure you that our Nfts are unic because we design
        each and every single part of our Nfts by
        passing it under the hands of our couple of digital media adviser.Our advisers spending lot of hours to provide
        you the best you want.Our work start with
        what you think.We build not only Nfts but your trust also!

      </p>
    </div>

    <div className="container footer" id="contactus">
      <div className="row text-center ftitle">
        <div className="col-sm-4">
          <p><i className="fab fa-twitter"></i>Twitter</p>
        </div>
        <div className="col-sm-4">
          <p><i className="fab fa-telegram"></i>Telegram</p>
        </div>
        <div className="col-sm-4">
          <p><i className="fab fa-discord"></i>Discord</p>
        </div>
      </div>
    </div>
  </Footer>;
};

export default FooterContainer;
