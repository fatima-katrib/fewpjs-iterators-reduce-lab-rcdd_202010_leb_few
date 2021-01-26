const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function getTotalBatteries(batteryBatches){ 
  let total=batteryBatches.reduce((total, batch) => total + batch, 0);
}