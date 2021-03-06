import * as React from 'react';
import {IOrg} from '../../typings';

import './SearchResult.css';

interface ISearchResultProps {
    data: IOrg[];
    openOrg: (org: IOrg) => void;
}

export const SearchResult: React.FunctionComponent<ISearchResultProps> = props => {
    return (
        <div className={'SearchResult'}>
            <div className={'SearchResult-Content'}>
                {props.data.map((org) => (
                    <div className={'Org'} key={org.id} onClick={() => props.openOrg(org)}>
                        <div className={'Org-Name'}>{org.name}</div>
                        <div className={'Org-Inn'}>{org.inn}</div>
                        <div className={'Org-City'}>{org.adress.short}</div>
                    </div>))}
            </div>
        </div>);
};