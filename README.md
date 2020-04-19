# pokejora

Ce projet est un projet noté pour le cours de programmation Web en VueJs en Licence 3 Sciences du Numérique.
Il a été réalisé par :
- Johann De Almeida
- Raphaël Bauvin

Le thème : Créer un Pokédex en utilisant l’API Pokémon suivante : https://pokeapi.co/ 

Version deployée : https://pokejora.firebaseapp.com/

## Le lancer depuis chez vous
```
npm install
```
```
npm run serve
```

## Présentation

### Page d'accueil
- Carrousel proposant les images des news

![image](https://raw.githubusercontent.com/Rafyb/Pokejora/master/docs/screens/Acceuil.png "Page accueil")

### Page du Pokedex
- Image lors du chargement
- Liste des pokemons
- Filtres cummulables
- Cliquer sur un pokemon pour accéder à sa page

/Pokedex
![image](https://raw.githubusercontent.com/Rafyb/Pokejora/master/docs/screens/Pokedex.png "Page Pokedex")

### Page du Pokemon
- Données issus de l'API
- Couleur de fond adapté en fonction du type
- Ajout du pokémon dans l'équipe
- Retour sur le pokedex
( si vous tentez d'accéder à la page et que le pokedex n'est pas chargé entièrement vous serez redirigé )

/Pokedex/3
![image](https://raw.githubusercontent.com/Rafyb/Pokejora/master/docs/screens/Pokemon.png "Page Pokemon")

### Page de l'Equipe
- Visualiser l'équipe
- Retirer un pokemon

/Equipe
![image](https://raw.githubusercontent.com/Rafyb/Pokejora/master/docs/screens/Equipe.png "Page Equipe")
