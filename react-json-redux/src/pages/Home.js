import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { DeletedUser, loadUsers } from "../redux/actions";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  const history = useNavigate();
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("are you sure you want to delete this user")) {
      dispatch(DeletedUser(id));
    }
  };
  return (
    <TableContainer component={Paper}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history("./AddUser")}
      >
        Add User
      </Button>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.age}</StyledTableCell>
                <StyledTableCell align="right">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      onClick={() => handleDelete(user.id)}
                      variant="secondary"
                    >
                      Delete
                    </Button>
                    <Button
                      sx={{ ml: 1 }}
                      onClick={() => history(`/edituser/${user.id}`)}
                    >
                      Edit
                    </Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
