// add \ at the end of each line

document.write('\
\
<a href="index.html" class="clear-bn" style="margin: 5px 0px 0 18px; background-color: limegreen"><== Back</a> <br><br>\
    \
 <input class="filter-box" type="text" id="myInput" onkeyup="filterfn()" placeholder="Type keywords" title="Type\ keywords">   \
    \
    <br>\
    <button class="greek" style="margin: 5px 0px 0 18px" type="button" onclick="filtervalue(3)">γ</button>\
    <button class="greek" type="button" onclick="filtervalue(4)">δ</button>\
    <button class="greek" type="button" onclick="filtervalue(5)">ε</button>\
    <button class="greek" type="button" onclick="filtervalue(8)">θ</button>\
    <button class="greek" type="button" onclick="filtervalue(16)">π</button>\
    <button class="greek" type="button" onclick="filtervalue(17)">ρ</button>\
    <button class="greek" type="button" onclick="filtervalue(18)">σ</button>\
    <button class="greek" type="button" onclick="filtervalue(19)">τ</button>\
    <button class="greek" type="button" onclick="filtervalue(21)">Φ</button>\
    <button class="greek" type="button" onclick="filtervalue(24)">ω</button>\
    \
    <br>\
    <button class="clear-bn" style="margin: 5px 0px 0 18px" type="button" onclick="filtervalue(-1)">Clear</button>\
    \
  <input type="checkbox" id="myCheck" value="Bike" onclick="if(this.checked){detailMode()} else {detailMode()}">Detail<br>\
    \
');
    