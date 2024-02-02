
function datacapture(){
    let nodeList = document.querySelectorAll('[name]');
    console.log(nodeList);

    let data = {};

    for (let node of nodeList){
        // console.log(node.getAttribute("name"));
        // console.log(node.getAttribute("value"));
        console.log(node.name);
        data[node.name] = node.value;
        // console.log(`${node.name}: ${node.getAttribute("value")}`);
    };
    console.log(data);
};

// console.log(JSON.stringify(node));