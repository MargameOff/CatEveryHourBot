# CatEveryHourBot

![Mastodon profile](https://cdn.discordapp.com/attachments/539174132143620110/1125600667042582558/image.png)

CatEveryHourBot est un bot Mastodon qui poste une photo de chat par heure.

## Prérequis

Avant de lancer le bot, assurez-vous d'avoir Node.js et npm installés sur votre système.

## Installation

1. Clonez ce dépôt sur votre machine :

   ```
   git clone https://github.com/votre-utilisateur/CatEveryHourBot.git
   ```

2. Accédez au répertoire du projet :

   ```
   cd CatEveryHourBot
   ```

3. Installez les dépendances :

   ```
   npm install
   ```

## Configuration

Le bot utilise des variables d'environnement pour sa configuration. Vous devez créer les fichiers `.env.dev` et `.env.prod` pour spécifier les différentes valeurs à l'aide du fichier .env qui sert de template.

Assurez-vous de remplacer les valeurs du template par les valeurs spécifiques à votre configuration.

## Lancement en mode développement

Pour exécuter le bot en mode développement, utilisez la commande suivante :

```bash
npm run dev
```

Le bot se connectera à l'instance Mastodon spécifiée dans le fichier `.env.dev` et commencera à poster une photo de chat au démarrage et 1 fois par heure.

## Lancement en mode production

Pour exécuter le bot en mode production, utilisez la commande suivante :

```bash
npm run prod
```

Le bot se connectera à l'instance Mastodon spécifiée dans le fichier `.env.prod` et commencera à poster une photo de chat au démarrage et 1 fois par heure.

N'oubliez pas de configurer les fichiers `.env.dev` et `.env.prod` correctement avant de lancer le bot dans les différents environnements.

Pour toute question ou problème, n'hésitez pas à me contacter.

Enjoy the cat pictures every hour! 🐱
