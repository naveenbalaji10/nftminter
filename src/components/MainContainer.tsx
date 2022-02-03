import Img from '../assets/img1.jpeg'

import Img0 from '../assets/111111.png'
import Img1 from '../assets/traits.jpeg'
import styled from 'styled-components';

const HeaderContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:100px;


`

const Title = styled.h1`
font-family:'Josefin Sans';
font-weight:bold;
font-size:50px;

@media (max-width:560px){
  font-size:18px; 
 }
`

const HeaderDiv = styled.div`
width:700px;
height:500px;

@media (max-width:560px){
 width:400px;
 height:450px; 
}

`

const HeaderImg = styled.img`
width:100%;
height:100%;
border-radius:20px;
`

const OuterContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
margin:100px 0;

@media (max-width:560px){
 margin:50px 0;
 }
`
const Container1 = styled.div`
width:70%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;

@media (max-width:560px){
width:100%;
flex-direction:column;
margin:0 20px;
 }
`
const Container2 = styled.div`
width:70%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;

@media (max-width:560px){
width:100%;
flex-direction:column-reverse;
margin:0 20px;
 }
`

const Left = styled.div`
flex:50%;
text-align:justify;
@media (max-width:560px){
  
 }
`

const Right = styled.div`
flex:50%;
display:flex;
justify-content:flex-end;
@media (max-width:560px){
   
 }

`
const Left1 = styled.div`
flex:50%;
text-align:justify;
`

const Right1 = styled.div`
flex:50%;
display:flex;
flex-direction:column;
text-align:justify;

`

const ImageContainer = styled.div`
align-items:flex-end;
height:350px;
width:400px;
margin:0 20px;

@media (max-width:560px){
 width:280px;
 height:300px;
}
`

const Image = styled.img`
border-radius:10px;
height:100%;
width:100%;
`

const MainContainer = () => {
  return <>
    <HeaderContainer>
      <Title className="text-center">THE BINARY GIRL NFT'S COLLECTION</Title>

      <HeaderDiv>
        <HeaderImg src={Img0} alt="" className="w-100" />
      </HeaderDiv>
    </HeaderContainer>

    <OuterContainer>
      <Container1>
        <Left>
          <h4 className="text-heading">What are NFTs?</h4>
          <p>In economics, a fungible asset is something with units that can be readily interchanged like money.

            With money, you can swap a £10 note for two £5 notes and it will have the same value.

            However, if something is non-fungible, this is impossible - it means it has unique properties so it can't be
            interchanged with something else.It could be a house, or a painting such as the Mona Lisa, which is one of a
            kind. You can take a photo of the painting
            or buy a print but there will only ever be one original painting.

            NFTs are "one-of-a-kind" assets in the digital world that can be bought and sold like any other piece of
            property, but
            which have no tangible form of their own.

            The digital tokens can be thought of as certificates of ownership for virtual or physical assets.

          </p>
        </Left>
        <Right>
          <ImageContainer>
            <Image src={Img} />
          </ImageContainer>
        </Right>
      </Container1>
    </OuterContainer>


    <OuterContainer>
      <Container2>
        <Left1>
          <ImageContainer>
            <Image src={Img1} />
          </ImageContainer>
        </Left1>
        <Right1>
          <h4 className="text-heading">How Nft work's?</h4>
          <p>NFTs are individual tokens with valuable information stored in them. Because they hold a value primarily set
            by the
            market and demand, they can be bought and sold just like other physical types of art. NFTs' unique data makes
            it easy to
            verify and validate their ownership and the transfer of tokens between owners.They hold a value primarily set
            by the market and demand, they can be bought and sold just like other physical types of
            art.NFTs' unique data makes it easy to verify and validate their ownership and the transfer of tokens between
            owners.The most significant use of NFTs today is in digital content. Content creators see their profits
            enhanced by NFTs, as
            they power a creator economy where creators have the ownership of their content over to the platforms they use
            to
            publicize it.NFTs have seen a lot of interest from game developers. NFTs can provide a lot of benefits to the
            players. You can buy
            items for your game, and when you're done with that, you can recoup your money by selling them.</p>
        </Right1>
      </Container2>
    </OuterContainer>
  </>;
};

export default MainContainer;
