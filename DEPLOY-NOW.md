# 🚀 DÉPLOYEZ VOTRE SITE MAINTENANT !

## Option 1: Déploiement Ultra-Rapide (5 minutes)

### 1. Aller sur Netlify
👉 **Ouvrez https://app.netlify.com dans votre navigateur**

### 2. Se connecter
- Cliquez "Sign up" si pas de compte, sinon "Log in"  
- Utilisez votre compte GitHub, GitLab ou email

### 3. Déployer le site
- Cliquez **"Add new site"** 
- Choisissez **"Deploy manually"**
- **Glissez-déposez ce dossier complet** dans la zone de drop

### 4. Configurer les variables (IMPORTANT!)
Une fois déployé, allez dans **Site settings > Environment variables** et ajoutez :

```
STRIPE_PUBLIC_KEY = pk_live_51RCQyrANRwaqPj2NZIKGZiadw33A3msp4preGmKVLNV258KoGe0eadZL65pKs74NOA0TxnKdEY2KqshyYnBWeO9H00DIad5mNU
STRIPE_SECRET_KEY = sk_live_...NCJB  
STRIPE_PRICE_ID = price_1RYA1AANRwaqPj2NTx2XYcAv
SUPABASE_URL = https://akrlyzmfszumibwgocae.supabase.co
SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrcmx5em1mc3p1bWlid2dvY2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NjUyNDcsImV4cCI6MjA1ODM0MTI0N30.UDVk1wzm36OJGK0usCHEtvmkC2QxABvG9KQ8p2lKz30
RESEND_API_KEY = re_anumSe2y_Csxrtd458zqox5akebPT5mD4
FROM_EMAIL = contact@novahypnose.fr
SITE_URL = https://VOTRE-SITE.netlify.app
```

**Remplacez VOTRE-SITE par l'URL que Netlify vous donne !**

### 5. Configurer Supabase
👉 **Allez sur https://supabase.com/dashboard**

Dans l'éditeur SQL, exécutez :
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

CREATE INDEX idx_test_results_email ON test_results(email);
CREATE INDEX idx_test_results_created_at ON test_results(created_at);

ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable insert for service role" ON test_results FOR INSERT WITH CHECK (true);
```

## ✅ SITE DÉPLOYÉ !

**Votre site sera accessible à l'URL Netlify en quelques secondes !**

---

## Option 2: Déploiement via GitHub (Automatique)

### 1. Créer un repository GitHub
```bash
# Dans ce dossier, exécutez :
git remote add origin https://github.com/VOTRE-USERNAME/peur-avion-hypnose.git
git push -u origin main
```

### 2. Connecter à Netlify
- Allez sur https://app.netlify.com
- "Add new site" > "Import an existing project"
- Connectez GitHub et sélectionnez votre repo
- Netlify déploiera automatiquement !

---

## 🎯 DOMAINE PERSONNALISÉ

Pour utiliser `peurdelavion.novahypnose.fr` :

1. **Dans Netlify** : Site settings > Domain management > Add custom domain
2. **Entrez** : `peurdelavion.novahypnose.fr`  
3. **Configurez les DNS** chez votre registraire avec les valeurs Netlify
4. **SSL automatique** sera activé par Netlify

---

## 🧪 TESTER LE SITE

Une fois déployé, testez :
- [ ] Page se charge correctement
- [ ] Test de peur d'avion fonctionne
- [ ] Email de résultats arrive
- [ ] Bouton d'achat redirige vers Stripe
- [ ] Page de succès après paiement

---

## 🆘 SUPPORT

Si problème :
1. Vérifiez les **variables d'environnement** dans Netlify
2. Consultez les **Function logs** dans Netlify
3. Vérifiez la **table Supabase** est créée
4. Testez avec votre **vraie clé Stripe secrète**

**Le site est prêt à générer des ventes ! 💰**

---

**⚡ DÉPLOYEZ MAINTENANT :** https://app.netlify.com
**📱 URL finale :** https://peurdelavion.novahypnose.fr