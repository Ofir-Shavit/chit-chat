import server from './loaders/application';

const port = 8080;

server.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});

