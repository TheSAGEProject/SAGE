import React from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../utils/itemType";
import './classes.css';

const BoxTarget = ({ children, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (item, monitor) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`dropArea ${isOver ? 'drag-over' : ''}`}>
      {children}
    </div>
  );
};

export default BoxTarget;