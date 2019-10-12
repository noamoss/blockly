var admissionPrerequisitesJson = {
  "type": "admission_prerequisites",
  "message0": "תנאי קבלה לאפיק %1 %2",
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
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "רשימת תנאי הקבלה ללימודים באפיק",
  "helpUrl": ""
};
      
Blockly.Blocks['admission_prerequisites'] = {
  init: function() {
    this.jsonInit(admissionPrerequisitesJson);
  }
};