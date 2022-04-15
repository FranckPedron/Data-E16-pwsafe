# Le coffre à mots de passe

Redis, on l'aime déjà :heart_eyes: 2 commandes à retenir et on peut déjà l'utiliser, c'est pas chouette ça ? Mettons tout ça en pratique en développant une appli qui retient nos mots de passe pour nous :lock:

## Commençons par le début

Un serveur Express, une archi qui se respecte, la base :building_construction:

## Le connecteur Redis

[On jette un oeil à la doc](https://www.npmjs.com/package/redis) : elle commence par un exemple :tada: Bon, il faut le décortiquer un peu mais on va y arriver. Sauf que...

## L'authentification

On crée un client et :boom: une erreur `NOAUTH`. Mais on la connaît, cette erreur, c'est la même que dans le terminal. La solution sera un peu différente par contre, mais tout est dans la doc.

## Le préfixe

Parce que Redis n'est qu'un seul _store_ gigantesque, chaque donnée doit avoir une clé unique. Sinon, une application peut écraser accidentellement les données d'une autre. Heureusement, c'est déjà prévu :relieved:

## Une première route

On a un modèle, on a une archi, reste à mettre en place nos routes. Parce qu'on ne pourra rien lire si on n'écrit pas d'abord, commençons par la route PUT.

## Une deuxième route

Bon, le titre est assez explicite.

## Le coffre est prêt, où sont les clés ?

Mais l'appli n'est pas documentée... Si seulement on connaissait un moyen rapide de générer de la documentation en modifiant très peu de choses dans le code... Attendez une minute... 🤯
