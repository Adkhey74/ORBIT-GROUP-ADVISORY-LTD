# Images — où déposer les photos du client

Toutes les images vont dans `public/images/`.
Un fichier `public/images/5.png` est servi sur le site à l'URL `/images/5.png`.

## Convention : garder la NUMÉROTATION du client

Enregistrez chaque photo avec **le numéro exact donné par le client**, au format :

```
public/images/1.png
public/images/2.png
public/images/3.png
... etc.
```

Tant qu'un fichier est absent, un **placeholder élégant** s'affiche automatiquement.
Dès que le fichier est déposé avec le bon nom, la vraie photo apparaît (aucune autre manip).

## Répartition (selon les consignes du client)

| Photo | Section du site | Fichier à créer |
|---|---|---|
| Photo 5 | **Hero** (fond page d'accueil, avec voile sombre) | `5.png` |
| Photo 6 | **About / Founder** (portrait fondateur, fond blanc) | `6.png` |
| Photo 4 + 11 | **Executive Protection** | `4.png`, `11.png` |
| Photo 1 + 8 | **Executive Chauffeur** | `1.png`, `8.png` |
| Photo 2 + 12 | **Residential Security** | `2.png`, `12.png` |
| Photo 7 + 8 + 10 | **Superyacht & Aviation** | `7.png`, `8.png`, `10.png` |
| Photo 3 | **Join the Network** | `3.png` |

> Notes :
> - La **Photo 8** est utilisée deux fois (Chauffeur + Superyacht) — un seul fichier `8.png` suffit.
> - Le client a cité 11 numéros distincts (1,2,3,4,5,6,7,8,10,11,12) pour « 10 photos ». Merci de confirmer
>   la liste exacte au moment du dépôt (il manque peut-être un numéro, ou l'un est en double).

## Format & poids
- Le code pointe actuellement vers des fichiers **`.png`** (format fourni par le client).
- Visez < 500 Ko/image quand c'est possible (Next.js optimise ensuite automatiquement).
- Si certaines images sont dans un autre format (`.jpg`/`.webp`), dites-le moi : j'ajuste l'extension.
- Hero (`5`) : idéalement large/paysage, min **1920 × 1080**.
- Portrait fondateur (`6`) : format portrait ou 4/3, min **1000 px** de large.

Une fois les fichiers déposés, dites-le moi et je vérifie le rendu final.
