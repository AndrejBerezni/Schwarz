import { styled } from 'styled-components'

export const StyledReviews = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const StyledAddReviewForm = styled.form`
  width: 40%;
  height: 400px;
  margin: 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 20px;
  background: linear-gradient(to bottom, #222222 0%, #111111 20%, #000000 60%);
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ReviewTextarea = styled.textarea`
  width: 100%;
  flex: 1;
  font-family: ${(props) => props.theme.textFont};
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.navBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.borderColor};
`

export const ReviewInput = styled.input`
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.navBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.borderColor};
`

export const StyledReviewsList = styled.ul`
  position: relative;
  width: 55%;
  height: 400px;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  background: linear-gradient(to bottom, #222222 0%, #111111 20%, #000000 60%);
  height: 400px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ReviewsTitle = styled.h3`
  letter-spacing: 2px;
  align-text: start;
  align-self: start;
  vertical-align: end;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 18px;
  margin: 0;
  display: flex;
  align-items: center;
`

export const ReviewsTitleStar = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.primary};
  margin-left: 5px;
`
