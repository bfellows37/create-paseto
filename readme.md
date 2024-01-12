Requirements:

- nodejs
- an envvar called `PASETO_SYMKEY` set with a valid symkey

Install the package locally:

```bash
npm i -g
```

Example usage:

```bash
PASETO_SYMKEY=your-symkey-here create-paseto my-entity-modify,my-other-grant
```

or if you already set an envvar in your bash session:

```bash
create-paseto my-entity-modify,my-other-grant
```
