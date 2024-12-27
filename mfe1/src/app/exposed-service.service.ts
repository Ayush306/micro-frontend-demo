import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExposedServiceService {

  constructor() { }
  getMessage(): string {
    return 'Hello from MFE1';
  }
}
