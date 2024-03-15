import React from 'react';

function About() {
  return (
    <div className=" bg-slate-400 h-96 p-4">
      <div className="flex justify-center ">
        <hr className="flex-grow border-t-2 border-black m-4"></hr>
        <h1 className="text-3xl">About Me</h1>
        <hr className="flex-grow border-t-2 border-black m-4"></hr>
      </div>
      <div className="flex   items-center">
        <div className="px-2">
          <p>
            hello I am Hridoy. I am a final year student in department of
            Computer Science and engineering in CUET. I like to learn new things
            and like to put myself on challange. <br />I know some basic web
            development and machine learning stuffs. Have problem Solving skill.
            Need to learn more technologies to push my barrier limit.
          </p>
        </div>
        <div>
          <img
            src="./src/assets/Hridoy.jpeg"
            className="border rounded-full h-80 ml-14"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
