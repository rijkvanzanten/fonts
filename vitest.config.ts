import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globalSetup: './test/setup.ts',
    coverage: {
      include: ['src'],
    },
  },
})
