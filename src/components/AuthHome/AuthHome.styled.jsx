import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: #decee0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 65vh;
  object-fit: cover;
  border-top-width: 10px;
  border-top-style: dashed;
  border-top-color: #decee0;;
`;

export const CardImage = styled.div`
  position: relative;
  margin-bottom: 5px;
  border-bottom-width: 10px;
  
`;

export const ImageSubtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background: rgba(60, 61, 71, 0.8);
`;

export const Logo = styled.h1`
  border-bottom: 7px solid #b43bc4;
  color: #b43bc4;
  font-family: Raleway, sans-serif;
  font-size: 44px;
  font-weight: bold;
  line-height: 1.19;
  letter-spacing: 0.03em;
`;

export const Subtitle = styled.h3`
  margin: 0;
  color: #decee0;
  font-family: Raleway, sans-serif;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-align: center;
`;

export const LogoPhone = styled.span`
  color: #b43bc4;
`;
