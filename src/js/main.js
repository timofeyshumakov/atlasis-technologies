import '../css/style.sass'
import '../css/reset.css'

document.getElementById('burger').addEventListener("click", function (e) {
    document.getElementById('aside').classList.toggle('show');
    if(document.getElementById('aside').classList.contains('show')){
        document.getElementById('aside').style.display = 'block';
        setTimeout(() => {
            document.getElementById('aside').style.transform = 'translateX(0)';
        }, 100);
    }else{
        document.getElementById('aside').style.transform = 'translateX(-100%)';
        setTimeout(() => {
            document.getElementById('aside').style.display = 'none';
        }, 400);
    }
});
