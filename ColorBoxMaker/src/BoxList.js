import React, { useState } from "react";
import Box from "./Box";
import BoxListForm from "./BoxListForm";


const BoxList = () => {
  const INITIAL_VALUES = [
    {
      backgroundColor: "black",
      width: 100,
      height: 100,
    },
  ];
  const [box, setBox] = useState(INITIAL_VALUES);

  const createNewBox = (newBox) => {
    setBox((box)=> [...box, {...newBox}]);
  }; 

  return (
    <div>
      <h1>Create a Box</h1>
      <div>
        <BoxListForm createNewBox={createNewBox} />
      </div>
      <ul>
        {box.map(({ backgroundColor, width, height }) => (
          <li>
            <Box
              backgroundColor={backgroundColor}
              width={width}
              height={height}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoxList;
