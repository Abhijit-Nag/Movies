import React from 'react'
import "./Header.css";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Caveat:wght@600&family=Dancing+Script:wght@500&family=Festive&family=Fredoka&family=Hubballi&family=Hurricane&family=Indie+Flower&family=Inspiration&family=Jacques+Francois+Shadow&family=Josefin+Sans&family=Lobster&family=Orbitron:wght@500&family=Palette+Mosaic&family=Shadows+Into+Light&family=Smooch+Sans:wght@300&display=swap');
</style>

function Header() {
    const button_css={
        padding:"10px",
        borderRadius: " 10px ",
        color:" white ",
        margin:"10px",
        background: " black ",
        cursor: " pointer ",
        width: "25vw",
        fontFamily: "'Orbitron', sans-serif",
        fontSize: "30px",



    }
    return (
        <>
            <div className="HeadersContent">
                <div className="HeaderBar" onClick={()=> window.scroll(0,0)}>
                    🎬MOVIES NOW🎥
                </div>
                <div className="SearchBar">
                    <button className='Search' type="submit" >Login</button>
                    <button className='Search' type='submit'>SignUp</button>
                </div>
            </div>
        </>
    )
}

export default Header;