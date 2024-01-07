import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="bg-black-900 text-white min-h-screen flex items-center justify-center">
    <div className="max-w-xl p-8 bg-black-900 rounded-md shadow-lg">
      <div className="flex items-center mb-8 flex-row gap-1">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/stronger-market-differentiation-8534428-6967150.png?f=webp&w=256"
         style={{width: "64px", height: "64px",borderRadius:"64px",backgroundColor:"blue"}}
          alt="Stringar Logo"
        ></img>
        <h1 className="text-3xl font-bold text-blue-900">Stringar</h1>
      </div>
      <p className="text-gray-500 mb-8">
        Welcome to Stringar – Your Ultimate Social Gaming Experience!
      </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">🎮 Play Games</h2>
            <p className="text-gray-500">
              Discover a world of endless fun and connections with Stringar!
              Whether you're a casual gamer or a hardcore player, our platform
              has something for everyone.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">💬 Connect and Chat</h2>
            <p className="text-gray-500">
              Chat, share, and interact with fellow gamers. Stringar provides a
              vibrant community where you can discuss strategies, share your
              gaming achievements, and forge lasting friendships.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">🏆 Compete for Glory</h2>
            <p className="text-gray-500">
              Participate in tournaments, leaderboards, and events to showcase
              your skills and earn recognition among your peers. Will you rise
              to the top and claim the title of gaming champion?
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              🌟 Customize Your Profile
            </h2>
            <p className="text-gray-500">
              Personalize your gaming identity with avatars, badges, and more.
              Let your unique style shine as you become a recognized figure in
              the Stringar universe.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500">
            Join Stringar today and level up your social gaming experience.
            Sign up now or log in to start your gaming journey! 🚀
          </p>
          <p className="text-gray-500 mt-4">
            Ready to play and chat? Let's Stringar! 👾🎉
          </p>
          <Link to="/home">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
