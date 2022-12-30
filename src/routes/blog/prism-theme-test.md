---
title: Prism theme test
type: article
published: '2022-12-28'
updated: '2022-12-30'
short: An article created for the purpose of testing prism js styling.
---

This is a post designed to test the styling of prismjs code blocks and inline code.

### Inline code

Scelerisque fermentum dui faucibus in ornare. Sed id semper risus in hendrerit gravida rutrum quisque non. Ornare quam viverra orci sagittis eu volutpat odio `<meta http-equiv="X-UA-Compatible" content="IE=edge" />` facilisis mauris. Enim nunc faucibus a pellentesque sit. Vivamus at augue eget arcu dictum varius duis at consectetur. Enim ut sem viverra aliquet eget. Risus `class Square extends Polygon` feugiat in ante metus dictum at tempor commodo ullamcorper. Tincidunt nunc pulvinar sapien et ligula. In dictum non consectetur a erat nam at lectus. At varius vel pharetra vel turpis nunc. Eu turpis egestas pretium aenean pharetra magna. Cras semper auctor neque vitae tempus quam pellentesque nec nam.

### typescript

```typescript
// this is a comment
function camelotOptionsMapFn(mode: number) {
	return (i: Key): Option => ({
		id: `${mode.toString()}${i.pitchClass.toString()}`,
		name: mode === 1 ? `${i.camelotMajor}B` : `${i.camelotMinor}A`
	})
}

const getKeyOptions = (keyFormat: 'key' | 'camelot'): Option[] => {
	const keyOptionsMajor: Option[] =
		keyFormat === true
			? pitchClassMap.map(keyOptionsMapFn(1))
			: pitchClassMap.sort(sortNum('camelotMajor')).map(camelotOptionsMapFn(1))
	const keyOptionsMinor: Option[] =
		keyFormat === 'key'
			? pitchClassMap.map(keyOptionsMapFn(0))
			: pitchClassMap.sort(sortNum('camelotMinor')).map(camelotOptionsMapFn(0))
	return [{ id: '', name: '--- optional ---' }].concat(keyOptionsMinor).concat(keyOptionsMajor)
}
```

```ts
class Polygon {
	constructor(height, width) {
		this.name = 'Polygon'
		this.height = height
		this.width = width.search(/\bno\-highlight\b/)
	}
}

class Square extends Polygon {
	constructor(length) {
		super(length, length)
		this.name = 'Square'
	}
}
```

### markup

```markup
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="<%= BASE_URL %>favicon.svg" />
    <!-- <title><%= htmlWebpackPlugin.options.title %></title> waste of time trying to do this properly ∴ hardcoded -->
    <title>Crate Guide</title>
  </head>
  <body>
    <noscript>
      <strong
        >Crate Guide doesn't work properly without JavaScript enabled. Please
        enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### scss

```scss
@font-face {
	font-family: Chunkfive;
	src: url('Chunkfive.otf');
}
*,
*:before,
*:after {
	box-sizing: border-box;
	transition: background-color 160ms, background 160ms, color 160ms;
}

body {
	margin: 0;
	font: 400 18px/1.6 Manrope, sans-serif;
}

h1,
h2,
h3,
h4 {
	font: 400 16px/1.6 Manrope, sans-serif;
	margin-top: 0;
	margin-bottom: 14px;
}

h1 {
	font-size: 30px;
}

@media (max-width: 570px) {
	pre {
		overflow-x: auto;
	}
}
```

# json

```json
[
	{
		"title": "apples",
		"count": [12000, 20000, null],
		"description": { "text": "...", "sensitive": false }
	},
	{
		"title": "oranges",
		"count": [17500, null],
		"description": { "text": "...", "sensitive": false }
	}
]
```

# bash

```bash
#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host ${HOME_DIR}$1/$2 :"
}
```

# rust

```rust
#[derive(Debug)]
pub enum State {
    Start,
    Transient,
    Closed,
}

impl From<&'a str> for State {
    fn from(s: &'a str) -> Self {
        match s {
            "start" => State::Start,
            "closed" => State::Closed,
            _ => unreachable!(),
        }
    }
}
```

# python

```python
@requires_authorization(roles=["ADMIN"])
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt''
```

# java

```java
/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract strictfp class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}

```

# swift

```swift
import Foundation

@objc class Person: Entity {
  var name: String!
  var age:  Int!

  init(name: String, age: Int) {
    /* /* ... */ */
  }

  // Return a descriptive string for this person
  func description(offset: Int = 0) -> String {
    return "\(name) is \(age + offset) years old"
  }
}

```
