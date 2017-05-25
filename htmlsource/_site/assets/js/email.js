$("#email").click(
	function() {
	this.href = "mailto:you@yourdomain.com?subject=ASCVD Risk Estimator Recommendation&body=";
    this.href += getBody();
}); 

function getBody() {
	// gaWrapper('send', 'event', 'Navigate', 'Clicked button', 'Email');

	var linebreak = '%0D%0A'
	var doublelinebreak = linebreak+linebreak;
	var body = '';
	// var unitOfMeasure = appmodel.Form().UnitOfMeasure()?'(mmol/L)':'(mg/dL)';
	// body += '-- 10 YEAR RISK: '+ encodeURIComponent(appmodel.Form().TenYearRisk()) + ' -- ';	
	// body += 'LIFETIME RISK: ' + encodeURIComponent(appmodel.Form().yourLifeTimeRisk()) + ' --'+ doublelinebreak;	
	// body += '--RECOMMENDATION--'+ doublelinebreak;	
	// body += encodeURIComponent(appmodel.recommendationType().title) + doublelinebreak;
	// body += encodeURIComponent(appmodel.recommendationType().email) + doublelinebreak;
	// body += '--PATIENT INFORMATION--'+ linebreak;	
	// body += 'DEMOGRAPHICS'+ linebreak;	
	// body += ' %E2%80%A2 Sex: '+ appmodel.Form().Sex() + linebreak;	
	// body += ' %E2%80%A2 Race: '+ appmodel.Form().Race() + linebreak;
	// body += ' %E2%80%A2 Age: '+ appmodel.Form().Age() + linebreak;
	// body += linebreak;
	// body += 'LABS'+ linebreak;	
	// body += ' %E2%80%A2 Total Chol: '+ appmodel.Form().TotalCholesterolValue() + unitOfMeasure + linebreak;
	// body += ' %E2%80%A2 HDL Chol: '+ appmodel.Form().HDLCholesterolValue() + unitOfMeasure + linebreak;
	// body += ' %E2%80%A2 Systolic Blood Pressure: '+ appmodel.Form().BloodPressure() + linebreak;
	// body += linebreak;
	// body += 'PERSONAL HISTORY'+ linebreak;	
	// body += ' %E2%80%A2 Diabetic: '+ appmodel.Form().Diabetic() + linebreak;
	// body += ' %E2%80%A2 Smoker: '+ appmodel.Form().Smoker() + linebreak;
	// body += ' %E2%80%A2 Hypertension Treatment: '+ appmodel.Form().Hypertension();
	// body += linebreak;
	// body += '  LIFESTYLE RECOMMENDATIONS'+ linebreak;	
	// body += 'AHA/ACC guidelines stress the importance of lifestyle modifications to lower cardiovascular disease risk. This includes eating a heart-healthy diet, regular aerobic exercises, maintenance of desirable body weight and avoidance of tobacco products.';
	// console.log(body);
	return body;

}