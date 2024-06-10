import SectionLayout from "../SectionLayout";
import Image from "next/image";

const Venue = () => {
  return (
    <SectionLayout Title="DESTINATION" Classname={"venue-section-container"}>
      <div className="venue-section">
        <div className="venue-wrapper">
          <div className="venue">
            <h2>Venue</h2>
            <p>
              Thadomal Shahani Engineering College, Mumbai
              <br />
              Maharashtra
            </p>
          </div>
          <div className="date">
            <h2>Date and Time</h2>
            <p>
              15 - 16 September 2023
              <br />
              10 AM Onwards
            </p>
          </div>
          <div className="extra-info">
            <h2>Extra information</h2>
            <p>
              Amidst the celestial expanse, the chosen venue for our epic event awaits. Embark on a journey through hyperspace and navigate to the Galactic Gathering Point. Let the Force guide your path as you join us in the cosmic celebration of innovation and inspiration. May the stars be your guide! 🌌✨
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9833477464294!2d72.83328527438155!3d19.064469752336024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1690826754277!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="aconst6">
        <img
          src="./images/aconst6.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </SectionLayout>
  );
};

export default Venue;
