import styled from 'styled-components';
import { pulse } from '../../../ui/animations';

export const SkelletonLikeButton = styled.div`
  svg {
    -webkit-animation: ${pulse} 0.85s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: ${pulse} 0.85s infinite; /* Firefox < 16 */
    -ms-animation: ${pulse} 0.85s infinite; /* Internet Explorer */
    -o-animation: ${pulse} 0.85s infinite; /* Opera < 12.1 */
    animation: ${pulse} 0.85s infinite;
  }
`;
