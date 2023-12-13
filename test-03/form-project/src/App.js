import { useEffect, useState } from "react";
import styled from "styled-components";
import User from "./components/user";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div``;

const Form = styled.form`
  width: 400px;
  margin-bottom: 20px;
`;

const AddUser = styled.button`
  margin: 0px 8px 20px 0;
  font-size: 13px;
  cursor: pointer;
  border: 2px solid;
  width: 100px;
  height: 33px;
  background: none;
  &:hover {
    background: black;
    color: white;
    border: transparent;
  }
`;

const Confirm = styled(AddUser)`
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const DataFields = styled.div`
  background: #eee;
  padding: 10px;
  font-size: 13px;
`;

const SubmitData = styled.p`
  margin: 0;
`;

function App() {
  const [userBox, setUserBox] = useState([{ name: "", password: "" }]);
  const { handleSubmit, register, formState, trigger, setError } = useForm();
  const onAddUser = () => {
    const addForm = [...userBox, { name: "", password: "" }];
    setUserBox(addForm);
  };
  const onDeleteUser = (index) => {
    if (userBox.length === 1) {
      alert("적어도 한개 이상의 정보란은 필수입니다");
      return;
    }
    const deleteForm = [
      ...userBox.slice(0, index),
      ...userBox.slice(index + 1),
    ];
    setUserBox(deleteForm);
  };
  const onValid = (data) => {
    setUserBox(data.userBox);
  };

  useEffect(() => {
    console.log("userBox changed:", userBox);
  }, [userBox]);
  return (
    <Wrapper>
      <Box>
        <Form onSubmit={handleSubmit(onValid)}>
          {userBox.map((_, index) => (
            <User
              key={index}
              counter={index + 1}
              onDeleteUser={onDeleteUser}
              index={index}
              register={register}
              formState={formState}
              userBox={userBox}
              trigger={trigger}
            />
          ))}
          <AddUser onClick={() => onAddUser()}>Add User</AddUser>
          <Confirm type="submit" disabled={!formState.isValid}>
            Confirm
          </Confirm>
          {formState.isSubmitSuccessful &&
            userBox.map((user, i) => (
              <DataFields key={i}>
                <SubmitData><b>Name</b> : {user.name}</SubmitData>
                <SubmitData><b>password</b> : {user.password}</SubmitData>
              </DataFields>
            ))}
        </Form>
      </Box>
    </Wrapper>
  );
}

export default App;
