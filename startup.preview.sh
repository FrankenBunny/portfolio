echo "Starting preview environment..."
export $(grep -v "^#" .env.preview | xargs)
echo "Initializing reverse proxy..."
docker-compose -f docker-compose.yaml up --build -d reverse-proxy
echo "Initializing frontend..."
docker-compose -f docker-compose.yaml up --build -d frontend
echo "Web application started"
echo "accessible through http://localhost:3000"
