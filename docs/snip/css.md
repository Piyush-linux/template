
- css Tips
- clip-path
- drop shadow
- 

## Image


### Imag Tag

```html
<img src="" alt="" loading="lazy">
```


### Responsive Image Tag
- https://web.dev/learn/design/picture-element/
```html
<picture>
  <source srcset="large.png" media="(min-width: 75em)">
  <source srcset="medium.png" media="(min-width: 40em)">
  <img src="small.png" alt="A description of the image." 
    width="300" height="200" loading="lazy" decoding="async">
</picture>
```

```scss
img{
  width: 100%
  height: auto
  object-fit: cover;
}
```

- Compress Images : tinypng


### Gradient
```scss
background: url(images/bg.jpg) no-repeat center center fixed; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;

/* Gradient */
  background-image: linear-gradient(#eb01a5, #d13531), url("IMAGE_URL"); /* W3C */
```

