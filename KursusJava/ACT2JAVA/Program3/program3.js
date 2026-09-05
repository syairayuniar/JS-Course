function Kursi (jenis, warna, bahan) {
    this.jenis = jenis;
    this.warna = warna;
    this.bahan = bahan;
    this.result = function () {
        alert(this.jenis + " dengan warna " + this.warna + " dan menggunakan bahan " + this.bahan + " telah selesai dibuat");
    };
}

var kursi1 = new Kursi ("Sofa", "Putih", "Kain");
kursi1.result();