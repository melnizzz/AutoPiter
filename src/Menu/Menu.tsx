import * as React from 'react';
import {IOrg, TabsTypes} from '../typings';
import {Tabs} from '../Tabs/Tabs';
import {NewOrg} from '../NewOrg/NewOrg';
import {SavedOrgs} from '../SavedOrgs/SavedOrgs';

import './Menu.css';

interface IMenuState {
    orgs: IOrg[];
    currentTab: TabsTypes;
}

export class Menu extends React.PureComponent<{}, IMenuState> {
    constructor(props) {
        super(props);
        this.state = {
            orgs: [],
            currentTab: TabsTypes.NEW_ORG,
        }
    }

    getOrgIndex = (org: IOrg) => {
        const orgs = this.state.orgs;
        for (let i = 0; i < orgs.length; i++) {
          if (orgs[i].id === org.id) return i;
        }

        return -1;
    };

    addOrg = (org: IOrg) => this.state.orgs.push(org);

    deleteOrg = (org: IOrg) => {
        const orgIndex = this.getOrgIndex(org);
        if (orgIndex >= 0) {
          this.state.orgs.splice(orgIndex, 1);
        }
    };

    changeTab = (tab) => {
        if (tab !== this.state.currentTab) {
            this.setState({
                currentTab: tab,
            })
        }
    };


    render() {
        return (
            <div className={'Menu'}>
                <Tabs currentTab={this.state.currentTab} orgsCount={this.state.orgs.length} onClick={this.changeTab} />
                <div className={'Content'}>
                    {
                        this.state.currentTab === TabsTypes.NEW_ORG ?
                        <NewOrg onSave={this.addOrg} getOrgIndex={this.getOrgIndex}/> :
                        <SavedOrgs orgs={this.state.orgs} onDelete={this.deleteOrg} />
                    }
                </div>
            </div>
        );
    }
}