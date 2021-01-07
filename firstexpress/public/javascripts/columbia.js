function myFunction() {
  // 声明变量
  var input,input2, filter, filter2,table, tr, td, i;
  input = document.getElementById("myInput");
  input2 = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // 循环表格每一行，查找匹配项
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)||(td.innerHTML.toUpperCase().indexOf(filter2) > -1)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function myFunction2() {
  // 声明变量
  var input2, filter, table, tr, td, i;
  input2 = document.getElementById("myInput2");
  filter = input2.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // 循环表格每一行，查找匹配项
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}



