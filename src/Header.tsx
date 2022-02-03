import * as anchor from '@project-serum/anchor';
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography';
import { MintCountdown } from './MintCountdown';
import { toDate, formatNumber } from './utils';
import { CandyMachineAccount } from './candy-machine';

type HeaderProps = {
  candyMachine?: CandyMachineAccount;
};

export const OuterContainer = styled.div`
display:flex;
width:180%;
justify-content:center;
align-items:center;

@media (max-width:560px){
  width:100%;
  flex-direction:column;
}

`

export const DetailsContainer = styled.div`
display:flex;
flex:1 1 60%;
justify-content:center;
align-items:center;
margin-right:50px;

@media (max-width:560px){
margin:0px;
}
`

export const Details = styled.div`
margin:0 30px;
`
export const InnerContainer = styled.div`
flex :1 1 40%;

@media (max-width:560px){
  margin-top:20px;
  width:50%;
  margin-right:30px;
}
`


export const Header = ({ candyMachine }: HeaderProps) => {
  return (
    <OuterContainer>

      {candyMachine && (
        <DetailsContainer>
          <Details>
            <Typography variant="body2" color="textSecondary">
              Remaining
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{
                fontWeight: 'bold',
              }}
            >
              {`${candyMachine?.state.itemsRemaining}`}
            </Typography>
          </Details>

          <Details>
            <Typography variant="body2" color="textSecondary">
              Price
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: 'bold' }}
            >
              {getMintPrice(candyMachine)}
            </Typography>
          </Details>

        </DetailsContainer>
      )}
      <InnerContainer>

        <MintCountdown
          date={toDate(
            candyMachine?.state.goLiveDate
              ? candyMachine?.state.goLiveDate
              : candyMachine?.state.isPresale
                ? new anchor.BN(new Date().getTime() / 1000)
                : undefined,
          )}
          style={{ display: 'flex', alignItems: 'flex-end' }}
          status={
            !candyMachine?.state?.isActive || candyMachine?.state?.isSoldOut
              ? 'COMPLETED'
              : candyMachine?.state.isPresale
                ? 'PRESALE'
                : 'LIVE'
          }
        />
      </InnerContainer>


    </OuterContainer>

  );
};

const getMintPrice = (candyMachine: CandyMachineAccount): string => {
  const price = formatNumber.asNumber(
    candyMachine.state.isPresale && candyMachine.state.whitelistMintSettings?.discountPrice
      ? candyMachine.state.whitelistMintSettings?.discountPrice!
      : candyMachine.state.price!,
  );
  return `◎${price}`;
};