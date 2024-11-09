function showSelection(selectedUnit) {
  // Hide all selection divs
  document.getElementById('selection1').style.display = 'none';
  document.getElementById('selection2').style.display = 'none';
  document.getElementById('selection3').style.display = 'none';

  // Show the selected unit's selection div
  document.getElementById(`selection${selectedUnit}`).style.display = 'flex';
}
