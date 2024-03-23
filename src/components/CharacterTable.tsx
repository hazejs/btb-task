import React, { memo, useContext } from 'react';
import { Context as MainContext } from '../context/MainContext';
import { SelectedSuggestion, SelectedSuggestionImg, Table, TableContainer } from '../styles/CharatersTable';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
}

const Loader = () => (
    <svg width="80" height="80" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" stroke="#00BFFF" strokeWidth="4" fill="none" fillOpacity="0.1" />
    </svg>
);

const CharactersTableComponent: React.FC = () => {
    const { state: { suggestions, user, selectedSuggestion } } = useContext(MainContext);
    const localUser = JSON.parse(localStorage.getItem('user') as any);
    const hasPermission = !!user ? user.role === 'admin' : localUser ? localUser.role === 'admin' : false;

    return (
        <TableContainer>
            {!!suggestions.length ? (
                <>
                    <h2>Characters</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                {hasPermission && <th>Status</th>}
                                <th>Species</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suggestions.map((character: Character) => (
                                <tr key={character.id}>
                                    <td>{character.name ?? ''}</td>
                                    {hasPermission && <td>{character.status ?? ''}</td>}
                                    <td>{character.species ?? ''}</td>
                                    <td>{character.gender ?? ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            ) : (
                <div style={{marginTop: 20, fontSize: 18}}>No characters found</div>
            )}

            {!!selectedSuggestion && !!Object.keys(selectedSuggestion).length &&
                <div>
                    {selectedSuggestion.image  ? (
                        <SelectedSuggestion>
                            <SelectedSuggestionImg src={selectedSuggestion?.image}/>
                        </SelectedSuggestion>
                    ) : (
                        <Loader/>
                    )}
                </div>
            }
            
        </TableContainer>
    );
};

export default memo(CharactersTableComponent);