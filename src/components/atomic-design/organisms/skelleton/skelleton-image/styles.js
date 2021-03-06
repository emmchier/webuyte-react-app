import styled from 'styled-components';
import { skelleton } from '../../../../ui/animations';

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
    -webkit-animation: ${skelleton} 0.85s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: ${skelleton} 0.85s infinite; /* Firefox < 16 */
    -ms-animation: ${skelleton} 0.85s infinite; /* Internet Explorer */
    -o-animation: ${skelleton} 0.85s infinite; /* Opera < 12.1 */
    animation: ${skelleton} 0.85s infinite;
  }

  svg {
    width: 100%;
  }
`;
