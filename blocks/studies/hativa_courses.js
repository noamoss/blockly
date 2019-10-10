var hativaCoursesJson = {
  "type": "hativa",
  "message0": "חטיבה %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "Course"
    }
  ],
  "inputsInline": false,
  "colour": 65,
  "tooltip": "רלוונטי רק לתכניות ללימודי בוגר: גופי ידע בהיקף של 32  נ\"ז  לפחות",
  "helpUrl": ""
};

Blockly.Blocks['hativa_courses'] = {
  init: function() {
    this.jsonInit(hativaCoursesJson);
  }
};
