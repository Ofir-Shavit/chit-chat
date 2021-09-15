import { application as server } from './loaders';
import config from './config';

server.listen(config.port, () => {
    console.log(`App is listening on port ${config.port}!`);
});
