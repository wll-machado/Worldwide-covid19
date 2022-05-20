import Styled from 'styled-components'
import { Typography, CardContent } from '../../../components'

export const LabelStyled = Styled(Typography)`
font-weight: 500;
font-size: 1.5rem;
`

export const ValueStyled = Styled(Typography)`
font-weight: 400;
font-size: 2.5rem;
`
export const CardContentStyled = Styled(CardContent)`
border-left: 8px solid ${({color}) => color || '#5d78ff'};
`

export const CardPanelContentStyled = Styled(CardContent)`
display: flex;
justify-content: space-between;
`

export const ItemStyled = Styled.div`
display: flex;
justify-content: space-between;
min-width: 150px;
`