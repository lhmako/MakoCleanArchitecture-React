import { IEndpoint } from "../IEndpoint";
import { IHttp } from "../IHttp";
import { IRequestOption } from "../IRequestOption";
import Axios, { AxiosInstance } from "axios";

export class AppRequest implements IHttp {
    
    axios: AxiosInstance;

    constructor(readonly endpoint: IEndpoint){
        this.axios = Axios.create()
    }

    async request<T>(requestOption: IRequestOption): Promise<T> {
        const response = await this.axios.request({
            method: requestOption.method,
            url: this.endpoint.path(requestOption.url),
            params: requestOption.params,
            data: requestOption.body,
            headers: {
              ...requestOption.headers,
            },
          });
          return response.data;
    }
    
}