module.exports = {
    ra: {
        action: {
            delete: 'Hapus',
            show: 'Tampilkan',
            list: 'Daftar',
            save: 'Simpan',
            create: 'Buat',
            edit: 'Ubah',
            sort: 'Pengurutan',
            cancel: 'Batal',
            undo: 'Kembali',
            refresh: 'Perbaharui',
            add: 'Tambahkan',
            remove: 'Hapus',
            add_filter: 'Tambahkan filter',
            remove_filter: 'Hapus filter',
            back: 'Kembali',
            bulk_actions: '%{smart_count} terpilih',
        },
        boolean: {
            true: 'Ya',
            false: 'Tidak',
        },
        page: {
            list: 'Daftar %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Buat %{name}',
            dashboard: 'Dasbor',
            not_found: 'Tidak ditemukan',
            loading: 'Pemuatan',
        },
        input: {
            file: {
                upload_several:
                    'Letakan beberapa file untuk diunggah, atau klik untuk memilihnya.',
                upload_single: 'Letakan file yang akan diunggah, atau klik untuk memilihnya.',
            },
            image: {
                upload_several: 'Letakan beberapa gambar untuk diunggah, atau klik untuk memilihnya.',
                upload_single: 'Letakan gambar untuk diunggah, atau klik untuk memilihnya.',    
            },
            references: {
                all_missing: 'Tidak dapat menemukan data referensi.',
                many_missing:
                    'Setidaknya satu referensi terkait tidak lagi tersedia.',
                single_missing:
                    'Referensi terkait tidak lagi tersedia.',
            },
        },
        message: {
            yes: 'Ya',
            no: 'Tidak',
            are_you_sure: 'Apakah anda yakin?',
            about: 'Tentang',
            not_found:
                'Entah Anda mengetikkan URL yang salah, atau Anda memiliki link yang salah.',
            loading: 'Halaman ini sedang memuat, silahkan tunggu sebentar',
            invalid_form: 'Formulir tidak valid, ada kesalahan. Silakan periksa kembali',
            delete_title: 'Hapus %{name} #%{id}',
            delete_content: 'Anda yakin ingin menghapus item ini?',
            bulk_delete_title:
                'Hapus %{name} |||| Hapus %{smart_count} %{name} items',
            bulk_delete_content:
                'Anda yakin ingin menghapus %{name}? |||| Anda yakin ingin menghapus %{smart_count} items ini?',
        },
        navigation: {
            no_results: 'Tidak ada hasil yang ditemukan',
            no_more_results:
                'Halaman %{page} tidak ada. Coba halaman sebelumnya.',
            page_out_of_boundaries: 'Halaman %{page} tidak ada',
            page_out_from_end: 'Halaman terakhir',
            page_out_from_begin: 'Halaman harus lebih besar dari pertama',
            page_range_info: '%{offsetBegin}-%{offsetEnd} dari %{total}',
            next: 'Berikutnya',
            prev: 'Sebelumnya',
        },
        auth: {
            username: 'Nama pengguna',
            password: 'Kata sandi',
            sign_in: 'Masuk',
            sign_in_error: 'Otentikasi gagal, coba lagi',
            logout: 'Keluar',
        },
        notification: {
            updated: 'Elemen telah diperbaharui |||| %{smart_count} elemen telah diperbaharui',
            created: 'Elemen telah dibuat',
            deleted: 'Elemen telah dihapus |||| %{smart_count} elemen telah dihapus',
            bad_item: 'Elemen salah',
            item_doesnt_exist: 'Elemen tidak ada',
            http_error: 'Kesalahan komunikasi peladen',
            canceled: 'Telah dibatalkan',
        },
        validation: {
            required: 'Wajib',
            minLength: 'Minimal %{min} karakter',
            maxLength: 'Maksimal %{max} karakter atau kurang',
            minValue: 'Minimal %{min}',
            maxValue: 'Maksimal %{max} atau kurang',
            number: 'Harus Angka',
            email: 'Harus alamat email yang valid',
            oneOf: 'Harus salah satu dari : %{options}',
            regex: 'Harus sesuai dengan format tertentu (regexp): %{pattern}',
        },
    },
};
