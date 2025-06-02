
function loadRecorderNames() {
  const url = "https://script.google.com/macros/s/AKfycbw_-2CfkcKVZQcH2YLUZ0EeVmWbWMf29HldArVM2vhiLOvKn70cKz3wJrA7Ea0IXR-c6g/exec?action=recorders";

  fetch(url)
    .then(response => response.json())
    .then(names => {
      const tryInsert = () => {
        const select = document.getElementById("recorder");
        if (!select) {
          setTimeout(tryInsert, 100); // wait until element exists
          return;
        }
        select.innerHTML = '<option value="" disabled selected hidden></option>';
        names.forEach(name => {
          const option = document.createElement("option");
          option.value = name;
          option.textContent = name;
          select.appendChild(option);
        });
      };
      tryInsert();
    })
    .catch(error => {
      console.error("ไม่สามารถโหลดรายชื่อผู้บันทึก:", error);
    });
}

loadRecorderNames();
