---
name: Block Renderer
route: /hooks/block-renderer
menu: Hooks
---

## Block Renderer

### useRetrieveBlockRenderer

[Available options](https://developer.wordpress.org/rest-api/reference/rendered-blocks/#retrieve-a-rendered-block)

```jsx
const { data, loading, error } = useRetrieveBlockRenderer(
  /* block name */,
  { /* WordPress REST API options */ }
);
```
