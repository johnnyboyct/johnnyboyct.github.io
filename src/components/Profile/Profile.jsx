import { Github, Linkedin } from "@icons-pack/react-simple-icons";
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
import { CodeBlock, dracula } from "react-code-blocks";

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
    return <Github size={size} color="black" style={style} />;
  }

  if (u.indexOf("linkedin") >= 0) {
    return <Linkedin size={size} color="black" style={style} />;
  }

  return null;
};

const Profile = (props) => {
  const { profileData } = props;
  const shareUrl = profileData.url;
  const title = profileData.title;
  return (
    <div>
      <h1 className="text-title-name">{profileData.name}</h1>
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
            className="Demo__some-network__share-button"
          >
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
      <p className="small-text inner ">
        <div class="box">
          <ul class="built-with ">
            <li>
              I built this site with
              <a href="https://facebook.github.io/react/">React</a> components
            </li>
            <li>
              and a
              <a href="https://jsonresume.org/schema/">My JSON Resume Schema</a>
              .
            </li>
            <li>
              The JSON resume is here
              <a href="https://registry.jsonresume.org/johnnyboyct">
                https://registry.jsonresume.org/johnnyboyct
              </a>
            </li>
            <li>
              The full source code can be found in
              <a href="https://github.com/johnnyboyct/">my Github repo</a>.
            </li>
          </ul>
        </div>
      </p>
    </div>
  );
};
Profile.propTypes = {
  profileData: object.isRequired,
};
export default Profile;
