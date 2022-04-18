var prductName=document.getElementById("prductName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDescription=document.getElementById("productDescription");
var mainBtm= document.getElementById("mainBtm");
var productsContainer;
var mainIndex;

if(localStorage.getItem("products") == null){
    productsContainer=[];
}
else{
    productsContainer=JSON.parse(localStorage.getItem("products"));
    displayproducts();
}

function addProduct(){

    var product ={
        name:prductName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDescription.value
    }

    if( mainBtm.innerHTML == "Update"){
        mainBtm.innerHTML = "Add Product";
        productsContainer.splice(mainIndex,1,product);
    }
    else{
        productsContainer.push(product);
    }
    
    localStorage.setItem("products",JSON.stringify(productsContainer));
    displayproducts();
    clearInputs();
}

function displayproducts(){
    var cartoona="";
    for(var i =0; i< productsContainer.length ;i++){
        cartoona += ` <tr>
        <td>`+(i+1)+`</td>
        <th scope="row">`+productsContainer[i].name+`</th>
        <td>`+productsContainer[i].price+`</td>
        <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].desc+`</td>
        <td><button type="button" class="btn btn-warning"  onclick="updateProduct(`+ i +`)">Update</button></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteProduct(`+ i +`)">Delete</button></td>
        </tr>`
    }
    document.getElementById("ProductBody").innerHTML=cartoona;
}

function clearInputs() {
    prductName.value = "";
    productPrice.value ="";
    productCategory.value = "";
    productDescription.value = "";
}

function deleteProduct(i){
    productsContainer.splice(i,1);
    localStorage.setItem("products",JSON.stringify(productsContainer));
    displayproducts();
}

function searchProduct(searchTerm){
    var cartoona = "";
    for(var i=0 ; i< productsContainer.length; i++){

        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true || productsContainer[i].category.toLowerCase().includes(searchTerm.toLowerCase()) == true ){
            cartoona += ` <tr>
            <td>`+(i+1)+`</td>
            <th scope="row">`+productsContainer[i].name+`</th>
            <td>`+productsContainer[i].price+`</td>
            <td>`+productsContainer[i].category+`</td>
            <td>`+productsContainer[i].desc+`</td>
            <td><button type="button" class="btn btn-warning">Update</button></td>
            <td><button type="button" class="btn btn-danger" onclick="deleteProduct(`+i+`)">Delete</button></td>
            </tr>`
            
        }
    }
    document.getElementById("ProductBody").innerHTML=cartoona;
    
}


function updateProduct(index){
    prductName.value = productsContainer[index].name;
    productPrice.value =productsContainer[index].price;
    productCategory.value = productsContainer[index].category;
    productDescription.value = productsContainer[index].desc;
    mainIndex=index
    mainBtm.innerHTML="Update"
}




