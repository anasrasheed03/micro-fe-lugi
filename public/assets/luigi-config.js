Luigi.setConfig({
    navigation: {
        nodes: () => [{
            pathSegment: "home",
            label: "Home",
            children: [{
                pathSegment: 'products',
                label: 'Product List',
                loadingIndicator: {
                    enabled: false
                  },
                viewUrl: 'https://micro-fe-angular-product-list-dhnj.vercel.app/',
                anonymousAccess: true,
                keepSelectedForChildren: true,
                      children: [{
                          pathSegment: ':id',
                          viewUrl: 'https://micro-fe-react-product-details.vercel.app/product/:id',
                          context: { id: ':id' },
                          loadingIndicator: {
                            enabled: false
                          },
                      }]
            }, 
            
            {
                pathSegment: "one",
                label: "Section one",
                viewUrl: "/assets/basicMicroFrontend.html#one"
            }, {
                pathSegment: "two",
                label: "Section two",
                viewUrl: "/assets/basicMicroFrontend.html#two"
            }]
        }]
    },
    routing: {
        useHashRouting: !0
    },
    settings: {
        appLoadingIndicator: {
            hideAutomatically: !0
        }
    }
});