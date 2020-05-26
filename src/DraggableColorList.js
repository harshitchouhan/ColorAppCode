import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DragableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div className='DragableColorList' style={{ height: '100%', display: 'flow-root', backgroundColor: 'white' }}>
      {colors.map((color, i) => (
        <DraggableColorBox index={i} key={color.name} color={color.color} name={color.name} handleClick={() => removeColor(color.name)} />
      ))}
    </div>
  );
});
export default DragableColorList;
