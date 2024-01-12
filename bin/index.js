#! /usr/bin/env node

import PasetoConstructor from 'paseto.js'

const sk = process.env['PASETO_SYMKEY']
const version = process.argv[3] || 'v2'
const scope = process.argv[2]

if (!sk) {
  process.stderr.write('PASETO_SYMKEY env var not set\n')
  process.exit(1)
}
if(!scope) {
  process.stderr.write('Scope not set, please provide a comma-separated list of grants\n')
  process.stderr.write('Example usage: create-paseto entity-read,entity-modify\n')
  process.exit(1)
}

switch(version.toLowerCase()) {
  case 'v2':
    const s = scope.split(',')
    const p = await encodeV2Paseto({
      symKey: sk,
      content: {
        exp: new Date(Date.now() + 1000 * 60 * 60),
        scope: s,
      },
    })
    process.stdout.write(`${p}\n`)
    break
  default:
    process.stderr.write('Only paseto v2 is supported\n')
    process.exit(1)
}

async function encodeV2Paseto({
                                symKey,
                                content,
                              }){
  const buff = Buffer.from(symKey, 'utf-8')
  const encoder = new PasetoConstructor.V2()
  const sk = new PasetoConstructor.SymmetricKey(encoder)
  await sk.inject(buff)

  const ec = {
    exp: content.exp.toISOString(),
    scope: content.scope.join(' ')
  }

  return await encoder.encrypt(JSON.stringify(ec), sk)
}
