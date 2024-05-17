import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: darkred;
`

const DefaultButton = styled.button`
  background-color: darkred;
  color: goldenrod;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  width: 200px;
  margin: 1rem auto;
`

function App() {
  return (
    <div style={{padding: '2rem'}}>
      <BasicTitle>Styled Components</BasicTitle>
      <DefaultButton>Click</DefaultButton>
    </div>
  );
}



export default App;
