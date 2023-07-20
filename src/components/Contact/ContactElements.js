import styled from 'styled-components'

export const ContactContainer = styled.div`
  height: auto;
  align-items: center;
  background: #1c1c28;
  padding-top: 50px;
  padding-bottom: 50px;
 `
export const ContactWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    align-items: center;
    padding: 0 50px;
`

export const ContactH1 = styled.h1`
  font-size: 40px;
  color: #fff;
  padding-top: 40px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }  
`
export const ContactH2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ffffff;
  text-align: center;
`

export const ContactP = styled.p`
  font-size: 18px;
  text-align: justify;
  color: #ffffff;
  padding-bottom: 50px;
`


