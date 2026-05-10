# ReactLearning

Repo for learning react

# Parcel

- Dev build
- Local Server
- HMR - Hot Module Replacement
- File Watching algorithms - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking
- Different dev and prod bundles

# Import/Export

- Default export/import
  - import Component from "path";
  - export default component;

- Named import/export
  - export CONST COMPONENT;
  - import {Component} from "path";

# React Hooks

(Normal JS utility function)

- useState() - Superpoerful state variables in react
- useEffect()

- Local State Variable

```js
const [listofRest] = useState([]);

const [listofRest, setListofRest] = useState([]);
```

- whenver a state variable updates/changes , react will rerender the component.

# Reconciliation Algorithm

- is also known as React Fiber
- Virtual DOM is not an actual DOM. It's representation of actual DOM.
- Its a normal js object
