# 📦 JavaScript Utilities (`io.js`)

Kumpulan fungsi JavaScript reusable yang digunakan dalam proyek berbasis jQuery, Select2, Flatpickr, AutoNumeric, dan AJAX.  
File ini dibuat untuk mempercepat proses manipulasi form, formatting, lokasi dinamis, notifikasi, dan preview file.

---

## 📁 Daftar Fungsi

### 📝 Form & Data Handling

| Fungsi               | Deskripsi                                                                 |
|----------------------|---------------------------------------------------------------------------|
| `get_form_data($form)` | Ambil data dari form (jQuery object) dan ubah jadi object JS             |
| `get_selected_page()` | Hitung nomor halaman berdasarkan input `+1`, `-1`, atau angka langsung    |

---

### 💰 Format Angka & Teks

| Fungsi             | Deskripsi                                                               |
|--------------------|------------------------------------------------------------------------|
| `add_commas()`     | Tambahkan titik ribuan pada angka (misalnya `1000 → 1.000`)             |
| `remove_commas()`  | Ubah angka berformat lokal ke format JS (`1.000,00 → 1000.00`)         |
| `remove_space()`   | Hapus semua spasi dari string                                          |
| `format_date()`    | Ubah format `YYYY-MM-DD → DD-MM-YYYY`                                  |
| `format_time()`    | Ambil jam dan menit dari string waktu (`HH:mm:ss → HH:mm`)            |

---

### ⚠️ Error Handling

| Fungsi           | Deskripsi                                                                 |
|------------------|---------------------------------------------------------------------------|
| `error_handle()` | Tampilkan pesan error pada elemen dengan ID `#field_error_content` dan sejenisnya |

---

### 🎛️ Form Elements & Plugin Init

| Fungsi               | Deskripsi                                                                 |
|----------------------|---------------------------------------------------------------------------|
| `init_select2()`     | Inisialisasi semua elemen dengan `data-control="select2"` atau `data-kt-select2="true"` |
| `init_form_element()`| Jalankan semua plugin input: Select2, Flatpickr, AutoNumeric, Datepicker |

---

### 🌍 Dynamic Location (API Lokal)

| Fungsi              | Deskripsi                                                                 |
|---------------------|---------------------------------------------------------------------------|
| `get_location()`    | Ambil data Provinsi / Kota / Kecamatan / Desa dari API eksternal          |

> 📝 Endpoint API yang digunakan: `https://lokasi.renandatta.com`

---

### 🧼 SweetAlert2 Konfirmasi

| Fungsi              | Deskripsi                                        |
|---------------------|--------------------------------------------------|
| `swal_delete_params`| Konfigurasi konfirmasi hapus                    |
| `swal_restore_params`| Konfirmasi restore data                        |
| `swal_update_status(flag)` | Konfirmasi aktif/nonaktif berdasarkan flag (0/1) |

---

### 🖼️ File Preview & Upload

| Fungsi               | Deskripsi                                                             |
|----------------------|----------------------------------------------------------------------|
| `preview_image()`    | Preview gambar dari file input                                        |
| `open_file()`        | Buka dialog upload dan preview file saat dipilih                     |
| `remove_file()`      | Reset gambar ke default dan tandai file dihapus (`value=1`)          |

---

## ⚙️ Ketergantungan

Fungsi-fungsi ini memanfaatkan plugin berikut:

- ✅ [jQuery](https://jquery.com/)
- ✅ [Select2](https://select2.org/)
- ✅ [Flatpickr](https://flatpickr.js.org/)
- ✅ [AutoNumeric](https://autonumeric.org/)
- ✅ [Bootstrap Datepicker](https://bootstrap-datepicker.readthedocs.io/en/latest/)
- ✅ [SweetAlert2](https://sweetalert2.github.io/)

> Pastikan semua plugin di atas telah dimuat di halaman sebelum `io.js`.

---

## 💡 Contoh Penggunaan

```js
let formData = get_form_data($('#form'));
console.log(formData);

// Format angka
let formatted = add_commas('100000'); // "100.000"

// Tampilkan preview gambar
open_file('input_foto', 'preview_foto');
