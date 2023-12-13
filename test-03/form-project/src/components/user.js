import styled from "styled-components";
import Input from "./input";

const Wrapper = styled.div``;

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

const Delete = styled.button`
  cursor: pointer;
  border: 2px solid;
  background: none;
  font-weight: 600;
`;

const Error = styled.span`
  color: red;
  font-size: 13px;
`;

function User({
  counter,
  onDeleteUser,
  index,
  register,
  formState,
  trigger,
}) {
  return (
    <Wrapper>
      <FormWrap>
        <TitleBox>
          <Title>User - {counter - 1}</Title>
          <Delete onClick={() => onDeleteUser(index)}>x</Delete>
        </TitleBox>

        <Input
          register={register(`userBox[${index}].name`, {
            required: "※ 아이디가 입력되지 않았어요",
            minLength: {
              value: 3,
              message: "※ 아이디는 3글자 이상 필수입니다",
            },
          })}
          name="name"
          label="Name"
          type="text"
          onChange={(e) => {
            trigger(`userBox[${index}].name`);
          }}
        />
        <Error>{formState.errors[`userBox[${index}].name`]?.message}</Error>

        <Input
          register={register(`userBox[${index}].password`, {
            required: "※ 비밀번호가 입력되지 않았어요",
            minLength: {
              value: 6,
              message: "※ 비밀번호는 6글자 이상 필수입니다",
            },
          })}
          name="password"
          label="Password"
          type="password"
          onChange={(e) => {
            trigger(`userBox[${index}].password`);
          }}
        />
        <Error>{formState.errors[`userBox[${index}].password`]?.message}</Error>
      </FormWrap>
    </Wrapper>
  );
}

export default User;
