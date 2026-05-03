# GHS Hazard & Precautionary Statements

[![npm version](https://img.shields.io/npm/v/@pseinfo/hp-statements?style=flat-square)](https://npmjs.com/@pseinfo/hp-statements)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/pseinfo/hp-statements/blob/master/LICENSE)

Helper package for GHS Hazard (H), Precautionary (P) and EU-related (EUH) statements. This package provides a type-safe way to manage, validate, and translate GHS statements.

Primarily used for the [periodic table database](https://github.com/pseinfo/database) and [pse-info.de](https://pse-info.de).

Visit [pseinfo.github.io/hp-statements](https://pseinfo.github.io/hp-statements) to get a searchable list of all statements and translations.

## Features

- **Type-safe**: Full TypeScript support for all H, P, and EUH codes.
- **Fluent Factory**: Easily build sets of statements with context.
- **Translator**: Dynamic loading of translations in 24 languages.

## Installation

```bash
npm install @pseinfo/hp-statements
```

## Usage

### Factory

Build a collection of statements:

```typescript
import { HP } from '@pseinfo/hp-statements';

const statements = HP()
  .H( 'H200' ).EUH( 'EUH001' )
  .P( 'P101', { note: 'Substance is only hazardous when ...' } )
  .toObj();
```

### Translator

Retrieve translations dynamically:

```typescript
import { Translator } from '@pseinfo/hp-statements';

// Get a single translation
const text = await Translator.one( 'H200', 'de' );

// Get all translations for a code
const translations = await Translator.allOf( 'H200' );

// Get all statements for a language
const allFr = await Translator.all( 'fr' );
```

### Assert

Validate codes:

```typescript
import { Assert } from '@pseinfo/hp-statements';

Assert.isHCode( 'H200' ); // true
Assert.assertHCode( 'invalid' ); // Throws Error
```

## Source

The data is obtained automatically via `npm run fetch` from the [mhchem/hpstatements](https://github.com/mhchem/hpstatements) repository.

The data is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/legalcode).  
Copyright © [European Union](https://eur-lex.europa.eu), 1998-2025, CC BY 4.0.  
Copyright © [hpstatements contributors](https://github.com/mhchem/hpstatements/contributors), 2019-2025, CC BY 4.0.

## License

This project is licensed under the MIT License; see the [LICENSE](LICENSE) file for details.  
Copyright © 2026 Periodic Table by Paul Köhler (komed3). All rights reserved.
