# Usage Guide


## Using the Component Library in Projects

Once published to NPM, install the library in your project with:

```bash
npm adit-design-system
```

Then import and use components as follows:

```javascript
import { Button } from 'adit-design-system';

function App() {
  return <Button
  label="Loved it ♥️"
  onClick={()=>{}}
  primary
/>;
}
```
