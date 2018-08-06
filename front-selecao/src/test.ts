import { getTestBed } from '@angular/core/testing';

declare const require: any;

const context = require.context('./', true, /\.spec\.ts$/);

context.keys().map(context);
