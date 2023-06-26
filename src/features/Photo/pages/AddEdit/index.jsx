import React from "react";
import Banner from "../../../../components/Banner";

import './styles.scss';

AddEditPage.PropTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <Container className="photo-edit__form">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}
