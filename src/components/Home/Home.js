import React, {useContext} from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const authCtxt = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtxt.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
