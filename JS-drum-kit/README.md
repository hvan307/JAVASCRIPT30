## index.html

`data-key` is a key code that is associated with every key on the keyboard is is assigned to a div as its attribute for a later use when event listeners will be awaiting a `keydown`.
This website https://keycode.info/ was used for reference to identify key codes for the keyboard keys.

``` html
<div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
```