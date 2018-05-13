import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const looks = [
            { 
                id: 1, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ],
            },
            { 
                id: 2, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "47,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "50,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "19,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 3, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 4, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 5, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 6, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 7, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 8, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 8, 
                urlLookImg: "assets/img/looks/04.jpg",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "10,99",
                        currency: "€"
                    },
                    {
                        id: 7,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "assets/img/look/chemise/01.jpg",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            }
        ];
        return {looks};
    }
}