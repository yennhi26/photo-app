import React from "react";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

// eslint-disable-next-line react/no-typos
MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.PINK_BG}
      />

      <Container className="text-center mt-3">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;