import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs/internal/observable/throwError";

@Injectable()
export class AuthAPIService {

  constructor(private http: HttpClient) {}

  decodeToken(token: string) {
    if (!token) {
      return;
    }
    const _decodeToken = (token: string) => {
      try {
        return JSON.parse(atob(token));
      } catch {
        return;
      }
    };
    return token
      .split('.')
      .map(token => _decodeToken(token))
      .reduce((acc, curr) => {
        if (!!curr) acc = { ...acc, ...curr };
        return acc;
      }, Object.create(null));
  }

  invoke(obj: {txnId: string, secret: string}) {
    let body = {
      "txnId": obj.txnId.split(' ').join('+'), 
      "secret": obj.secret.split(' ').join('+')
    }
    console.log('body :',body)
    const b = {
      "txnId": "Z7KqHzKAAH0CcGzCjlRwEzySKOVYJDecZIJ/Kp+JBCfzOEYL105y0HGPTjiBFWbvFMEnH+ynOCvIkkL6u8iV1PsPA74alP6Utw6dQ252othO9/3V6/pMTBoSDSHnimuvytON+bUjX5+oIgboLW/AerAM77GlGnqcOQEE8pFUaQs=?/ws3fQ3JgnKoUiKFF+k/RwrHvN4LnpU8ArHxrdpHJms=",
      "secret": "RqGrSZwHD0WNcjC6/6pNrlsAbujkYE056STGfviOQGlTX6bQehzpqSXfbe2RSKo5dNhKaEcgCvyLhHO/igLRg4W1NNIQUOLchMdRqVfJgyrmS80StVFZGKA+2J8h1LTszsNhi5VS+MzKCiCLcwZ91sykgAwJixZNuFugzt8Yo74=?RE3j5Py281riftj6yW+IKluWm8/ekWgqbJplbsx85Dw="
  }
    return this.http.post('auth/login', body);
  }

  handleError(error: any) {
    console.log(error)
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage)
    return throwError(() => errorMessage)
  }

  getEncryptedValues() {
    let reqBody = {
      "txnId": "24234", 
      "secret": "changeme"
    }
    return this.http.post('encrypt', reqBody);
  }
}
