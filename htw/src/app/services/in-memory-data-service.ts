import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const looks = [
            { 
                id: 1, 
                urlLookImg: "look.png",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ],
            },
            { 
                id: 2, 
                urlLookImg: "look.png",
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 3, 
                urlLookImg: "look.png",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 4, 
                urlLookImg: "look.png",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 5, 
                urlLookImg: "look.png",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 6, 
                urlLookImg: "look.png",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 7, 
                urlLookImg: "look.png",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            },
            { 
                id: 8, 
                urlLookImg: "look.png",
                principalsArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ],
                moreArticles: [
                    {
                        id: 1,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 2,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 3,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 4,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 5,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    },
                    {
                        id: 6,
                        urlArticleImg: "articles.png",
                        price: "25,99",
                        currency: "€"
                    }
                ]
            }
        ];
        return {looks};
    }
}