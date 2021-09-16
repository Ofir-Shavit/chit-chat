const {
    CLIENT_HOST = 'localhost:3000',
    SECRET = 'secret',
    GOOGLE_CLIENT_ID = '',
    DATABASE_CONNECTION_STRING = 'mongodb://localhost:27017/chatos',
} = process.env;

export default {
    port: 8080,
    clientHost: CLIENT_HOST,
    secret: SECRET,
    googleClientId: GOOGLE_CLIENT_ID,
    databaseConnectionString: DATABASE_CONNECTION_STRING,
};
