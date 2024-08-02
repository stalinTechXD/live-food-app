import "./../index.css";
const Title = () => 
{
    return(
    <img alt="logo"
    className='Logo'
    src = {require('../images/logo.png')}
    />  )
}

const HeaderComponent = () =>{
    return (
        <div className='header'>
            <Title />
            <div className ="nav-items">
                <ul>
                    <li>Home </li>
                    <li>About </li>
                    <li>Contact </li>
                    <li>Cart </li>
                </ul>
            </div>
        </div>
    )
};

export default HeaderComponent;