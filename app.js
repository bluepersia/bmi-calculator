const calcImperial = document.getElementById ('calc_imperial');
const calcMetric = document.getElementById ('calc_metric');

function setMeasurementSystem (type) 
{
    calcImperial.style.display = 'none';
    calcMetric.style.display = 'none';

    if (type === 'metric')
        calcMetric.style.display = 'inherit';
    else 
        calcImperial.style.display = 'inherit';
}

setMeasurementSystem ('metric');