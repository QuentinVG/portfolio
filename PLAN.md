# Plan d'amélioration du portfolio

## Objectif

Repositionner le portfolio pour mieux refléter un profil de développeur PHP expérimenté, orienté outils métier, cadrage technique, automatisations simples et projets web utiles.

Le but n'est pas de faire un portfolio plus décoratif, mais un site plus juste, plus crédible et plus sélectif.

## Avancement

- [x] Récupérer le dépôt portfolio en local.
- [x] Créer ce fichier de suivi.
- [x] Repositionner la page d'accueil.
- [x] Simplifier les offres.
- [x] Ajouter des garde-fous commerciaux.
- [x] Créer une app démo d'assistant de cadrage.
- [x] Intégrer l'app dans le portfolio.
- [x] Ajouter des cas anonymisés.
- [x] Nettoyer le projet et le README.
- [x] Vérifier le build et les routes locales.
- [x] Déployer.
- [x] Durcir l'assistant après audit : submit bloqué, copie robuste, restauration locale protégée, reset et progression.
- [x] Extraire la logique de scoring dans `src/lib/briefScoring.ts`.
- [x] Rendre le scoring plus explicite avec score réel, score maximal et recommandations.
- [x] Ajouter une étude de cas anonymisée plus structurée.
- [x] Ajouter un aperçu produit de l'assistant sur la page d'accueil.
- [x] Ajouter une page `/method` dédiée à la méthode de cadrage.
- [x] Ajouter des livrables concrets : brief, V1/V2, mini backlog, estimation par lots.
- [x] Ajouter des liens vers le code de l'assistant et de la logique de scoring.
- [x] Améliorer la sortie de l'assistant : format conseillé, périmètre V1, hors périmètre.
- [x] Vérifier visuellement les pages avec captures Playwright desktop/mobile.
- [x] Corriger le rendu des radios/checkboxes de l'assistant détecté par capture.
- [x] Reprendre le front pour un rendu plus premium sans basculer dans le décoratif.
- [x] Remplacer le panneau profil du hero par un aperçu produit plus fort.
- [x] Transformer `/brief` en vraie interface d'app avec navigation d'étapes, progression et résultat live.
- [x] Harmoniser les pages `/`, `/brief` et `/method` avec une palette plus professionnelle, des états focus/hover et des cartes plus lisibles.
- [x] Ajuster les titres mobile après contrôle visuel pour garder un rendu sérieux.
- [x] Reprendre les textes pour renforcer la valeur métier, réduire le ton défensif et franciser l'assistant.
- [x] Ajouter une section de problèmes métier concrets : données, suivi, écrans métier, automatisations.
- [x] Mettre à jour le scoring après renommage des choix de clarté, avec compatibilité pour les anciennes valeurs locales.
- [x] Auditer la qualité du code après les passes front/contenu.
- [x] Extraire le header commun dans `src/components/SiteHeader.astro`.
- [x] Centraliser les constantes de site et helpers d'URL dans `src/lib/site.ts`.
- [x] Rendre les options de l'assistant data-driven depuis `src/lib/briefScoring.ts` pour éviter la duplication formulaire/scoring.
- [x] Supprimer le CSS de header devenu mort dans les pages.

## Dernière vérification

- Build local `npm run build` : OK.
- Audit sécurité `npm audit --audit-level=high` : OK, 0 vulnérabilité.
- Routes locales vérifiées avec le préfixe GitHub Pages :
  - `http://127.0.0.1:4321/portfolio/`
  - `http://127.0.0.1:4321/portfolio/brief`
  - `http://127.0.0.1:4321/portfolio/method`
- Déploiement GitHub Pages : OK via le workflow `Deploy to GitHub Pages`.
- Note : GitHub affiche un avertissement de dépréciation Node 20 sur une action interne liée à `actions/upload-pages-artifact@v4`. Le workflow utilise déjà Node 24 pour le build.

## Audit traité

- Le formulaire `/brief` ne peut plus provoquer de navigation involontaire au submit.
- Les erreurs possibles de presse-papiers et de `localStorage` sont gérées.
- Le scoring n'est plus codé directement dans la page et expose une grille plus lisible.
- La home apporte davantage de preuve produit via un aperçu de résultat et une étude de cas anonymisée.
- La méthode est inspectable sur une page dédiée et le code est accessible depuis le portfolio.
- Les captures locales ont été générées dans `tmp-screenshots/` et ce dossier est ignoré par Git.
- Le front a été renforcé : hero plus démonstratif, assistant présenté comme produit, layout `/brief` plus applicatif, responsive resserré.
- La dette DRY principale a été réduite : header factorisé, constantes centralisées, options de formulaire partagées avec la logique de scoring.

## Positionnement recommandé

### Positionnement principal

Développeur web PHP orienté outils métier, sites utiles et automatisations légères.

### Promesse

J'aide les TPE, PME et équipes métier à transformer un besoin métier en outil web simple, utile, cadré et maintenable.

### À éviter

Ne pas se positionner uniquement comme créateur de sites vitrines à bas prix.

Le site vitrine peut rester une offre possible, mais ne doit pas être le coeur du positionnement.

## Contraintes personnelles à intégrer

- Activité possible surtout soir et week-end.
- Disponibilité variable une semaine sur deux.
- Pas de support urgent ou permanent.
- Projets courts, raisonnables et bien cadrés.
- Retours clients groupés.
- Périmètre écrit avant démarrage.

## Étape 1 - Repositionner la page d'accueil

### À faire

- Réécrire le hero.
- Clarifier le profil.
- Mettre en avant l'expérience de lead developer sans citer d'informations sensibles.
- Remplacer le discours trop centré "site vitrine" par un discours plus large : site utile, outil métier, automatisation légère.

### Exemple d'angle

> Développeur PHP à Valence, j'aide les TPE, PME et équipes métier à clarifier, construire ou améliorer des outils web utiles, sans complexité inutile.

## Étape 2 - Simplifier les offres

### Offre principale

Clarifier et construire un petit outil web ou site utile, bien cadré, sans complexité inutile.

### Cas d'usage à présenter

- Site clair pour présenter une activité.
- Outil métier léger : formulaire avancé, tableau de suivi, mini back-office.
- Cadrage ou audit : clarifier un besoin, estimer, prioriser, sécuriser techniquement.

### À éviter

- Trop d'offres au même niveau.
- Prix d'appel trop bas.
- Promesse de disponibilité permanente.
- Projets trop larges ou trop instables.

## Étape 3 - Ajouter des garde-fous commerciaux

Créer une section claire sur le bon cadre de collaboration.

### À accepter

- Besoin clair ou clarifiable.
- Projet court.
- Décisions regroupées.
- Référent client identifié.
- Contenus de base disponibles.
- Retours structurés.

### À refuser ou éviter

- Urgence permanente.
- Gros e-commerce.
- Marketplace.
- SaaS complet.
- Projet sans périmètre.
- Maintenance non cadrée.
- Client qui cherche uniquement le prix le plus bas.

## Étape 4 - Créer une app démo utile

### Nom possible

- Assistant de cadrage
- Assistant de cadrage
- Estimateur de projet
- Cadrage Express

### Objectif

Montrer concrètement la capacité à cadrer un besoin, raisonner comme lead dev, détecter les risques et produire une synthèse utile.

### MVP

L'app doit rester simple et finie.

Écrans recommandés :

1. Besoin
   - site
   - outil interne
   - automatisation
   - refonte
   - formulaire avancé

2. Complexité
   - utilisateurs
   - données
   - droits
   - imports / exports
   - notifications
   - espace admin

3. Contexte
   - délai
   - budget
   - contenus disponibles
   - urgence
   - niveau de clarté du besoin

4. Résultat
   - score de complexité
   - risques détectés
   - questions à clarifier
   - format recommandé
   - résumé prêt à envoyer par email

### À ne pas faire en V1

- Backend.
- Compte utilisateur.
- Base de données.
- IA intégrée.
- Export PDF.
- Fonctionnalités avancées non nécessaires.

## Étape 5 - Intégrer l'app dans le portfolio

### À faire

- Créer une route dédiée, par exemple `/brief`.
- Ajouter un bouton dans le hero : "Préparer mon brief".
- Ajouter une section "Démo interactive".
- Présenter l'app comme preuve concrète du savoir-faire.

### Message à faire passer

Cette app montre la capacité à transformer une demande métier en cadrage exploitable.

## Étape 6 - Ajouter des cas anonymisés

Créer quelques exemples inspirés de problématiques réelles, sans citer de client, entreprise ou donnée sensible.

### Exemples possibles

- Import CSV avec contrôles et erreurs lisibles.
- Workflow de validation métier.
- Correction d'un bug complexe difficile à reproduire.
- Optimisation d'un écran lent avec beaucoup de données.
- Génération automatique de documents.
- Mini back-office pour suivre des demandes.
- Automatisation pour éviter les doubles saisies.

### Formulation prudente

> Exemples inspirés de problématiques rencontrées en environnement professionnel, sans donnée client ni détail confidentiel.

## Étape 7 - Nettoyer le projet

### À faire

- Remplacer le README starter Astro.
- Vérifier les métadonnées SEO.
- Vérifier les liens GitHub, LinkedIn et email.
- Vérifier l'affichage mobile.
- Vérifier la performance.
- Vérifier le build.
- Déployer sur GitHub Pages.

## Priorité de réalisation

### Phase 1 - Repositionnement

- Réécriture du discours.
- Simplification des offres.
- Ajout des garde-fous.
- Nettoyage du README.

### Phase 2 - App démo

- Création de l'assistant de cadrage.
- Intégration au portfolio.
- Résumé email prérempli.

### Phase 3 - Crédibilité

- Ajout des cas anonymisés.
- Ajustements UX.
- Vérification finale.
- Déploiement.

## Critère de réussite

Le portfolio doit montrer trois choses :

1. Je sais développer proprement.
2. Je sais cadrer un besoin métier.
3. Je protège mon temps en acceptant uniquement des projets raisonnables.

## Décision recommandée

Ne pas chercher à construire un gros portfolio complet.

Construire une page plus juste + une app démo simple mais finie.

C'est plus cohérent avec mon profil, plus crédible commercialement, et plus réaliste avec mes contraintes de disponibilité.
