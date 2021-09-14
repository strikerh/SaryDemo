import {Inject, Service} from 'vue-di-container';
import AxiosService from './AxiosService';

@Service()
export default class HeroService {
    @Inject(AxiosService) public axiosService!: AxiosService;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public async fetchAnyEP(url: string) {
        try {
            const result = await this.axiosService.axiosInstance.get(url);
            return result.data;
        } catch (error) {
           console.log('error', error);
        }
    }


}
