var hitmahutCoursesJson = {
  "type": "hitmahut_courses",
  "message0": "התמחות %1 %2",
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
  "colour": 260,
  "tooltip": "רלוונטית לתכניות המוסמך: גוף ידע בהיקף של 12 נ\"ז לפחות,  יכולה להיות פתוחה לתלמידי מספר תכניות לימודים.",
  "helpUrl": ""
};
  
Blockly.Blocks['hitmahut_courses'] = {
  init: function() {
    this.jsonInit(hitmahutCoursesJson);
  }
};