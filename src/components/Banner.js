import React from "react";
import { Container } from "react-bootstrap";
import MyBannerImg from '../assets/images/diigtal-marketing-banner.jpg';

const MyBanner = () => {
  return (
    <section>
      <Container fluid className="px-0">
        <img
          src={MyBannerImg}
          alt="my-picture"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Container>
    </section>
  );
};

export default MyBanner;
