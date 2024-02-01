if(data == undefined){
    data = {};
}



let dataBind = function(){

};

dataBind.get = function(key){
    // console.log(key)
    let field = data;
    key.split(".").forEach(function(item){
        // console.log(field);
        field = field[item];
    });

    return field;
};

dataBind.set = function(key,value){
    data[key] = value;
};

dataBind.display = function(){
    document.querySelectorAll('[name], [data]').forEach(function(item){

        if(item.name == undefined){
            let key = item.getAttribute("data");
            // item.innerText = data[item.getAttribute("data")]; unsure what this was for but took it out and added line above and then it worked
            if(dataBind.get(key) !== undefined) {
                item.innerText = dataBind.get(key);
            }
        }
        else{
            let key = item.name;
            if(dataBind.get(key) !== undefined){
                item.value = dataBind.get(key);
            }
        }
        //console.log(item.value, item.innerText)
        // let key = item.name;
        // if(key == undefined){
        //     key = item.getAttribute("data");
        // }

        // if(item.name == undefined){
        //     item.name = data[item.name];
        // }
        // if(item.innerText){
        //     item.innerText = data[key];
        // }
        // if(item.value){
        //     item.value = data[key];
        // }
        // else{
        //     item.value = data[item.name];
        // }

        //shorter way of writing the above

        // let key = item.name || item.getAttribute("data");


    });
}

dataBind.save = function(){
    console.log(JSON.stringify(data))
    sessionStorage.setItem('data', JSON.stringify(data));
}



dataBind.display();


// field = data;
// "address.city".split(".").forEach(function(item){
//     field = field[item];
// });


// contents of the window.addeventlistener section of html

// the ifrst line below was written like this in html:
// document.querySelector('form').addEventListener("input", function(e)

//and the others had similar (i.e. .querySelector('button' or 'input' etc etc))

document.addEventListener("input", function(e)
    {
        // console.log(e.target.name);
        dataBind.set(e.target.name, e.target.value);
    })

    // document.querySelector('button').addEventListener("click", function(){
    //     alert(789)
    // })

    // document.querySelector('input').addEventListener("click", function(){
    //     alert("ABC")
    // })

    // document.oninput = function(e){
    //     console.log('aaaaaa')
    //     console.log(e)
    // }
