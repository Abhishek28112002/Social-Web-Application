import React, { useState, useEffect, useRef } from 'react';

const generateRandomWord = async () => {
  let words=  [
        "Bliss","Horse","Grape","Queen","Train","Beach","Apple","Eagle","Kite","Latch",
        "Smile","Grind","Table","Grace","Light","Prism","Water","Amber","Dream","Jumbo",
        "Swarm","Globe","Quest","Olive","Haste","Flame","Charm","Ivory","Zebra","Blitz",
        "Crash","Fable","Unity","Prism","Ghost","Swing","Laser","Bliss","Delta","Maple",
        "Oasis","Ridge","Crane","Frost","Beach","Prism","Jewel","Style","Ocean","Royal",
        "Spark","Mango","Bliss","Evoke","Ruler","Prism","Flora","Space","Paint","Gemmy",
        "Quest","Ocean","Greet","Swirl","Stone","Chord","River","Delta","Flock","Blitz",
        "Green","Quiet","Ample","Frost","Lemon","White","Prism","Mystic","Quirk","Grand",
        "Twine","Opera","Tiger","Maple","Blaze","Quota","Haste","Style","Fresh","Flick",
        "Bliss","Swirl","Power","Radar","Amber","Delta","Peace","Greet","Beach","Flock",
        "Prism","Shore","Quest","Glint","Fable","Ocean","Solar","Arrow","Bliss","Quota",
        "Space","Sweet","Grace","Quake","Delta","Prism","Queen","Flick","Prism","Frost",
        "Space","Ocean","Glint","Amber","Blaze","Bliss","Twist","Twirl","Fable","Prism",
        "Quest","Ruler","Apple","Latch","Ridge","Ocean","Blaze","Bliss","Flock","Quest",
        "Quirk","Swirl","Glide","Prism","Tiger","Beach","Maple","Delta","Grace","Radar",
        "River","Bliss","Zebra","Style","Laser","Delta","Prism","Ocean","Queen","Twist",
        "Blitz","Stone","Quest","Fable","Glint","Space","Ocean","Maple","Quota","Bliss",
        "Stone","Prism","Quest","Beach","Delta","Swirl","Bliss","Stone","Style","Fable",
        "Glint","Solar","Prism","Ocean","Bliss","Maple","Queen","Quirk","Fable","Stone",
        "Blaze","Delta","Quest","Twist","Bliss","Zebra","Beach","Ocean","Prism","Quest",
        "Flock","Bliss","Zebra","Delta","Ridge","Fable","Power","Delta","Twist","Flame",
        "Swing","Haste","Stone","Ocean","Flick","Glint","Fable","Blitz","Fable","Twist",
        "Bliss","Greet","Haste","Chord","River","Space","Fable","Solar","Fresh","Flora",
        "Charm","Ivory","Zebra","Bliss","Glide","Fable","Twine","Blitz","Mystic","Quiet",
        "Radar","Stone","Swirl","Olive","Ocean","Fable","Royal","Prism","Fable","Frost",
        "Zebra","Glint","Apple","Mystic","Bliss","Laser","Swarm","Style","Delta","Solar",
        "Haste","Gemmy","Glint","Frost","Arrow","Blitz","Flick","Glide","Twirl","Flora",
        "Blaze","River","Maple","Chord","Glide","Stone","Delta","Crash","Solar","Fable",
        "Royal","Zebra","Bliss","Flick","Olive","Maple","Delta","Prism","Jumbo","Prism",
        "Tiger","Power","Ocean","Greet","Bliss","Mystic","Olive","Quiet","Style","Delta",
        "Space","Ruler","Mango","Delta","Frost","Stone","Bliss","Mystic","River","Glint",
        "Flick","Flame","Twist","Twirl","Delta","Frost","Blitz","Fable","Swarm","Glint",
        "Twine","Quiet","Prism","Ruler","Glide","Frost","Stone","Prism","Ridge","Fable",
        "Quiet","Gemmy","Twine","Fable","Twine","Fable","Quiet","Gemmy","Twine","Arrow",
        "Olive","Ruler","Chord","Ocean","Delta","Fable","Twist","Bliss","Mystic","Olive",
        "Flame","Zebra","Delta","Twine","Ocean","Frost","Ruler","Bliss","Zebra","Solar",
        "Gemmy","Glint","River","Quest","Arrow","River","Power","Arrow","Frost","Twine",
        "Flame","Flick","Power","Ruler","Flora","Flame","Frost","Solar","Arrow","Blitz",
        "Flora","Flame","Twist","Ruler","Bliss","Mystic","Fable","Stone","Delta","Swirl",
        "Bliss","Stone","Royal","Twist","Solar","Mystic","Fable","Twirl","Arrow","Bliss",
        "Twirl","Twist","Twine","Flame","Blitz","Flora","Delta","Frost","Glint","Gemmy",
        "Jewel","Oasis","Arrow","Frost","Power","Quest","Arrow","Solar","Stone","Flame",
        "Twine","Charm","River","Glide","Flora","Blitz","Quiet","Gemmy","Swing","Blitz",
        "Flame","Twirl","Power","Glint","Twine","Swing","Delta","Ruler","Delta","Stone",
        "Chord","Ocean","Arrow","River","Glide","Swing","Blitz","Flame","Bliss","Flick",
        "Fable","Quiet","Gemmy","Glide","River","Solar","Frost","Twirl","Twist","Solar",
        "Flick","Glint","Glide","Flora","Flame","Twine","Quest","Flora","Power","Fable",
        "Twist","Arrow","Gemmy","Jewel","Oasis","Arrow","Frost","Power","Quest","Arrow",
        "Solar","Stone","Flame","Twine","Charm","River","Glide","Flora","Blitz","Quiet",
        "Gemmy","Swing","Blitz","Flame","Twirl","Power","Glint","Twine","Swing","Delta",
        "Ruler","Delta","Stone","Chord","Ocean","Arrow","River","Glide","Swing","Blitz",
        "Flame","Bliss","Flick","Fable","Quiet","Gemmy","Glide","River","Solar","Frost",
        "Twirl","Twist","Solar","Flick","Glint","Glide","Flora","Flame","Twine","Quest",
        "Flora","Power","Fable","Twist","Arrow","Gemmy","Jewel","Oasis","Arrow","Frost",
        "Power","Quest","Arrow","Solar","Stone","Flame","Twine","Charm","River","Glide",
        "Flora","Blitz","Quiet","Gemmy","Swing","Blitz","Flame","Twirl","Power","Glint",
        "Twine","Swing","Delta","Ruler","Delta","Stone","Chord","Ocean","Arrow","River",
        "Glide","Swing","Blitz","Flame","Bliss","Flick","Fable","Quiet","Gemmy","Glide",
        "River","Solar","Frost","Twirl","Twist","Solar","Flick","Glint","Glide","Flora",
        "Flame","Twine","Quest","Flora","Power","Fable","Twist","Arrow","Gemmy","Jewel",
        "Oasis","Arrow","Frost","Power","Quest","Arrow","Solar","Stone","Flame","Twine",
        "Charm","River","Glide","Flora","Blitz","Quiet","Gemmy","Swing","Blitz","Flame",
        "Twirl","Power","Glint","Twine","Swing","Delta","Ruler","Delta","Stone","Chord",
        "Ocean","Arrow","River","Glide","Swing","Blitz","Flame","Bliss","Flick","Fable",
        "Quiet","Gemmy","Glide","River","Solar","Frost","Twirl","Twist","Solar","Flick",
        "Glint","Glide","Flora","Flame","Twine","Quest","Flora","Power","Fable","Twist",
        "Arrow","Gemmy","Jewel","Oasis","Arrow","Frost","Power","Quest","Arrow","Solar",
        "Stone","Flame","Twine","Charm","River","Glide","Flora","Blitz","Quiet","Gemmy",
        "Swing","Blitz","Flame","Twirl","Power","Glint","Twine","Swing","Delta","Ruler",
        "Delta","Stone","Chord","Ocean","Arrow","River","Glide","Swing","Blitz","Flame",
        "Bliss","Flick","Fable","Quiet","Gemmy","Glide","River","Solar","Frost","Twirl",
        "Twist","Solar","Flick","Glint","Glide","Flora","Flame","Twine","Quest","Flora",
        "Power","Fable","Twist","Arrow","Gemmy","Jewel","Oasis","Arrow","Frost","Power",
        "Quest","Arrow","Solar","Stone","Flame","Twine","Charm","River","Glide","Flora",
        "Blitz","Quiet","Gemmy","Swing","Blitz","Flame","Twirl","Power","Glint","Twine",
        "Swing","Delta","Ruler","Delta","Stone","Chord","Ocean","Arrow","River","Glide",
        "Swing","Blitz","Flame","Bliss","Flick","Fable","Quiet","Gemmy","Glide","River",
        "Solar","Frost","Twirl","Twist","Solar","Flick","Glint","Glide","Flora","Flame",
        "Twine","Quest","Flora","Power","Fable","Twist","Arrow","Gemmy","Jewel","Oasis",
        "Arrow","Frost","Power","Quest","Arrow","Solar","Stone","Flame","Twine","Charm",
        "River","Glide","Flora","Blitz","Quiet","Gemmy","Swing","Blitz","Flame","Twirl",
        "Power","Glint","Twine","Swing","Delta","Ruler","Delta","Stone","Chord","Ocean",
        "Arrow","River","Glide","Swing","Blitz","Flame","Bliss","Flick","Fable","Quiet",
        "Gemmy","Glide","River","Solar","Frost","Twirl","Twist","Solar","Flick","Glint",
        "Glide","Flora","Flame","Twine","Quest","Flora","Power","Fable","Twist","Arrow",
        "Gemmy","Jewel","Oasis","Arrow","Frost","Power","Quest","Arrow","Solar","Stone",
        "Flame","Twine","Charm","River","Glide","Flora","Blitz","Quiet","Gemmy","Swing",
        "Blitz","Flame","Twirl","Power","Glint","Twine","Swing","Delta","Ruler","Delta",
        "Stone","Chord","Ocean","Arrow","River","Glide","Swing","Blitz","Flame","Bliss",
        "Flick","Fable","Quiet","Gemmy","Glide","River","Solar","Frost","Twirl","Twist",
        "Solar","Flick","Glint","Glide","Flora","Flame","Twine","Quest","Flora","Power",
        "Fable","Twist","Arrow","Gemmy","Jewel","Oasis","Arrow","Frost","Power","Quest",
        "Arrow","Solar","Stone","Flame","Twine","Charm","River","Glide","Flora","Blitz",]
        let randomIndex = Math.floor(Math.random() * words.length);
      return {word:words[randomIndex]}
};

const options = {
  method: 'GET',
  url: 'https://wordoftheday2.p.rapidapi.com/words/2020-03-25',
  headers: {
    'X-RapidAPI-Key': '90db724b6fmshcc3c744693c62e8p1ff254jsn133c1cc0800d',
    'X-RapidAPI-Host': 'wordoftheday2.p.rapidapi.com',
  },
};

const WordleGame = () => {
    let Memes=[{text:'Shi Jawab',img:'https://media1.tenor.com/m/EPB7uiDGlDwAAAAC/kbc-memes-7crore-meme.gif'},
         {img:'https://media1.tenor.com/m/VAbEGx-nFc0AAAAC/jal-lijiye-meme.gif',text:'jal lijiye'},
         {img:'https://media1.tenor.com/m/zcQ2NKKTD4kAAAAd/mian-saab-nawaz-sharif.gif',text:'start krte '},
         {img:'	https://media1.tenor.com/m/WnrlF94l8nkAAAAd/moumita-beta.gif',text:'ye chutiya yha ky kr rha h'},
         {img:'https://media1.tenor.com/m/VQXatZfwI5gAAAAd/tum-na.gif',text:"tumse na ho payega "},
         {img:'https://media1.tenor.com/m/9E7Dr7ifGIIAAAAd/ek-baar-phir-se-try-karta-hoon-vibhu-varshney.gif',text:"fir se try kro"}
]
  const [wordOfDay, setWordOfDay] = useState('');
  const[Memesmessage,setMemesmessage]=useState({img:'https://media1.tenor.com/m/zcQ2NKKTD4kAAAAd/mian-saab-nawaz-sharif.gif'})
  useEffect(() => {
    const fetchWordOfDay = async () => {
      const word = await generateRandomWord();
      console.log(word);
      setWordOfDay(word);
    };
   

    fetchWordOfDay();
  }, []);

  const [userInputs, setUserInputs] = useState(Array(5).fill(Array(5).fill({ value: '', color: '', disabled:false })));
  const [attempts, setAttempts] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);

 const inputRefs = useRef([...Array(5)].map(() => [...Array(5)].map(() => React.createRef())));

  const handleInputChange = (rowIndex, colIndex, value) => {
    setUserInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[rowIndex] = [...prevInputs[rowIndex]];
      newInputs[rowIndex][colIndex] = { value, color: '', disabled: false };
      return newInputs;
    });

    // Move focus to the next column
    if (colIndex + 1 < 5) {
      inputRefs.current[rowIndex][colIndex + 1].current.focus();
    }
    if(currentRow==3)
    {
        setMemesmessage(Memes[1])
    }
    if(currentRow==1)
    {
        setMemesmessage(Memes[5])
    }
    
  };

  const handleEnterClick = async () => {

     // Add a delay before displaying the result
    
    // Implement logic to check the entered word against the word of the day
   
    const newInputs = [...userInputs[currentRow]];
    const word = wordOfDay.word;
    const wordMap = new Map();
    for (let i = 0; i < 5; i++) {
      wordMap.set(i, false);
      newInputs[i].color = 'animated';
    }
    setUserInputs((prevInputs) => {
        const newInputs = [...prevInputs];
        newInputs[currentRow] = [...prevInputs[currentRow]];
        return newInputs;
      });
      await new Promise((resolve) => setTimeout(resolve, 400));
    let matched=true;
    // check word is it correct position
    for (let i = 0; i < 5; i++) {
      if (word[i] === newInputs[i].value) {
        newInputs[i].color = 'green';
        matched=matched&&true;
        wordMap.set(i, true);
      }
      else{
        matched=false;
      }

    }

    // check word is it present in the word
    for (let i = 0; i < 5; i++) {
      let index = word.indexOf(newInputs[i].value);
      if (index === -1) {
        newInputs[i].color = 'gray';
        newInputs[i].disabled = true;
        continue
      };
      if (wordMap.get(index) === false) {
        newInputs[i].color = 'yellow';
        newInputs[i].disabled = true;
        wordMap.set(newInputs[i].value, true);
      }
      else{
        newInputs[i].color = 'gray';
        newInputs[i].disabled = true;
      }
    }



    setUserInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[currentRow] = [...prevInputs[currentRow]];
      return newInputs;
    });

    setAttempts((prevAttempts) => prevAttempts + 1);
    if(matched)
    {
        setMemesmessage(Memes[0])
        makeAllDisable();
    }
    // Move to the next row if attempts are not equal to 5
    if (attempts + 1 < 5) {
        inputRefs.current[currentRow+1][0].current.focus();
      setCurrentRow((prevRow) => prevRow + 1);
    }
    else if(!matched){
        setMemesmessage(Memes[3])
        makeAllDisable();
    }

   
  };

  function makeAllDisable()
  {
    setUserInputs((prevInputs) => {
        const newInputs = [...prevInputs];
        newInputs[currentRow] = [...prevInputs[currentRow]];
        for(let i=0;i<5;i++)
        {
            newInputs[currentRow][i].disabled=true;
        }

        return newInputs;
      });
  }
  useEffect(() => {
    if (attempts === 5) {
      alert('STOP!!!!! ab bhut ho gya ab nhi hoga tere se 😂');
      setTimeout(() => {
        alert(`Iska Shi Jawab h ${wordOfDay.word}`);
    }, 2000);
    }
   
  }, [attempts]);
  function checkDisabled(row) {
    if(currentRow==attempts)
    {
        for(let i=0;i<5;i++)
        {
            if(row[i].value==='')
            return true;
        }
       
    }
    return false;
  }

  return (
    <div className="flex flex-col items-center mt-20 text-white">
      <div className="mb-4 text-xl font-bold word">Welcome to the world of words</div>
      <div className="flex">
        <div style={{width:'500px',height:'300px'}}>
          <img src={Memesmessage.img} alt="Meme"  style={{width:'100%',height:'100%'}} />
        </div>
        <div className="ml-4">
          {[...Array(5)].map((_, rowIndex) => (
            <div key={rowIndex} className={`flex mb-2 ${currentRow === rowIndex ? 'active-row' : ''}`}>
              {[...Array(5)].map((_, colIndex) => (
                <input
                  key={colIndex}
                  type="text"
                  maxLength="1"
                  disabled={userInputs[rowIndex][colIndex].disabled}
                  className={`word w-12 h-12 border rounded focus:outline-none focus:border-blue-500 text-xl text-center mx-1 ${userInputs[rowIndex][colIndex].color}`}
                  value={userInputs[rowIndex][colIndex].value}
                  onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                  ref={inputRefs.current[rowIndex][colIndex]}
                  readOnly={currentRow !== rowIndex}
                />
              ))}
            </div>
          ))}
          <button
            onClick={handleEnterClick}
            className={`px-4 py-2 rounded-md mt-2 ${
              checkDisabled(userInputs[currentRow])
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            disabled={checkDisabled(userInputs[currentRow])}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordleGame;
