import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const indexPagePath = resolve(process.cwd(), 'app/pages/index.vue')

describe('index page', () => {
  it('contains localized home title key', () => {
    const source = readFileSync(indexPagePath, 'utf-8')
    expect(source).toContain("t('home.title')")
  })
})
