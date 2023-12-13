import styled from "styled-components";

const Label = styled.label`
  display: block;
`;

const InputBox = styled.input`
  width: 100%;
  height: 25px;
  box-sizing: border-box;
  
`;

function Input({ register, name, type , label }) {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputBox id={name} type={type} {...register} />
    </>
  );
}

export default Input;
