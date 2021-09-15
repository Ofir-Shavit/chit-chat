const {
    SESSION_SECRET = '',
    GOOGLE_CLIENT_ID = ''
} = process.env;

export default {
    port: 8080,
    clientHost: 'localhost',
    sessionSecret: SESSION_SECRET,
    googleClientId: GOOGLE_CLIENT_ID,
};
