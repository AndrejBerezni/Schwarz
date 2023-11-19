import { useState, MouseEvent } from 'react'
import { GoStar, GoStarFill } from 'react-icons/go'
import { StarInputContainer, StarButton } from './StartRating.styles'

interface IStarRatingProps {
  handleClick: (event: MouseEvent, ratingValue: number) => void
  rating: number
}

export default function StarRating({
  handleClick,
  rating,
}: Readonly<IStarRatingProps>) {
  const [hoveredRating, setHoveredRating] = useState<number>(1)

  const handleStarHover = (ratingValue: number) => {
    setHoveredRating(ratingValue)
  }

  const handleStarLeave = () => {
    setHoveredRating(0)
  }

  return (
    <StarInputContainer>
      {[1, 2, 3, 4, 5].map((index) => (
        <StarButton
          key={`star-${index}`}
          onClick={(e) => handleClick(e, index)}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={handleStarLeave}
        >
          {hoveredRating >= index || rating >= index ? (
            <GoStarFill />
          ) : (
            <GoStar />
          )}
        </StarButton>
      ))}
    </StarInputContainer>
  )
}
