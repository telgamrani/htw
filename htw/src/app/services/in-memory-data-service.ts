import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const looks = [
            { id: 1, urlLookImg: "url/look.png"},
            { id: 2, urlLookImg: "url/look.png"},
            { id: 3, urlLookImg: "url/look.png"},
            { id: 4, urlLookImg: "url/look.png"},
            { id: 5, urlLookImg: "url/look.png"},
            { id: 6, urlLookImg: "url/look.png"},
            { id: 7, urlLookImg: "url/look.png"},
            { id: 8, urlLookImg: "url/look.png"},
            { id: 9, urlLookImg: "url/look.png"},
            { id: 10, urlLookImg: "url/look.png"},
            { id: 11, urlLookImg: "url/look.png"},
            { id: 12, urlLookImg: "url/look.png"},
            { id: 13, urlLookImg: "url/look.png"},
            { id: 14, urlLookImg: "url/look.png"},
            { id: 15, urlLookImg: "url/look.png"},
            { id: 16, urlLookImg: "url/look.png"},
            { id: 17, urlLookImg: "url/look.png"},
            { id: 18, urlLookImg: "url/look.png"},
            { id: 19, urlLookImg: "url/look.png"},
            { id: 20, urlLookImg: "url/look.png"},
            { id: 21, urlLookImg: "url/look.png"},
            { id: 22, urlLookImg: "url/look.png"},
        ];
        return {looks};
    }
}