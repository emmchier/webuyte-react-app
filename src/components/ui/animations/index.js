import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

export const pulse = keyframes`
    0% { opacity: 1; transition: .1s ease-in-out; }
    30% { opacity: .2; transition: .2s ease-in-out; }
    40% { opacity: .3; transition: .3s ease-in-out; }
    50% { opacity: .5; transition: .4s ease-in-out; }
    80% { opacity: .3; transition: .3s ease-in-out; }
    90% { opacity: .2; transition: .2s ease-in-out; }
    100% { opacity: 1; transition: .1s ease-in-out; }
`;

export const skelleton = keyframes`
    0% { opacity: 1; transition: .1s ease-in-out; margin-left: 0; background-color: #E8E9EB; }
    30% { opacity: .2; transition: .2s ease-in-out; margin-left: 200%; background-color: #C3BEBE; }
    40% { opacity: .3; transition: .3s ease-in-out; margin-left: 200%; background-color: #C3BEBE; }
    50% { opacity: .5; transition: .4s ease-in-out; margin-left: 200%; background-color: #C3BEBE; }
    80% { opacity: .3; transition: .3s ease-in-out; margin-left: 200%; background-color: #C3BEBE; }
    90% { opacity: .2; transition: .2s ease-in-out; margin-left: 200%; background-color: #C3BEBE; }
    100% { opacity: 1; transition: .1s ease-in-out; margin-left: 200%; background-color: #C3BEBE; }
`;
