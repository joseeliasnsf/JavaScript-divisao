function controle2(){
    for(let i = 0;i < 10; ++i){
        if(i == 2){
            return;
        }
        console.log(i+"");
    }
    console.log("Saindo da função ");
}
controle2();