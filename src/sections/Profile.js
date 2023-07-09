import React from 'react';
import { object } from 'prop-types';

const Profile = props => {
  const { profileData} = props
  return (
    <div>
      <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileData.picture} width="200" alt="profile pic" /></div>
      <h1 className="text-center">{profileData.name}</h1>
      <h2 className="text-center">{profileData.label}</h2>
      <div className="divider"></div>
      <ul className="contact-links text-center">
        <li><i className="fa fa-location-arrow"></i>{profileData.location.city}, {profileData.location.region}, {profileData.location.countryCode}</li>
        <li><i className="fa fa-envelope"></i><a href={`mailto:${profileData.email}`}>{profileData.email}</a></li>
      </ul>
      <div className="divider"></div>
      <ul className="profileLinks text-center">
        <li><a className="fa fa-twitter fa-2x" href={'https://twitter.com/'+profileData.profiles[0].username}><span className="sr-only">twitter</span></a></li>
        <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileData.profiles[1].username}><span className="sr-only">github</span></a></li>
      </ul>

    </div>
  )
};

Profile.propTypes = {
  profileData: object.isRequired
}

export default Profile;
