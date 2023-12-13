import styled from "styled-components";
import Input from "./input";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Wrapper = styled.div``;

const Form = styled.form`
  width: 400px;
  margin-bottom: 20px;
`;

const FormWrap = styled.div`
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  margin: 0;
`;

const DeleteBtn = styled.div`
  text-align: center;
  border: 2px solid;
  line-height: 20px;
  width: 20px;
  height: 20px;
`;

const Delete = styled.div`
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;

const AddUserBox = styled.div`
  border: 2px solid;
  display: inline-block;
  margin-right: 8px;
  line-height: 33px;
  text-align: center;
`;

const AddUser = styled.div`
  font-size: 15px;
  cursor: pointer;
  width: 100px;
  height: 33px;
  &:hover {
    background: black;
    color: white;
    border: transparent;
  }
`;

const Confirm = styled(AddUser)`
  height: 37px;
  background: none;
  border-style: solid;
`;

const Error = styled.span`
  color: red;
  font-size: 13px;
`;

function User({ counter, onAddUser,onDeleteUser}) {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data) => {
    console.log("UserData", data);
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <FormWrap>
          <TitleBox>
            <Title>User - {counter}</Title>
            <DeleteBtn onClick={onDeleteUser}>
              <Delete>x</Delete>
            </DeleteBtn>
          </TitleBox>

          <Input
            register={register("name", {
              required: "※ 아이디가 입력되지 않았어요",
              minLength: {
                value: 3,
                message: "※ 아이디는 3글자 이상 필수입니다",
              },
            })}
            name="name"
            label="Name"
            type="text"
          />
          <Error>{formState.errors.name?.message}</Error>

          <Input
            register={register("password", {
              required: "※ 비밀번호가 입력되지 않았어요",
              minLength: {
                value: 6,
                message: "※ 비밀번호는 6글자 이상 필수입니다",
              },
            })}
            name="password"
            label="Password"
            type="password"
          />
          <Error>{formState.errors.password?.message}</Error>
        </FormWrap>
        <AddUserBox>
          <AddUser onClick={onAddUser}>Add User</AddUser>
        </AddUserBox>
        <Confirm as="button">Confirm</Confirm>
      </Form>
    </Wrapper>
  );
}

export default User;
