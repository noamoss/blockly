var mustChooseCoursesJson = {
  "type": "must_choose_courses",
  "message0": "קורסי חובת בחירה %1 מינימום נ\"ז: %2 %3 %4 %5",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "field_input",
      "name": "minPointsInput",
      "text": "2"
    },
    {
      "type": "input_value",
      "name": "minPoints",
      "check": "Number"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "Course"
    }
  ],
  "inputsInline": true,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['must_choose_courses'] = {
  init: function() {
    this.jsonInit(mustChooseCoursesJson);
  }
};
