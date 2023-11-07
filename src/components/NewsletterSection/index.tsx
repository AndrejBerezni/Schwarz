import { BsYoutube, BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { RiTwitterXFill } from 'react-icons/ri'
import {
  StyledNewsLetterSection,
  NewsletterTitle,
  NewsletterDiv,
  NewsletterInput,
  NewsletterLink,
  NewsletterSocial,
} from './NewsletterSection.styles'
import { PrimaryButton } from '../../GlobalStyles'

export default function NewsletterSection() {
  return (
    <StyledNewsLetterSection>
      <NewsletterTitle>Subscribe to our newsletter</NewsletterTitle>
      <p>
        Be the first to get the news about trends, promotions, and much more!
      </p>
      <NewsletterDiv>
        <NewsletterInput
          type="text"
          placeholder="Your email address"
        ></NewsletterInput>
        <PrimaryButton>Join</PrimaryButton>
      </NewsletterDiv>
      <NewsletterDiv>
        <NewsletterLink href="#">Returns Policy</NewsletterLink>
        <NewsletterLink href="#">Track Your Order</NewsletterLink>
        <NewsletterLink href="#">Shipping & Delivery</NewsletterLink>
      </NewsletterDiv>
      <NewsletterDiv>
        <NewsletterSocial href="https://www.youtube.com" target="_blank">
          <BsYoutube />
        </NewsletterSocial>
        <NewsletterSocial href="https://www.instagram.com/" target="_blank">
          <GrInstagram />
        </NewsletterSocial>
        <NewsletterSocial href="https://twitter.com/" target="_blank">
          <RiTwitterXFill />
        </NewsletterSocial>
        <NewsletterSocial href="https://www.facebook.com/" target="_blank">
          <BsFacebook />
        </NewsletterSocial>
      </NewsletterDiv>
    </StyledNewsLetterSection>
  )
}
