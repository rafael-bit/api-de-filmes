# API de filmes

<hr/>

### API de filmes consumida no Back-end e no Front-end

<p> Consumo simples de API usando o Fetch e o Axios além de criar a API usando express/Node.js </p>

## Requirements

* Node 18.13.0
* Git
* Contentful CLI (only for write access)

Without any changes, this app is connected to a Contentful space with read-only access. To experience the full end-to-end Contentful experience, you need to connect the app to a Contentful space with read _and_ write access. This enables you to see how content editing in the Contentful web app works and how content changes propagate to this app.

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/contentful/the-example-app.nodejs.git
cd the-example-app.nodejs
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm start
```

Open [http://localhost:8080](http://localhost:8080) and take a look around.
