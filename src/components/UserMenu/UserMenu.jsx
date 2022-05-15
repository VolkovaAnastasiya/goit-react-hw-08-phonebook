import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Stack, Button } from '@mui/material';
import { getUserName } from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';
import { Container, Name } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Avatar />
      </Stack>
      <Name>
        Hello, <br />
        {name}
      </Name>

      <Button
        color="secondary"
        sx={{ mr: 4, ml: 2 }}
        variant="outlined"
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        LogOut
      </Button>
    </Container>
  );
}

export default UserMenu;
