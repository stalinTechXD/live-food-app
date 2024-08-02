import {restrauntList} from './../config'
import {RestrauntCard} from './RestrurantCard'
const Body = () =>
    {
              const start = 3; // 4th iteration (0-based index)
              const end = 10; // 7th iteration (0-based index)
              return (
                <div className="restaurant-list">
                    {restrauntList.slice(start, end).map((res) => {
                        return <RestrauntCard {...res.card.card} key={res.card.card.info.id} />;
                    })}
                </div>
            );
    }

export default Body;