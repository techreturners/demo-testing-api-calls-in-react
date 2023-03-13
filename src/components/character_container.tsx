import React from 'react';
import { DisneyCharacter } from '../disney_character';
import Character from './character';

interface CharacterContainerProps{ 
	characters: Array<DisneyCharacter>;	
}

const CharacterContainer : React.FC<CharacterContainerProps> = ( { characters }) => {


    return (
        <div className="card-container">
      {characters.map((character) => (
        <Character key={character._id} character={character} />
      ))}
    </div>
    )
}

export default CharacterContainer;