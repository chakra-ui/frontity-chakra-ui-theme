# Frontity Chakra Theme

A Frontity theme made with the Chakra UI library.

You can try it out in codesandbox: https://githubbox.com/chakra-ui/frontity-chakra-ui-theme

## Installation guide

To get start quickly with the Chakra UI theme, you can install them like other published packages in Node using `npm` or `yarn`.

To install, run this command in your terminal:

```sh
npm install frontity-chakra-theme
```

Then add `frontity-chakra-theme` to your `frontity.settings.js` file.

If you want to modify this package, you need to install it as a local package. You can do so by following this guide: [How to install a local package in Frontity](https://docs.frontity.org/guides/install-a-new-package#local-packages).

## Theme Options

Chakra theme can be configures via the `frontity.settings.js` file. The theme options can be specified in the `state.theme` property.

| Key                     | Default Value | Description                                  |
| ----------------------- | ------------- | -------------------------------------------- |
| `menu`                  | []            | The top level navigation links for your blog |
| `socialLinks`           | []            | The social media links to use in your theme  |
| `logo`                  | []            | The text or logo image url                   |
| `showBackgroundPattern` | `true`        | If `true`, will show a backgroung pattern    |
| `showSocialLinks`       | `true`        | If `true`, will show the social media links  |
| `colors`                |               | The `primary` and `accent` colors to use     |

## Example Usage

```js
// frontity.settings.js
const settings = {
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          // The logo can be a text or an image url
          logo: "Frontity",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: true,
          // the top-level navigation labels and links
          menu: [
            ["Home", "/"],
            ["Portfolio", "/portfolio"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ],
          // the social links
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"],
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              50: "#e9f5f2",
              100: "#d4dcd9",
              200: "#bbc3be",
              300: "#a1aba5",
              400: "#87938b",
              500: "#6d7972",
              600: "#555f58",
              700: "#323c34",
              800: "#232924",
              900: "#272727",
            },
            accent: {
              50: "#ede4d3",
              100: "#fbe3b2",
              200: "#f6d086",
              300: "#f1be58",
              400: "#eca419",
              500: "#d49212",
              600: "#a5710b",
              700: "#775105",
              800: "#483100",
              900: "#1d0f00",
            },
          },
        },
      },
    },
  ],
};

export default settings;
```

**🚨NOTE**: Since this theme is based on Chakra, we require that the theme colors should be color values from `50` - `900`. For example, here's what the default colors look like:

```json
// value of theme.colors
{
  "primary": {
    "50": "#e9f5f2",
    "100": "#d4dcd9",
    "200": "#bbc3be",
    "300": "#a1aba5",
    "400": "#87938b",
    "500": "#6d7972",
    "600": "#555f58",
    "700": "#323c34",
    "800": "#232924",
    "900": "#272727"
  },
  "accent": {
    "50": "#ede4d3",
    "100": "#fbe3b2",
    "200": "#f6d086",
    "300": "#f1be58",
    "400": "#eca419",
    "500": "#d49212",
    "600": "#a5710b",
    "700": "#775105",
    "800": "#483100",
    "900": "#1d0f00"
  }
}
```

> You can use tools like Smart Swatch (https://smart-swatch.netlify.com/) or Palx (https://palx.jxnblk.com/) to generate color hues based on a single color

## Additional Settings

In addition to the theme options, there are a handful of items you can customize via the `frontity` object in your site’s `frontity.settings.js`

```js
// frontity.settings.js
const settings = {
  state: {
    frontity: {
      url: "your website url",
      title: "Your website title",
      description: "Your website description",
    },
  },
};
```

If you ever have questions, kindly post issues here or head over to `https://community.frontity.org` to get more personalizes support.

Enjoy the Chakra Theme ⚡️
