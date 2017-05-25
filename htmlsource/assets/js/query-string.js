// /**
//  * Get the value of a querystring
//  * @param  {String} field The field to get the value of
//  * @param  {String} url   The URL to get the value from (optional)
//  * @return {String}       The field value
//  */
// var getQueryString = function(field, url) {
//     var href = url ? url : window.location.href;
//     var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
//     var string = reg.exec(href);
//     return string ? string[1] : null;
// };
// var path = "#!/calulate/estimator/";
// var params = pager.page.route[pager.page.route.length - 1];
//     if (params == "undefined") {
//         params = '';
//     }else{
//         if (getQueryString('unitofmeasurement') != null && getQueryString('unitofmeasurement') == "true") {
//             appmodel.Form().UnitOfMeasure(true);
//         }
//         if (getQueryString('age') != null) {
//             appmodel.Form().Age(getQueryString('age'));
//         }
//         if (getQueryString('gender') != null) {
//             var queryGender = getQueryString('gender')
//             console.log(queryGender);
//             if (queryGender == "m" || queryGender == "male" || queryGender == "Male") {
//                 appmodel.Form().Sex("Male");
//             } else if (queryGender == "f" || queryGender == "female" || queryGender == "Female") {
//                 appmodel.Form().Sex("Female");
//             }
//         }
//         if (getQueryString('race') != null) {
//             var queryRace = getQueryString('race');
//             if(queryRace =="wh"){appmodel.Form().Race("White");}
//             else if(queryRace =="aa"){appmodel.Form().Race("African American");}
//             else if(queryRace =="ot"){appmodel.Form().Race("Other");}
//         }
//         if (getQueryString('hdlCholesterol') != null) {
//             appmodel.Form().HDLCholesterolValue(getQueryString('hdlCholesterol'));
//         }
//         if (getQueryString('hdl') != null) {
//             appmodel.Form().HDLCholesterolValue(getQueryString('hdl'));
//         }
//         if (getQueryString('totalCholesterol') != null) {
//             appmodel.Form().TotalCholesterolValue(getQueryString('totalCholesterol'));
//         }
//         if (getQueryString('chol') != null) {
//             appmodel.Form().TotalCholesterolValue(getQueryString('chol'));
//         }
//         if (getQueryString('bloodPressure') != null || getQueryString('bp') != null) {
//             var bpQuery = (getQueryString('bloodPressure') != null )? getQueryString('bloodPressure') : getQueryString('bp');
//             appmodel.Form().BloodPressure(bpQuery);
//         }
//         if ( getQueryString('hasDiabetes') != null || getQueryString('diab')!= null  ) {
//             var queryDiabetic = (getQueryString('hasDiabetes') != null )? getQueryString('hasDiabetes') : getQueryString('diab');
//             ( queryDiabetic == "t" || queryDiabetic == "true" )? appmodel.Form().Diabetic(true) : appmodel.Form().Diabetic(false);

//         }
//         if (getQueryString('isSmoker') != null || getQueryString('smoker')!= null ) {
//             var smokeQuery = (getQueryString('isSmoker') != null )? getQueryString('isSmoker') : getQueryString('smoker');
//             (smokeQuery == "t" || smokeQuery == "true" )? appmodel.Form().Smoker(true) : appmodel.Form().Smoker(false);
//         }
//         if ( getQueryString('hyp') != null || getQueryString('hasHypertension') != null ) {
//             var hypeQuery = (getQueryString('hyp') != null )? getQueryString('hyp') : getQueryString('hasHypertension');
//             (hypeQuery == "t" || hypeQuery == "true" )? appmodel.Form().Hypertension(true): appmodel.Form().Hypertension(false);
//         }

//         if (appmodel.recommendationUnlock()) {
//             path = "#!/calulate/recommendation/";
//             gaWrapper('send', 'event', 'Primary Function', 'Query String', 'Full Info Recommendation');
//         }else{
//             gaWrapper('send', 'event', 'Navigate', 'Query String', 'Partial Info No Recommendation');
//         }
//     }
// path += params;
// console.log(path);
// pager.navigate(path);