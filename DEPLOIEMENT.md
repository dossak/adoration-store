# Publier sur Cloudflare Pages

Dépôt : https://github.com/dossak/adoration-store
Copie locale de travail : `/Users/akotchae/Documents/ChatGPT/siteWeb/adoration-store-github`
Site : https://boutique.akodigitale.fr

## Réglage à vérifier une fois dans Cloudflare

Workers & Pages → projet de la boutique → Settings / Builds :
- Dépôt Git connecté : `dossak/adoration-store`.
- Branche de production : `main`.
- Automatic production branch deployments : activé.
- Framework : None.
- Commande de build : laisser vide pour ces fichiers HTML/CSS/JS.
- Répertoire de sortie : `.` (racine contenant index.html).
- Domaine personnalisé : `boutique.akodigitale.fr`, statut actif.

L’intégration Git native suffit : aucun GitHub Actions ni jeton API dans le dépôt n’est nécessaire. Après chaque push sur main, vérifier que le déploiement Cloudflare du même commit est marqué réussi. Un push accepté par GitHub ne garantit pas à lui seul la réussite du déploiement.

La configuration privée Cloudflare n’a pas pu être vérifiée depuis cette session. Les API GitHub consultées ne renvoyaient ni statut Cloudflare ni historique de déploiement.

Documentation : https://developers.cloudflare.com/pages/configuration/git-integration/

## Après chaque modification

Depuis cette copie du dépôt, sur la branche main :

```sh
cd /Users/akotchae/Documents/ChatGPT/siteWeb/adoration-store-github
git status
git diff
git add index.html styles.css store.js
git commit -m "Améliore le design de la boutique"
git pull --rebase origin main
git push origin main
```

Si tu modifies également des images ou des extraits, ajoute leurs chemins précis avant le commit. Pour inclure ce document : `git add DEPLOIEMENT.md`. En cas de conflit lors du pull, résoudre le conflit avant de poursuivre le push. Avant de commencer une prochaine série de modifications sur une copie propre : `git pull --ff-only origin main`.

## Contrôle après publication

Dans Cloudflare, vérifier le déploiement de production correspondant au commit, puis ouvrir la boutique sur ordinateur et téléphone. Tester une recherche, un filtre, un extrait PDF et les boutons d’achat sans effectuer de paiement.

## Lien Gumroad à compléter

Dix liens Gumroad présents dans le dépôt ont été conservés. Le lien du guide « Demeurer en sa présence » était `#` : il est remplacé par « Bientôt disponible » tant que son URL n’est pas fournie. Les guides sont affichés à 7 € selon la consigne ; le montant final dépend de la fiche Gumroad.
