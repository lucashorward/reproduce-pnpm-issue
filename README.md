## Reproduction steps

- Pull the repo without installing any node_modules.
- `corepack enable`
- `corepack prepare --activate`
- `pnpm i --filter="my-nx-app"`

```
Lockfile is up to date, resolution step is skipped
.                                        |    +3141 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 3141, reused 3007, downloaded 0, added 3141, done
```

That will install ~3000 dependencies instead of the ~80 that it should if I do a workaround:

- cd apps/my-nx-app/
- pnpm i --ignore-workspace

```
Packages: +80
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 80, reused 79, downloaded 1, added 80, done
```
