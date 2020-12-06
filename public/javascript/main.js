const 
    mode =  document.getElementById("mode"),
    body =  document.body,
    theme = localStorage.getItem('theme');

if(theme){
    body.classList.add(theme);
}
mode.onclick = () => {
    if (body.classList.contains('dark')){
        body.classList.remove("dark");
        localStorage.setItem('theme', null);
    }else{
        body.classList.add("dark");
        localStorage.setItem('theme', 'dark');
    }
}
