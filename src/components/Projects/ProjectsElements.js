import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: auto;
  align-items: center;
  background: #1c1c28;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
 `
export const ProjectsWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      width: 100%;
      grid-template-columns: 1fr;
  }
    @media screen and (max-width: 786px) {
      width: 100%;
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding:  10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }

  @media screen and (max-width: 786px) {
      margin-bottom: 20px;
  }
`
export const ProjectsIcon = styled.img`
  height: 180px;
  width: 100%;
  margin-bottom: 10px;

`
export const ProjectsH1 = styled.h1`
  font-size: 40px;
  color: #fff;
  padding-top: 40px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }  
`
export const ProjectsH2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`

export const ProjectsP = styled.p`
  font-size: 18px;
  text-align: justify;
`


