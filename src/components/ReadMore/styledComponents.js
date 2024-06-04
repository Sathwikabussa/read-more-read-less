// Style your elements here
import styled from 'styled-components'

export const ReadMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 80%;
  max-width: 550px;
  @media and screen (min-width: 768px) {
    width: 95%;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`
export const Heading = styled.h1`
  text-align: center;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    font-size: 32px;
    line-height: 1.4;
  }
`
export const SubHeading = styled.p`
  font-size: 15px;
  color: #334155;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.4;
  }
`
export const Image = styled.img`
  width: 100%;
  margin-top: 13px;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`

export const Description = styled.p`
  color: #334155;
  font-size: 13px;
  font-family: 'Roboto';
  margin-top: 13px;
  margin-bottom: 8px;
  line-height: 17px;
  @media screen and(min-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  font-family: 'Roboto';
  font-size: 12px;
  border: none;
  border-radius: 6px;
  margin-top: 8px;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    align-self: center;
    margin-top: 16px;
  }
`
