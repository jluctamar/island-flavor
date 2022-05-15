import {BrowserRouter} from "react-router-dom";
import {APP_NAME} from "./shared/constants"
import Navigation from "./components/Navigation";
import Pages from "./pages/Pages";
import styled from 'styled-components';

function App() {
 

  return (
    <Wrapper >
      <BrowserRouter>
        <NavWrapper>
          <h1>{APP_NAME}</h1>
          <Navigation />
        </NavWrapper>
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
  margin-right: 16px;
  margin-left: 16px;
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`




export default App;
