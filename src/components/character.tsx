import { DisneyCharacter } from "../disney_character"

interface CharacterProps{
	character: DisneyCharacter;	
}

const Character : React.FC<CharacterProps> = ( { character }) => {

    return(<article className="card">

      <h2>{character.name}</h2>

      <button className="card__button" >
	  	Add to Favourites
      </button>

      <img className="card__img" src={character.imageUrl} alt={character.name} />

    </article>);
}


export default Character;