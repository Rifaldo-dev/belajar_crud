document.getElementById('form-penjualan').addEventListener('submit', function(event) {
    const jumlah = document.getElementById('jumlah').value;
    const harga = document.getElementById('harga').value;
    if (jumlah <= 0 || harga <= 0) {
        alert('Jumlah dan Harga harus lebih besar dari nol!');
        event.preventDefault();
    }
});

function fetchData() {
    fetch('fetch_data.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('data-penjualan').innerHTML = data;
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Panggil fetchData untuk memuat data awal
fetchData();
