import request from '../../utils/request';
 
export async function queryTableData(params?: any) {
    return request('/api/queryTableData', {
        method: "POST",
    });

}