import * as React from 'react';
import {IOrg} from '../typings';

import './NewOrg.css';

interface INewOrgProps {
    onSave: (org: IOrg) => void;
    getOrgIndex: (org: IOrg) => number;
}

interface INewOrgState {
    query: string;
}

export class NewOrg extends React.PureComponent<INewOrgProps, INewOrgState> {
    queryRef = React.createRef<HTMLInputElement>();

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
    }

    render() {
        return (
            <div className={'NewOrg'}>
                <div className={'Search'}>
                    <div className={'Search-Title'}>Организация или ИП</div>
                    <input
                        ref={this.queryRef}
                        className={'Search-Query'}
                        placeholder={'Введите название, ИНН или адрес организации'}
                        onChange={() => this.setState({ query: this.queryRef.current.value})}
                    />
                </div>
                <div className={'Result'}>
                    {(this.state.query === '') ?
                        <div className={'EmptyQuery'}>
                            <div className={'Plus'}>
                                <div className={'Plus-Vertical'} />
                                <div className={'Plus-Horizontal'} />
                            </div>
                            <div className={'EmptyQuery-Text'}>Для добавления новой организации введите ее название, ИНН или адрес.</div>
                        </div> : 'searching...'}
                </div>
            </div>
        );
    }
}