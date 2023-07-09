// import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { object } from "prop-types";
import React from "react";
import Tilt from "react-parallax-tilt";
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import "./Profile.css";

const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
const Icon = ({ url, size }) => {
  const style = {
    marginRight: 4,
  };
  const u = url.toLowerCase();
  if (u.indexOf("github") >= 0) {
    // return <SiGithub size={size} color="black" style={style} />;
    return <svg fill="%23181717" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    
  }

  if (u.indexOf("linkedin") >= 0) {
    // return <SiLinkedin size={size} color="black" style={style} />;
    return <svg fill="%230A66C2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  }

  return null;
};

const Profile = (props) => {
  const { profileData } = props;
  const shareUrl = profileData.url;
  const title = profileData.title;
  return (
    <div>
      <Tilt
        className="parallax-effect-glare-scale inner"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className="inner-element">
          <img
            role="presentation"
            className="full-block"
            src={profileData.picture}
            width="100%"
            alt="profile pic"
          />
                <h1 className="text-title-name">{profileData.name}</h1>

        </div>
      </Tilt>

      <h2 className=" inner text-center blue">{profileData.label}</h2>
      <ul className=" inner contact-links ">
        <li>
          <i className="fas fa-map-marked"></i>
          <span>
            {profileData.location.city}, {profileData.location.region},
            {profileData.location.countryCode}
          </span>
        </li>
        <li>
          <Mailto
            email={profileData.email}
            subject="Johnm.org Contact"
            body="Hello John!"
          >
            <i className="fas fa-envelope-square"></i>
            {profileData.email}
          </Mailto>
        </li>
        <li>
          <a href={"tel:" + profileData.phone}>
            <i className="fas fa-phone-square"></i>
            {profileData.phone}
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1Vv7l8rsQm-VdrjjnzWg4_xI7A3mGe76x/view?usp=sharing">
            <i className="fab fa-google-drive"></i>
            Google Docs Resume
          </a>
        </li>
        <li>
          <a href="5-28-21-jmres.docx" download>
            <i className="fas fa-file-word"></i>
            Word Resume
          </a>
        </li>
        <li>
          <a href="John_Marczak.vcf" download>
          <i className="fas fa-address-card"></i>            My Vcard
          </a>
        </li>
        
      </ul>
      <ul className="profileLinks text-center">
        <li>
          <a
            href={profileData.profiles[0].url}
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
            }}
            rel="noreferrer"
          >
            <Icon url={profileData.profiles[0].url} size="32" />
          </a>
        </li>
        <li>
          <a
            href={profileData.profiles[1].url}
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
            }}
            rel="noreferrer"
          >
            <Icon url={profileData.profiles[1].url} size="32" />
          </a>
        </li>
        <li>
          <LinkedinShareButton
            url={shareUrl}
            className="Demo__some-network__share-button" >

            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </li>
        <li>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </li>
        <li>
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </li>
        <li>
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </li>
        <li>
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button"
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
        </li>
      </ul>
      <div className="small-text inner ">
        <div className="box">
          <div className="built-with ">
            I built this site with  <a href="https://facebook.github.io/react/">React</a> components and a <a href="https://jsonresume.org/schema/">My JSON Resume Schema</a>. The JSON resume is here <a href="https://registry.jsonresume.org/johnnyboyct">https://registry.jsonresume.org/johnnyboyct</a> The full source code can be found in <a href="https://github.com/johnnyboyct/">my Github repo</a>.
        </div>
        </div>
      </div>
      </div>
  );
};
Profile.propTypes = {
        profileData: object.isRequired,
};
export default Profile;
