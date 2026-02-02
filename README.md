# ⏰ TimeTravel Agency - Webapp Interactive

Application web immersive pour une agence de voyage temporel fictive de luxe, conçue avec l'aide de l'IA générative. Explorez Paris 1889, le Crétacé ou Florence 1504 dans une interface futuriste de style cyberpunk.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-38bdf8.svg)

## 🎯 Description

TimeTravel Agency est une landing page moderne et responsive qui présente une agence de voyage temporel fictive. Le projet met l'accent sur une expérience utilisateur immersive avec un design dark mode cyberpunk luxueux, des animations fluides et une interface interactive.

## 🛠️ Stack Technique

### Frontend
- **React 18.2** - Bibliothèque UI
- **Vite 5.0** - Build tool et dev server
- **Tailwind CSS 3.3** - Framework CSS utility-first
- **Lucide React** - Icônes modernes

### Outils de développement
- **PostCSS** - Transformation CSS
- **Autoprefixer** - Compatibilité navigateurs
- **Node.js** - Environnement d'exécution

## ✨ Features Implémentées

### Page principale
- ✅ **Navbar fixe** avec effet glass morphism et menu mobile responsive
- ✅ **Section Hero** immersive avec fond spatial et appels à l'action
- ✅ **Galerie de destinations** - 3 cartes interactives (Paris 1889, Crétacé, Florence 1504)
- ✅ **Chatbot IA "Chronos"** - Interface de conversation avec historique de messages
- ✅ **Formulaire de réservation** - Champs personnalisés avec sélection de destination et date
- ✅ **Audio teaser** - Lecture de fichier audio ambiant avec contrôles

### Pages de destinations
- ✅ **Page Paris 1889** - Inauguration de la Tour Eiffel et Exposition Universelle
- ✅ **Page Crétacé** - Safari préhistorique avec mesures de sécurité
- ✅ **Page Florence 1504** - Renaissance italienne avec Léonard de Vinci

### Design & UX
- ✅ Design **dark mode** avec palette cyberpunk (violet, rose, cyan)
- ✅ Effets de **glass morphism** sur les composants
- ✅ **Gradients animés** et éléments de fond interactifs
- ✅ Animations au **hover** et transitions fluides
- ✅ **Responsive design** - Mobile, tablette et desktop
- ✅ **Navigation simple** entre pages sans router externe

## 🤖 IA Utilisées

### Développement
- **GitHub Copilot** (Claude Sonnet 4.5) - Génération de code, structure du projet, composants React
- **Assistant IA** - Architecture de l'application, styling Tailwind CSS, logique interactive

### Assets
- **Images de destinations** - Assets personnalisés (paris.png, crétacé.png, florence.png)
- **Audio teaser** - Fichier audio d'ambiance (teaser.mp3)
- **Images de fond** - Unsplash API pour le hero section

### Transparence IA
Ce projet a été développé avec l'assistance intensive de GitHub Copilot pour :
- La structure complète de l'application React
- L'implémentation des composants et de la navigation
- Le styling avec Tailwind CSS et les animations
- La logique de chat et de gestion d'état
- Les pages de destinations individuelles

## 📦 Installation

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Instructions

1. **Cloner le projet**
```bash
cd "c:\Users\luluc\Documents\Document\ia site web"
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Accéder à l'application**
Ouvrir [http://localhost:5173](http://localhost:5173) dans votre navigateur

### Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build

## 📁 Structure du Projet

```
ia site web/
├── src/
│   ├── img/                  # Assets images et audio
│   │   ├── paris.png
│   │   ├── crétacé.png
│   │   ├── florence.png
│   │   └── teaser.mp3
│   ├── App.jsx              # Composant principal + pages
│   ├── main.jsx             # Point d'entrée React
│   └── index.css            # Styles globaux et utilities
├── public/                   # Fichiers statiques
├── index.html               # Template HTML
├── package.json             # Dépendances et scripts
├── vite.config.js           # Configuration Vite
├── tailwind.config.js       # Configuration Tailwind
├── postcss.config.js        # Configuration PostCSS
└── README.md                # Documentation
```

## 🎨 Palette de Couleurs

- **Purple** : `#9333ea` - Accents principaux
- **Pink** : `#ec4899` - Accents secondaires
- **Cyan** : `#06b6d4` - Highlights et call-to-action
- **Background** : `#000000` - Fond principal
- **Glass effect** : `rgba(255,255,255,0.05)` - Overlay transparent

## 🌟 Features Techniques

### Effets visuels
- Glass morphism avec `backdrop-blur`
- Gradients animés avec Tailwind
- Animations `pulse` et `animate` CSS
- Transitions fluides sur hover

### Interactivité
- Navigation par état React (`useState`)
- Gestion de formulaire
- Chat interactif avec simulation de réponses
- Contrôle audio avec API Web Audio

### Responsive
- Menu mobile avec toggle
- Grid responsive (1 colonne mobile, 3 colonnes desktop)
- Images adaptatives avec `object-cover`

## 📝 Crédits

### Technologies
- [React](https://react.dev/) - Meta Platforms, Inc.
- [Tailwind CSS](https://tailwindcss.com/) - Tailwind Labs
- [Vite](https://vitejs.dev/) - Evan You & équipe
- [Lucide](https://lucide.dev/) - Lucide Contributors

### Assets
- Images de destinations : Assets personnalisés
- Images de fond : [Unsplash](https://unsplash.com/) - Photos libres de droits
- Audio : Fichier personnalisé (teaser.mp3)

### Outils de développement
- GitHub Copilot - Assistance au code
- VS Code - Éditeur de code
- Node.js - Environnement d'exécution

## 📄 Licence

**Projet pédagogique** - M1/M2 Digital & IA

Ce projet a été réalisé dans un cadre éducatif pour démontrer l'intégration de l'IA générative dans le développement web moderne.

### Utilisation
- ✅ Utilisation pédagogique et démonstration
- ✅ Modification et amélioration
- ❌ Usage commercial sans autorisation

## 👨‍💻 Auteur

Développé avec l'assistance de GitHub Copilot  
Projet réalisé en 2026

---

## 🚀 Améliorations Futures

- [ ] Intégration d'une vraie API de chatbot (Mistral AI, OpenAI)
- [ ] Ajout d'animations avec Framer Motion
- [ ] Système de réservation fonctionnel avec backend
- [ ] Plus de destinations temporelles
- [ ] Mode clair/sombre toggle
- [ ] Multilingue (FR/EN)
- [ ] Tests unitaires et E2E
- [ ] Déploiement sur Vercel/Netlify

---

**⭐ Si ce projet vous plaît, n'hésitez pas à le partager !**
