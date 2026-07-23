# Playwright Keyboard & Mouse Actions

## Keyboard

### `page.keyboard.press(key)`
Simulates pressing a key and releasing it immediately.

```ts
await page.keyboard.press("Enter");
await page.keyboard.press("Control+A");
```

### `page.keyboard.down(key)`
Holds a key down (does not release it).

```ts
await page.keyboard.down("Shift"); // hold Shift
// do something while Shift is held
await page.keyboard.up("Shift");   // release Shift
```

### `page.keyboard.up(key)`
Releases a key held by `keyboard.down()`.

### `page.keyboard.type(text)`
Types text character by character with optional delay.

```ts
await page.keyboard.type("Hello World");
await page.keyboard.type("Slow typing", { delay: 100 });
```

### `page.keyboard.insertText(text)`
Inserts text without dispatching key events (useful for non-keyboard input).

```ts
await page.keyboard.insertText("Pasted text");
```

### Modifier Key Combo
Hold modifiers, press a key, then release:

```ts
await page.keyboard.down("Control");
await page.keyboard.press("A");   // Ctrl+A
await page.keyboard.up("Control");
```

Or shorthand:

```ts
await page.keyboard.press("Control+A");
```

---

### All Supported Key Names

| Category | Keys |
|----------|------|
| **Alphanumeric** | `"a"` to `"z"`, `"A"` to `"Z"`, `"0"` to `"9"` |
| **Modifiers** | `"Alt"`, `"Control"`, `"Meta"` (Win/Cmd), `"Shift"` |
| **Navigation** | `"ArrowUp"`, `"ArrowDown"`, `"ArrowLeft"`, `"ArrowRight"`, `"Home"`, `"End"`, `"PageUp"`, `"PageDown"` |
| **Editing** | `"Backspace"`, `"Delete"`, `"Insert"`, `"Enter"`, `"Tab"`, `"Space"`, `"Escape"` |
| **Function** | `"F1"` to `"F24"` |
| **Numpad** | `"Numpad0"` to `"Numpad9"`, `"NumpadAdd"`, `"NumpadSubtract"`, `"NumpadMultiply"`, `"NumpadDivide"`, `"NumpadDecimal"`, `"NumpadEnter"` |
| **Punctuation** | `","`, `"."`, `"/"`, `";"`, `"'"`, `"["`, `"]"`, `"\\"`, `"``"`, `"=="`, `"-"`, `"Shift+Key` combos for symbols |
| **Special** | `"CapsLock"`, `"NumLock"`, `"ScrollLock"`, `"Pause"`, `"PrintScreen"`, `"ContextMenu"` |
| **Multimedia** | `"AudioVolumeMute"`, `"AudioVolumeUp"`, `"AudioVolumeDown"`, `"MediaTrackNext"`, `"MediaTrackPrevious"`, `"MediaStop"`, `"MediaPlayPause"` |

---

## Mouse

### `page.mouse.click(x, y, options)`
Moves to (x, y) and clicks.

```ts
await page.mouse.click(100, 200);
await page.mouse.click(100, 200, { button: "right" });
await page.mouse.click(100, 200, { button: "right", clickCount: 2 });
```

### `page.mouse.dblclick(x, y, options)`
Shortcut for double-click at coordinates.

```ts
await page.mouse.dblclick(100, 200);
```

### `page.mouse.down(options)`
Fires `mousedown` at the current mouse position. Does not release.

```ts
await page.mouse.down({ button: "left" });
```

### `page.mouse.up(options)`
Fires `mouseup` at the current mouse position. Releases a held button.

```ts
await page.mouse.up({ button: "left" });
```

### `page.mouse.move(x, y, options)`
Moves the mouse to coordinates. Use `steps` for smooth movement.

```ts
await page.mouse.move(300, 500);
await page.mouse.move(300, 500, { steps: 10 }); // smooth drag
```

### `page.mouse.wheel(deltaX, deltaY)`
Scrolls the page.

```ts
await page.mouse.wheel(0, 500); // scroll down 500px
```

### `page.mouse.down` / `page.mouse.move` / `page.mouse.up` — Drag Example

```ts
await page.mouse.move(100, 200);
await page.mouse.down();
await page.mouse.move(300, 400, { steps: 20 });
await page.mouse.up();
```

### `locator.dragTo(target)`
Higher-level drag-and-drop between two elements.

```ts
await source.dragTo(target);
```

### Options for Mouse Methods

| Option | Type | Description |
|--------|------|-------------|
| `button` | `"left" \| "right" \| "middle"` | Mouse button to press |
| `clickCount` | `number` | Number of clicks (for double/triple-click) |
| `steps` | `number` | Number of interpolation steps for smooth movement |
| `delay` | `number` | Delay between mousedown and mouseup (ms) |
| `force` | `boolean` | Bypass actionability checks |
| `noWaitAfter` | `boolean` | Don't wait for navigations after the action |
| `timeout` | `number` | Maximum time for the action (ms) |
| `trial` | `boolean` | Perform actionability checks without actually performing the action |

---

## Practical Example Combos

```ts
// Select all text (Ctrl+A)
await page.keyboard.press("Control+A");

// Copy (Ctrl+C)
await page.keyboard.press("Control+C");

// Paste (Ctrl+V)
await page.keyboard.press("Control+V");

// Drag using mouse events
await page.mouse.move(100, 200);
await page.mouse.down();
await page.mouse.move(400, 500, { steps: 30 });
await page.mouse.up();

// Right-click context menu
await page.mouse.click(150, 300, { button: "right" });

// Scroll page
await page.mouse.wheel(0, 1000);
```
