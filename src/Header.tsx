import * as anchor from '@project-serum/anchor';
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography';
import { MintCountdown } from './MintCountdown';
import { toDate, formatNumber } from './utils';
import { CandyMachineAccount } from './candy-machine';

type HeaderProps = {
  candyMachine?: CandyMachineAccount;
};

export const OuterContainer=styled.div`
display:flex;
width:620px;
justify-content:center;
align-items:center;

`

export const DetailsContainer=styled.div`
display:flex;
flex:1 1 30%;
justify-content:center;
align-items:center;
margin-right:40px;
`

export const Details=styled.div`
margin:0 30px;
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
        <MintCountdown
          date={toDate(
            candyMachine?.state.goLiveDate
              ? candyMachine?.state.goLiveDate
              : candyMachine?.state.isPresale
              ? new anchor.BN(new Date().getTime() / 1000)
              : undefined,
          )}
          style={{ flex:'1 1 70%',alignItems:'flex-start'}}
          status={
            !candyMachine?.state?.isActive || candyMachine?.state?.isSoldOut
              ? 'COMPLETED'
              : candyMachine?.state.isPresale
              ? 'PRESALE'
              : 'COMPLETED'
          }
        />
      
    </OuterContainer>

  );
};

const getMintPrice = (candyMachine: CandyMachineAccount): string => {
  const price = formatNumber.asNumber(
    candyMachine.state.isPresale && candyMachine.state.whitelistMintSettings?.discountPrice
      ? candyMachine.state.whitelistMintSettings?.discountPrice!
      : candyMachine.state.price!,
  );
  return `◎ ${price}`;
};