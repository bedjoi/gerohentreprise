# 🎨 Guide de Style - CoffeeBusiness

## 🌟 Vue d'ensemble de la Charte Graphique

CoffeeBusiness utilise une charte graphique sophistiquée et professionnelle qui évoque le confort, la somptuosité et l'authenticité du café de qualité. Notre identité visuelle reflète l'excellence et la tradition dans l'industrie du café.

## 🎨 Palette de Couleurs

### Couleurs Principales

#### **Coffee (Marron)**

-   **50**: `#fdf8f3` - Blanc cassé très clair
-   **100**: `#f9e8d8` - Blanc cassé clair
-   **200**: `#f2d1b8` - Beige très clair
-   **300**: `#e8b38c` - Beige clair
-   **400**: `#dc8f5a` - Beige moyen
-   **500**: `#d4753a` - Marron clair (couleur principale)
-   **600**: `#c05f2e` - Marron moyen
-   **700**: `#9e4a28` - Marron foncé
-   **800**: `#7e3d26` - Marron très foncé
-   **900**: `#673422` - Marron profond

#### **Cream (Blanc Cassé)**

-   **50**: `#fefcf9` - Blanc pur
-   **100**: `#fdf7f0` - Blanc cassé très subtil
-   **200**: `#f9e8d1` - Blanc cassé clair
-   **300**: `#f4d4a8` - Beige très clair
-   **400**: `#edb974` - Beige doré clair
-   **500**: `#e59f4a` - Beige doré
-   **600**: `#d6863a` - Beige doré moyen
-   **700**: `#b26a2f` - Beige doré foncé
-   **800**: `#8f552a` - Beige doré très foncé
-   **900**: `#744726` - Beige doré profond

#### **Charcoal (Noir)**

-   **50**: `#f8f9fa` - Gris très clair
-   **100**: `#f1f3f4` - Gris clair
-   **200**: `#e8eaed` - Gris moyen clair
-   **300**: `#dadce0` - Gris moyen
-   **400**: `#bdc1c6` - Gris
-   **500**: `#9aa0a6` - Gris moyen foncé
-   **600**: `#80868b` - Gris foncé
-   **700**: `#5f6368` - Gris très foncé
-   **800**: `#3c4043` - Gris profond
-   **900**: `#202124` - Noir (texte principal)

#### **Gold (Or)**

-   **50**: `#fffbeb` - Or très clair
-   **100**: `#fef3c7` - Or clair
-   **200**: `#fde68a` - Or moyen clair
-   **300**: `#fcd34d` - Or moyen
-   **400**: `#fbbf24` - Or
-   **500**: `#f59e0b` - Or moyen foncé
-   **600**: `#d97706` - Or foncé
-   **700**: `#b45309` - Or très foncé
-   **800**: `#92400e` - Or profond
-   **900**: `#78350f` - Or profond foncé

### Utilisation des Couleurs

-   **Coffee-500/600** : Couleurs principales pour les boutons et éléments d'accent
-   **Coffee-100/200** : Arrière-plans et bordures subtiles
-   **Cream-50/100** : Arrière-plans principaux et cartes
-   **Charcoal-600/700** : Texte secondaire et labels
-   **Charcoal-900** : Texte principal et titres
-   **Gold-400/500** : Accents et éléments de luxe

## 🔤 Typographie

### Polices

#### **Playfair Display** (Serif)

-   **Usage** : Titres principaux, logos, éléments de marque
-   **Poids** : 400, 500, 600, 700
-   **Classes CSS** : `font-display`

#### **Inter** (Sans-serif)

-   **Usage** : Corps de texte, navigation, boutons
-   **Poids** : 300, 400, 500, 600, 700
-   **Classes CSS** : `font-sans` (par défaut)

### Hiérarchie Typographique

```css
/* Titre principal */
h1: text-5xl md:text-6xl lg:text-7xl font-bold text-coffee-900

/* Titre de section */
h2: text-4xl md:text-5xl font-bold text-coffee-900

/* Sous-titre de section */
h3: text-2xl md:text-3xl font-bold text-coffee-800

/* Titre de carte */
h4: text-xl font-bold text-coffee-800

/* Corps de texte principal */
p: text-lg text-charcoal-600

/* Corps de texte secondaire */
p: text-base text-charcoal-700

/* Petits textes */
span: text-sm text-charcoal-500
```

## 🎭 Composants UI

### Boutons

#### **Bouton Principal** (`btn-primary`)

```css
bg-coffee-600 hover:bg-coffee-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-coffee
```

#### **Bouton Secondaire** (`btn-secondary`)

```css
bg-cream-100 hover:bg-cream-200 text-coffee-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-coffee-200 hover:border-coffee-300 shadow-cream
```

#### **Bouton Contour** (`btn-outline`)

```css
bg-transparent hover:bg-coffee-50 text-coffee-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-coffee-300 hover:border-coffee-400
```

### Cartes

#### **Carte Élégante** (`card-elegant`)

```css
bg-white rounded-2xl shadow-coffee border border-cream-200 hover:shadow-xl transition-all duration-300
```

### Arrière-plans

#### **Arrière-plan Café** (`coffee-bg`)

```css
bg-gradient-to-br from-cream-50 via-white to-coffee-50
```

#### **Arrière-plan Crème** (`cream-bg`)

```css
bg-gradient-to-br from-cream-50 to-white
```

#### **Arrière-plan Charbon** (`charcoal-bg`)

```css
bg-gradient-to-br from-charcoal-50 to-white
```

## 🎨 Éléments Visuels

### Motifs de Fond

#### **Pattern Café** (`bg-coffee-pattern`)

-   Motif subtil de points circulaires
-   Opacité : 5-30% selon le contexte
-   Couleur : Coffee-500

#### **Texture Crème** (`bg-cream-texture`)

-   Motif géométrique organique
-   Opacité : 40%
-   Couleur : Cream-100

### Ombres

#### **Ombre Café** (`shadow-coffee`)

```css
0 10px 25px -3px rgba(212, 117, 58, 0.1), 0 4px 6px -2px rgba(212, 117, 58, 0.05)
```

#### **Ombre Crème** (`shadow-cream`)

```css
0 10px 25px -3px rgba(253, 247, 240, 0.1), 0 4px 6px -2px rgba(253, 247, 240, 0.05)
```

### Effets de Hover

-   **Transformation** : `hover:scale-105` pour les cartes
-   **Translation** : `hover:translate-x-1` pour les liens
-   **Ombres** : `hover:shadow-xl` pour les cartes
-   **Couleurs** : Transitions douces sur tous les éléments interactifs

## 📱 Responsive Design

### Breakpoints

-   **Mobile** : 320px+
-   **Tablet** : 768px+
-   **Desktop** : 1024px+
-   **Large** : 1280px+

### Classes Utilitaires

```css
.section-padding: py-20 px-4 sm:px-6 lg:px-8
.container-custom: max-w-7xl mx-auto
.text-gradient: bg-gradient-to-r from-coffee-600 to-cream-600 bg-clip-text text-transparent
```

## 🎯 Applications Pratiques

### Navigation

-   Header avec effet de transparence et backdrop-blur
-   Logo avec icône café et tagline "Excellence & Qualité"
-   Navigation avec hover effects subtils

### Sections

-   Badges colorés pour identifier les sections
-   Titres avec effet de gradient
-   Cartes avec ombres et bordures élégantes

### Formulaires

-   Champs avec bordures cream et focus coffee
-   Boutons avec effets de hover et animations
-   Validation visuelle avec couleurs appropriées

### Footer

-   Dégradé de coffee-900 à charcoal-900
-   Pattern de fond subtil
-   Liens avec animations de hover

## 🚀 Bonnes Pratiques

1. **Cohérence** : Utilisez toujours les classes CSS prédéfinies
2. **Contraste** : Respectez les ratios de contraste pour l'accessibilité
3. **Animations** : Gardez les transitions fluides et subtiles
4. **Espacement** : Utilisez l'espacement généreux pour la lisibilité
5. **Hiérarchie** : Respectez la hiérarchie typographique établie

## 📋 Checklist de Conformité

-   [ ] Utilisation des couleurs de la palette officielle
-   [ ] Respect de la hiérarchie typographique
-   [ ] Application des classes CSS prédéfinies
-   [ ] Vérification des contrastes d'accessibilité
-   [ ] Test sur tous les breakpoints
-   [ ] Cohérence avec l'identité de marque

---

**Note** : Cette charte graphique est la propriété exclusive de CoffeeBusiness et doit être respectée dans tous les supports de communication.
