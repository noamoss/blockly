var choiceCoursesJson = {
  "type": "choice_courses",
  "message0": "קורסי בחירה %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "course"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};


Blockly.Blocks['choice_courses'] = {
  init: function() {
    this.jsonInit(choiceCoursesJson);
  }
};