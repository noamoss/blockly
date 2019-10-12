var hitmahutCoursesJson = {
  "type": "hitmahut_courses",
  "message0": "התמחות ב: %1 %2 %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "hitmahut_name",
      "text": "שם ההתמחות"
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
  "tooltip": "רלוונטית לתכניות המוסמך: גוף ידע בהיקף של 12 נ\"ז לפחות,  יכולה להיות פתוחה לתלמידי מספר תכניות לימודים.",
  "helpUrl": ""
}
  
Blockly.Blocks['hitmahut_courses'] = {
  init: function() {
    this.jsonInit(hitmahutCoursesJson);
  }
};