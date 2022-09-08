# gills 2

This repository contains the source code for [gills2.yrmnd.me](http://gills2.yrmnd.me).

## design

Based on [svelte vite typescript]() template, with very few changes. No routing or anything like that. Form very simply integrates with [Basin Forms]() BaaS product.

## information

Notice: The date and location of the first performance will be announced on the Jipprock Productions Facebook page.

## text submissions

- All submissions are to be read by actors during a live music performance.
- All submissions are to be collated and interpreted by the performance team.
- Our intention is to create an abstract dialogue between submissions.
- Several submissions may be read at the same time, either in conversation, irrespectively, or in any way that may work with the music and the performance as a whole.

## accepted formats

- poetry
- dialogue
- short story
- observations
- theories

hate speech will not be included (racism, anti-LGBT, misogyny, or slander towards any specific individual).

## todo

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```

todo: do this for the submission