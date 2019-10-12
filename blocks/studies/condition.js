var conditionJson = {
  "type": "condition",
  "message0": "תנאי/בדיקה לוגית %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "condition_input",
      "text": "הגדרת התנאי"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "הגדרת התנאי",
  "helpUrl": ""
}
        
Blockly.Blocks['condition'] = {
  init: function() {
    this.jsonInit(conditionJson);
  }
};