---
route: /hooks/media
menu: Hooks
---

## Media

### useMedia

[Available options](https://developer.wordpress.org/rest-api/reference/media/#list-media)

Default query (latest 10 media):

```jsx
const { data, loading, error } = useMedia();
```

Media meeting the criteria:

```jsx
const { data, loading, error } = useMedia({
  /* WordPress REST API options */
});
```

Single media (by id):

```jsx
const { data, loading, error } = useMedia(/* media id */);
```

Multiple media (by id):

```jsx
const { data, loading, error } = useMedia(/* array of media ids */);
```

### useCreateMedia

[Available options](https://developer.wordpress.org/rest-api/reference/media/#create-a-media-item)

```jsx
const { data, loading, error } = useCreateMedia({
  /* WordPress REST API options */
});
```

### useRetrieveMedia

[Available options](https://developer.wordpress.org/rest-api/reference/media/#retrieve-a-media-item)

```jsx
const { data, loading, error } = useRetrieveMedia({
  /* WordPress REST API options */
});
```

### useUpdateMedia

[Available options](https://developer.wordpress.org/rest-api/reference/media/#update-a-media-item)

```jsx
const { data, loading, error } = useUpdateMedia({
  /* WordPress REST API options */
});
```

### useDeleteMedia

[Available options](https://developer.wordpress.org/rest-api/reference/media/#delete-a-media-item)

```jsx
const { data, loading, error } = useDeleteMedia(
  /* media id */,
  { /* WordPress REST API options */ }
);
```
