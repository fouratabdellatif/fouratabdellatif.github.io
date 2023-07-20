import styled from 'styled-components'

export const TechContainer = styled.div`
  height: auto;
  align-items: center;
  background: #1c1c28;
  padding-top: 50px;
  padding-bottom: 50px;
 `

export const TechWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    align-items: center;
    padding: 0 50px;
`

export const TechIcon = styled.img`
  height: 200px;
  width: 100%;
  margin-bottom: 10px;
`
export const TechH1 = styled.h1`
  font-size: 40px;
  color: #fff;
  padding-top: 40px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }  
`
export const TechH2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ffffff;
`

export const TechP = styled.p`
  font-size: 18px;
  color: #ffffff;
`