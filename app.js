const calcImperial = document.getElementById ('calc_imperial');
const calcMetric = document.getElementById ('calc_metric');

document.querySelector ('.form').addEventListener ('change', function (e)
{
    if (e.target.id === 'metric')
        setMeasurementSystem ('metric');
    else if (e.target.id === 'imperial')
        setMeasurementSystem ('imperial');
});

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