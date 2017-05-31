import 'react';
import 'font-awesome/css/font-awesome.css';
import 'purecss';
import './main.css';
import component from './component';
import { bake } from './shake';

if (process.env.TARGET === 'development') {
  console.log('in development');
}

bake();

document.body.appendChild(component());
