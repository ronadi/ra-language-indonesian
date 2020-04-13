# ra-language-indonesian

Indonesian Translations for <a href='https://github.com/marmelab/react-admin'>React-Admin</a>, the frontend framework for building admin applications on top of REST services.

# Installation

```
npm install --save ra-language-indonesian
```

# Usage

```javascript
import indonesianMessages from "ra-language-indonesian"
import polyglotI18nProvider from "ra-i18n-polyglot"

const messages = {
  id: indonesianMessages,
}

const i18nProvider = polyglotI18nProvider((locale) => messages[locale])

<Admin locale="id" i18nProvider={i18nProvider}>
  ...
</Admin>
```

# License

This translation is licensed under the <a href='https://github.com/ronadi/ra-language-indonesian/blob/master/LICENSE'>MIT Licence.</a>
