interface ScrambleWordsState {
  words: string[];
  currentWord: string;
  scrambledWords: string;
  guess: string;
  points: number;
  errorCounter: number;
  maxAllowErrors: number;
  skipCounter: number;
  maxSkips: number;
  isGameOver: boolean;
  totalWords: number;
}

export type ScrambleWordsAction =
  | { type: 'SET_GUESS'; payload: string }
  | { type: 'CHECK_ANSWER'}
  | { type: 'SKIP_WORD' }
  | { type: 'START_NEW_GAME'; payload: ScrambleWordsState };

// This function shuffles the array so it's always random
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// This function shuffles the letters of the word
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

export const getScrambleWordsInitialState = (): ScrambleWordsState => {
  const newGameArray = [...shuffleArray(GAME_WORDS)];

  return {
    words: newGameArray,
    currentWord: newGameArray[0],
    scrambledWords: scrambleWord(newGameArray[0]),
    guess: '',
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    skipCounter: 0,
    maxSkips: 3,
    isGameOver: false,
    totalWords: newGameArray.length,
  };
};


export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordsAction
): ScrambleWordsState => {

  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      }

    case "CHECK_ANSWER":{
      if(state.currentWord === state.guess){
        const newWords = state.words.slice(1);

        return {
          ...state,
          points: state.points + 1,
          guess: '',
          words: newWords,
          currentWord: newWords[0],
          scrambledWords: scrambleWord(newWords[0])
        }
      }

      return {
        ...state,
        errorCounter: state.errorCounter + 1,
        guess: '',
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
      }
    }

    case "SKIP_WORD":{
      if(state.skipCounter >= state.maxSkips) return state;

      const updatedWords = state.words.slice(1);

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: updatedWords,
        currentWord: updatedWords[0],
        scrambledWords: scrambleWord(updatedWords[0]),
        guess: ''
      }
    }

    case "START_NEW_GAME":
      return action.payload;
  
    default:
      return state
  }
}