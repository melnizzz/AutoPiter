import * as React from 'react';
import {Menu} from '../Menu/Menu';

import './Page.css';

export const Page: React.FunctionComponent = () => (
  <div className={'Page'}>
    <div className={'Header'}>
        <img className={'Header-Logo'} src={'./src/logo.png'} alt={''} height={48} />
    </div>
    <div className={'Main'}>
        <div className={'Main-Content'}>
            <h1 className={'Main-Title'}>Мои организации</h1>
            <Menu />
        </div>
    </div>
  </div>
);