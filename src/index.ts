import { application as server, connectToDatabase } from './loaders';
import config from './config';

connectToDatabase()
    .then(() => {
        server.listen(config.port, () => {
            console.log(`App is listening on port ${config.port}!`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to database!', error);
    });
