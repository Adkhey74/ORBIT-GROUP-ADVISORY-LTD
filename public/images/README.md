# Images — où déposer les photos du client

Toutes les images vont dans `public/images/`.
Un fichier `public/images/5.webp` est servi sur le site à l'URL `/images/5.webp`.

## Convention : garder la NUMÉROTATION du client

Enregistrez chaque photo avec **le numéro exact donné par le client**, au format :

```
public/images/1.webp
public/images/2.webp
public/images/3.webp
... etc.
```

Tant qu'un fichier est absent, un **placeholder élégant** s'affiche automatiquement.
Dès que le fichier est déposé avec le bon nom, la vraie photo apparaît (aucune autre manip).

## Répartition (selon les consignes du client)

| Photo | Section du site | Fichier à créer |
|---|---|---|
| Photo 5 | **Hero** (fond page d'accueil, avec voile sombre) | `5.webp` |
| Photo 6 | **About / Founder** (portrait fondateur, fond blanc) | `6.webp` |
| Photo 4 + 11 | **Executive Protection** | `4.webp`, `11.webp` |
| Photo 1 + 8 | **Executive Chauffeur** | `1.webp`, `8.webp` |
| Photo 2 + 12 | **Residential Security** | `2.webp`, `12.webp` |
| Photo 7 + 8 + 10 | **Superyacht & Aviation** | `7.webp`, `8.webp`, `10.webp` |
| Photo 3 | **Join the Network** | `3.webp` |

> Notes :
> - La **Photo 8** est utilisée deux fois (Chauffeur + Superyacht) — un seul fichier `8.webp` suffit.
> - Le client a cité 11 numéros distincts (1,2,3,4,5,6,7,8,10,11,12) pour « 10 photos ». Merci de confirmer
>   la liste exacte au moment du dépôt (il manque peut-être un numéro, ou l'un est en double).

## Format & poids
- Le code pointe actuellement vers des fichiers **`.webp`** (format fourni par le client).
- Visez < 500 Ko/image quand c'est possible (Next.js optimise ensuite automatiquement).
- Si certaines images sont dans un autre format (`.jpg`/`.webp`), dites-le moi : j'ajuste l'extension.
- Hero (`5`) : idéalement large/paysage, min **1920 × 1080**.
- Portrait fondateur (`6`) : format portrait ou 4/3, min **1000 px** de large.

## Images optimisées (WebP)
Les images servies sont des **WebP optimisés** (`N.webp`), générés à partir des PNG d'origine
(~26 Mo → ~1,3 Mo au total). Les PNG sources sont conservés hors déploiement dans
`original-images/` (à la racine, non versionné). Pour ajouter/remplacer une image :
1. Dépose le nouveau `N.png` dans `public/images/`.
2. Préviens-moi : je régénère le `N.webp` optimisé.

Une fois les fichiers déposés, dites-le moi et je vérifie le rendu final.
