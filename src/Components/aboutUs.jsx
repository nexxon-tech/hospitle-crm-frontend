import React from "react";
import tempimg from "../Data/logo.jpg";

const AboutUs = () => {
  return (
    <div
      className=" relative mx-auto flex w-11/12 max-w-maxContent flex-col 
    items-center font-mont text-richblack-900"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl ">Who We Are?</h1>
          <p>founded under the flagship of Sahyog Hospital, professes the ideology of ‘for the people and by the people'. We aim to serve with specialized medical care at an affordable cost. As private health care providers, we stand apart from others by creating an integrated Health Care System that Fosters, Protects, Sustains, and Restores Health through best-in-class medical practices accessible to people in rural and remote areas. Every staff member working at Smart Hospital, from doctors, nurses to the management team, is united to render exceptional health care service to all.</p>
        </div>
        <img className="h-1/4 w-1/4" src="https://i.pinimg.com/236x/94/3c/89/943c89e93509e7eb042f8f16d0101f2b.jpg"></img>
      </div>

      <div className="flex items-center justify-between">
        <img className="h-1/4 w-1/4" src="https://i.pinimg.com/236x/1e/e7/af/1ee7af7a0dd863abae0af4a109422b39.jpg"></img>
        <div>
          <h1 className="text-2xl mt-3">Our Vision</h1>
          <p>To evolve as a benchmark in quality health care service assisted by in-depth and state of the art technology which is accessible and affordable to all.</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-3">Our Mission</h1>
          <p>professional Graphics Designer and Video CreatoTo deliver world-class patient care service
            Provide care with utmost compassion and integrity
            To become the Number One choice for every citizen in medical need
            Be an active member in the local community that contributes to its overall wellbeing and development
            Easy accessibility to health care through community outreach programs</p>
        </div>
        <img className="h-1/4 w-1/4" src="https://i.pinimg.com/236x/1e/e7/af/1ee7af7a0dd863abae0af4a109422b39.jpg"></img>
      </div>
    </div>
  );
};

export default AboutUs;
