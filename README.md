# gulp-csslint-gsoft-rules
Add several rules to improve CSS Lint

- Check case of selector
- Check the deepness of selector
- Check space or indentation inside selector

### Install

Install with npm: `npm install --save-dev gulp-csslint-gsoft-rules`

#### gulp-csslint

```

// Add GSoft Custom Rules
gsoftCsslintCustomRules.forEach(function(rule) {
    csslint.addRule(rule);
});
```

### License

Thanks to Patrick Lafrance.

MIT © Laurent Bonnot