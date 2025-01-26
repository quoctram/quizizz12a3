// Mã hóa kí tự
function maHoa(kiTu){
    const b="ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz0123456789";
    const a="ZXCVBNMASDFGHJKLQWERTYUIOPzxcvbnmasdfghjklqwertyuiop9876543210";
    let result="";

    for(let i=0; i<kiTu.length;i++){
        let char = kiTu[i];
        if(a.includes(char)){
            let index = a.indexOf(char);
            result+=b[index];
        }
        else{
            result+=char;
        }
    }
    return result;
}
let nhapKyTu=prompt("Nhập kí tự cần mã hóa ngược");
let kq=maHoa(nhapKyTu);
alert(`Kí tự trước khi mã hóa là: ${nhapKyTu}`);
alert(`Kí tự sau khi mã hóa: ${kq}`);
