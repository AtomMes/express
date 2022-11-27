// skzbum tsconfigum nenc enq anum vor ts i faylery inqy js sarqi u qci dist papki mej
//!   "outDir": "./dist",
//arvuma nra hamar vor inspect karenanq tanq, ts in chnq karum eli

//heto et papki faylerin hetevum enq sovorakan dzevov
//!  yarn nodemon --inspect  .\dist\index.js
//brauzer qcelu hamara

//vor amen angam fayli mej popoxutyun aneluc inqy iran iran ts-y js sarqi
//! yarn tsc -w
// yarnin asum enq tsc faylery js sarqi, -w watcherna vor heteva ts faylerin, iran iran sarqi


//! package json um scripteri mej inch enq grum
const x = {
  scripts: {
    watch: "tsc -w",//yarn el chenq grum vorovhetev meka yarnov enq kanchelu et andery 
    dev: "nodemon .\\dist\\index.js",
  },
};
