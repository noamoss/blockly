var unitJson =
Blockly.Blocks['unit'] =  {
  "type": "unit",
  "message0": "סוג היחידה: %1 %2 %3 שם היחידה: %4 %5 %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "unit_type",
      "options": [
        [
          "",
          ""
        ],
        [
          "יחידת מטה",
          "יחידת מטה"
        ],
        [
          "פקולטה",
          "פקולטה"
        ],
        [
          "החוג/המחלקה ל-",
          "חוג"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "סוג",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "unitName",
      "text": ""
    },
    {
      "type": "input_value",
      "name": "unit_name",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "יחידה ארגונית",
  "helpUrl": ""
};

Blockly.Blocks['unit'] = {
  init: function() {
    this.jsonInit(unitJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};
