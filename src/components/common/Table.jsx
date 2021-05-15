import React from "react";

const Table = ({thead, tbody}) => {
  return (
    <table className="table table-striped table-bordered table-sm">
      <thead>
       {thead}
      </thead>
      <tbody>
        {tbody}
      </tbody>
    </table>
  );
};

export default Table;
