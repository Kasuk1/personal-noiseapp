import { Board } from '../features/board/Board';
import { User } from '../features/user/User';

export const PublicRoutes = () => {
  return (
    <>
      <User />
      <Board />
    </>
  );
};
