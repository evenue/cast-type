# Cast Type

Type-casting is generally considered not a good practice. However, sometimes it's impossible to avoid in strict mode.

## Installation

```
npm install --save-dev type-cast
```

## Usage

Force-casting a type does not look clean and it forces you to disable lint check on the affected line(s) that further dirties the code. For example:

```typescript
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const desiredType: DesiredType = (unwantedType as any) as DesiredType;
```

Instead, you can simply avoid of the above by doing:

```typescript
import castType from 'cast-type';

const desiredType: DesiredType = castType(unwantedType);
```

Or:

```typescript
const desiredType = castType<DesiredType>(unwantedType);
```
