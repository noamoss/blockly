var graduactionConditionsJson = {
  "type": "graduation_conditions",
  "message0": "בדיקת תנאי סיום %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "conditons",
      "check": "condition"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "רשימת תנאי סיום התכנית ועמידה ביעדיה",
  "helpUrl": ""
};
    
        
Blockly.Blocks['graduation_conditions'] = {
  init: function() {
    this.jsonInit(graduactionConditionsJson);
  }
};