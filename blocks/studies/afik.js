var afikJson = {
  "type": "afik",
  "message0": "אפיק %1 %2 %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "afik_name",
      "text": "שם האפיק"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "afik_content",
      "check": [
        "admission_prerequisites",
        "step"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "אפיק הוא אוסף של שלבים ותנאי קבלה, המאפשרים הגעה אל היעד/תעודה שהוגדרו לתכנית. כל אפיק בנוי מהגדרת תנאי קבלה ומשלבי הלימודים. השימוש באפיקים יאפשר הגדרה של תנאי קבלה ומעבר מותאמים לכל תכנית, לצד האפשרות להתאים את הרכב הקורסים לקהלים או אילוצי זמנים (למשל, הוספת סמסטר קיץ לקהל מסויים בתכנית, תוך התאמת תנאי הקבלה לתכנית למי שסיימו בהצלחה את הסמסטר המקדים). ",
  "helpUrl": ""
}
      
Blockly.Blocks['afik'] = {
  init: function() {
    this.jsonInit(afikJson);
  }
};