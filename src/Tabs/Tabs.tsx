import * as React from 'react';
import {TabsTypes} from '../typings';

import './Tabs.css'

interface ITabsProps {
    currentTab: TabsTypes;
    orgsCount: number;
    onClick: (tab: TabsTypes) => void;
}

interface ITabProps {
    type: TabsTypes;
    text: string;
    isActive: boolean;
}

export const Tabs: React.FunctionComponent<ITabsProps> = props => {
    const clickHandler = (tab) => {
        if(tab !== props.currentTab) props.onClick(tab);
    };

    const Tab: React.FunctionComponent<ITabProps> = props => (
        <div className={`Tab${props.isActive ? ' Tab_Active' : ''}`} key={props.type} onClick={() => clickHandler(props.type)}>
            {props.text}
        </div>
    );

    return (
        <div className={'Tabs'}>
            <Tab text={'Новая организация'} type={TabsTypes.NEW_ORG} isActive={props.currentTab === TabsTypes.NEW_ORG} />
            <Tab text={`Сохранённые организации (${props.orgsCount})`} type={TabsTypes.SAVED_ORGS} isActive={props.currentTab === TabsTypes.SAVED_ORGS} />
        </div>
    );
};