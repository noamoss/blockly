var megamaCoursesJson = {
  "type": "megama_courses",
  "message0": "מגמה: %1 %2 %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם המגמה"
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
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": " רלוונטית לתכניות המוסמך: גוף ידע בהיקף של 12 נ\"ז לפחות, פתוח בד\"כ רק לתלמידי תכנית לימודים אחת ",
  "helpUrl": ""
}

Blockly.Blocks['megama_courses'] = {
  init: function() {
    this.jsonInit(megamaCoursesJson);
  }
};