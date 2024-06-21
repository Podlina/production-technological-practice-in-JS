const questions = [
    {
        question: 'How many planets are in the solar system?',
        answers: [
            { text: '8', correct: true },
            { text: '9', correct: false },
            { text: '10', correct: false },
            { text: '7', correct: false },
        ]
    },
    {
        question: 'What is the freezing point of water?',
        answers: [
            { text: '1', correct: false },
            { text: '-5', correct: false },
            { text: '0', correct: true },
            { text: '-7', correct: false },
        ]
    },
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'Yangtze', correct: false },
            { text: 'Western Dvina', correct: false },
            { text: 'Amazon', correct: false },
            { text: 'Nile', correct: true },
        ]
    },
    {
        question: 'How many chromosomes are in the human genome?',
        answers: [
            { text: '46', correct: true },
            { text: '38', correct: false },
            { text: '44', correct: false },
            { text: '42', correct: false },
        ]
    },
    
    {
        question: 'What is the capital of Canada?',
        answers: [
            { text: 'Toronto', correct: false },
            { text: 'Ottawa', correct: true },
            { text: 'Vancouver', correct: false },
            { text: 'Paris', correct: false },
        ]
    },
    {
        question: 'What is the Jewish New Year called?',
        answers: [
            { text: 'Hanukkah', correct: false },
            { text: 'Yom Kippur', correct: false },
            { text: 'Rosh Hashanah', correct: true },
            { text: 'Kwanzaa', correct: false },
        ]
    },

    {
        question: 'What is the largest organ in the human body?',
        answers: [
            { text: 'Skin', correct: true },
            { text: 'Intestine', correct: false },
            { text: 'Сirculatory system', correct: false },
            { text: 'Transverse muscles', correct: false },
        ]
    },

    {
        question: 'What is the first line of the famous novel "Moby Dick"?',
        answers: [
            { text: 'The look shows the power of the soul', correct: false },
            { text: 'You are forever responsible for all those you have tamed.', correct: false },
            { text: 'Annushka has already bought sunflower oil, and not only bought it, but even spilled it. So the meeting will not take place', correct: false },
            { text: 'Call me Ishmael.', correct: true },
        ]
    },
    
    {
        question: 'How many hearts does an Octopus have?',
        answers: [
            { text: '1', correct: false },
            { text: '0', correct: false },
            { text: '3', correct: true },
            { text: '2', correct: false },
        ]
    },

    {
        question: 'What is the name of the band with the following members: John Deacon, Brian May, Freddie Mercury, Roger Taylor?',
        answers: [
            { text: 'BTS', correct: false },
            { text: 'Linkin Park', correct: false },
            { text: 'Green Day', correct: false },
            { text: 'Queen', correct: true },
        ]
    },

    {
        question: 'Which singer was known, among other things, as the "King of Pop"?',
        answers: [
            { text: 'Ozzy Osbourne', correct: false },
            { text: 'Michael Jackson', correct: true },
            { text: 'Elvis Presley', correct: false },
            { text: 'Grigory Leps', correct: false },
        ]
    },

    {
        question: 'Which of the artists painted "Pond with water lilies" in 1899?',
        answers: [
            { text: 'Claude Monet', correct: true },
            { text: 'Ilya Repin', correct: false },
            { text: 'Leonardo Da Vinci', correct: false },
            { text: 'Jheronimus Bosch', correct: false },
        ]
    },

    {
        question: 'Where is the Statue of Liberty made?',
        answers: [
            { text: 'USA', correct: false },
            { text: 'Russia', correct: false },
            { text: 'Japan', correct: false },
            { text: 'France', correct: true },
        ]
    },

    {
        question: 'Where is Stonehenge located?',
        answers: [
            { text: 'Great Britain', correct: true },
            { text: 'Canada', correct: false },
            { text: 'Poland', correct: false },
            { text: 'Italy', correct: false },
        ]
    },

    {
        question: 'In what year was the first university founded in Bologna, Italy?',
        answers: [
            { text: '510', correct: false },
            { text: '1524', correct: false },
            { text: '1088', correct: true },
            { text: '947', correct: false },
        ]
    },

    {
        question: 'Was William Shakespeare born in ____ ?',
        answers: [
            { text: '1560', correct: false },
            { text: '1564', correct: true },
            { text: '1912', correct: false },
            { text: 'Who is William Shakespeare?', correct: false },
        ]
    },

    {
        question: 'The year of the founding of Communist China?',
        answers: [
            { text: '1939', correct: false },
            { text: '1953', correct: false },
            { text: '1949', correct: true },
            { text: '1964', correct: false },
        ]
    },

    {
        question: 'Who was the first person in the world to fly into space?',
        answers: [
            { text: 'Yuri Gagarin', correct: true },
            { text: 'Alexey Leonov', correct: false },
            { text: 'Valentina Tereshkova', correct: false },
            { text: 'Neil Armstrong', correct: false },
        ]
    },

    {
        question: 'How many continents are there on Earth?',
        answers: [
            { text: '5', correct: false },
            { text: '6', correct: true },
            { text: '7', correct: false },
            { text: '4', correct: false },
        ]
    },

    {
        question: 'Select the missing word. In ancient Greek mythology, was Nemesis a winged goddess?',
        answers: [
            { text: 'Water', correct: false },
            { text: 'Beauty', correct: false },
            { text: 'Retribution', correct: true },
            { text: 'Victories', correct: false },
        ]
    },

    {
        question: 'Who patented the phone?',
        answers: [
            { text: 'Albert Einstein', correct: false },
            { text: 'Thomas Edison', correct: false },
            { text: 'Alexander Bell', correct: true },
            { text: 'Antonio Meucci', correct: false },
        ]
    },

    {
        question: 'Are you familiar with Alexander Volkov is novel "The Wizard of Oz"? How did Goodwin manage to return to Kansas?',
        answers: [
            { text: 'Flew away in a hot air balloon', correct: true },
            { text: 'Flew away on birds', correct: false },
            { text: 'Flew away on a broomstick', correct: false },
            { text: 'Goodwin decided to stay in the Emerald City.', correct: false },
        ]
    },

    {
        question: 'Which country does this flag belong to?',
        alt: 'An image of a building for the question "Which country does this flag belong to"',
        image: 'images/for_ques23.webp',
        answers: [
            { text: 'Nepal', correct: false },
            { text: 'Uganda', correct: true },
            { text: 'Uruguay', correct: false },
            { text: 'Egypt', correct: false },
        ]
    },

    {
        question: 'What is the name of this building?',
        alt: 'An image of a building for the question "What is the name of this building?"',
        image: 'images/for_ques24.jpg',
        answers: [
            { text: 'The Resurrection Gate', correct: false },
            { text: 'The Arc de Triomphe in Paris', correct: false },
            { text: 'Holstein Gate', correct: false },
            { text: 'Brandenburg Gate', correct: true },
        ]
    },

    {
        question: 'What did Prometheus steal from the gods?',
        answers: [
            { text: 'Fire', correct: true},
            { text: 'The Golden Fleece', correct: false },
            { text: 'Immortality', correct: false },
            { text: 'Eyes', correct: false },
        ]
    },

    {
        question: 'Which of these characters are friends with Harry Potter? (several possible answers)',
        answers: [
            { text: 'Ron Weasley', correct: true },
            { text: 'Draco Malfoy', correct: false },
            { text: 'Hermione Granger', correct: true },
            { text: 'Voldemort', correct: false },
        ],
        multiple: true
    },

    {
        question: 'Select representatives of the chordates: (several possible answers)',
        answers: [
            { text: 'Butterfly', correct: false },
            { text: 'Lanceolates', correct: true },
            { text: 'Fich', correct: true },
            { text: 'Human', correct: true },
        ],
        multiple: true
    },

    {
        question: 'Which mushrooms are poisonous? (several possible answers)',
        answers: [
            { text: 'Pale toadstool', correct: true },
            { text: 'White mushroom', correct: false },
            { text: 'Honeydew', correct: false },
            { text: 'Fly agaric', correct: true },
        ],
        multiple: true
    },

    {
        question: 'Which of the above is included in the solar system? (several possible answers)',
        answers: [
            { text: 'Jupiter', correct: true },
            { text: 'The Asteroid Belt', correct: true },
            { text: 'Janssen', correct: false },
            { text: 'Neptune', correct: true },
        ],
        multiple: true
    },

    {
        question: 'What is the name of this animal? (several possible answers)',
        alt: 'An image of a building for the question "What is the name of this animal?"',
        image: 'images/for_ques30.jpg',
        answers: [
            { text: 'Puma', correct: true },
            { text: 'Leo', correct: false },
            { text: 'Lynx', correct: false },
            { text: 'Caguar', correct: true },
        ],
        multiple: true
    },

    {
        question: 'What does "S" mean in physics? (several possible answers)',
        answers: [
            { text: 'Pressure', correct: false },
            { text: 'Moving', correct: true },
            { text: 'Square', correct: true },
            { text: 'Acceleration', correct: false },
        ],
        multiple: true
    },

    {
        question: 'What does "N" mean in physics? (several possible answers)',
        answers: [
            { text: 'The reaction force of the support', correct: true },
            { text: 'Number of turns', correct: true },
            { text: 'The number of total oscillations', correct: true },
            { text: 'Frequency', correct: false },
        ],
        multiple: true
    },

    {
        question: 'What does "T" mean in physics? (several possible answers)',
        answers: [
            { text: 'The mass of the molecule', correct: false },
            { text: 'Absolute temperature', correct: true },
            { text: 'Gas pressure', correct: false },
            { text: 'Period', correct: true },
        ],
        multiple: true
    },

    {
        question: 'Choose Russian classics: (several possible answers)',
        answers: [
            { text: 'Anton Pavlovich Chekhov', correct: true },
            { text: 'Erich-Maria Remarque', correct: false },
            { text: 'Fyodor Mikhailovich Dostoevsky', correct: true },
            { text: 'Nikolai Vasilyevich Gogol', correct: true },
        ],
        multiple: true
    }

];
