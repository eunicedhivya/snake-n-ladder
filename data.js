
let froms = [[29.4, 0],[88.2, 0],[29.4, -9.8],[0, -19.6],[9.8, -19.6],[49, -19.6],[78.4, -29.4],[68.6, -29.4],[39.2, -49],[9.8, -58.8],[19.6, -58.8],[68.6, -58.8],[78.4, -58.8],[39.2, -68.8],[9, -78.4],[68.6, -78.4],[9.8, -88.2]];

let tos = [[39.2, -9.8], [49, 0], [9.8, -29.4], [0, -49], [19.6, -9.8], [49, -29.4], [68.6, -39.2], [58.8, -9.8], [58.8, -68.8], [0, -68.8], [19.6, -29.4], [88.2, -49], [78.4, -39.2], [19.6, -39.2], [58.8, -88.2], [88.2, -68.8], [9.8, -78.4] ];

let data = [
    {
      "startPosition": 4,
      "endPosition": 16,
      "from": "[29.4, 0]",
      "to": "[39.2, -9.8]",
      "snakeorladder": "ladder",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 10,
      "endPosition": 6,
      "from": "[88.2, 0]",
      "to": "[49, 0]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 17,
      "endPosition": 39,
      "from": "[29.4, -9.8]",
      "to": "[9.8, -29.4]",
      "snakeorladder": "ladder",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 21,
      "endPosition": 60,
      "from": "[0, -19.6]",
      "to": "[0, -49]",
      "snakeorladder": "ladder",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 22,
      "endPosition": 18,
      "from": "[9.8, -19.6]",
      "to": "[19.6, -9.8]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 26,
      "endPosition": 35,
      "from": "[49, -19.6]",
      "to": "[49, -29.4]",
      "snakeorladder": "ladder",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 32,
      "endPosition": 48,
      "from": "[78.4, -29.4]",
      "to": "[68.6, -39.2]",
      "snakeorladder": "ladder",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 33,
      "endPosition": 14,
      "from": "[68.6, -29.4]",
      "to": "[58.8, -9.8]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 56,
      "endPosition": 74,
      "from": "[39.2, -49]",
      "to": "[58.8, -68.8]",
      "snakeorladder": "ladder",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 62,
      "endPosition": 80,
      "from": "[9.8, -58.8]",
      "to": "[0, -68.8]",
      "snakeorladder": "ladder",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 63,
      "endPosition": 38,
      "from": "[19.6, -58.8]",
      "to": "[19.6, -29.4]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 68,
      "endPosition": 51,
      "from": "[68.6, -58.8]",
      "to": "[88.2, -49]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 69,
      "endPosition": 49,
      "from": "[78.4, -58.8]",
      "to": "[78.4, -39.2]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 76,
      "endPosition": 43,
      "from": "[39.2, -68.8]",
      "to": "[19.6, -39.2]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 86,
      "endPosition": 94,
      "from": "[9, -78.4]",
      "to": "[58.8, -88.2]",
      "snakeorladder": "ladder",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 88,
      "endPosition": 71,
      "from": "[68.6, -78.4]",
      "to": "[88.2, -68.8]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    },
    {
      "startPosition": 99,
      "endPosition": 82,
      "from": "[9.8, -88.2]",
      "to": "[9.8, -78.4]",
      "snakeorladder": "snake",
      "headline": "headline goes here",
      "bodytext": "Nullam mattis erat vitae turpis venenatis, sed dapibus enim lacinia.",
      "image": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg",
      "link": "https://thefederal.com/file/2020/06/Untitled-design-2020-06-15T192954.729-696x433.jpg"
    }
  ]