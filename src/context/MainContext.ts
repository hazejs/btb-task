import { fetchCharacters, login } from '../utils/api';
import createDataContext from './createDataContext';

// Define the User
interface User {
    name: string;
    password: string;
    role: string;
  }

// Define the state type
interface State {
  suggestions: Array<any>;
  error: string;
  user: User;
  isAuthanticated: boolean;
  selectedSuggestion: any;
}

// Define the action type
type Action =
  | { type: 'GET_SEUGGESTIONS'; payload: { results: Array<any> } } // Replace with actual response structure
  | { type: 'CHOOSE_SEUGGESTION'; payload: string }
  | { type: 'SUCCESS_LOGIN'; payload: any }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'RESET_ERROR'; }
  | { type: 'RESET_CHARACTERS'; }
  | { type: 'LOGIN_STATUS'; payload: boolean }
  | { type: 'ERROR'; payload: string };
  


// Main reducer
const mainReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'GET_SEUGGESTIONS':
        return { ...state, suggestions: action.payload.results };
    case 'SUCCESS_LOGIN':
        return { ...state, isAuthanticated: true, user: action.payload };
    case 'LOGIN_ERROR':
      return { ...state, isAuthanticated: false, error: action.payload };
    case 'CHOOSE_SEUGGESTION':
        return { ...state, suggestions: [state.suggestions.find((s) => s.name === action.payload)],
           selectedSuggestion: state.suggestions.find((s) => s.name === action.payload) };
    case 'ERROR':
        return { ...state, error: action.payload };
    case 'RESET_ERROR':
        return { ...state, error: '' };
    case 'RESET_CHARACTERS':
        return { ...state, suggestions: [], selectedSuggestion: {} };
    case 'LOGIN_STATUS':
        return { ...state, isAuthanticated: action.payload };
    default:
        return state;
  }
};


// Login
const loginUser = (dispatch: React.Dispatch<Action>) => async (username: string, password: string) => {
    try {
      const response = await login(username, password);      
      if(!!response) dispatch({ type: 'SUCCESS_LOGIN', payload: response  });
      if(!!!response) dispatch({ type: 'LOGIN_ERROR', payload: 'Wrong Crendentials'  });
    } catch (err) {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Something Went Wrong With The Search' });
    }
};

//See if user is logged in 
const isUserLogedIn = (dispatch: React.Dispatch<Action>) => async () => {
  const isLoggedInFromStorage = localStorage.getItem('isAuthanticated');
  dispatch({ type: 'LOGIN_STATUS', payload: isLoggedInFromStorage === 'true'  });
};


// Data Display Functions
const getCharacters = (dispatch: React.Dispatch<Action>) => async (value: string) => {
  try {
    const response = await fetchCharacters(value);    
    dispatch({ type: 'GET_SEUGGESTIONS', payload: response  });
  } catch (err) {
    dispatch({ type: 'ERROR', payload: 'Something Went Wrong With The Search' });
  }
};

const chooseCharacter = (dispatch: React.Dispatch<Action>) => async (value: string) => {
    try {
      dispatch({ type: 'CHOOSE_SEUGGESTION', payload: value });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: 'Something Went Wrong With The Reset' });
    }
};

const resetCharacters = (dispatch: React.Dispatch<Action>) => async (value: string) => {
  dispatch({ type: 'RESET_CHARACTERS' });
};

const resetError = (dispatch: React.Dispatch<Action>) => async (value: string) => {
  dispatch({ type: 'RESET_ERROR' });
};

export const { Context, Provider } = createDataContext(
  mainReducer,
  { getCharacters, chooseCharacter, loginUser, resetError, resetCharacters, isUserLogedIn },
  { isAuthanticated: false, suggestions: [], user: {}, error: '', selectedSuggestion: {} }
);
