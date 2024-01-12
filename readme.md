# Create-paseto

## What does this tool do?

this is a command line tool that produces a paseto good for one hour with the specified grants

## How do I use it?

Requirements:

- nodejs
- an envvar called `PASETO_SYMKEY` set with a valid symkey

### Without npm
Install the package dependencies:

```bash
npm i
```

Install the package locally:

```bash
npm i -g
```

Then you can use it by invoking the package name from the command line `create-paseto`

Example usage:

```bash
PASETO_SYMKEY=your-symkey-here create-paseto my-entity-modify,my-other-grant
```

or if you already set an envvar in your bash session:

```bash
create-paseto my-entity-modify,my-other-grant
```
