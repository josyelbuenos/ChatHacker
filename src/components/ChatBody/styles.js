import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-image: url('https://i.ibb.co/jH9gzLk/image.jpg');
  background-position: center;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%); 
  background-color: rgba(0, 0, 0, 100); //Isso aqui não muda prr nenhuma na página kkkj
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
  }
`;
