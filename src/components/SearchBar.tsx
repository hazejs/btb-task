import React, { useContext, useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { Context as MainContext } from '../context/MainContext';
import { SearchContainer, SearchInput, Suggestion, Suggestions } from '../styles/SearchStyle';
import { log } from 'console';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [isSuggestionClicked, setIsSuggestionClicked] = useState<boolean>(false);
    const { getCharacters, chooseCharacter, resetCharacters, state: {suggestions} } = useContext(MainContext)

    useEffect(() => {  
        
      }, [suggestions])    

    const getData = async (queryValue: string) => {
        setIsSuggestionClicked(false)
        try {
            await getCharacters(queryValue);

            // Emptry suggestions array if no query value
            if(queryValue === '') {
                resetCharacters()
            } 
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    console.log('1');
    

    // debounce function uses custom hook to debounce getData function
    const debouncedGetData = useDebounce((queryValue: string) => getData(queryValue), 500);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        debouncedGetData(value);   
    };

    const handleSuggestionClick = (suggestion: any, index: number) => {

        setQuery(suggestion.name);
        setIsSuggestionClicked(true)
        // make the suggestions array stay with the selected one from the Context API
        chooseCharacter(suggestion.name)
    };
    
    return (
        <SearchContainer>
            <SearchInput type="text" placeholder="Search characters" value={query} onChange={handleChange} />
            <Suggestions>
                {suggestions && !!suggestions.length && !isSuggestionClicked && suggestions.slice(0, 4).map((suggestion: any, index: number) => (
                    <Suggestion key={index} onClick={() => handleSuggestionClick(suggestion, index)}>
                        {suggestion.name}
                    </Suggestion>
                ))}
            </Suggestions>
        </SearchContainer>
    );
};

export default SearchBar;