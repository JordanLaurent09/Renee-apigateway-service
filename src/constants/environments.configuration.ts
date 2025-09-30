export interface IApiGatewayConfiguration {
    host: string;
    port: string;
    scheme: string;
    url: string;
}

export const performersServiceConfiguration: IApiGatewayConfiguration = {
    host: process.env.PERFORMERS_SERVICE_HOST,
    port: process.env.PERFORMERS_SERVICE_PORT,
    scheme: process.env.SERVICES_SCHEME,
    url: `${process.env.SERVICES_SCHEME}://${process.env.PERFORMERS_SERVICE_HOST}:${process.env.PERFORMERS_SERVICE_PORT}`
}

export const usersServiceConfiguration: IApiGatewayConfiguration = {
    host: process.env.USERS_SERVICE_HOST,
    port: process.env.USERS_SERVICE_PORT,
    scheme: process.env.SERVICES_SCHEME,
    url: `${process.env.SERVICES_SCHEME}://${process.env.USERS_SERVICE_HOST}:${process.env.USERS_SERVICE_PORT}`
}

export const securityServiceConfiguration: IApiGatewayConfiguration = {
    host: process.env.AUTH_SERVICE_HOST,
    port: process.env.AUTH_SERVICE_PORT,
    scheme: process.env.SERVICES_SCHEME,
    url: `${process.env.SERVICES_SCHEME}://${process.env.AUTH_SERVICE_HOST}:${process.env.AUTH_SERVICE_PORT}`
}