import React from 'react';

function Home() {
  return (
    <div className="w-full h-screen border grid place-items-center p-4">
      <div>
        <h1 className="text-3xl grid place-items-center"> Hi, I'm Hridoy</h1>
        <p className="grid place-items-center">I'm a Learner and Enthusiast</p>
        <div class="flex justify-center items-center scroll-smooth cursor-pointer">
          <img src="./src/assets/hero-arrow.png" />
        </div>
      </div>
    </div>
  );
}

export default Home;
