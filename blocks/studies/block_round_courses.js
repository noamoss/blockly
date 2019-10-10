var blockRoundCoursesJson = {
  "type": "block_round_courses",
  "message0": "בלוק-סבב %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "Course"
    }
  ],
  "colour": 330,
  "tooltip": "קורסים בבלוק-סבב הם אסופה של קורסים שההרשמה והליודים בהם יתבצעו בסבב בין הסטודנטים לאורך השלב, על סדר שיפורסם מראש",
  "helpUrl": ""
};
    
Blockly.Blocks['block_round_courses'] = {
  init: function() {
    this.jsonInit(blockRoundCoursesJson);
  }
};