import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ab0de0ecd79d494d8d10d57878050981', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
