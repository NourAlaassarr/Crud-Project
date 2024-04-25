
var ProductNameInput=document.getElementById("ProductNameInput");
var ProductPriceInput=document.getElementById("ProductPriceInput");
var ProductCategoryInput=document.getElementById("ProductCategoryInput");
var ProductDescriptionInput=document.getElementById("ProductDescriptionInput");
var Addbtn=document.getElementById("addBtn");
var UpdateButtton=document.getElementById("updateBtn");
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

    if(validation()==true){
        var Product={
            Name:ProductNameInput.value,
            Price:ProductPriceInput.value,
            Category:ProductCategoryInput.value,
            Description:ProductDescriptionInput.value
        };
        ProductsArray.push(Product);
         localStorage.setItem("Products",JSON.stringify(ProductsArray));
        console.log(ProductsArray);
    ClearForm();
    displayProducts(ProductsArray);
    
    }
    else{
        alert("invalid");
    }
    
}
function ClearForm(){
    
    ProductNameInput.value=""
    ProductPriceInput.value=""
    ProductCategoryInput.value=""
    ProductDescriptionInput.value=""
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
        <td><button onclick=SetFormForUpdate(${i})  class="btn btn-outline-success">Update</button></td>
        <td><button  onclick=DeleteProduct(${i}) class="btn btn-outline-danger">Delete</button></td>
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


function DeleteProduct(DeletedProductIndex){
    ProductsArray.splice(DeletedProductIndex,1);
        localStorage.setItem("Products",JSON.stringify(ProductsArray));
        displayProducts(ProductsArray);
    }


    function SetFormForUpdate(UpdateProductIndex){

        ProductNameInput.value=ProductsArray[UpdateProductIndex].Name
        ProductPriceInput.value=ProductsArray[UpdateProductIndex].Price
        ProductCategoryInput.value=ProductsArray[UpdateProductIndex].Category
        ProductDescriptionInput.value=ProductsArray[UpdateProductIndex].Description
        UpdateButtton.classList.replace('d-none','d-inline-block')
        Addbtn.classList.add('d-none')
        UpdateButtton.onclick=()=>UpdateProduct(UpdateProductIndex);
    }

    function UpdateProduct(IndextobeUpdated) {
        console.log("Updating product...");
        console.log("IndextobeUpdated:", IndextobeUpdated);
        console.log("ProductNameInput.value:", ProductNameInput.value);
        console.log("ProductPriceInput.value:", ProductPriceInput.value);
        console.log("ProductCategoryInput.value:", ProductCategoryInput.value);
        console.log("ProductDescriptionInput.value:", ProductDescriptionInput.value);
        // Update ProductsArray with new values
        for (var i = 0; i < ProductsArray.length; i++) {
            if (i == IndextobeUpdated) {
                ProductsArray[i].Name = ProductNameInput.value;
                ProductsArray[i].Price = ProductPriceInput.value;
                ProductsArray[i].Category = ProductCategoryInput.value;
                ProductsArray[i].Description = ProductDescriptionInput.value;
                break;
            }
        }
        console.log(ProductsArray)
        
        // Store the updated ProductsArray in local storage
        localStorage.setItem("Products", JSON.stringify(ProductsArray));
    }
    
    
    
function updated(){
    displayProducts(ProductsArray);
    
}


//validation
function validation(){

    
    var regex=/^[A-Z][a-z]{3,8}$/;
    if(regex.test(ProductNameInput.value)==true ){
        ProductNameInput.classList.replace('is-invalid','is-valid')
        return true
    }
    else{
        
        ProductNameInput.classList.add('is-invalid')
        return false
}}