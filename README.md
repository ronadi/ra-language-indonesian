# Indonesian Messages for React-Admin

Indonesian messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

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

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>
```

# License

This translation is licensed under the [MIT License](https://github.com/ronadi/ra-language-indonesian/blob/master/LICENSE)
