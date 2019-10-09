var CourseJson = {
    "type": "course",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "course_name",
        "text": " שם הקורס"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  }


  Blockly.Blocks['course'] = {
    init: function() {
      this.jsonInit(CourseJson);
      // Assign 'this' to a variable for use in the tooltip closure below.
      var thisBlock = this;
      this.setTooltip(function() {
        return 'Add a number to variable "%1".'.replace('%1',
            thisBlock.getFieldValue('VAR'));
      });
    }
  };
  