---
name: Page Revisions
route: /hooks/page-revisions
menu: Hooks
---

## Page Revisions

### usePageRevisions

[Available options](https://developer.wordpress.org/rest-api/reference/page-revisions/#list-page-revisions)

```jsx
const { data, loading, error } = usePageRevisions(
  /* parent id */,
  { /* WordPress REST API options */ }
);
```

### useRetrievePageRevision

[Available options](https://developer.wordpress.org/rest-api/reference/page-revisions/#retrieve-a-page-revision)

```jsx
const { data, loading, error } = useRetrievePageRevision(
  /* parent id */,
  /* page revision id */,
  /* type */,
  { /* WordPress REST API options */ }
);
```

### useDeletePageRevision

[Available options](https://developer.wordpress.org/rest-api/reference/page-revisions/#delete-a-page-revision)

```jsx
const { data, loading, error } = useDeletePageRevision(
  /* parent id */,
  /* page revision id */,
  { /* WordPress REST API options */ }
);
```
