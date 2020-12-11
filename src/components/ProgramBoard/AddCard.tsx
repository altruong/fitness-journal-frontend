import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

interface AddCardProps {}

export const AddCard: React.FC<AddCardProps> = ({}) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const toggleAddState = () => {
    setIsAddingCard(!isAddingCard);
  };

  if (isAddingCard) {
    return (
      <div className='AddNewExercise' onClick={() => toggleAddState()}>
        Add a card
      </div>
    );
  } else {
    return (
      <>
        <Button onClick={() => toggleAddState()}>Goback</Button>
        <div>Click to add card</div>
      </>
    );
  }
};
