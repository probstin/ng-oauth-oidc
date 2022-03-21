import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
    imports: [
        AuthModule.forRoot({
            config: {
                authority: 'https://dev-y-t10xkr.us.auth0.com',
                redirectUrl: window.location.origin,
                postLogoutRedirectUri: window.location.origin,
                clientId: 'AS3PRgd6aKkkXolyDK5poAoqnpfKNuzJ',
                scope: 'openid profile offline_access', // 'openid profile offline_access ' + your scopes
                responseType: 'code',
                silentRenew: true,
                useRefreshToken: true,
                logLevel: LogLevel.Error,
                customParamsAuthRequest: {
                    audience: 'oauth-test',
                },
                customParamsRefreshTokenRequest: {
                    scope: 'openid profile offline_access',
                }
            }
        })
    ]
})
export class AuthConfigModule { }
