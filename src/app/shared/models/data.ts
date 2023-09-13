export class DataItemModel {
    id: number = 0;
    email: string = '';
    first_name: string = '';
    last_name: string = '';
    avatar: string = '';
}

class DataSupportModel {
    url: string = '';
    text: string = '';
 }

export class DataModel {
    page: number = 0;
    per_page: number = 0;
    total: number = 0;
    total_pages: number = 0;
    data: Array<DataItemModel> = [];
    support: DataSupportModel = {
        url: '',
        text: ''
    };
 }
