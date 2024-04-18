import { IRequestOption } from "./IRequestOption";

export interface IHttp {
    // eslint-disable-next-line no-unused-vars
  request<T>(requestOption: IRequestOption): Promise<T>;
}