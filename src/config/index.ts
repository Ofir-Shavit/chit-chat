const {
    CLIENT_HOST = 'localhost:3000',
    SESSION_SECRET = '',
    GOOGLE_CLIENT_ID = '',
    DATABASE_CONNECTION_STRING = '',
} = process.env;

export default {
    port: 8080,
    clientHost: CLIENT_HOST,
    sessionSecret: SESSION_SECRET,
    googleClientId: GOOGLE_CLIENT_ID,
    databaseConnectionString: DATABASE_CONNECTION_STRING,
};
