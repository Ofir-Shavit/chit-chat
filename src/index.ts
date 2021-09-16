import { application as server, connectToDatabase } from './loaders';
import config from './config';

// connectToDatabase()
//     .then(() => {
//     })
// .catch(() => {
//     console.log('Error connecting to database!');
// });
server.listen(config.port, () => {
    console.log(`App is listening on port ${config.port}!`);
});
