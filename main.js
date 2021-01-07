function search() {
  alert("ssss")
    // 声明变量
    $(function () {
      $.ajax({
        url: '/queryAll',
        success: function (res) {
          console.log(res)
          let places = res;
          let html = ``
          for (let item of places) {
            console.log(item)
            html += `<tr>
            <td>${item.name}</td>
            <td>${item.number}</td>
            </tr>
            `
          }
          $('#teble tbody').html(html)
        }
      })
    })

/*
    let input,input2, filter, filter2,table, tr, td, i;
    input = document.getElementById("myInput");
    input2 = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    console.log(filter)
    console.log(filter2)
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // 循环表格每一行，查找匹配项
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];
      if (td) {
      let tmpstr=td.innerHTML.toUpperCase();
      let tmpstr2=td2.innerHTML.toUpperCase();
      console.log(tmpstr)
      console.log(tmpstr2)
        if ((tmpstr.indexOf(filter) > -1)||(tmpstr2.indexOf(filter2) > -1)) {
          tr[i].hidden = false;
        } else {
          tr[i].hidden = true;
        }
      } 
    }
    */
  }
  
  function del(obj){
      obj.parentNode.parentNode.remove();
  }

  function add(){
    var aInput = document.getElementsByTagName('input');//读取所有input形成一个数组
    var table = document.getElementById("myTable");//取得表格
    var oTr=document.createElement('tr');//给该表格创建tr节点
    table.appendChild(oTr);//创建table的子节点tr
    
    for(var i = 0; i < aInput.length-1; i ++){
        var oTd=document.createElement('td');//创建td节点
        oTd.innerHTML=aInput[i].value;//给创建的td节点赋值
        oTr.appendChild(oTd);//将创建的td交给oTr节点tr
    }
}