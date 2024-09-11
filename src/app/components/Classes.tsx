import '../global.css';
import './classes.css';
import { useState } from 'react';
import itemTypes from '../utils/itemType';
import { useDrag } from 'react-dnd';

const Classes = (props) => {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.CARD,
    item: () => ({
      course_code: props.course_code,
      name: props.name,
      prerequisites: props.prerequisites,
      corequisites: props.corequisites,
    }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [taken, setTaken] = useState(false);

  const checkTaken = () => {
    if (taken === false) {
      setTaken(true);
      return 'T';
    } else {
      setTaken(false);
      return 'NT';
    }
  };

  return (
    <div>
      <div className={`classes ${isDragging ? 'dragging' : ''}`} ref={drag}>
        <p className="text-[40px] ml-6 font-sudo font-medium">{props.course_code}</p>
        <p className=" text-[20px] ml-6 -mt-3 font font-sudo font-semibold">{props.name}</p>
        <p className="text-[20px] ml-6 truncate font-sudo">
          Prerequisites:{' '}
          {props.prerequisites && props.prerequisites.length > 0 ? props.prerequisites.join(', ') : 'none'}
        </p>
        <p className="text-[20px] ml-6 font-sudo">
          Corequisites:{' '} 
          {props.corequisites && props.corequisites.length > 0 ? props.corequisites.join(', ') : 'none'}
        </p>
      </div>
    </div>
  );
};

export default Classes;