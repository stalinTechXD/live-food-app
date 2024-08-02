import {restrauntList} from './../config'
import {RestrauntCard} from './RestrurantCard'
import React from 'react';
import {useState} from 'react';

// what is state.
// what is hook. -> just a function
// what is use state.

function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) => {

        
        if (restaurant.card.card.info.name.includes(searchText)) {
            return true;
        } else {
            console.log("bro");
            return false;
        }
    });

    return filteredData;
}

const Body = () =>
    {
              const [searchText, setSearchText] = useState("");// returns an array the first element is a variable the first element
              const [restaurant , setRestaurant] = useState(restrauntList);
              return (
                <>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search" value={searchText}
                        onChange = { (e) => {
                            setSearchText(e?.target?.value)
                        }}
                        /> 
                        <button className="search-btn" onClick = {() =>
                        {
                          const data=  filterData(searchText , restaurant);
                          setRestaurant(data);
                        }}>Search</button>
                    </div>
                <div className="restaurant-list">
                    {restaurant.map((res) => {
                        return <RestrauntCard {...res.card.card} key={res.card.card.info.id} />;
                    })}
                </div>
                </>
            );
    }

export default Body;

// why do we need this state variable
// 