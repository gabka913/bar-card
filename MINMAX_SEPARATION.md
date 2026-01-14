# Min/Max Position Separation

## Áttekintés

A bar-card modul mostantól külön kezeli a `min` és `max` értékek pozícióját, a korábbi `minmax` beállítás helyett.

## Változtatások

### Új beállítások

- `positions.min`: A minimum érték pozíciója (`inside`, `outside`, `off`)
- `positions.max`: A maximum érték pozíciója (`inside`, `outside`, `off`)

### Visszamenőleges kompatibilitás

A régi `positions.minmax` beállítás továbbra is működik, és automatikusan alkalmazódik mind a `min`, mind a `max` pozíciókra, ha azok nincsenek külön megadva.

## Példák

### Külön min/max pozíciók
```yaml
type: 'custom:bar-card'
entity: sensor.example
positions:
  min: 'inside'   # Min érték a sávon belül
  max: 'outside'  # Max érték a sávon kívül
```

### Mindkettő kívül
```yaml
type: 'custom:bar-card'
entity: sensor.example
positions:
  min: 'outside'  # Min érték a sávon kívül
  max: 'outside'  # Max érték a sávon kívül
```

### Visszamenőleges kompatibilitás
```yaml
type: 'custom:bar-card'
entity: sensor.example
positions:
  minmax: 'inside'  # Mindkét érték a sávon belül (régi módszer)
```

## Implementáció részletei

- A `types.ts` fájlban frissítettük a `positions` interfészt
- A `bar-card.ts` fájlban módosítottuk a renderelési logikát
- Az `editor.ts` fájlban külön dropdown-okat adtunk hozzá
- Visszamenőleges kompatibilitás biztosított a régi `minmax` beállításhoz
