import * as React from 'react';
import {useState} from 'react';
import {IOrg} from '../typings';
import {SearchResult} from './SearchResult/SearchResult';
import {SearchOrg} from './SearchOrg/SearchOrg';

import './NewOrg.css';

interface INewOrgProps {
    onSave: (org: IOrg) => void;
    getOrgIndex: (org: IOrg) => number;
}

const API_KEY = '3678b670415ca14166b6ccbd5cfc446bb89c25dd';

export const NewOrg: React.FunctionComponent<INewOrgProps> = props => {
    const queryRef = React.useRef(null);
    let [data, setData] = useState([]);
    let [openOrg, setOpenOrg] = useState(null);

    const getData = (query: string) => {
        let orgs: IOrg[] = [];
        fetch(' https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${API_KEY}`,
            },
            body: JSON.stringify({query: query})
        })
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.suggestions.length; i++) {
                    let org = res.suggestions[i];
                    orgs.push({
                        name: org.value,
                        inn: org.data.inn,
                        adress: {
                            full: org.data.address.unrestricted_value,
                            short: org.data.address.value,
                        },
                        management: {
                            name: org.data.management && org.data.management.name,
                            post: org.data.management && org.data.management.post,
                        },
                        id: org.data.hid,
                        kpp: org.data.kpp,
                        ogrn: org.data.ogrn,
                    });
                }

                setData(orgs);
            });
    };

    const onChange = () => {
        setOpenOrg(null);
        if (queryRef.current.value !== '') {
            getData(queryRef.current.value);
        } else {
            setData([]);
        }
    };

    let result = (
        <div className={'Result'}>
            {data.length == 0 ?
                <div className={'EmptyQuery'}>
                    <div className={'Plus'}>
                        <div className={'Plus-Vertical'} />
                        <div className={'Plus-Horizontal'} />
                    </div>
                    <div className={'EmptyQuery-Text'}>Для добавления новой организации введите ее название, ИНН или адрес.</div>
                </div> :
                <SearchResult data={data} openOrg={setOpenOrg}/>}
        </div>);

    let org = <SearchOrg org={openOrg} getOrgIndex={props.getOrgIndex} onSave={props.onSave} />;

    return (
        <div className={'NewOrg'}>
            <div className={'Search'}>
                <div className={'Search-Title'}>Организация или ИП</div>
                <input
                    ref={queryRef}
                    className={'Search-Query'}
                    placeholder={'Введите название, ИНН или адрес организации'}
                    onChange={onChange}
                    onFocus={() => setOpenOrg(null)}
                />
            </div>
            {openOrg ? org : result}
        </div>
    );
};

