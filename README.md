# palindorme-offers

## Getting Started

### Run the project

Inside folder project run:

```bash
docker-compose build
docker-compose up
```

After project is up and running run:

```bash
docker exec mongodb-local bash -c './database/import.sh localhost'
```