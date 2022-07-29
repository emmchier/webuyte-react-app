import styled from 'styled-components';
import { pulse } from '../../../../ui/animations';

export const Content = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  position: relative;
  -webkit-animation: ${pulse} 0.85s infinite; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: ${pulse} 0.85s infinite; /* Firefox < 16 */
  -ms-animation: ${pulse} 0.85s infinite; /* Internet Explorer */
  -o-animation: ${pulse} 0.85s infinite; /* Opera < 12.1 */
  animation: ${pulse} 0.85s infinite;
`;
