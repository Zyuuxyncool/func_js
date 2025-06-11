function formatRupiah(input){
        let value = input.value.replace(/\D/g, "");
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        input.value = value;
    }
