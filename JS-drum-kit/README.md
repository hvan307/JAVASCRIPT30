# index.html
Key code is associated with every key on the keyboard that is assigned to a div and later used with the event listeners.
https://keycode.info/ was used for reference to identify key codes for the keyboard keys.

```html
<div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
```
`data-key` is an audio attribute used to hook the audio to the corresponding div that has the same key code.

```html
<audio data-key="65" src="sounds/clap.wav"></audio>
```

# app.js



## isPlaying()

```js
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return 
    audio.currentTime = 0
    audio.play()
```
`e.keyCode` is an attribute of the event of holding a key down and it's passed in as a `data-type` value in a template string to select the corresponding div. 
`if (!audio)` is included to stop the function from running when keys with no associated audio are pressed. 
`audio.currentTime` is set to 0 to allow the audio to replay without delay as the user hits the key multiple times at a fast pace, because it will rewind to the start. If it wasn't set to 0, the audio is played only when the previous session is finished. 

