var programJson = {
  "type": "program",
  "message0": "שם התכנית %1 %2 %3 %4 גורמים מנהלים %5 %6 גורם נותן שירות לסטודנט/ית",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם התכנית"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "admins"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "srvice"
    }
  ],
  "inputsInline": true,
  "nextStatement": "afik",
  "colour": 160,
  "tooltip": "תכנית תוגדר על פי סוג היעד או התעודה המוענקים בסופה. במסגרת כל תכנית יוגדר אפיק, או אפיקים שונים שיאפשרו לסטודנטים להגיע אל היעד/התעודה שהוגדרו. עבור כל סטודנט/ית שיסיימו אחד מאפיקי הלימודים תתבצע בדיקת עמידה בתנאי הסיום של התכנית. ",
  "helpUrl": ""
};

Blockly.Blocks['program'] = {
  init: function() {
    this.jsonInit(programJson);
  }
};
