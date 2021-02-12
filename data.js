
let froms = [[29.4, 0], [49, -19.6], [78.4, -39.2], [0, -19.6], [9.8, -19.6], [39.2, -49], [9.8, -58.8], [19.6, -58.8], [68.6, -58.8], [39.2, -68.8]] 
// let froms = [[29.4, 0], [78.4, -39.2], [0, -19.6], [9.8, -19.6], [39.2, -49], [9.8, -58.8], [19.6, -58.8], [68.6, -58.8], [39.2, -68.8] ] 

let tos = [[39.2, -9.8], [68.6, -39.2], [58.8, 0], [0, -49], [19.6, -9.8], [58.8, -68.8], [0, -68.8], [19.6, -29.4], [88.2, -49], [19.6, -39.2] ]
// let tos = [[39.2, -9.8], [58.8, 0], [0, -49], [19.6, -9.8], [58.8, -68.8], [0, -68.8], [19.6, -29.4], [88.2, -49], [19.6, -39.2] ]

let data =    [
  {
    "startPosition": 4,
    "endPosition": 16,
    "from": "[29.4, 0]",
    "to": "[39.2, -9.8]",
    "snakeorladder": "ladder",
    "headline": "Budget proposes to provide customers option to choose electricity supplier",
    "bodytext": "The Union Budget 2021-22 has taken a futuristic approach on energy sector with stress on renewables, smart metering and use of ‘clean’ technology to generate hydrogen.",
    "image": "https://thefederal.com/file/2020/07/photovoltaic-power-plant-picture-id628661166-672x420.jpg",
    "link": "https://thefederal.com/budget-2021/union-budget-2021-22-stress-on-renewables-smart-metering-and-use-of-clean-technology-to-generate-hydrogen/"
  },
  {
    "startPosition": 26,
    "endPosition": 48,
    "from": "[49, -19.6]",
    "to": "[68.6, -39.2]",
    "snakeorladder": "ladder",
    "headline": "FM sets a target of ₹1.75 lakh crore from disinvestments",
    "bodytext": "The government has budgeted ₹1.75 lakh crore from stake sale in public sector companies and financial institutions, including two PSU banks and one insurance company, in the next fiscal year.",
    "image": "https://thefederal.com/file/2019/08/exchange-rate-graph-with-500-indian-rupee-banknote-and-coins-flat-vector-id1047159122-672x420.jpg",
    "link": "https://thefederal.com/budget-2021/fm-sets-a-target-of-rs-1-75-lakh-crore-from-disinvestments/amp/"
  },
  {
    "startPosition": 49,
    "endPosition": 7,
    "from": "[78.4, -39.2]",
    "to": "[58.8, 0]",
    "snakeorladder": "snake",
    "headline": "Farm budget disappoints, makes little attempt to promote crop diversification",
    "bodytext": "The share of wheat or rice procured by governments hasn't gone up substantially over the years although the finance minister claimed that her government’s payout to farmers had vastly increased.",
    "image": "https://thefederal.com/file/2020/05/rice-696x348.jpg",
    "link": "https://thefederal.com/opinion/budget-for-agriculture-disappoints-makes-little-attempt-to-promote-crop-diversification/"
  },
  {
    "startPosition": 21,
    "endPosition": 60,
    "from": "[0, -19.6]",
    "to": "[0, -49]",
    "snakeorladder": "ladder",
    "headline": "Sitharaman announces setting up of ₹1 lakh crore agri infrastructure fund",
    "bodytext": "The Finance Minister announced the setting up of a ₹1 lakh crore agriculture infrastructure fund for farm-gate infrastructure such as cold chains and post-harvest management structure",
    "image": "https://thefederal.com/file/2020/05/image-8-696x391.png",
    "link": "https://thefederal.com/news/sitharaman-announces-setting-up-of-%e2%82%b91-lakh-crore-agri-infrastructure-fund/"
  },
  {
    "startPosition": 22,
    "endPosition": 18,
    "from": "[9.8, -19.6]",
    "to": "[19.6, -9.8]",
    "snakeorladder": "snake",
    "headline": "Union Budget’s fine print raises worries about the state of railway finances",
    "bodytext": "The budget has been praised for its emphasis on infrastructure and capital spending, but the allocation for Railways suggests continued neglect of India’s single largest enterprise and employer.",
    "image": "https://thefederal.com/file/2019/06/Nirmala-Sitharaman-750x420.jpeg",
    "link": "https://thefederal.com/analysis/union-budgets-fine-print-raises-worries-about-the-state-of-railway-finances/"
  },
  {
    "startPosition": 56,
    "endPosition": 74,
    "from": "[39.2, -49]",
    "to": "[58.8, -68.8]",
    "snakeorladder": "ladder",
    "headline": "COVID-19 relief raised expenditure to ₹34.50L Cr: Sitharaman",
    "bodytext": "The relief measures announced by the government to help the revival of businesses affected by COVID increased the expenditure to ₹34.50 lakh crore in the current fiscal from the ₹30.42 lakh crore budgeted",
    "image": "https://thefederal.com/budget-2021/covid-19-relief-raised-expenditure-to-%E2%82%B934-50l-cr-sitharaman/",
    "link": "https://thefederal.com/budget-2021/covid-19-relief-raised-expenditure-to-%E2%82%B934-50l-cr-sitharaman/"
  },
  {
    "startPosition": 62,
    "endPosition": 80,
    "from": "[9.8, -58.8]",
    "to": "[0, -68.8]",
    "snakeorladder": "ladder",
    "headline": "COVID forces govt to give healthcare its due; 137% jump in outlay",
    "bodytext": "The COVID pandemic has forced the government to do something substantial to improve India’s woefully inadequate public healthcare infrastructure, especially in rural areas",
    "image": "https://thefederal.com/file/2020/05/Untitled-design-83-696x510.jpg",
    "link": "https://thefederal.com/analysis/covid-forces-govt-to-give-healthcare-its-due-137-jump-in-outlay/"
  },
  {
    "startPosition": 63,
    "endPosition": 38,
    "from": "[19.6, -58.8]",
    "to": "[19.6, -29.4]",
    "snakeorladder": "snake",
    "headline": "Farmers decry Budget claims on agricultural income",
    "bodytext": "The Modi government may claim it is doing the utmost for farmers, but the community doesn’t seem impressed with the Finance Minister's announcements for agriculture",
    "image": "https://thefederal.com/file/2021/01/Untitled-32-683x420.jpg",
    "link": "https://thefederal.com/budget-2021/farmers-decry-budget-claims-on-agricultural-income/"
  },
  {
    "startPosition": 68,
    "endPosition": 51,
    "from": "[68.6, -58.8]",
    "to": "[88.2, -49]",
    "snakeorladder": "snake",
    "headline": "New agri cess in Budget: 100% on liquor; ₹2.5/l on petrol, ₹4/l on diesel",
    "bodytext": "The Finance Minister announced a new cess on agriculture development — 100% on alcoholic beverages, ₹2.5 per litre on petrol and ₹4 per litre on diesel — will be applicable from February 2",
    "image": "https://thefederal.com/file/2021/01/pokkali-rice-600x401.jpg",
    "link": "https://thefederal.com/budget-2021/new-agri-cess-in-budget-100-on-liquor-%e2%82%b92-5-l-on-petrol-%e2%82%b94-l-on-diesel/"
  },
  {
    "startPosition": 76,
    "endPosition": 43,
    "from": "[39.2, -68.8]",
    "to": "[19.6, -39.2]",
    "snakeorladder": "snake",
    "headline": "Fiscal deficit at 9.5% for current year, 6.8% for 2021-’22",
    "bodytext": "The Budget estimates the fiscal deficit to be 6.8 per cent in the next fiscal year. It is likely to soar to 9.5 per cent in FY21, much higher than the estimated 3.5 per cent, mainly due to increased spending to tide over the COVID crisis",
    "image": "https://thefederal.com/file/2020/05/migrants-pti-140570505-1589658593-632x420.jpg",
    "link": "https://thefederal.com/budget-2021/fiscal-deficit-at-9-5-for-current-year-6-8-for-2021-22/"
  }
]
// let data =   [
//   {
//     "startPosition": 4,
//     "endPosition": 16,
//     "from": "[29.4, 0]",
//     "to": "[39.2, -9.8]",
//     "snakeorladder": "ladder",
//     "headline": "Budget proposes to provide customers option to choose electricity supplier",
//     "bodytext": "The Union Budget 2021-22 has taken a futuristic approach on energy sector with stress on renewables, smart metering and use of ‘clean’ technology to generate hydrogen.",
//     "image": "https://thefederal.com/file/2020/07/photovoltaic-power-plant-picture-id628661166-672x420.jpg",
//     "link": "https://thefederal.com/budget-2021/union-budget-2021-22-stress-on-renewables-smart-metering-and-use-of-clean-technology-to-generate-hydrogen/"
//   },
//   {
//     "startPosition": 21,
//     "endPosition": 60,
//     "from": "[0, -19.6]",
//     "to": "[0, -49]",
//     "snakeorladder": "ladder",
//     "headline": "Sitharaman announces setting up of ₹1 lakh crore agri infrastructure fund",
//     "bodytext": "Union Finance Minister Nirmala Sitharaman on Friday (May 15) announced setting up of a ₹1 lakh crore agriculture infrastructure fund for farm-gate infrastructure. This fund will be used for setting up cold chains and post-harvest management infrastructure, she said while announcing the third tranche of COVID-19 relief package.",
//     "image": "https://thefederal.com/file/2020/05/image-8-696x391.png",
//     "link": "https://thefederal.com/news/sitharaman-announces-setting-up-of-%e2%82%b91-lakh-crore-agri-infrastructure-fund/"
//   },
//   {
//     "startPosition": 22,
//     "endPosition": 18,
//     "from": "[9.8, -19.6]",
//     "to": "[19.6, -9.8]",
//     "snakeorladder": "snake",
//     "headline": "Union Budget’s fine print raises worries about the state of railway finances",
//     "bodytext": "A closer inspection of the fine print in Finance Minister Nirmala Sitharaman’s once-in-a-lifetime budget reveals it to be less worthy of the initial welcome it immediately received as a harbinger of hope and recovery. Praised immediately for its emphasis on infrastructure and capital spending, the Budget’s spending priorities for the Railways, however, indicate a sleight of hand, a continued shifting of goalposts that makes prior-year comparisons difficult and suggest a continued neglect of India’s single largest enterprise and employer.",
//     "image": "https://thefederal.com/file/2019/06/Nirmala-Sitharaman-750x420.jpeg",
//     "link": "https://thefederal.com/analysis/union-budgets-fine-print-raises-worries-about-the-state-of-railway-finances/"
//   },
//   {
//     "startPosition": 56,
//     "endPosition": 74,
//     "from": "[39.2, -49]",
//     "to": "[58.8, -68.8]",
//     "snakeorladder": "ladder",
//     "headline": "COVID-19 relief raised expenditure to ₹34.50L Cr: Sitharaman",
//     "bodytext": "The relief measures announced by the government to help the revival of businesses affected by the COVID-19 pandemic resulted in a rise in expenditure to ₹34.50 lakh crore in the current fiscal as against ₹30.42 lakh crore budgeted a year back, Finance Minister Nirmala Sitharaman said during the budget session on Monday (February 1).",
//     "image": "https://thefederal.com/budget-2021/covid-19-relief-raised-expenditure-to-%E2%82%B934-50l-cr-sitharaman/",
//     "link": "https://thefederal.com/budget-2021/covid-19-relief-raised-expenditure-to-%E2%82%B934-50l-cr-sitharaman/"
//   },
//   {
//     "startPosition": 62,
//     "endPosition": 80,
//     "from": "[9.8, -58.8]",
//     "to": "[0, -68.8]",
//     "snakeorladder": "ladder",
//     "headline": "COVID forces govt to give healthcare its due; 137% jump in outlay",
//     "bodytext": "Finance Minister Nirmala Sitharaman’s 2021-22 budget for healthcare proves the adage right: that for every negative there is a positive. The COVID-19 pandemic clearly has forced the government to do something substantial to provide muscle to India’s woefully inadequate public healthcare infrastructure.",
//     "image": "https://thefederal.com/file/2020/05/Untitled-design-83-696x510.jpg",
//     "link": "https://thefederal.com/analysis/covid-forces-govt-to-give-healthcare-its-due-137-jump-in-outlay/"
//   },
//   {
//     "startPosition": 63,
//     "endPosition": 38,
//     "from": "[19.6, -58.8]",
//     "to": "[19.6, -29.4]",
//     "snakeorladder": "snake",
//     "headline": "Farmers decry Budget claims on agricultural income",
//     "bodytext": "The Modi government may claim it is doing the utmost for farmers, but the community doesn’t seem impressed with the announcements made by Finance Minister Nirmala Sitharaman for the agriculture sector during her Union Budget speech on Monday (February 1).",
//     "image": "https://thefederal.com/file/2021/01/Untitled-32-683x420.jpg",
//     "link": "https://thefederal.com/budget-2021/farmers-decry-budget-claims-on-agricultural-income/"
//   },
//   {
//     "startPosition": 68,
//     "endPosition": 51,
//     "from": "[68.6, -58.8]",
//     "to": "[88.2, -49]",
//     "snakeorladder": "snake",
//     "headline": "New agri cess in Budget: 100% on liquor; ₹2.5/l on petrol, ₹4/l on diesel",
//     "bodytext": "Union Finance Minister Nirmala Sitharaman, in her Budget speech on Monday, announced a new cess on agriculture development, which will be 100% on alcoholic beverages, ₹2.5 per litre on petrol and ₹4 per litre on diesel. The new agri development cess will be applicable from February 2, 2021, announced the finance minister.",
//     "image": "https://thefederal.com/file/2021/01/pokkali-rice-600x401.jpg",
//     "link": "https://thefederal.com/budget-2021/new-agri-cess-in-budget-100-on-liquor-%e2%82%b92-5-l-on-petrol-%e2%82%b94-l-on-diesel/"
//   },
//   {
//     "startPosition": 76,
//     "endPosition": 43,
//     "from": "[39.2, -68.8]",
//     "to": "[19.6, -39.2]",
//     "snakeorladder": "snake",
//     "headline": "Fiscal deficit at 9.5% for current year, 6.8% for 2021-’22",
//     "bodytext": "Finance Minister Nirmala Sitharaman on Monday said the government estimates fiscal deficit of 6.8 per cent of the gross domestic product (GDP) in the next financial year beginning April 1. The fiscal deficit in 2020-21 is estimated to soar up to 9.5 per cent. This is sharply higher than the 3.5 per cent that was projected in the Budget Estimates last year.",
//     "image": "https://thefederal.com/file/2020/05/migrants-pti-140570505-1589658593-632x420.jpg",
//     "link": "https://thefederal.com/budget-2021/fiscal-deficit-at-9-5-for-current-year-6-8-for-2021-22/"
//   }
// ]