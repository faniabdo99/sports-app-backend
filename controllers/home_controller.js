import express from 'express';
const router = express.Router();

/**
 * Return a static message says that the backend is up
 * GET /
 */
router.get('/', (req, res) => {
    const wisdomOfTheDay = [
        // @faniabdo99 contributions
        'The creator of expressJs is a sick and twisted fucker, and the developer is a stupid creature who enjoys misery',
        'Settle your scores face to face, not by creating a torture device called expressJs',
        'There is no excuse for cheating, AT ALL',
        'Someday you will realize that you can\'t depend on anyone but yourself',
        'Keep it real, life is fucked up and will always be',
        'The one given truth of life is humans are bad',
        'AI will replace developers same way calculators replaced mathematicians',
        'Looking back at human history, I don\'t understand how humans are considered "Smart"',
        'Precftionesm is the main cause of depression',
        'In a way, we are all depressed',
        'Nobody knows the trouble I\'ve seen, nobody knows my sorrow',
        'UI is like a joke, if you have to explain it, it\'s probably no good',
        'What, So everyone\'s supposed to sleep every single night now?',
        'Meeting them head-on, Charging into \'em like a bull — that\'s how we grow as people.',
        'Worse, you\'re smart',
        'To live is to risk it all; otherwise you\'re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.',
        'Nobody exists on purpose. Nobody belongs anywhere. We\'re all going to die. Come watch TV.',
        'Have fun with empowerment. It seems to make everyone that gets it really happy',
        'I just want to go back to hell, where everyone thinks I\'m smart and funny.',
        'Don\'t deify the people who leave you.',
        'Bitch, my generation gets traumatized for breakfast!',
        'It\'s your choice to take this personally',
        'Mr. President, if I\'ve learned one thing today it\'s that sometimes you have to not give a fuck!',
        'Think for you\'rself, don\'t be sheep',
        'Well scientifically… traditions are an idiot thing',
        'I hate to break it to you, but what people call “love” is just a chemical reaction that compels animals to breed',
        'Weddings are basically just funerals with cake',
        'Listen, I\'m not the nicest guy in the universe, because I\'m the smartest, and being nice is something stupid people do to hedge their bets',
        'He\'s not a hot girl. He can\'t just bail on his life and set up shop in someone else\'s.',
        'Don\'t judge me, Cooper. You were never tested like I was. Few men have been.',
        'Sometimes you gotta run before you can walk',
        'No amount of money ever bought a second of time',
        'I just want peace. Turns out resentment is corrosive, and I hate it',
        'We should start our stories where they begin, not where they get interesting',
        'Welcome to life, it\'s a boat full of holes but we are all on it',
        'There comes a time in every man\'s life when he must choose the foundation on which his legacy will be built; one of compromise, or one of blood',
        'The universe is basically an animal. It grazes on the ordinary. It creates infinite idiots just to eat them',
        'Lies pile up like credit card debt, you retain an advantage by staying liquid',
        'Good and evil are a question of perspective',
        'Dreams change. Other things become important',
        'Some people wander around their whole lives looking for a way out, but there\'s only one path and it leads you ever deeper',
        'In the end we will all get just what we deserve',
        'Only when we\'ve freed ourselves of emotion can we be truly free. Only when you\'re willing to sacrifice what you hold dearest',
        'Never hate your enemies. It affects your judgment',
        'The hardest choices require the strongest wills',
        'I know what it\'s like to lose. To feel so desperately that you\'re right, yet to fail nonetheless',
        // @Shreif's contributions
        'A person is smart, people are dumb',
        'If you are the smaterst person in the room, you are in the wrong room',
        'Common sense is not very common',
        'Can you buy me dinner first?',
        'I usually wait for a 3rd date...',
        'a Good idea should be intuitive',
        'It\'s not me, it\'s you',
        'I Respect women so much that I stay the hell away from them',
        'Hell is other people'
    ];
    res.json({
        success: true,
        message: 'The backend application is online, Check today\'s wisdom',
        wisdomOfTheDay: wisdomOfTheDay[Math.floor(Math.random()*wisdomOfTheDay.length) + 1]
    })
})
export default router;