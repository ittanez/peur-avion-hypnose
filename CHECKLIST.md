# ✅ Checklist de Déploiement

## Avant le déploiement

### Fichiers créés
- [x] `index.html` - Page principale
- [x] `src/css/main.css` - Styles CSS
- [x] `src/js/main.js` - JavaScript principal  
- [x] `src/js/test.js` - Logique du test
- [x] `src/pages/success.html` - Page de succès
- [x] `netlify.toml` - Configuration Netlify
- [x] `netlify/functions/create-checkout.js` - Fonction Stripe
- [x] `netlify/functions/send-test-results.js` - Fonction emails
- [x] `package.json` - Dépendances
- [x] `public/_redirects` - Redirections
- [x] `public/robots.txt` - SEO
- [x] `.env.example` - Template variables
- [x] `README.md` - Documentation
- [x] `DEPLOYMENT.md` - Guide déploiement

### Configuration requise

#### Netlify
- [ ] Compte Netlify créé
- [ ] Site connecté au repository Git
- [ ] Variables d'environnement configurées
- [ ] Fonctions Netlify activées

#### Supabase  
- [ ] Projet Supabase créé
- [ ] Table `test_results` créée
- [ ] Permissions RLS configurées
- [ ] URL et clé API récupérées

#### Stripe
- [ ] Compte Stripe configuré
- [ ] Produit "Programme Liberté de Voler" créé (297€)
- [ ] Price ID récupéré
- [ ] Clés API en mode live

#### Resend
- [ ] Compte Resend créé
- [ ] Domaine vérifié
- [ ] Clé API générée

#### Domaine
- [ ] Domaine `peurdelavion.novahypnose.fr` configuré
- [ ] DNS pointant vers Netlify
- [ ] SSL activé

## Variables d'environnement à configurer

```bash
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_ID=price_...
SUPABASE_URL=https://....supabase.co
SUPABASE_ANON_KEY=eyJ...
RESEND_API_KEY=re_...
FROM_EMAIL=contact@novahypnose.fr
SITE_URL=https://peurdelavion.novahypnose.fr
```

## Tests à effectuer après déploiement

### Tests fonctionnels
- [ ] Page d'accueil se charge correctement
- [ ] Toutes les sections sont visibles
- [ ] Design responsive sur mobile
- [ ] Navigation fluide entre sections

### Test du parcours utilisateur
- [ ] Clic sur "Test Gratuit" fonctionne
- [ ] Questions du test s'affichent correctement
- [ ] Barre de progression fonctionne
- [ ] Navigation précédent/suivant fonctionne
- [ ] Formulaire email fonctionne
- [ ] Email de résultats est reçu
- [ ] Contenu de l'email est correct

### Test de conversion
- [ ] Bouton "Commencer maintenant" fonctionne
- [ ] Redirection vers Stripe Checkout
- [ ] Paiement test réussi
- [ ] Redirection vers page de succès
- [ ] Email de confirmation reçu (si configuré)

### Tests techniques
- [ ] Fonctions Netlify opérationnelles
- [ ] Logs sans erreurs
- [ ] Base de données Supabase connectée
- [ ] Données du test sauvegardées
- [ ] Analytics Google fonctionnel

## Performance et SEO

### Performance
- [ ] Temps de chargement < 3 secondes
- [ ] Images optimisées
- [ ] CSS/JS minifiés
- [ ] Score Lighthouse > 90

### SEO
- [ ] Meta tags configurés
- [ ] Title et descriptions uniques
- [ ] URL canoniques
- [ ] Sitemap.xml généré
- [ ] Robots.txt configuré

## Sécurité

- [ ] HTTPS activé partout
- [ ] Variables sensibles sécurisées
- [ ] Validation des entrées utilisateur
- [ ] Headers de sécurité configurés
- [ ] CORS correctement configuré

## Analytics et Monitoring

- [ ] Google Analytics configuré
- [ ] Événements de conversion trackés
- [ ] Monitoring Netlify activé
- [ ] Alertes erreurs configurées

---

## ✅ Site prêt pour la production !

Une fois tous les éléments cochés, votre site est prêt à générer des leads et des ventes.

**URL finale : https://peurdelavion.novahypnose.fr**