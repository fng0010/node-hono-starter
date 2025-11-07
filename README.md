### 🐳 Development Workflow

**Check running containers:**
```bash
docker ps
```

**Start the container (in detached mode):**

```bash
docker compose up -d
```

**STOP the container:**

```bash
docker compose stop
```

**Stop and DELETE the container:**

```bash
docker compose down
```

**Watch logs in real time:**

```bash
docker compose logs -f
```

**Watch ONLY `api` logs in real time:**

```bash
docker compose logs -f api
```

**Run npm commands insidee the `api` container:**
```bash
docker compose exec api npm <your-command-here>
```

### When to rebuild your image:

You must rebuild your image (`docker compose up -d --build`) when you change files that affect the container's environment, such as:
* Installing or uninstalling packages (changes to package.json or package-lock.json).
* Modifying the base image or adding new commands (changes to the Dockerfile).

### IDE tools
* Biome extension for VSCode or Zed.
