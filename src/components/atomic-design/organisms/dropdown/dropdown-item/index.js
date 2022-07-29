import React from 'react';
import Box from '../../../atoms/box';
import Button from '../../../atoms/button';
import Heading from '../../../atoms/heading';
import Text from '../../../atoms/text';
import { Actions, Content, ImageContainer, MainContent } from './styles';

const DropdownItem = ({
  image,
  title,
  description,
  status,
  action = true,
  labelAction = 'Eliminar',
  onClickAction,
  actionsFooter = false,
  ariaLabelDelete = '',
}) => {
  return (
    <>
      <MainContent>
        <ImageContainer>
          <img src={image} alt={title} />
        </ImageContainer>
        <Content>
          <Heading variant="h5">{title}</Heading>
          <Box display="flex" alignItems="center" justifyContent="between">
            <Text>{description}</Text>
            {action && (
              <Button onClick={onClickAction} variant="text" ariaLabel={ariaLabelDelete}>
                {labelAction}
              </Button>
            )}
          </Box>
        </Content>
      </MainContent>
      {actionsFooter === true && (
        <Actions>
          <Text>{status}</Text>
          <Button variant="text" ariaLabel={ariaLabelDelete}>
            Eliminar
          </Button>
        </Actions>
      )}
    </>
  );
};

export default DropdownItem;
