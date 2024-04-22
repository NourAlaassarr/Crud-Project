
var Name=document.getElementById("ProductNameInput");
var Price=document.getElementById("ProductPriceInput");
var Category=document.getElementById("ProductCategoryInput");
var Description=document.getElementById("ProductDescriptionInput");

var ProductsArray;

if(localStorage.getItem("Products")!=null){
    ProductsArray=JSON.parse(localStorage.getItem("Products"));
    displayProducts(ProductsArray);
}
else{
    ProductsArray=[]
}
var Cartoona=``
function AddProduct(){

    var Product={
        Name:Name.value,
        Price:Price.value,
        Category:Category.value,
        Description:Description.value
    };
    ProductsArray.push(Product);
     localStorage.setItem("Products",JSON.stringify(ProductsArray));
    console.log(ProductsArray);
ClearForm();
displayProducts(ProductsArray);
}
function ClearForm(){

    Name.value=""
    Price.value=""
    Category.value=""
    Description.value=""
};
function displayProducts(ProductList){
    var Cartoona=``;
    for(i=0;i<ProductList.length;i++){
        Cartoona+=` <tr>
        <td>${i}</td>
        <td>${ProductList[i].Name}</td>
        <td>${ProductList[i].Price}</td>
        <td>${ProductList[i].Category}</td>
        <td>${ProductList[i].Description}</td>
        <td><button class="btn btn-outline-success">Update</button></td>
        <td><button class="btn btn-outline-danger">Delete</button></td>
    </tr>`

    };
    document.getElementById("tbody").innerHTML=Cartoona;

}


function SearchProduct(SearchTerm){
    var SearchResults=[]
    for(i=0;i<ProductsArray.length;i++){
        if(ProductsArray[i].Name.toLowerCase().includes(SearchTerm.toLowerCase())==true){
            SearchResults.push(ProductsArray[i]);
        }
    
    }
    displayProducts(SearchResults);
}