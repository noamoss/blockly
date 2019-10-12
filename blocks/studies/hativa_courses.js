var hativaCoursesJson = {
  "type": "hativa_courses",
  "message0": "חטיבה: %1 %2 %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "hativa_name",
      "text": "שם החטיבה"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
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
  "tooltip": "רלוונטי רק לתכניות ללימודי בוגר: גופי ידע בהיקף של 32  נ\\\"ז  לפחות",
  "helpUrl": ""
}

Blockly.Blocks['hativa_courses'] = {
  init: function() {
    this.jsonInit(hativaCoursesJson);
  }
};
