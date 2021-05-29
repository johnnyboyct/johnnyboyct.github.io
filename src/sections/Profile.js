import { object } from "prop-types";
import React from "react";
import Tilt from 'react-parallax-tilt';

const Profile = (props) => {
  const { profileData } = props;

  return (
    <div>
      <div className="profileImg">
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className="inner-element">

            <img
              role="presentation"
              className="img-circle center-block"
              src={profileData.picture}
              width="300"
              alt="profile pic"
            />
            <div className="name">
              <h1 className="text-center neon-text">{profileData.name}</h1>

            </div>
          </div>
        </Tilt>


      </div>

      
      <h2 className="text-center ">{profileData.label}</h2>
      <div className="divider"></div>
      <ul className="contact-links text-center">
        <li>
          <i className="fa fa-location-arrow"></i>
          {profileData.location.city}, {profileData.location.region},{" "}
          {profileData.location.countryCode}
        </li>
        <li>
          <i className="fa fa-envelope"></i>
          <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
        </li>
      </ul>
      <div className="divider"></div>
      <ul className="profileLinks text-center">
        <li>

        </li>
        <li>
          <a
            className="fa fa-github fa-2x"
            href={"https://github.com/" + profileData.profiles[1].username}
          >
            <span className="sr-only">github</span>
          </a>
        </li>
      </ul>
      <div className="divider"></div>
      <p className="small-text">
        I built this site with{" "}
        <a href="https://facebook.github.io/react/">React</a>
        components and a{" "}
        <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>. The
        full source code can be found in
        <a href="https://github.com/johnnyboyct/jm-resume">my Github repo</a>.
      </p>
    </div>
  );
};

Profile.propTypes = {
  profileData: object.isRequired,
};

export default Profile;
