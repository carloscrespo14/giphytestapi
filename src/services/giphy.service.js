import { Config as config } from '../env/Config';

export class GiphyService {
    giphy = require('giphy-api')(config.api_key);
   
    trending() {
        return new Promise((resolve, reject) => {
            this.giphy.trending({limit: 25, rating: 'g', fmt: 'json'}, 
            async (err, res) => {
                const response = await res.data;
                if (err) {reject(err)}
                resolve(response) ;
            });
        })
    }

    search(keyword) {
        return new Promise((resolve, reject)=> {
            console.log(keyword)
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