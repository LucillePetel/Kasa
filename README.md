![logo Kasa](src/img/logo-header.png)

# Kasa projet 7 Openclassrooms

Kasa est le septième projet de la formation Developpeur Web Openclassrooms

## Contexte :

L'entreprise Kasa, l'un des leaders dans le domaine de la location entre particulier en France, souhaite faire faire une refonte totale de son site web.

## Objectifs :

Développer l'ensemble de l'application responsive et ses composants avec React en suivant [les maquettes Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/).

## Contraintes techniques :

### React :

- Découpage en composants modulaires et réutilisables.
- Un composant par fichier
- Structure logique des différents fichiers.
- Utilisation des props entre les composants.
- Utilisation du state dans les composants quand c'est nécessaire.
- Gestion des événements.
- Utiliser les listes.

### React Router :

- Gérer les paramètres des routes avec React Router dans l'URL pour récupérer les informations des logements.
- Existance d'une page par route.
- Page 404 renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
- Logique du routeur réunie dans un seul fichier.

### Général :

- Le code ne doit pas produire d'erreur ou de warning dans la console.

## Contraintes fonctionnelles :

- Défilement des photos dans la galerie (composant Gallery) :
  - Lorsque l'utilisateur clique sur "précédent" depuis la première image, la galerie affiche la dernière image, et lorsqu'il clique sur "suivant" depuis la dernière image, la galerie affiche la première image.
  - S'il y a une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
- La galerie doit toujours rester à la même hauteur (indiquée dans la maquette Figma).
- Collapse :
  - Par défaut, les Collapse sont fermés à l'initialisation de la page.
  - Le clic de l'utilisateur ferme le Collapse s'il est ouvert, et l'ouvre s'il est fermé.

## Back-end / data :

Le back-end n'étant pas encore disponible, l'application est crée grace au [fichier JSON](src/data/annonces.json) fourni pour les annonces.
Un second [Fichier JSON](src/data/aboutData.json) a été créé pour contenir les informations de la page "A propos".

## Technologies utilisées : 

- [Visual Studio Code](https://code.visualstudio.com/)
- [React](https://fr.legacy.reactjs.org/)
- [Sass](https://sass-lang.com/)

## Rendu final

[Lien vers le site Kasa]()


