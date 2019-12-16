const settings = {
  name: "chakra-react",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "chakra-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"]
          ],
          socialLinks: [
            ["pinterest", "https://www.instagram.com/territory.supply/"],
            ["facebook", "https://www.instagram.com/territory.supply/"],
            ["twitter", "https://www.pinterest.com/territorysupplyco/"]
          ],
          featured: {
            showOnArchive: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://frontity.local/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
