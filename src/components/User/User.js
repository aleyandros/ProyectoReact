import classes from "./User.module.css";
import TodoList from "./TodoList";

const Profile = () => {
  return (
    <div className={classes["Container"]}>
      <h1>PERFIL</h1>
      <TodoList />
    </div>
  );
};

export default Profile;
