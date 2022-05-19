import {BrowserRouter} from "react-router-dom";

import Pages from "./pages/Pages";
import styled from 'styled-components';

function App() {
 

  return (
    <Wrapper >
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Wrapper>
  );
  
}

// CSS 
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

`






export default App;
