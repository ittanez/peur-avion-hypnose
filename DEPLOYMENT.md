# Guide de Déploiement - Site Peur de l'Avion

## 🚀 Déploiement sur Netlify

### Option 1: Déploiement via Git (Recommandé)

1. **Créer un repository Git**
   ```bash
   git add .
   git commit -m "Site peur avion ready for deployment"
   git remote add origin https://github.com/votreusername/peur-avion-hypnose.git
   git push -u origin main
   ```

2. **Connecter à Netlify**
   - Allez sur https://app.netlify.com
   - Cliquez "Add new site" > "Import an existing project"
   - Connectez votre repository GitHub
   - Configuration de build:
     - Build command: `echo "No build needed"`
     - Publish directory: `.`

### Option 2: Déploiement Manuel

1. **Préparer les fichiers**
   - Supprimez le dossier `node_modules`
   - Supprimez le fichier `.env` (sensible)
   - Créez une archive des fichiers restants

2. **Déployer sur Netlify**
   - Allez sur https://app.netlify.com
   - Cliquez "Add new site" > "Deploy manually"
   - Glissez-déposez le dossier du projet

## ⚙️ Configuration des Variables d'Environnement

Dans Netlify, allez dans Site settings > Environment variables et ajoutez :

```
STRIPE_PUBLIC_KEY=pk_live_51RCQyrANRwaqPj2NZIKGZiadw33A3msp4preGmKVLNV258KoGe0eadZL65pKs74NOA0TxnKdEY2KqshyYnBWeO9H00DIad5mNU
STRIPE_SECRET_KEY=sk_live_...NCJB
STRIPE_PRICE_ID=price_1RYA1AANRwaqPj2NTx2XYcAv
SUPABASE_URL=https://akrlyzmfszumibwgocae.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrcmx5em1mc3p1bWlid2dvY2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NjUyNDcsImV4cCI6MjA1ODM0MTI0N30.UDVk1wzm36OJGK0usCHEtvmkC2QxABvG9KQ8p2lKz30
RESEND_API_KEY=re_anumSe2y_Csxrtd458zqox5akebPT5mD4
FROM_EMAIL=contact@novahypnose.fr
SITE_URL=https://votre-site.netlify.app
```

## 🗄️ Configuration Supabase

1. **Créer la table de données**
   
   Connectez-vous à votre dashboard Supabase et exécutez :

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

   -- Index pour les performances
   CREATE INDEX idx_test_results_email ON test_results(email);
   CREATE INDEX idx_test_results_created_at ON test_results(created_at);
   ```

2. **Configurer les permissions RLS (Row Level Security)**
   
   ```sql
   ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
   
   -- Politique pour permettre l'insertion depuis les fonctions
   CREATE POLICY "Enable insert for service role" ON test_results
     FOR INSERT WITH CHECK (true);
   ```

## 🎯 Configuration du Domaine

1. **Domaine personnalisé**
   - Dans Netlify: Site settings > Domain management
   - Ajouter le domaine `peurdelavion.novahypnose.fr`
   - Configurer les DNS selon les instructions Netlify

2. **SSL et HTTPS**
   - Netlify active automatiquement le SSL
   - Forcer HTTPS dans les paramètres du site

## ✅ Tests Post-Déploiement

1. **Test du site**
   - Vérifiez que la page se charge correctement
   - Testez le formulaire de contact
   - Vérifiez les liens et la navigation

2. **Test du parcours complet**
   - Commencez le test de peur d'avion
   - Complétez toutes les questions
   - Vérifiez la réception de l'email
   - Testez le bouton d'achat (mode test Stripe)

3. **Test des fonctions Netlify**
   - Vérifiez que `/api/create-checkout` fonctionne
   - Vérifiez que `/api/send-test-results` fonctionne
   - Consultez les logs dans Netlify Functions

## 🔍 Monitoring et Analytics

1. **Netlify Analytics**
   - Activez Netlify Analytics pour le monitoring
   - Surveillez les performances et la disponibilité

2. **Google Analytics**
   - Remplacez `GA_MEASUREMENT_ID` dans index.html
   - Configurez les événements de conversion

3. **Logs et Debugging**
   - Consultez les logs des fonctions dans Netlify
   - Utilisez la console développeur pour debugger

## 🚨 Sécurité

1. **Variables sensibles**
   - Ne jamais commiter de clés API dans Git
   - Utilisez uniquement les variables d'environnement Netlify

2. **CORS et Headers**
   - Les headers CORS sont configurés dans les fonctions
   - Vérifiez que seuls les domaines autorisés peuvent accéder

3. **Validation des données**
   - Toutes les entrées utilisateur sont validées
   - Protection contre les injections XSS

## 📞 Support

En cas de problème :
1. Vérifiez les logs Netlify
2. Testez les variables d'environnement
3. Vérifiez la configuration Supabase
4. Contactez le support technique si nécessaire

## 🔄 Mises à jour

Pour mettre à jour le site :
1. Modifiez les fichiers localement
2. Commitez les changes
3. Poussez vers le repository Git
4. Netlify déploiera automatiquement

---

**Temps estimé de déploiement : 15-30 minutes**
**URL de production : https://peurdelavion.novahypnose.fr**