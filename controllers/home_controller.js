import express from 'express';
const router = express.Router();

/**
 * Return a static message says that the backend is up
 * GET /
 */
router.get('/', (req, res) => {
    const wisdomOfTheDay = [
        'Don\'t let your guard down',
        'One day and that day may never come, the backend server will be down but we will fix it',
        'Anything in the 200 range is good',
        'The creator of expressJs is a sick and twisted fucker, and the developer is a stupid creature who enjoys misery',
        'Settle your scores face to face, not by creating a torture device called expressJs',
        '400+ means you (dear user) fucked up',
        '500s are tough, it means I personally fucked it, contact me faniabdo99@gmail.com',
        'There is no excuse for cheating, AT ALL',
        'Someday you will realize that you can\'t depend on anyone but yourself',
        'Being realistic might come off as pessimistic',
        'Keep it real, life is fucked up and will always be',
        'The one static truth of life is humans are bad',
        'a person is smart, people are dumb',
        'AI will replace developers same way calculators replaced mathematicians',
        'Looking back at human history, I don\'t understand how humans are considered "Smart"',
        'Don\'t overdo it, ship and then refactor',
        'Precftionesm is a syllable to depression',
        'In a way, we are all depressed',
        'Nobody knows the trouble I\'ve seen, nobody knows my sorrow',
        'You are the author of your own code',
        'Code should be written for humans to read it, not for computers to run it',
        'UI is like a joke, if you have to explain it, it\'s probably no good',
        'I\'ll go, but don\'t you dare ask me to understands',
        'What, So everyone\'s supposed to sleep every single night now?',
        'Charging into \'em like a bull — that\'s how we grow as people.',
        'Worse, you\'re smart',
        'To live is to risk it all; otherwise you\'re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.',
        'Nobody exists on purpose. Nobody belongs anywhere. We\'re all going to die. Come watch TV.',
        'Have fun with empowerment. It seems to make everyone that gets it really happy',
        'I just want to go back to hell, where everyone thinks I\'m smart and funny.',
        'Don\'t deify the people who leave you.',
        'Bitch, my generation gets traumatized for breakfast!',
        'It\'s your choice to take this personally',
        'Mr. President, if I\'ve learned one thing today it\'s that sometimes you have to not give a fuck!',
        'Think for you\'rself, don\'t be a sheep',
        'Well scientifically… traditions are an idiot thing'
    ];
    res.json({
        success: true,
        message: 'The backend application is online',
        wisdomOfTheDay: wisdomOfTheDay[Math.floor(Math.random()*wisdomOfTheDay.length)]
    })
})
export default router;