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
