import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  Glyphicon,
  InputGroup,
} from 'react-bootstrap';

function Textbox({ handlerFromParant }) {
  const [message, setMessage] = useState([
    {
      type: 0,
      text: '',
    },
  ]);

  const handleChange = (e) => {
    setMessage([{ type: 0, text: e?.target?.value }]);
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    handlerFromParant(message);
    setMessage([{ type: 0, text: '' }]);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handlerFromParant(message);
      setMessage([{ type: 0, text: '' }]);
    }
  };
  return (
    <footer className="navbar-fixed-bottom">
      <div className="inputBox">
        <FormGroup>
          <InputGroup>
            <FormControl
              value={message[0]?.text}
              onChange={handleChange}
              onKeyDown={keyPress}
              type="text"
              placeholder="write something...."
            />
            <InputGroup.Button>
              <Button onClick={handleClick} bsStyle="primary">
                <Glyphicon glyph="glyphicon glyphicon-send"> Send</Glyphicon>
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    </footer>
  );
}

export default Textbox;
