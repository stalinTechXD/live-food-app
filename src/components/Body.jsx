import {restrauntList} from './../config'
import {RestrauntCard} from './RestrurantCard'
import React from 'react';
import {useState , useEffect} from 'react';
import Shimmer from './Shimmer';

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
              const [allrestaurant , setallRestaurant] = useState([]);
              const  [filterresturatant , setfilteredrestuarts] = useState([]);
              useEffect( () =>
                {
                 getRestaurants();                
                }, []
              );

              async function getRestaurants(){

                setallRestaurant(restrauntList);
                setfilteredrestuarts(restrauntList);
               console.log("state changes");
            }

            // if restruant is empy load the shimmer ui
            // if restuart has date => actual data UI.

              return (filterresturatant?.length > 0 )? (
                <>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search" value={searchText}
                        onChange = { (e) => {
                            setSearchText(e?.target?.value)
                        }}
                        /> 
                        <button className="search-btn" onClick = {() =>
                        {
                          const data=  filterData(searchText , allrestaurant);
                          setfilteredrestuarts(data);
                        }}>Search</button>
                    </div>
                <div className="restaurant-list">
                    {filterresturatant?.map((res) => {
                        return <RestrauntCard {...res?.card?.card} key={res?.card?.card?.info.id} />;
                    })}
                </div>
                </>
            ):(
                <Shimmer />
            );
    }

export default Body;
