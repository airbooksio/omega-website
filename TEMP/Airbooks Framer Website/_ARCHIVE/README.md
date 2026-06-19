# Airbooks Design Tokens

Source of truth for the Airbooks design system. Compiled with Style Dictionary v5 into CSS custom properties and JSON for downstream consumers.

## File layout

```
tokens/
├── primitive/
│   └── font.json           # Font families, font weights
├── semantic/
│   ├── color.json          # All color roles (surface, text, semantic, etc.)
│   ├── typography.json     # Type roles (12 roles × 5 properties each)
│   └── shape.json          # Radius, border-width, elevation
└── component/
    ├── button.json         # button.primary, button.secondary
    └── input.json          # input.default
```

Tiered primitive → semantic → component, per the token architecture synthesis. Style Dictionary merges all source files into a single token tree at build time.

## Build

```bash
npm install            # one-time
npm run tokens         # build dist/tokens.css and dist/tokens.json
npm run tokens:watch   # rebuild on token changes
npm run tokens:clean   # delete dist/
```

Outputs land in `dist/`:

- `dist/tokens.css` — single combined CSS file with all tokens as `:root` custom properties. References preserved as `var(--token-name)` so the alias graph (e.g., `--radius-interactive: var(--radius-sm)`) stays intact.
- `dist/tokens.json` — nested JSON tree with references resolved.

## Token format

All tokens use the DTCG (W3C Design Tokens Community Group) shape:

```json
{
  "color": {
    "primary": {
      "$value": "oklch(0.44 0.27 290)",
      "$type": "color",
      "$description": "Brand primary (~#7008e7). Saturated violet."
    }
  }
}
```

OKLCH is the source-of-truth representation for color. The hex equivalent appears in `$description` for tools that don't support `oklch()` natively (e.g., Framer Color Styles).

## References

Cross-token references use DTCG syntax: `{path.to.token}`. Style Dictionary resolves them at build time, and `outputReferences: true` preserves the `var()` chain in the CSS output.

Example: `tokens/semantic/shape.json`:
```json
"interactive": { "$value": "{radius.sm}", "$type": "dimension" }
```

Emits:
```css
--radius-interactive: var(--radius-sm);
```

## Naming convention

Dot-paths in the JSON map to dash-separated CSS custom property names:

| JSON path                   | CSS variable                  |
|-----------------------------|-------------------------------|
| `color.primary`             | `--color-primary`             |
| `color.on-primary`          | `--color-on-primary`          |
| `type.display.size`         | `--type-display-size`         |
| `radius.interactive`        | `--radius-interactive`        |
| `button.primary.background` | `--button-primary-background` |

## Migration from the hand-written CSS files

The previously hand-authored CSS token files (`src/styles/tokens/colors.css`, `typography.css`, `shape.css`) are now superseded by the JSON sources here. The compiled output at `dist/tokens.css` is the new canonical artifact for consumption.

To migrate:

1. Run `npm install` then `npm run tokens` to verify `dist/tokens.css` builds cleanly.
2. Diff `dist/tokens.css` against the hand-written files in `src/styles/tokens/` to confirm parity. The generated file will omit the inline annotations and contrast-verification tables — those documentation comments live in `DESIGN.md` and `LIVING_BRIEF.md`.
3. Update any consumers (the wireframe, future components, Framer Code Components) to import `dist/tokens.css` instead of the `src/styles/tokens/*.css` files.
4. Once verified, the `src/styles/tokens/` directory can be archived — its files were the bridge representation between Step 4–6 hand-authoring and Step 7 tooling.

## Framer mirror

`dist/tokens.json` is the recommended input for manually mirroring tokens into Framer Color Styles and Text Styles. Steps:

1. Run `npm run tokens` to generate fresh JSON.
2. Open `dist/tokens.json` and locate the values you need (colors under `color.*`, type roles under `type.*`).
3. Create matching Color Styles and Text Styles in Framer. Use the hex value from `$description` if Framer's color picker doesn't accept `oklch()` directly.
4. Re-run this mirror process whenever tokens change. Track manually until automated Framer sync exists.

## Adding a new token

1. Decide the tier:
   - **Primitive** (raw value, no semantic meaning): add to `tokens/primitive/`.
   - **Semantic** (role / decision): add to the right `tokens/semantic/` file.
   - **Component** (per-component override): add to `tokens/component/` only if the value is component-specific and not expressible via semantic tokens.
2. Use the DTCG shape (`$value`, `$type`, optional `$description`).
3. Reference upstream tokens with `{path.to.token}` syntax. Never duplicate values.
4. Run `npm run tokens` and verify the output.
5. Update `DESIGN.md` if the new token represents a new role or decision worth recording at the system-spec level.
