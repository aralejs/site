# Arale based site

---

You can install any modules from [spmjs.org](https://spmjs.org).

```
$ cd static
$ spm install arale/tip
```

Setting module alias config in `static/config.js`, and use it in `main.js` or anywhere.

```
seajs.use(['tip'], function(Tip) {
    // use Tip here
);
```
