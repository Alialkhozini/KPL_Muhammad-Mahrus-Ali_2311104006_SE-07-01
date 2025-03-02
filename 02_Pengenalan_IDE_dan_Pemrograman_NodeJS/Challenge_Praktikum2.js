const items = [
    { name: 'Barang 1', price: 50000},
    { name: 'Barang 2', price: 20000},
    { name: 'Barang 3', price: 30000}
];

let totalPrice = items.reduce((sum, item) => sum + item.price, 0);
let discountCategory = totalPrice > 100000 ? "Diskon Besar" : totalPrice >= 50000 ? "Diskon Sedang" : "Diskon Tidak Ada";

console.log("== Irasshaimase Di XYZ Store ==");
console.log("\Daftar Barang");
items.forEach(item => {
    console.log(`- ${item.name}: Rp.${item.price}`)
});

console.log(`Total Jumlah Barang: ${items.length}`);
console.log(`Total Harga: Rp.${totalPrice}`);
console.log(`Kategori Diskon: ${discountCategory}`);