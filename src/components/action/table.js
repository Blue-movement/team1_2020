import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(bid, classif, session, title, source) {
  return { bid, classif, session, title, source };
}

const SimpleTable = (props) => {
  const classes = useStyles();

  const rows = [];
  for (let i = 0; i < props.bills.length; i++) {
    rows.push(
      createData(
        props.bills[i].node.identifier,
        props.bills[i].node.classification,
        props.bills[i].node.session,
        props.bills[i].node.title,
        props.bills[i].node.sources[0].url
      )
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bill ID</TableCell>
            <TableCell align="right">Classification</TableCell>
            <TableCell align="right">Legislative Session</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Source</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.bid}>
              <TableCell component="th" scope="row">
                {row.bid}
              </TableCell>
              <TableCell align="right">{row.classif}</TableCell>
              <TableCell align="right">{row.session}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
