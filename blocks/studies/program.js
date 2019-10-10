var programJson = {
  "type": "program",
  "message0": 'התכנית %1',
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "String"
    }
  ],
  "output": "Number",
  "colour": 160,
  "tooltip": "Returns number of letters in the provided text.",
  "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
};

Blockly.Blocks['program'] = {
  init: function() {
    this.jsonInit(programJson);
  }
};
