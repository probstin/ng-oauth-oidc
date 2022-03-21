import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private oidcSecurityService: OidcSecurityService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.oidcSecurityService.isAuthenticated$
      .pipe(
        map(({ isAuthenticated }) => {
          // auth'd, canActivate
          if (isAuthenticated) return true;

          // not auth'd redirect
          return this.router.parseUrl('/unauthorized');
        })
      );
  }
  
}

const userHasRouteRole = (roles: string[], user: any): boolean => {
  return roles.every((role: any) => user.roles.includes(role));
}
