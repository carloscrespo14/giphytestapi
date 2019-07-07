import { Config as config } from '../env/Config';
import { async } from 'q';

export class GiphyService {
    giphy = require('giphy-api')(config.api_key);
   
    trending() {
        return new Promise(async (resolve, reject) => {
            this.giphy.trending({limit: 25, rating: 'g', fmt: 'json'}, 
            async (err, res) => {
                const response = await res.data;
                if (err) {reject(err)}
                    await resolve(response) ;
            });
        })
    }

    search(keyword) {
        return new Promise((resolve, reject)=> {
            if(keyword === undefined || keyword === null  || keyword === '') {
                return;
            } else {
                this.giphy.search(keyword, async (err, res) => {
                    const response = await res.data;
                    if (err) {reject(err)}
                        return resolve(response);
                });

            }
        });
    }
}


export default GiphyService;