// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {moviesList} = props

  return (
    <div>
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
