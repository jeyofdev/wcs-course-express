echo "run test for client"
docker compose  -f docker-compose.dev.yml exec client yarn test