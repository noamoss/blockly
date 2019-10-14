var diplomaJson = 
{
  "type": "diploma",
  "message0": "סוג תעודה/תואר: %1 %2 %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "degree_type",
      "options": [
        [
          "תואר שני",
          "OPTIONNAME"
        ],
        [
          "תואר שלישי",
          "OPTIONNAME"
        ],
        [
          "תעודת הוראה",
          "OPTIONNAME"
        ],
        [
          "תעודת סיום",
          "OPTIONNAME"
        ],
        [
          "תואר ראשון",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם התעודה/תואר"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": "https://mm.tt/1342109314?t=NvnKkHS3Ft"
};

Blockly.Blocks['diploma'] = {
  init: function() {
    this.jsonInit(diplomaJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};