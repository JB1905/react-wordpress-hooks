---
route: /hooks/tags
menu: Hooks
---

## Tags

### useTags

[Available options](https://developer.wordpress.org/rest-api/reference/tags/#list-tags)

Default query (latest 10 tags):

```jsx
const { data, loading, error } = useTags();
```

Tags meeting the criteria:

```jsx
const { data, loading, error } = useTags({
  /* WordPress REST API options */
});
```

Single tag (by id):

```jsx
const { data, loading, error } = useTags(/* tag id */);
```

Multiple tags (by id):

```jsx
const { data, loading, error } = useTags(/* array of tag ids */);
```

### useCreateTag

[Available options](https://developer.wordpress.org/rest-api/reference/tags/#create-a-tag)

```jsx
const { data, loading, error } = useCreateTag({
  /* WordPress REST API options */
});
```

### useRetrieveTag

[Available options](https://developer.wordpress.org/rest-api/reference/tags/#retrieve-a-tag)

```jsx
const { data, loading, error } = useRetrieveTag({
  /* WordPress REST API options */
});
```

### useUpdateTag

[Available options](https://developer.wordpress.org/rest-api/reference/tags/#update-a-tag)

```jsx
const { data, loading, error } = useUpdateTag({
  /* WordPress REST API options */
});
```

### useDeleteTag

[Available options](https://developer.wordpress.org/rest-api/reference/tags/#delete-a-tag)

```jsx
const { data, loading, error } = useDeleteTag(
  /* tag id */,
  { /* WordPress REST API options */ }
);
```
