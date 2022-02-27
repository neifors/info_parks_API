const server = require('./server');
const PORT = 3000;


server.listen( PORT, () => {
   console.log(`\nExpress departing now from port ${PORT}!\n`)
} );
