// You can now use ES6 syntax here
Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        children: [
          {
            pathSegment: 'products',
            label: 'Product List',
            viewUrl: 'localhost:4200'
          },
          {
            pathSegment: 'one',
            label: 'Section one',
            viewUrl: '/assets/basicMicroFrontend.html#one'
          },
          {
            pathSegment: 'two',
            label: 'Section two',
            viewUrl: '/assets/basicMicroFrontend.html#two'
          }
        ]
      }
    ]
  },
  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: true
  },
  settings: {
    appLoadingIndicator: {
      hideAutomatically: true
    }
  }
});
