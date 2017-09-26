var formdata ={
	sex:[
		{text:"Male", value:"1"},
		{text:"Female",value:"0.85"}
	],
	cha2ds2:[
		{id:'0', htmlID:'cv2-chflv',text:'CHF/LV dysfunction',value:'1'},
		{id:'1', htmlID:'cv2-hypertension',text:'Hypertension',value:'1'},
		{id:'2', htmlID:'cv2-age65',text:'Age 65-74',value:'1'},
		{id:'3', htmlID:'cv2-age75',text:'Age > 75',value:'2'},
		{id:'4', htmlID:'cv2-diabetes',text:'Diabetes (Type 1 or 2',value:'1'},
		{id:'5', htmlID:'cv2-tiastroke',text:'TIA or Stroke',value:'2'},
		{id:'6', htmlID:'cv2-vasculardisease',text:'Vascular Disease History',value:'1'},
		{id:'7', htmlID:'cv2-female',text:'Female',value:'1'}
		],
	hasbled:[
		{ id:'0',htmlID:'hb-hypertension',text:'Hypertension',value:'1'},
		{ id:'1',htmlID:'hb-renalfunction',text:'Abnormal Renal Function',value:'1'},
		{ id:'2',htmlID:'hb-liverfunction',text:'Abnormal Liver Function',value:'1'},
		{ id:'3',htmlID:'hb-tiastroke',text:'TIA or Stroke',value:'1'},
		{ id:'4',htmlID:'hb-majorbleed',text:'History of Major Bleeding',value:'1'},
		{ id:'5',htmlID:'hb-liabile',text:'History of Labile INR',value:'1'},
		{ id:'6',htmlID:'hb-age65',text:'Age > 65',value:'1'},
		{ id:'7',htmlID:'hb-alcohol',text:'Current “excess” of Alcohol',value:'1'},
		{ id:'8',htmlID:'hb-antiplatelet',text:'Currently taking antiplatelet drug(s) or NSAID(s)',value:'0'},
	],
	antiplatelet:[
		{id:'0',htmlID:'a-aspirin',text:'Regularly taking aspirin (any dose)?',value:'1'},
		{id:'1',htmlID:'a-drugs-prasugrel',text:'Taking prasugrel?',value:'1'},
		{id:'2',htmlID:'a-drugs-ticagrelor',text:'Taking ticagrelor?',value:'1'},
		{id:'3',htmlID:'a-drugs-cilostazol',text:'Taking clopidogrel?',value:'1'},
		{id:'4',htmlID:'a-drugs',text:'Taking cilostazol?',value:'1'},
	],	
	otherfactors:[
		// {id:'2',htmlID:'o-heartvalve',text:'Mechanical Heart Valve?',value:'1'},
		{id:'3',htmlID:'o-revasc',text:'After Coronary revasc?',value:'1'},
	],
	scale:[
		{
			imperial:[{
					"usage":'US',
					"weight":"lbs"
				}],
		}
		],
	therapyOptions:[
		{
			id:'0', 
			drungInteractions:'Drug Interactions about No',
			sideEffects:"Major Side Effects about No Therapy",
			dose:'Alternate Dose',
			standardDose:'No Therapy',
			text:'No Therapy',
			modifier:''
		},
		{
			id:'1',
			drungInteractions:'Drug Interactions about Apixaban',
			sideEffects:"Major Side Effects about Apixaban",
			dose:'Alternate Dose',
			standardDose:'Apixaban 5mg twice daily',
			text:'Apixaban 5mg 2/d',
			modifier:'0.2607' //actual value for calculation of Apixaban 5mg twice daily modifier is 0.79*0.33
		},
		{
			id:'2',
			drungInteractions:'Drug Interactions about Aspirin',
			sideEffects:"Major Side Effects about Aspirin",
			dose:'Alternate Dose',
			standardDose:'Aspirin 80-325mg daily',
			text:'Aspirin 80-325mg/d',
			modifier:'0.78'
		},
		{	id:'3',
			drungInteractions:'Drug Interactions about Aspirin',
			sideEffects:"Major Side Effects about Aspirin",
			dose:'Alternate Dose',
			standardDose:'Aspirin 75-100mg daily + Clopidogrel 75mg daily',
			text:'Aspirin 75-100mg/d + Clopidogrel 75mg daily',
			modifier:'0.56'
		},
		{
			id:'4',
			drungInteractions:'Drug Interactions about Dabigatran',
			sideEffects:"Major Side Effects about Dabigatran 110mg",
			dose:'Alternate Dose',
			standardDose:'Dabigatran 110mg twice daily',
			text:'Dabigatran 110mg 2/d',
			modifier:'0.33'
		},
		{
			id:'5',
			drungInteractions:'Drug Interactions about Dabigatran',
			sideEffects:"Major Side Effects about Dabigatran 150mg",
			dose:'Alternate Dose',
			standardDose:'Dabigatran 150mg twice daily',
			text:'Dabigatran 150mg 2/d',
			modifier:'0.2145' //actual value for calculation of Dabigatran 150mg twice daily modifier is 0.33x0.65
		},
		{
			id:'6',
			drungInteractions:'Drug Interactions about Edoxaban',
			sideEffects:"Major Side Effects about Edoxaban",
			dose:'Alternate Dose',
			standardDose:'Edoxaban 30mg once daily',
			text:'Edoxaban 30mg/d',
			modifier:'0.33'
		},
		{
			id:'7',
			drungInteractions:'Drug Interactions about Edoxaban',
			sideEffects:"Major Side Effects about Edoxaban",
			dose:'Alternate Dose',
			standardDose:'Edoxaban 60mg once daily',
			text:'Edoxaban 60mg/d',
			modifier:'0.33'
		},
		{
			id:'8',
			drungInteractions:'Drug Interactions about Rivaroxaban',
			sideEffects:"Major Side Effects about Rivaroxaban",
			dose:'Alternate Dose',
			standardDose:'Rivaroxaban 20mg once daily',
			text:'Rivaroxaban 20mg/d',
			modifier:'0.33'
		},
		{
			id:'9',
			drungInteractions:'Drug Interactions about Warfarin',
			sideEffects:"Major Side Effects about Warfarin",
			dose:'Alternate Dose',
			standardDose:'Warfarin INR 2-3',
			text:'Warfarin INR 2-3',
			modifier:'0.33'
		},
	]
}