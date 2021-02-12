
// let froms = [[29.4, 0],[88.2, 0],[29.4, -9.8],[0, -19.6],[9.8, -19.6],[49, -19.6],[78.4, -29.4],[68.6, -29.4],[39.2, -49],[9.8, -58.8],[19.6, -58.8],[68.6, -58.8],[78.4, -58.8],[39.2, -68.8],[9, -78.4],[68.6, -78.4],[9.8, -88.2]];
let froms = [[29.4, 0],[88.2, 0],[29.4, -9.8],[0, -19.6],[9.8, -19.6],[49, -19.6],[78.4, -29.4],[68.6, -29.4],[39.2, -49],[9.8, -58.8],[19.6, -58.8],[68.6, -58.8],[78.4, -58.8],[39.2, -68.8],[9, -78.4],[68.6, -78.4],[9.8, -88.2]]


// let tos = [[39.2, -9.8], [49, 0], [9.8, -29.4], [0, -49], [19.6, -9.8], [49, -29.4], [68.6, -39.2], [58.8, -9.8], [58.8, -68.8], [0, -68.8], [19.6, -29.4], [88.2, -49], [78.4, -39.2], [19.6, -39.2], [58.8, -88.2], [88.2, -68.8], [9.8, -78.4] ];

let tos = [[39.2, -9.8],[49, 0],[9.8, -29.4],[0, -49],[19.6, -9.8],[49, -29.4],[68.6, -39.2],[58.8, -9.8],[58.8, -68.8],[0, -68.8],[19.6, -29.4],[88.2, -49],[78.4, -39.2],[19.6, -39.2],[58.8, -88.2],[88.2, -68.8],[9.8, -78.4],]

let data =  [
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
    "startPosition": 10,
    "endPosition": 6,
    "from": "[88.2, 0]",
    "to": "[49, 0]",
    "snakeorladder": "snake",
    "headline": "Union Budget’s fine print raises worries about the state of railway finances",
    "bodytext": "A closer inspection of the fine print in Finance Minister Nirmala Sitharaman’s once-in-a-lifetime budget reveals it to be less worthy of the initial welcome it immediately received as a harbinger of hope and recovery. Praised immediately for its emphasis on infrastructure and capital spending, the Budget’s spending priorities for the Railways, however, indicate a sleight of hand, a continued shifting of goalposts that makes prior-year comparisons difficult and suggest a continued neglect of India’s single largest enterprise and employer.",
    "image": "https://thefederal.com/file/2019/06/Nirmala-Sitharaman-750x420.jpeg",
    "link": "https://thefederal.com/analysis/union-budgets-fine-print-raises-worries-about-the-state-of-railway-finances/"
  },
  {
    "startPosition": 17,
    "endPosition": 39,
    "from": "[29.4, -9.8]",
    "to": "[9.8, -29.4]",
    "snakeorladder": "ladder",
    "headline": "Sitharaman announces setting up of ₹1 lakh crore agri infrastructure fund",
    "bodytext": "Union Finance Minister Nirmala Sitharaman on Friday (May 15) announced setting up of a ₹1 lakh crore agriculture infrastructure fund for farm-gate infrastructure. This fund will be used for setting up cold chains and post-harvest management infrastructure, she said while announcing the third tranche of COVID-19 relief package.",
    "image": "https://thefederal.com/file/2020/05/image-8-696x391.png",
    "link": "https://thefederal.com/news/sitharaman-announces-setting-up-of-%e2%82%b91-lakh-crore-agri-infrastructure-fund/"
  },
  {
    "startPosition": 21,
    "endPosition": 60,
    "from": "[0, -19.6]",
    "to": "[0, -49]",
    "snakeorladder": "ladder",
    "headline": "COVID-19 relief raised expenditure to ₹34.50L Cr: Sitharaman",
    "bodytext": "The relief measures announced by the government to help the revival of businesses affected by the COVID-19 pandemic resulted in a rise in expenditure to ₹34.50 lakh crore in the current fiscal as against ₹30.42 lakh crore budgeted a year back, Finance Minister Nirmala Sitharaman said during the budget session on Monday (February 1).",
    "image": "https://thefederal.com/budget-2021/covid-19-relief-raised-expenditure-to-%E2%82%B934-50l-cr-sitharaman/",
    "link": "https://thefederal.com/budget-2021/covid-19-relief-raised-expenditure-to-%E2%82%B934-50l-cr-sitharaman/"
  },
  {
    "startPosition": 22,
    "endPosition": 18,
    "from": "[9.8, -19.6]",
    "to": "[19.6, -9.8]",
    "snakeorladder": "snake",
    "headline": "Farmers decry Budget claims on agricultural income",
    "bodytext": "The Modi government may claim it is doing the utmost for farmers, but the community doesn’t seem impressed with the announcements made by Finance Minister Nirmala Sitharaman for the agriculture sector during her Union Budget speech on Monday (February 1).",
    "image": "https://thefederal.com/file/2021/01/Untitled-32-683x420.jpg",
    "link": "https://thefederal.com/budget-2021/farmers-decry-budget-claims-on-agricultural-income/"
  },
  {
    "startPosition": 26,
    "endPosition": 35,
    "from": "[49, -19.6]",
    "to": "[49, -29.4]",
    "snakeorladder": "ladder",
    "headline": "Staving off recession: Big 8 proposals of Budget 2021",
    "bodytext": "Union Budget 2021-22 introduced a slew of measures to lift up the economy, which is reeling under the negative impact of coronavirus pandemic.",
    "image": "https://thefederal.com/file/2021/02/iStock-979940504-630x420.jpg",
    "link": "https://thefederal.com/budget-2021/staving-off-recession-big-8-proposals-of-budget-2021/"
  },
  {
    "startPosition": 32,
    "endPosition": 48,
    "from": "[78.4, -29.4]",
    "to": "[68.6, -39.2]",
    "snakeorladder": "ladder",
    "headline": "FM sets a target of ₹1.75 lakh crore from disinvestments",
    "bodytext": "The government on Monday budgeted Rs 1.75 lakh crore from stake sale in public sector companies and financial institutions, including two PSU banks and one insurance company, in the next fiscal year. Unveiling the PSE policy in Budget 2021-22, Finance Minister Nirmala Sitharaman said barring four strategic areas, public sector companies in other sectors will be divested. The policy would give a clear roadmap for disinvestment in strategic and nonstrategic sectors. Unveiling the PSE policy in Budget 2021-22, Finance Minister Nirmala Sitharaman said barring four strategic areas, public sector companies in other sectors will be divested. The policy would give a clear roadmap for disinvestment in strategic and nonstrategic sectors.",
    "image": "https://thefederal.com/file/2019/08/exchange-rate-graph-with-500-indian-rupee-banknote-and-coins-flat-vector-id1047159122-672x420.jpg",
    "link": "https://thefederal.com/budget-2021/fm-sets-a-target-of-rs-1-75-lakh-crore-from-disinvestments/amp/"
  },
  {
    "startPosition": 33,
    "endPosition": 14,
    "from": "[68.6, -29.4]",
    "to": "[58.8, -9.8]",
    "snakeorladder": "snake",
    "headline": "Budget allocates Rs 73,000 crore to MGNREGA scheme",
    "bodytext": "The Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGA) has been allocated Rs 73,000 crore for the fiscal year 2021, an increase of more than Rs 63,000 crore against Rs 9,500 crore in 2020.",
    "image": "https://thefederal.com/file/2020/07/mgn-696x392.jpg",
    "link": "https://thefederal.com/budget-2021/budget-allocates-rs-73000-crore-to-mgnrega-scheme/"
  },
  {
    "startPosition": 56,
    "endPosition": 74,
    "from": "[39.2, -49]",
    "to": "[58.8, -68.8]",
    "snakeorladder": "ladder",
    "headline": "Farm procurement increased, credit target hiked: FM in Budget speech",
    "bodytext": "Union Finance Minister Nirmala Sitharaman on Monday said the Centre is committed to the welfare of farmers, while making several Budget announcements related to the farm sector, even as the farmers’ protest outside Delhi continue against the government’s agri reforms.",
    "image": "https://thefederal.com/file/2021/01/Untitled-32-683x420.jpg",
    "link": "https://thefederal.com/budget-2021/farm-procurement-increased-credit-target-hiked-fm-in-budget-speech/"
  },
  {
    "startPosition": 62,
    "endPosition": 80,
    "from": "[9.8, -58.8]",
    "to": "[0, -68.8]",
    "snakeorladder": "ladder",
    "headline": "Budget: Centre’s largesse for West Bengal just ahead of elections",
    "bodytext": "Union Finance Minister Nirmala Sitharaman on Monday tried to woo voters of West Bengal along with other poll-bound states, announcing mega infrastructure and welfare projects. Presenting her third budget, the minister announced ₹25,000 crore for 675 kms of highway works in the state, including up-gradation of the existing Kolkata-Siliguri road connectivity.",
    "image": "https://thefederal.com/file/2021/02/traffic-on-highway-with-cars-picture-id513106144-683x420.jpg",
    "link": "https://thefederal.com/budget-2021/budget-centres-largesse-for-west-bengal-just-ahead-of-elections/"
  },
  {
    "startPosition": 63,
    "endPosition": 38,
    "from": "[19.6, -58.8]",
    "to": "[19.6, -29.4]",
    "snakeorladder": "snake",
    "headline": "New agri cess in Budget: 100% on liquor; ₹2.5/l on petrol, ₹4/l on diesel",
    "bodytext": "Union Finance Minister Nirmala Sitharaman, in her Budget speech on Monday, announced a new cess on agriculture development, which will be 100% on alcoholic beverages, ₹2.5 per litre on petrol and ₹4 per litre on diesel. The new agri development cess will be applicable from February 2, 2021, announced the finance minister.",
    "image": "https://thefederal.com/file/2021/01/pokkali-rice-600x401.jpg",
    "link": "https://thefederal.com/budget-2021/new-agri-cess-in-budget-100-on-liquor-%e2%82%b92-5-l-on-petrol-%e2%82%b94-l-on-diesel/"
  },
  {
    "startPosition": 68,
    "endPosition": 51,
    "from": "[68.6, -58.8]",
    "to": "[88.2, -49]",
    "snakeorladder": "snake",
    "headline": "No equity investment in bad bank proposed in Budget: Debashish Panda",
    "bodytext": "Financial services secretary Debashish Panda has said the government will not invest any equity in the bad bank proposed in the Union budget, and that commercial banks will have to create and manage it on their own. Finance Minister Nirmala Sitharaman in her post-Budget presser on February 1 had said that the creation of a ‘bad bank’ would allow the banks reeling under stressed assets to clear up their balance sheets. A bad bank buys stressed assets from banks and pursues loan recovery on its own, even as banks with cleaned-up balance sheets begin lending again.",
    "image": "https://thefederal.com/file/2019/07/Bad-loan-696x399.jpg",
    "link": "https://thefederal.com/business/no-equity-investment-in-bad-bank-proposed-in-budget-debashish-panda/"
  },
  {
    "startPosition": 69,
    "endPosition": 49,
    "from": "[78.4, -58.8]",
    "to": "[78.4, -39.2]",
    "snakeorladder": "snake",
    "headline": "Budget reflects Centre’s intent to disinvest in PSEs: NITI Aayog chief",
    "bodytext": "The Budget 2021 reflects the government’s intent for disinvestment of public sector enterprises, even though it plans to retain public sector units in four strategic areas, NITI Aayog CEO Amitabh Kant said in an interview with Mint. While presenting the Union Budget on Monday, Finance Minister Nirmala Sitharaman said that the government has initiated strategic disinvestment in BPCL, Air India, Shipping Corporation of India, Container Corporation of India, IDBI Bank, BEML, Pawan Hans and Neelachal Ispat Nigam Limited among others.",
    "image": "https://thefederal.com/file/2020/12/Untitled-design-38-683x420.jpg",
    "link": "https://thefederal.com/budget-2021/budget-2021-reflects-centres-intent-to-disinvest-in-pses-niti-aayog-chief/"
  },
  {
    "startPosition": 76,
    "endPosition": 43,
    "from": "[39.2, -68.8]",
    "to": "[19.6, -39.2]",
    "snakeorladder": "snake",
    "headline": "Infra push in Budget? The devil, as usual, lies in the details",
    "bodytext": "A day after the Budget was tabled in the Parliament, the expansionary budget announcements for FY22 are being widely hailed, with investors upbeat about the mega capital expenditure plan outlined in the document without imposing any new levy on taxpayers.",
    "image": "https://thefederal.com/file/2020/01/images-2-4-696x406.jpg",
    "link": "https://thefederal.com/budget-2021/infra-push-in-budget-reality-is-lower-allocation-hike-in-pvt-investments/"
  },
  {
    "startPosition": 86,
    "endPosition": 94,
    "from": "[9, -78.4]",
    "to": "[58.8, -88.2]",
    "snakeorladder": "ladder",
    "headline": "COVID forces govt to give healthcare its due; 137% jump in outlay",
    "bodytext": "Finance Minister Nirmala Sitharaman’s 2021-22 budget for healthcare proves the adage right: that for every negative there is a positive. The COVID-19 pandemic clearly has forced the government to do something substantial to provide muscle to India’s woefully inadequate public healthcare infrastructure.",
    "image": "https://thefederal.com/file/2020/05/Untitled-design-83-696x510.jpg",
    "link": "https://thefederal.com/analysis/covid-forces-govt-to-give-healthcare-its-due-137-jump-in-outlay/"
  },
  {
    "startPosition": 88,
    "endPosition": 71,
    "from": "[68.6, -78.4]",
    "to": "[88.2, -68.8]",
    "snakeorladder": "snake",
    "headline": "Fiscal deficit at 9.5% for current year, 6.8% for 2021-’22",
    "bodytext": "Finance Minister Nirmala Sitharaman on Monday said the government estimates fiscal deficit of 6.8 per cent of the gross domestic product (GDP) in the next financial year beginning April 1. The fiscal deficit in 2020-21 is estimated to soar up to 9.5 per cent. This is sharply higher than the 3.5 per cent that was projected in the Budget Estimates last year.",
    "image": "https://thefederal.com/file/2020/05/migrants-pti-140570505-1589658593-632x420.jpg",
    "link": "https://thefederal.com/budget-2021/fiscal-deficit-at-9-5-for-current-year-6-8-for-2021-22/"
  },
  {
    "startPosition": 99,
    "endPosition": 82,
    "from": "[9.8, -88.2]",
    "to": "[9.8, -78.4]",
    "snakeorladder": "snake",
    "headline": "Farm budget disappoints, makes little attempt to promote crop diversification",
    "bodytext": "There hasn’t been a big increase in the share of wheat or rice procured by the previous or present governments though Finance Minister Nirmala Sitharaman tried to score points with the Opposition in her budget speech by claiming that her government’s payout to farmers had vastly increased.",
    "image": "https://thefederal.com/file/2020/05/rice-696x348.jpg",
    "link": "https://thefederal.com/opinion/budget-for-agriculture-disappoints-makes-little-attempt-to-promote-crop-diversification/"
  },
  {
    "startPosition": null,
    "endPosition": null,
    "from": null,
    "to": null,
    "snakeorladder": "ladder",
    "headline": "Boost for affordable housing: Additional tax cut of ₹1.5 lakh for interest extended",
    "bodytext": "In an attempt to encourage the housing sector, Finance Minister Nirmala Sitharaman on Monday (February 1) proposed to give a tax holiday for more than one year till March 2022, also extending exemption available for purchase of affordable housing.“This Government sees ‘housing for all’ and affordable housing as priority areas,” she said while presenting the Union Budget 2021.",
    "image": "https://thefederal.com/file/2019/07/Houses-672x420.jpg",
    "link": "https://thefederal.com/budget-2021/boost-for-affordable-housing-additional-tax-cut-of-rs-1-5-lakh-for-interest-extended/"
  }
]