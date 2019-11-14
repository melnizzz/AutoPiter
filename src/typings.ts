export enum TabsTypes {
    NEW_ORG,
    SAVED_ORGS,
}

export interface IOrg {
    name: string;
    inn: string;
    kpp?: string;
    ogrn?: string;
    adress: string;
    director: string;
    id: string;
}