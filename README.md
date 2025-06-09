# Site de Vente - Hypnothérapie Peur de l'Avion

Site de vente optimisé pour un package d'hypnothérapie spécialisé dans la peur de l'avion.

## 🎯 Objectif

Landing page avec test interactif + tunnel de vente + paiement Stripe intégré.

## 🛠 Architecture Technique

- **Frontend** : HTML/CSS/JS vanilla
- **Backend** : Netlify Functions  
- **Base de données** : Supabase
- **Paiement** : Stripe Checkout
- **Emails** : Resend
- **Hébergement** : Netlify

## 🔧 Configuration

### 1. Variables d'environnement

Créez un fichier `.env` basé sur `.env.example` :

```bash
# Stripe
STRIPE_PUBLIC_KEY=pk_live_votre_clé_publique
STRIPE_SECRET_KEY=sk_live_votre_clé_secrète  
STRIPE_PRICE_ID=price_votre_price_id

# Supabase
SUPABASE_URL=https://votre-projet.supabase.co
SUPABASE_ANON_KEY=votre_clé_anonyme

# Resend
RESEND_API_KEY=re_votre_clé_api
FROM_EMAIL=contact@votredomaine.fr

# Site
SITE_URL=https://votresite.com
```

### 2. Base de données Supabase

Créez la table `test_results` :

```sql
CREATE TABLE test_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  total_score INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  fear_level TEXT NOT NULL,
  recommendations TEXT NOT NULL,
  answers JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour les recherches par email
CREATE INDEX idx_test_results_email ON test_results(email);
CREATE INDEX idx_test_results_created_at ON test_results(created_at);
```

## 🚀 Fonctionnalités

### Landing Page
- Hero section optimisée conversion
- Section problème/solution  
- Témoignages et FAQ
- Design responsive

### Test Interactif
- 12 questions de scoring
- Barre de progression
- Collecte email pour résultats
- Calcul automatique du niveau de peur

### Tunnel de Vente
- Présentation du package 297€
- Paiement sécurisé Stripe
- Page de confirmation
- Emails automatisés

### Emails Automatisés
- Résultats personnalisés du test
- Recommandations basées sur le score
- Confirmation de commande
- Notifications admin

## 📦 Package Vendu

**Programme "Liberté de Voler" - 297€**

- 3 séances d'hypnothérapie individuelles
- Guide de préparation PDF  
- Garantie 4ème séance offerte
- Support email illimité
- Validité : 6 mois

## 🎨 Design

- Palette de couleurs : Dégradés bleu/violet (#667eea → #764ba2)
- Typographie : Inter (Google Fonts)
- Style moderne et professionnel
- Optimisé mobile-first

## 📊 Analytics

- Tracking Google Analytics
- Événements de conversion
- Suivi du parcours utilisateur
- Métriques de performance

## 🔒 Sécurité

- Validation côté serveur
- Sanitisation des données
- Chiffrement des communications
- Conformité RGPD

## 🚀 Déploiement

### Local
```bash
npm install
npm run dev
```

### Production
```bash
npm run deploy
```

Le site sera déployé sur Netlify avec :
- SSL automatique
- CDN global  
- Fonctions serverless
- Formulaires et analytics

## 📁 Structure du Projet

```
peur-avion-hypnose/
├── index.html              # Page principale
├── src/
│   ├── css/
│   │   └── main.css        # Styles principaux
│   ├── js/
│   │   ├── main.js         # JavaScript principal
│   │   └── test.js         # Logique du test
│   └── pages/
│       └── success.html    # Page de confirmation
├── netlify/
│   └── functions/
│       ├── create-checkout.js    # Création session Stripe
│       └── send-test-results.js  # Envoi résultats test
├── netlify.toml           # Configuration Netlify
├── package.json           # Dépendances
└── README.md             # Documentation
```

## 📈 Optimisations

- **Performance** : CSS/JS minifiés, images optimisées
- **SEO** : Meta tags, structure sémantique, sitemap
- **Conversion** : A/B testing, tunnel optimisé
- **UX** : Design responsive, navigation fluide

## 🎯 Métriques Clés

- Taux de completion du test
- Taux de conversion email
- Taux de conversion vente  
- Temps de chargement
- Score mobile-friendly

## 📞 Support

Pour toute question technique :
- Email : contact@novahypnose.fr
- Documentation : voir README.md