export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const restrauntList =  [
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
    "collectionId": "83639",
    "title": "Biryani",
    "description": "Taste these delectable classics, delectable biryanis to make your day.",
    "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/2/3aaf1e21-0d4f-4280-9ed9-43ac0d8125c3_pic",
    "aspectRatio": "3.44",
    "cta": {
    "link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
    "type": "collectionv2"
    },
    "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
    "count": "201 restaurants"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
    "sortConfigs": [
    {
    "key": "relevance",
    "title": "Relevance(Default)",
    "selected": true,
    "defaultSelection": true
    },
    {
    "key": "deliveryTimeAsc",
    "title": "DeliveryTime"
    },
    {
    "key": "modelBasedRatingDesc",
    "title": "Rating"
    },
    {
    "key": "costForTwoAsc",
    "title": "Cost:LowtoHigh"
    },
    {
    "key": "costForTwoDesc",
    "title": "Cost:HightoLow"
    }
    ],
    "restaurantCount": 201,
    "facetList": [
    {
    "label": "Veg/Non-veg",
    "id": "isVeg",
    "selection": "SELECT_TYPE_SINGLESELECT",
    "facetInfo": [
    {
    "label": "Pure veg",
    "id": "isVegfacetquery2",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Non Veg",
    "id": "isVegfacetquery3",
    "analytics": {}
    }
    ],
    "viewType": "VIEW_TYPE_FLATTENED",
    "subLabel": "Filterby"
    },
    {
    "label": "Delivery Time",
    "id": "deliveryTime",
    "selection": "SELECT_TYPE_SINGLESELECT",
    "facetInfo": [
    {
    "label": "Less than 30 mins",
    "id": "deliveryTimefacetquery2",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Less than 45 mins",
    "id": "deliveryTimefacetquery3",
    "analytics": {}
    }
    ],
    "viewType": "VIEW_TYPE_FLATTENED",
    "subLabel": "Filterby"
    },
    {
    "label": "Cost for two",
    "id": "costForTwo",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Rs. 300-Rs. 600",
    "id": "costForTwofacetquery3",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Greater than Rs. 600",
    "id": "costForTwofacetquery4",
    "analytics": {}
    },
    {
    "label": "Less than Rs. 300",
    "id": "costForTwofacetquery5",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby"
    }
    ]
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "layout": {
    "rows": 1,
    "widgetPadding": {
    "left": 16,
    "top": 20,
    "right": 16,
    "bottom": 16
    },
    "scrollBar": {},
    "widgetTheme": {
    "defaultMode": {
    "backgroundColour": "#FFFFFF",
    "theme": "THEME_TYPE_LIGHT"
    },
    "darkMode": {
    "backgroundColour": "#1B3028",
    "theme": "THEME_TYPE_DARK"
    }
    }
    },
    "id": "restaurantCountWidget",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
    "text": "201 restaurants to explore",
    "headerStyling": {
    "textSize": 15,
    "textColor": "text_color_highest_emphasis",
    "textFontName": "FONT_NAME_HEADER_H5",
    "maxLines": 1
    }
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "346181",
    "name": "Al Bawarchi Biryani",
    "cloudinaryImageId": "4d68ef5ed3ca02dee3b5eaa33aebe0e7",
    "locality": "4th Sector",
    "areaName": "HSR Layout",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Biryani"
    ],
    "avgRating": 4.1,
    "parentId": "29010",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "promoted": true,
    "adTrackingId": "cid=16076190~p=2~adgrpid=16076190#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=346181~eid=96430e2e-261c-4617-8705-500e161954ee~srvts=1722536515201~collid=83639",
    "sla": {
    "deliveryTime": 37,
    "lastMileTravel": 6.6,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "6.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 05:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=346181&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "654809",
    "name": "Meghana Foods",
    "cloudinaryImageId": "iivuhjc2mswi9lublktf",
    "locality": "G R S TOWERS",
    "areaName": "Sarjapur Road",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "Andhra",
    "South Indian",
    "Chinese",
    "Seafood"
    ],
    "avgRating": 4.6,
    "parentId": "635",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 01:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Biryani.png"
    }
    }
    ]
    }
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=654809&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "716680",
    "name": "Donne Biryani House",
    "cloudinaryImageId": "6489ec3570c47c0305f18849171270e4",
    "locality": "AECS Layout A Block Road",
    "areaName": "Kudlu Gate",
    "costForTwo": "₹700 for two",
    "cuisines": [
    "Biryani",
    "Indian",
    "Kebabs"
    ],
    "avgRating": 3.7,
    "parentId": "338",
    "avgRatingString": "3.7",
    "totalRatingsString": "100+",
    "promoted": true,
    "adTrackingId": "cid=15993662~p=3~adgrpid=15993662#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=716680~eid=ac43685f-bd71-4d8e-a635-0b5518241280~srvts=1722536515201~collid=83639",
    "sla": {
    "deliveryTime": 38,
    "lastMileTravel": 9.3,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "9.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-08 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "25% OFF",
    "subHeader": "UPTO ₹125"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=716680&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "392145",
    "name": "Andhra Gunpowder",
    "cloudinaryImageId": "janhgjevj4xnyyg5htnv",
    "locality": "Deverabisnahalli Main Road",
    "areaName": "Bellandur",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Andhra",
    "Biryani",
    "South Indian"
    ],
    "avgRating": 4.4,
    "parentId": "10496",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Andhra.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Andhra.png",
    "description": "Delivery!"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=392145&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "779490",
    "name": "Biryani Pot ",
    "cloudinaryImageId": "25648faf58e530c4fe2d925eeb51423f",
    "locality": "Mahadevapura",
    "areaName": "Bellandur Sarjapur",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Biryani",
    "Chinese",
    "Indian",
    "Snacks",
    "Tandoor"
    ],
    "avgRating": 4.1,
    "parentId": "493525",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "promoted": true,
    "adTrackingId": "cid=16064703~p=4~adgrpid=16064703#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=779490~eid=679c7da8-8c76-45f5-8076-a7beef4c7289~srvts=1722536515201~collid=83639",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 3.8,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "3.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹299",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=779490&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "52145",
    "name": "Aromas of Biryani",
    "cloudinaryImageId": "b9aa944ceeb8c0197663f9f31a2aa5e8",
    "locality": "Daddakanahalli",
    "areaName": "Sarjapur Road",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "Andhra",
    "South Indian",
    "North Indian",
    "Tandoor"
    ],
    "avgRating": 4.2,
    "parentId": "36155",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-02 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=52145&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "530473",
    "name": "Madurai Biriyani Virundhu",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/29/09faf355-4d13-4a7f-a56a-aba5ccc6f0b2_ea23940d-f491-45d7-98fd-fbdf04d6075f.jpg",
    "locality": "Muneshwara Layout",
    "areaName": "Bommanahalli",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Biryani",
    "Chettinad",
    "South Indian"
    ],
    "avgRating": 3.4,
    "parentId": "319325",
    "avgRatingString": "3.4",
    "totalRatingsString": "100+",
    "promoted": true,
    "adTrackingId": "cid=15993784~p=5~adgrpid=15993784#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=530473~eid=295a29b8-7ee0-4479-aca3-d488508f8d5d~srvts=1722536515201~collid=83639",
    "sla": {
    "deliveryTime": 42,
    "lastMileTravel": 9.3,
    "serviceability": "SERVICEABLE",
    "slaString": "40-45 mins",
    "lastMileTravelString": "9.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-08 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "15% OFF",
    "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=530473&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    }
    ];