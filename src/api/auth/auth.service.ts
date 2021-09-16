import { OAuth2Client } from 'google-auth-library';
import config from '../../config';
import { UserModel } from '../../models';

const authClient = new OAuth2Client(config.googleClientId);

interface UserProps {
    email?: string,
    name?: string,
    picture?: string
}

interface User extends UserProps {
    id: string;
}

const upsertUser = async (userProps: UserProps): Promise<User> => {
    const filter = { email: userProps.email };
    const user = await UserModel.findOneAndUpdate(filter, userProps, { upsert: true });
    const { id, email, name, picture } = user;
    return { id, email, name, picture };
};

const login = async (tokenId: string): Promise<User> => {
    const ticket = await authClient.verifyIdToken({
        idToken: tokenId,
        audience: config.googleClientId
    });

    const tokenPayload = ticket.getPayload();
    if (!tokenPayload) {
        throw new Error('Did not got payload from google!');
    }
    const {
        name,
        email,
        picture
    } = tokenPayload;

    const user = await upsertUser({
        name,
        email,
        picture
    });
    return user;
};

export default { login };
