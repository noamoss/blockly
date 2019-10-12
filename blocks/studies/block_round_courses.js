var blockRoundCoursesJson = {
  "type": "block_round_courses",
  "message0": "בלוק-סבב קורסים %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "course"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "קורסים בבלוק-סבב הם אסופה של קורסים שההרשמה והליודים בהם יתבצעו בסבב בין הסטודנטים לאורך השלב, על סדר שיפורסם מראש",
  "helpUrl": ""
};
    
Blockly.Blocks['block_round_courses'] = {
  init: function() {
    this.jsonInit(blockRoundCoursesJson);
  }
};