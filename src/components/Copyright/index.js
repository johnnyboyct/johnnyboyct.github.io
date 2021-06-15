import React from 'react';
import Typography from "@material-ui/core/Typography";

function Copyright() {
    return (
       
      <Typography variant="body2" className="copywrite" align="center">
        {"Copyright © "}
        <a href="https://johnm.org/">
          Johnm.org
        </a>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

export default Copyright;