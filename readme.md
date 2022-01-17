# Dawn E Photos

Image resize script:

```
mogrify -set filename:name %t -resize 1200 -write './out/%[filename:name]_1200.jpg' *.jpg && mogrify -set filename:name %t -resize 600 -write './out/%[filename:name]_600.jpg' *.jpg
```
