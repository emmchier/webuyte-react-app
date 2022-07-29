import styled from 'styled-components';
import { pulse } from '../../../../ui/animations';

export const Content = styled.div`
  width: 100%;
  height: 320px;
  max-height: 320px;
  background-color: #dddcdc;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.disabled};
    -webkit-animation: ${pulse} 0.85s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: ${pulse} 0.85s infinite; /* Firefox < 16 */
    -ms-animation: ${pulse} 0.85s infinite; /* Internet Explorer */
    -o-animation: ${pulse} 0.85s infinite; /* Opera < 12.1 */
    animation: ${pulse} 0.85s infinite;
  }

  svg {
    width: 100%;
  }
`;
