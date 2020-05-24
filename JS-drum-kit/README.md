## index.html
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
