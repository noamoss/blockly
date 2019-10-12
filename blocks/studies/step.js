var stepJson = {
  "type": "step",
  "message0": "שלב %1 %2 %3",
  "args0": [
    {
      "type": "field_number",
      "name": "step number",
      "value": 0,
      "min": 0
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": [
        "Must_courses",
        "Choice_courses",
        "Must_choose_courses",
        "Hativa_courses",
        "Megama_courses",
        "Hitmahut_courses",
        "Block_round_courses"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};
  
Blockly.Blocks['step'] = {
  init: function() {
    this.jsonInit(stepJson);
  }
};
  
