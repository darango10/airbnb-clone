import React from 'react';
import '../css/searchPage.css'
import Button from "@material-ui/core/Button";
import SearchResult from "./SearchResult";

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 stays • 26 august to 30 august • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of Place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and Beds
                </Button>
                <Button variant="outlined">
                    More Filters
                </Button>
                <SearchResult
                    image={'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                    location={'Private room in center of London'}
                    title={'Stay at this spacious Edwadian House'}
                    description={'1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine'}
                    star={4.73}
                    price={'$30 / night'}
                    total={'$117 total'}
                />
                <SearchResult
                    image={'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                    location={'Private room in center of London'}
                    title={'Stay at this spacious Edwadian House'}
                    description={'1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine'}
                    star={4.73}
                    price={'$30 / night'}
                    total={'$117 total'}
                />
                <SearchResult
                    image={'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                    location={'Private room in center of London'}
                    title={'Stay at this spacious Edwadian House'}
                    description={'1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine'}
                    star={4.73}
                    price={'$30 / night'}
                    total={'$117 total'}
                />
            </div>
        </div>
    );
};

export default SearchPage;
