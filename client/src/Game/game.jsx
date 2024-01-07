// src/components/GamePage.js
import React from 'react';

const GamePage = () => {
  const games = [
    { title: 'Truth Dare', description: 'A classic party game for fun revelations!', image: "https://play-lh.googleusercontent.com/7HzsLlvflOnqgjI6Rk5nC1Lb_cgBa6E0i9GVH4EfNO1HTWUVH77suiLE89CKoHIJyQ",navigateTo:'/games/wordle' },
    { title: 'Tic Tac Toe', description: 'A timeless two-player game of strategy.', image: "https://play-lh.googleusercontent.com/n3vb2UjC3bCldAzy_WayG8wAMdIspefAwQrPTgrKn6HMmTzGbyU5TELYKolQ2MxedkQD" ,navigateTo:'/games/wordle'},
    { title: 'Wordle', description: 'Guess the secret word in this word-guessing game.', image: "https://i.guim.co.uk/img/media/b4977654b509967eef77b87c256fa639f0ef807a/65_137_887_532/master/887.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9c01405913e4ecbfc72818af2bf65132",navigateTo:'/games/wordle' },
    // Add more games as needed
  ];
  const Navigate=(link)=>{
    window.location.href=link
  }

  return (
    <div className="bg-black-900 text-white min-h-screen p-8">
         
      <h1 className="text-4xl font-bold mb-8">Explore Games</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-lg">
            <img
              src={game.image}
              style={{height:'fit-content'}}
              alt={`${game.title} Image`}
              className="w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{game.title}</h2>
            <p className="text-gray-300 mb-4">{game.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={()=>Navigate(game.navigateTo)}>
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
