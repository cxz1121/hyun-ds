import path from 'node:path'

export const ROOT = path.resolve(__dirname, '..', '..')

export const PKGS = path.resolve(ROOT, 'packages')

export const ENTRY = path.resolve(PKGS, 'hyun-ds')

export const OUTPUT = path.resolve(ROOT, 'dist')
