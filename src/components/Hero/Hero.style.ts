import { styled } from 'styled-components'

export const StyledHero = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`

export const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 0;
  margin: 0;
`

export const HeroBoxImg = styled.img`
  width: 70%;
  margin-right: -40px;
  transition: 0.5s;
`

export const HeroBox = styled.div`
  background: linear-gradient(to bottom, #222222, #111111, #000000);
  height: 190px;
  width: 240px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  text-transform: uppercase;
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    padding: 30px;
  }
  &:hover {
    > ${HeroBoxImg} {
      transform: scale(1.1);
    }
  }
`

export const HeroBoxTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
}}`

export const HeroBoxTitle = styled.h5`
  margin: 5px;
  font-size: 16px;
  text-align: left;
  &:nth-of-type(1) {
    font-weight: bold;
  }
`

export const HeroBoxLink = styled.a`
  text-wrap: nowrap;
  display: inline-block;
  margin-top: 30px;
  text-align: left;
  align-self: start;
  color: ${(props) => props.theme.primary};
  font-family: ${(props) => props.theme.headFont};
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    text-shadow: 0px 1px 2px ${(props) => props.theme.secondaryText};
  }
`
