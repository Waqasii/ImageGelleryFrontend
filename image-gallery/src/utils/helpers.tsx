import decode from 'jwt-decode';

const verifyToken = (token: string) => {
    const decodedToken: any = decode(token);
    const currentTime = Date.now() / 1000;

    return currentTime < decodedToken.exp;
};

export default verifyToken;