import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import {IPicture} from "../interfaces/picture.interface";

export const pictureService = {
    getAllCurrentPage: (page: number, limit: number) => axiosService.get<IPicture[]>(`${urls.list}?page=${page}&limit=${limit}`),
    getDetails: (id: number) => axiosService.get<IPicture>(`${urls.id}/${id}/info`),
}