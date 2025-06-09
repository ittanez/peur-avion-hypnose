#!/bin/bash

echo "🚀 Script de déploiement pour le site peur-avion-hypnose"
echo ""

# Vérifier que nous sommes dans le bon dossier
if [ ! -f "index.html" ]; then
    echo "❌ Erreur: index.html non trouvé. Exécutez ce script depuis le dossier racine du projet."
    exit 1
fi

echo "📦 Installation des dépendances..."
npm install

echo ""
echo "🔧 Configuration requise avant le déploiement:"
echo "1. Créez un compte sur https://netlify.com"
echo "2. Connectez votre repository Git"
echo "3. Configurez les variables d'environnement dans Netlify:"
echo "   - STRIPE_PUBLIC_KEY"
echo "   - STRIPE_SECRET_KEY" 
echo "   - STRIPE_PRICE_ID"
echo "   - SUPABASE_URL"
echo "   - SUPABASE_ANON_KEY"
echo "   - RESEND_API_KEY"
echo "   - FROM_EMAIL"
echo "   - SITE_URL"
echo ""

echo "🗄️  Configuration Supabase requise:"
echo "Créez la table 'test_results' avec cette requête SQL:"
echo ""
echo "CREATE TABLE test_results ("
echo "  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,"
echo "  email TEXT NOT NULL,"
echo "  first_name TEXT NOT NULL,"
echo "  total_score INTEGER NOT NULL,"
echo "  percentage INTEGER NOT NULL,"
echo "  fear_level TEXT NOT NULL,"
echo "  recommendations TEXT NOT NULL,"
echo "  answers JSONB NOT NULL,"
echo "  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
echo ");"
echo ""
echo "CREATE INDEX idx_test_results_email ON test_results(email);"
echo "CREATE INDEX idx_test_results_created_at ON test_results(created_at);"
echo ""

echo "🌐 Pour déployer manuellement:"
echo "1. Allez sur https://app.netlify.com"
echo "2. Cliquez sur 'Add new site' > 'Deploy manually'"
echo "3. Glissez-déposez ce dossier ou connectez votre repo Git"
echo "4. Configurez les variables d'environnement"
echo "5. Le site sera disponible à l'URL fournie par Netlify"
echo ""

echo "✅ Préparation terminée ! Le site est prêt pour le déploiement."