import styled from 'styled-components';
import { skelleton } from '../../../../ui/animations';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.disabled};
  position: relative;

  div {
    z-index: 9;
  }

  span {
    position: absolute;
    background-color: ${({ theme }) => theme.color.disabled};
    -webkit-animation: ${skelleton} 0.85s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: ${skelleton} 0.85s infinite; /* Firefox < 16 */
    -ms-animation: ${skelleton} 0.85s infinite; /* Internet Explorer */
    -o-animation: ${skelleton} 0.85s infinite; /* Opera < 12.1 */
    animation: ${skelleton} 0.85s infinite;
  }
`;
