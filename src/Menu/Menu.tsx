import * as React from 'react';
import {useState} from 'react';
import {IOrg, TabsTypes} from '../typings';
import {Tabs} from '../Tabs/Tabs';
import {NewOrg} from '../NewOrg/NewOrg';
import {SavedOrgs} from '../SavedOrgs/SavedOrgs';

import './Menu.css';

export const Menu: React.FunctionComponent = () => {
    let [orgs, setOrgs] = useState([]);
    let [currentTab, setCurrentTab] = useState(TabsTypes.NEW_ORG);

    const getOrgIndex = (org: IOrg) => {
        for (let i = 0; i < orgs.length; i++) {
          if (orgs[i].id === org.id) return i;
        }

        return -1;
    };

    const addOrg = (org: IOrg) => {
        let tempOrgs = orgs.concat([org]);
        setOrgs(tempOrgs);
    };

    const deleteOrg = (index: number) => {
        if (index >= 0) {
            let tempOrgs = orgs.slice(0, index).concat(orgs.slice(index + 1));
            setOrgs(tempOrgs);
        }
    };

    const changeTab = (tab) => {
        if (tab !== currentTab) setCurrentTab(tab);
    };

    return (
        <div className={'Menu'}>
            <Tabs currentTab={currentTab} orgsCount={orgs.length} onClick={changeTab} />
            <div className={'Content'}>
                {
                    currentTab === TabsTypes.NEW_ORG ?
                    <NewOrg onSave={addOrg} getOrgIndex={getOrgIndex}/> :
                    <SavedOrgs orgs={orgs} onDelete={deleteOrg} />
                }
            </div>
        </div>
    );
};