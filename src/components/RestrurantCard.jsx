import {IMG_CDN_URL } from '../config';
export const RestrauntCard = (props) => {
   return (
       
       <div className="card">
       <img src={ IMG_CDN_URL 
          + props.info?.cloudinaryImageId
       }/> 
          <h2>{ props.info.name}</h2>
         <h4> {props.info?.cuisines.join(',')}</h4>
         <h3> {props.info?.avgRating} Rating</h3>
      </div>
   )
}