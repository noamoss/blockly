var stepThroughJson = {
  "type": "step_through",
  "message0": "בדיקת תנאי מעבר שלב %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "condition"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "הגדרת הבדיקות לבירור זכאות למעבר לשלב הבא באפיק",
  "helpUrl": ""
}
  
      
Blockly.Blocks['step_through'] = {
  init: function() {
    this.jsonInit(stepThroughJson);
  }
};