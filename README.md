# first-project
First Project Repo

# Installation
```bash
bun install
```

## Run 
```bash
bun run dev
```

## DataBase
### Linux
```bash
sudo psql -U 'user' -d 'database' -a -f main.sql
```

## Run with Docker
```bash
docker build -t app
docker run app
```

### Compose docker
```bash
docker-compose up --build
```