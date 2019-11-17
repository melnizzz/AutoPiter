import * as React from 'react';
import {useState} from 'react';
import {IOrg} from '../typings';

import './SavedOrgs.css';

interface ISavedOrgsProps {
    onDelete: (index: number) => void;
    orgs: IOrg[];
}

interface ISavedOrgProps {
    onDelete: (index: number) => void;
    org: IOrg;
    index: number;
}

const SavedOrg: React.FunctionComponent<ISavedOrgProps> = props => {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className={'SavedOrg'}>
            <div className={'SavedOrg-Name'}>{props.org.name}</div>
            <div className={'Inn'}>
                <div className={'Inn-Title Title'}>ИНН</div>
                <div className={'Inn-Value Value'}>{props.org.inn}</div>
            </div>
            <div className={'ExtraInfo'} style={isOpen ? {display: 'block'} : {display: 'none'}}>
                <div className={'Kpp'}>
                    <div className={'Kpp-Title Title'}>КПП</div>
                    <div className={'Kpp-Value Value'}>{props.org.kpp}</div>
                </div>
                <div className={'Ogrn'}>
                    <div className={'Ogrn-Title Title'}>ОГРН</div>
                    <div className={'Ogrn-Value Value'}>{props.org.ogrn}</div>
                </div>
                <div className={'Address'}>
                    <div className={'Address-Title Title'}>Юридический адрес</div>
                    <div className={'Address-Value Value'}>{props.org.adress.full}</div>
                </div>
                <div className={'Management'}>
                    <div className={'Management-Title Title'}>{props.org.management.post}</div>
                    <div className={'Management-Value Value'}>{props.org.management.name}</div>
                </div>
            </div>
            <button className={'TrashBin'} onClick={() => props.onDelete(props.index)}>
                <img className={'TrashBin-Icon'} src={'./src/bin.svg'} alt={'Удалить'} width={15} />
            </button>
            <button className={'Details'} onClick={() => setIsOpen(!isOpen)}>
                <div className={'Details-Text'}>{isOpen ? 'скрыть подробности' : 'подробнее'}</div>
                <img
                    className={'Details-Icon'}
                    src={'./src/arrow.png'}
                    alt={''}
                    width={12}
                    style={isOpen ? {transform: 'rotate(180deg)'} : {}}
                />
            </button>
        </div>);
};

export const SavedOrgs: React.FunctionComponent<ISavedOrgsProps> = props => {
    return (
        <div className={'SavedOrgs'}>
            <div className={'SavedOrgs-Content'}>
                {props.orgs.map((org, i) => (
                    <SavedOrg key={org.id} onDelete={props.onDelete} org={org} index={i}/>
                ))}
            </div>
        </div>
    );
};