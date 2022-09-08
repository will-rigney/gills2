# gills 2

## design

## tasks

- frontend - simple or tricky?
- maybe svelte

## information

Notice: The date and location of the first performance will be announced on the Jipprock Productions Facebook page.

### text submissions

- All submissions are to be read by actors during a live music performance.
- All submissions are to be collated and interpreted by the performance team.
- Our intention is to create an abstract dialogue between submissions.
- Several submissions may be read at the same time, either in conversation, irrespectively, or in any way that may work with the music and the performance as a whole.

### accepted formats

- poetry
- dialogue
- short story
- observations
- theories

hate speech will not be included (racism, anti-LGBT, misogyny, or slander towards any specific individual).

<input> “please write or copy text here. Maximum 2000 words.”</input>
<input> “The name you wish to be credited by.”</input>

# gills2 app

frontend for gills2.yrmnd.me

## what it does

Collect optionally anonymous responses for gills2 performance.

## how it works

Frontend is simple svelte app using vite as its build system.
This is designed to integrate with backend <not sure yet>.

## technical considerations

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```

todo: do this for the submission