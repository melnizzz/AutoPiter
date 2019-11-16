export enum TabsTypes {
    NEW_ORG,
    SAVED_ORGS,
}

export interface IOrg {
    name: string;
    inn: string;
    kpp?: string;
    ogrn?: string;
    adress: {
        full?: string;
        short?: string;
    };
    management?: {
        post?: string;
        name?: string;
    };
    id: string;
}