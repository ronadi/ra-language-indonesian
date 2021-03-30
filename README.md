# Indonesian Messages New for React-Admin

![npm](https://img.shields.io/npm/l/ra-language-indonesian-new?color=blue)
![npm](https://img.shields.io/npm/v/ra-language-indonesian-new)
![npm](https://img.shields.io/npm/dm/ra-language-indonesian-new)
![npm](https://img.shields.io/npm/dt/ra-language-indonesian-new)

Unofficial Indonesian messages new for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

Noted: this package for alternative [ra-language-indonesian](https://github.com/ronadi/ra-language-indonesian) from [ronadi](https://github.com/ronadi)

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

# Installation

```
npm install --save ra-language-indonesian-new or yarn add ra-language-indonesian-new
```

# Usage

```javascript
import indonesianMessages from "ra-language-indonesian-new"
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

This translation is licensed under the [MIT License](https://github.com/danangekal/ra-language-indonesian/blob/master/LICENSE)
