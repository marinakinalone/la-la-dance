const questionsList = [
    {
    question: "What kind of music do you prefer?",
    answers: ["Latin", "Pop", "Jazz", "Electro"],
    score: {
        "Latin": ["Salsa", "Brazilian Zouk", "ArgentineTango"],
        "Pop": ["West Coast Swing", "Fusion"],
        "Jazz": ["Lindy Hop", "Blues"],
        "Electro": ["West Coast Swing", "Lindy Hop", "Fusion"]
        }
    },
    {
    question: "What kind of beat do you prefer?",
    answers: ["Upbeat", "Walk-paced", "Slow", "Flowy"],
    score: 0
    },
    {
    question: "Do you like hugs?",
    answers: ["I love hugs!", "I like having my personal space", "Depends on the moment"],
    score: 0
    },
    {
    question: "What kind of clothes do you wear?",
    answers: ["Retro", "Elegant", "Relaxed", "Sexy"],
    score: 0
    },
    {
    question: "Cardio or not cardio?",
    answers: ["Nope", "Moderately", "Definitely"],
    score: 0
    },
    {
    question: "What are you looking for by dancing?",
    answers: ["Feel the present moment", "Self-expression", "Energy", "Sensuality"],
    score: 0
    }
    
];


var results = {
    "West Coast Swing": 0,
    "Lindy Hop": 0,
    "Salsa": 0,
    "Brazilian Zouk": 0,
    "Fusion": 0,
    "Blues": 0,
    "Argentine Tango": 0}


const updateScore = (questionNb, answer) => {
    let keysToScore = questionsList[questionNb].score[answer];
    keysToScore.forEach(key => {
        results[key] = results[key] + 1
    } )
    return results
}

console.log(updateScore(0, "Jazz"))
console.log(updateScore(0, "Jazz"))

const testTest = (tolog) => {
    return "hey this is the result " + tolog
}



export {questionsList}
export {testTest}