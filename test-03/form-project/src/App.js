import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div``;

const Form = styled.form`
  width: 400px;
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

const Name = styled.label`
  display: block;
`;

const Password = styled(Name)``;

const Input = styled.input`
  width: 100%;
  height: 25px;
  margin: 3px 0 10px 0;
  box-sizing: border-box;
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

function App() {
  return (
    <Wrapper>
      <Box>
        <Form>
          <FormWrap>
            <TitleBox>
              <Title>User - 0</Title>
              <DeleteBtn>
                <Delete>x</Delete>
              </DeleteBtn>
            </TitleBox>
            <Name>Name</Name>
            <Input />
            <Password>Password</Password>
            <Input />
          </FormWrap>
          <AddUserBox>
            <AddUser>Add User</AddUser>
          </AddUserBox>
          <Confirm as="button">Confirm</Confirm>
        </Form>
      </Box>
    </Wrapper>
  );
}

export default App;
