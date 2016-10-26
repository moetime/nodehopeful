var production = require( 'production' );

production: ( {
        root: rootPath,
        app: {
            name: 'expresssample1'
        },
        port: process.env.port,
    }
 );