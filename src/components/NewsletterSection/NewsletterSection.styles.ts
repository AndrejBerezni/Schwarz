import { styled } from 'styled-components'

export const StyledNewsLetterSection = styled.section`
  background-color: ${(props) => props.theme.navBgColor};
  font-size: 18px;
  padding: 20px 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const NewsletterTitle = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const NewsletterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 10px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`

export const NewsletterInput = styled.input`
  width: 600px;
  border-radius: 5px;
  border: none;
  padding: 2px 20px;
  @media (max-width: 768px) {
    width: auto;
    min-height: 30px;
  }
`

export const NewsletterLink = styled.a`
  color: ${(props) => props.theme.secondaryText};
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.textColor};
  }
`

export const NewsletterSocial = styled.a`
  color: ${(props) => props.theme.textColor};
  transition: 0.3s;
  font-size: 22px;
  &:hover {
    color: ${(props) => props.theme.primary};
    transform: scale(1.1);
  }
`
