#!/bin/bash

echo "🔧 Installing dependencies..."
docker --version || { echo "Docker not installed"; exit 1; }

echo " Building services..."
docker-compose build

echo "📦 Starting all services..."
docker-compose up -d

echo "🔍 Checking container status..."
docker-compose ps

echo "📜 Saving logs..."
mkdir -p logs
docker-compose logs > logs/all-logs.txt

echo "✅ Setup complete!"