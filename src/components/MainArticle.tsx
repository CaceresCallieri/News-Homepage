import mainImage from '../assets/main-image.jpg'

const MainArticle = () => {
    const title = "The Bright Future of Web 3.0?"
    const subtitle = "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"

    return (
        <div className='main-article'>
            <div className="image-container">
                <img src={mainImage} alt="main article" />
            </div>
            <div className='content'>
                <h1>{title}</h1>
                <div className='subtitle-and-button'>
                    <p>{subtitle}</p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default MainArticle