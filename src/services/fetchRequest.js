
import queryString from 'query-string';
import { API_KEY, API_URL, API_VERSION } from './utility';



export const fetchProducts = async ( id, data  )=>{

    const query = queryString.stringify({...data});
    const url = `${API_URL}/${API_VERSION}/invoices/organization/${id}/recent-transactions/paged${data?`?${query}`:''}`
    const response = await fetch(url, {
        method: "GET", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
        "Content-Type": "application/json",
        "x-api-key" : `${API_KEY}`,
        },
        redirect: "follow", 
        referrerPolicy: "no-referrer", 
    });

    return response.json(); 
}