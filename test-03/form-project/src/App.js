import { useState } from "react";
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

function App() {
  const [userBox, setUserBox] = useState(true);
  const onAddUser = () => setUserBox((item) => item + 1);
  const onDeleteUser = () => {
    
  }
  return (
    <Wrapper>
      <Box>
        {[...Array(userBox)].map((item, index) => (
          <User
            key={index}
            counter={index + 1}
            onAddUser={onAddUser}
            onDeleteUser={onDeleteUser}
          />
        ))}
      </Box>
    </Wrapper>
  );
}

export default App;
