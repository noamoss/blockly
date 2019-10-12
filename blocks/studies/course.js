var CourseJson = {
  "type": "course",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "courseName",
      "text": "שם הקורס"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['course'] = {
  init: function() {
    this.jsonInit(CourseJson);
    console.log(this);
  }
};
  