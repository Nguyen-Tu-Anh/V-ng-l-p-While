function tinh_lai_kep_ngan_hang() {
    let moNey = +document.getElementById('money').value;
    let monTh = +document.getElementById('month').value;
    const laiSuat = 0.5 / 100;
    
    
    for(let i = 1; i <= monTh; i++){
        fullMoney = moNey + moNey * laiSuat;
        moNey = fullMoney;
    }
    document.getElementById('result').innerHTML = fullMoney;
    document.getElementById('result_1').innerHTML = fullMoney - +document.getElementById('money').value;
}