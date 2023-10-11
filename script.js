$(document).ready(function () {
    function showData() {
        $.ajax({
            type: "get",
            // url: "https://sheetdb.io/api/v1/29bt9hudfwzut",
            dataType: "json",
            success: function (response) {
                swal("Yesss!", "Data Berhasil di tampilkan", "success");
                // console.log(response);
                if (response) {
                    let data = response;
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        // console.log(element);
                        $("#tabel-data").append(`          
            <tr>
                <td>${element.No}.</td>
                <td>${element.Nama}</td>
                <td>${element.No_punggung}</td>
                <td>${element.Ukuran_Baju}</td>
                <td>${element.ket}</td>
            </tr>
            `);
                    }
                }
            },
        });
    }
    showData();
});
