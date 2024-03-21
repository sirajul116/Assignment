import React from 'react';

function Contact() {
  return (
    <div className="h-80 p-4">
      <div className="flex justify-center pt-4">
        <hr className="flex-grow border-t-2 border-black m-4"></hr>
        <h1 className="text-3xl">Contact</h1>
        <hr className="flex-grow border-t-2 border-black m-4"></hr>
      </div>
      <div className="grid place-items-center space-y-14 mt-4">
        <div className="grid place-items-center">
          <p>
            I am currently seeking employment, and I would appreciate it if you
            could contact me witth any available job opportunities.
          </p>
        </div>
        <div className="grid place-items-center">
          <div className="border-4 rounded-md p-6 m-4">
            <form>
              <p>
                <b>Your Name:</b>
              </p>
              <input
                type="text"
                name="Name"
                placeholder=" Your Name"
                required
                className="border-4 pl-6 pr-6 pt-1 pb-1 rounded-md"
              />
              <p>
                <b>Your Mail:</b>
              </p>
              <input
                type="email"
                name="Email"
                placeholder=" Your Mail"
                required
                className="border-4 pl-6 pr-6 pt-1 pb-1 rounded-md"
              />
              <p>
                <b>Type Message:</b>
              </p>
              <textarea
                name="Message"
                rows="6"
                placeholder=" Your Message"
                className="border-4 pl-6 pr-6 pt-1 pb-1 rounded-md"
              ></textarea>
              <div className="space-x-2 p-2">
                <button type="button" className="border p-2 rounded">
                  <b>Submit</b>
                </button>
                <button type="button" className="border p-2 rounded">
                  <b>Cancle</b>
                </button>
              </div>
            </form>
          </div>
          <button className="border p-2 rounded-md">Write Message</button>
        </div>
        <div class="grid place-items-center">
          <div className=" space-x-3">
            <a href="https://github.com/dashboard">
              <i class="fa-brands text-4xl fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sirajul116?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <i class="fa-brands text-4xl fa-linkedin-in"></i>
            </a>
          </div>
          <div>Hridoy - 2024</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
