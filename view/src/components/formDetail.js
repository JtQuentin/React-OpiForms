import React from "react";
import "react-table-6/react-table.css";

// const Form = (form) => {
//   const location = useLocation();
//   console.log(form);
//   return (
//     <div>
//       <h1>Form</h1>
//     </div>
//   );
// };

const Form = (state) => {
  // const { original } = props.match.location;
  console.log(state.name);
  return (
    <div>
      <h2>Form</h2>
    </div>
  );
};

export default Form;
