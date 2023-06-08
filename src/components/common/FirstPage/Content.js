import '../FirstPage/Content.scss'

const Content = () => {

    return(
        <div>
            <div className="home__cloud">
                <img className='home__cloud--image' src="https://www.voca.vn/assets/images/home-logo.svg" alt="cloud"/>
                <p className='title'>Chào mừng bạn đến với Voca</p>
                <p className='description'>Hệ thống học tiếng anh thông minh</p>
                <button className='button__start'>Bạn là người mới ? Bắt đầun ngay</button>
                <button className='button__library'>Xem thư viện khóa học</button>
            </div>
        </div>
    )
}

export default Content;