import * as React from 'react';
import {IOrg} from '../../typings';

import './SearchOrg.css';

interface ISearchOrgProps {
    org: IOrg;
    getOrgIndex: (org: IOrg) => number;
    onSave: (org: IOrg) => void;
}

export const SearchOrg: React.FunctionComponent<ISearchOrgProps> = props => {
    let button = <button className={'SearchOrg-Save'} onClick={() => props.onSave(props.org)}>Сохранить</button>;
    let disabledBitton = (
        <div className={'SearchOrg-Saved'}>
            <img className={'SearchOrg-Ok'} src={'./src/ok.png'} alt={''} width={16} />
            Сохранено
        </div>
    );

    return (
        <div className={'SearchOrg'}>
            <h2 className={'SearchOrg-Name'}>{props.org.name}</h2>
            <div className={'SearchOrg-Separator'}/>
            <div className={'SearchOrg-Left'}>
                <div className={'Address'}>
                    <h3 className={'Address-Title'}>Юридический адрес</h3>
                    <div className={'Address-Value'}>{props.org.adress.full}</div>
                </div>
                <div className={'Management'}>
                    <h3 className={'Management-Title'}>{props.org.management.post}</h3>
                    <div className={'Management-Value'}>{props.org.management.name}</div>
                </div>
                {props.getOrgIndex(props.org) === -1 ? button : disabledBitton}
            </div>
            <div className={'SearchOrg-Right'}>
                <div className={'Inn'}>
                    <h3 className={'Inn-Title'}>ИНН</h3>
                    <div className={'Inn-Value'}>{props.org.inn}</div>
                </div>
                <div className={'Kpp'}>
                    <h3 className={'Kpp-Title'}>КПП</h3>
                    <div className={'Kpp-Value'}>{props.org.kpp}</div>
                </div>
                <div className={'Ogrn'}>
                    <h3 className={'Ogrn-Title'}>ОГРН</h3>
                    <div className={'Ogrn-Value'}>{props.org.ogrn}</div>
                </div>
            </div>
        </div>
    );
};