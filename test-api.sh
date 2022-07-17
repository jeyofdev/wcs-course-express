echo "run test for api"
docker compose -f docker-compose.dev.yml exec api yarn test