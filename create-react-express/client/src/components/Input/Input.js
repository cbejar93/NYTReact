import React from "react";

const Input = props => (
<form>
    <div className="input-group input-group-lg">
        <input className="form-control" name="query" placeholder= "Search a Topic" onChange={props.handleChange} type="text" {...props} />
    </div>
  <div className="input-group input-group-lg">
    <input className="form-control" name="bdate" placeholder= "YYYY/MM/DD" onChange={props.handleChange} type="text" {...props} />
  </div>
  <div className="input-group input-group-lg">
    <input className="form-control" name="edate" placeholder= "YYYY/MM/DD" onChange={props.handleChange} type="text" {...props} />
  </div>
  <button type="button" onClick={props.handleFormSubmit} className="btn btn-success">Submit</button>

</form>
  );
  
  export default Input;