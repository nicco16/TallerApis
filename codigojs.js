const characterList = document.getElementById('character-list');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const characters = data.results;
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';

            const characterName = document.createElement('h2');
            characterName.textContent = character.name;

            const characterImage = document.createElement('img');
            characterImage.className = 'character-image';
            characterImage.src = character.image;

            characterCard.appendChild(characterName);
            characterCard.appendChild(characterImage);
            characterList.appendChild(characterCard);
        });
    })
    

    
  