import * as React from 'react';
import {IOrg} from '../typings';

import './SavedOrgs.css';

interface ISavedOrgsProps {
    onDelete: (org: IOrg) => void;
    orgs: IOrg[];
}

export class SavedOrgs extends React.PureComponent<ISavedOrgsProps> {
    render() {
        return (
            <div className={'SavedOrgs'}>Saved orgs</div>
        );
    }
}