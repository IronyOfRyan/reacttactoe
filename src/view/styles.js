import styled from 'styled-components';
import { keyframes } from "styled-components";
import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    height: 100%;
    width: 100%;
  }
`

const flickerAnimation = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
`;

const AppWrapper = styled.div`
  align-items: center;
  background: #F00000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #DC281E, #F00000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #DC281E, #F00000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  font-family: Fascinate, sans-serif;
  height:100vh;
  opacity: 1;
  word-wrap: break-word;
`;

const BoardWrap = styled.div`
  margin-top: 150px;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
`;

const Border = styled.div`
  border: 3px solid #000;
  border-radius: 10px;
  opacity: .9;
`;

const GameTitle = styled.h1`
  background: #000;
  border: 1px dashed #F00000;
  border-radius: 50px;
  box-shadow: 0 0 0 2px #000, 1px 3px 5px 2px rgba(10, 10, 0, 0.5);
  color: #F00000;
  float: none;
  font-size: 50px;
  font-weight: bold;
  height: 90px;
  line-height: 90px;
  margin: 19px;
  padding: auto;
  text-align: center;
  width: 600px;
`;

const Status = styled.div`
  background: #000;
  border: .5px dashed #F00000;
  border-radius: 2px;
  box-shadow: 0 0 0 2px #000, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color:#F00000;
  font-size: 24px;
  font-weight: bold;
  line-height: 20px;
  float: none;
  height: 20px;
  margin-left: 210px;
  margin-bottom: 50px;
  opacity: 1;
  padding: 1px;
  text-align: center;
  width: 200px;
`;

const OverlayCSS = styled.div`
  animation: ${flickerAnimation} 5s infinite;
  background-color: #000;
  border-radius: 50px;
  border: 1px dashed #F00000;
  box-shadow: 0 0 0 2px #000, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color: #F00000;
  float: none;
  font-size: 50px;
  font-weight: bold;
  height: 400px;
  line-height: 200px;
  margin-left: 120px;
  margin-top: 120px;
  padding: 1px;
  position: absolute;
  text-align: center;
  vertical-align: middle;
  visibility: ${
    props => props.gameover ? "visible" : "hidden"
  };
  width: 400px;
  word-wrap: break-word;

    &:hover {
      opacity: 0.5;
    }

`;

const Reset = styled.div`
  margin-bottom: 20px;
  padding: auto;
`;

const ResetButton = styled.button`
  border-radius: 180px;
  background: #000;
  border: 1px dashed #F00000;
  box-shadow: 0 0 0 2px #000, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color: #F00000;
  font-family: Fascinate, sans-serif;
  font-size: 24px;
  font-weight: bold;
  height: 40px;
  line-height: 20px;
  margin-left: 210px;
  margin-top: 10px;
  opacity: 1;
  padding: 1px;
  text-align: center;
  width: 200px;
  visibility: ${
      props => props.gameover ? "visible" : "hidden"
    };

    &:hover {
      background: #F00000;
      border: 1px dashed #F00000;
      box-shadow: 0 0 0 2px #F00000, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
      color: #000;
      border-radius: 10px;
      float: none;
    }

    &:focus {
      outline: none;
    }
`;

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;
const Psquare = styled.button`
  background: ${
    props => props.player === 'player' ? "#000" : props.player === 'AI' ? "#DC281E" : "#666666"
  };
  color: ${
    props => props.player === 'player' ? "#F00000;" : props.player === 'AI' ? "#000;" : "#F00000;"
  };
  border:${
    props => props.player === 'player' ? "1px dashed #F00000" : props.player === 'AI' ? "1px dashed #000;" : "1px dashed #F00000"
  };
  border-radius: 5px;
  box-shadow: ${
    props => props.player === 'player' ? "0 0 0 4px #000, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)" : props.player === 'AI' ? "0 0 0 4px #DC281E, 4px 2px 12px 8px rgba(10, 10, 0, 0.5)" : "0 0 0 4px #666666, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)"
  };
  float: left;
  font-family: Fascinate, sans-serif;
  font-size: 100px;
  font-weight: bold;
  height: 200px;
  margin: 7px;
  text-align: center;
  text-shadow: -1px -1px #F00000;
  width: 200px;

    &:focus {
      outline: none;
    }
    &:hover {
      background: #000;
      border: 1px dashed #000;
      border-radius: 1px;
      box-shadow: 0 0 0 4px #000, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      opacity: 1;
    }
`

export {AppWrapper, BoardWrap, Border, GameTitle, OverlayCSS, Status, Reset, ResetButton, BoardRow, Psquare};
