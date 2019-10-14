var facultyJson = {
  "type": "faculty",
  "message0": "פקולטה: %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם הפקולטה"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": "https://mm.tt/1345378278?t=N1DcTVSKuG"
};

Blockly.Blocks['faculty'] = {
  init: function() {
    this.jsonInit(facultyJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};


var unitJson =  {
  "type": "unit",
  "message0": "מחלקה/חוג: %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם המחלקה/חוג"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": "https://mm.tt/1345378278?t=N1DcTVSKuG"
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


var schoolJson = {
  "type": "school",
  "message0": "בית-ספר %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם בית הספר"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": "https://mm.tt/1345378278?t=N1DcTVSKuG"
};

Blockly.Blocks['school'] = {
  init: function() {
    this.jsonInit(schoolJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

var headquarterUnitJson = {
  "type": "headquarter_unit",
  "message0": "יחידת מטה: %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם היחידה"
    },
    {
      "type": "input_value",
      "name": "unit_name"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": "https://mm.tt/1345378278?t=N1DcTVSKuG"
};

Blockly.Blocks['headquarter_unit'] = {
  init: function() {
    this.jsonInit(headquarterUnitJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

var centerUnitJson = {
  "type": "center_unit",
  "message0": "מרכז %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם המרכז"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": "https://mm.tt/1345378278?t=N1DcTVSKuG"
};

Blockly.Blocks['center_unit'] = {
  init: function() {
    this.jsonInit(centerUnitJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

var instituteUnitJson = {
  "type": "institute_unit",
  "message0": "מכון %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "שם המכון"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": "https://mm.tt/1345378278?t=N1DcTVSKuG"
};

Blockly.Blocks['institute_unit'] = {
  init: function() {
    this.jsonInit(instituteUnitJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};