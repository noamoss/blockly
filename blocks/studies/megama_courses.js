var megamaCoursesJson = {
  "type": "megama_courses",
  "message0": "מגמה %1 %2",
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
  "colour": 20,
  "tooltip": " רלוונטית לתכניות המוסמך: גוף ידע בהיקף של 12 נ\"ז לפחות, פתוח בד\"כ רק לתלמידי תכנית לימודים אחת ",
  "helpUrl": ""
};

Blockly.Blocks['megama_courses'] = {
  init: function() {
    this.jsonInit(megamaCoursesJson);
  }
};