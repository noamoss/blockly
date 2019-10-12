var mustChooseCoursesJson = {
  "type": "must_choose_courses",
  "message0": "קורסי חובת בחירה %1 מינימום נ\"ז: %2 %3 %4 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "NAME",
      "value": 0
    },
    {
      "type": "input_value",
      "name": "NAME"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "course"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['must_choose_courses'] = {
  init: function() {
    this.jsonInit(mustChooseCoursesJson);
  }
};
