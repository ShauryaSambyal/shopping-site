var products = [
    {name:"chair", headline: 'Super durable', price: '10,000', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D'},
    {name:"chair pro", headline: 'soft like a cloud', price: '9,999', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:" king chair", headline: 'Sit like a king', price: '12,000', image: 'https://images.unsplash.com/photo-1601392740426-907c7b028119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww'},
    {name: 'Chair of OZ', headline: 'sat on by OZ', price: '10,100', image: 'https://images.unsplash.com/photo-1562113530-57ba467cea38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D'},
    {name: "Dumbeldore's Chair", headline: 'Chair of the headmaster', price: '15,000', image: 'https://images.unsplash.com/photo-1520940115356-52e16be4351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1bWJlbGRvcmUncyUyMGNoYWlyfGVufDB8fDB8fHww'}
]
var popular = [
    {name:"Aesthetic Chair", headline: 'Best seller of 2023', price: '20,000', image: 'https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:"pink Chair", headline: '#4 out of 20 this week', price: '12,000', image: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww'},
    {name:"Indian Stool", headline: 'Nothing special, just selling', price: '11,000', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww'}
]

function addProduct(){
    var clutter = ''
    products.forEach((product, index) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="image w-full h-full object-cover" src = "${product.image}" >
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">&#8377 ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`
    })

    document.querySelector('.products').innerHTML = clutter
}
function addPopularProduct(){
    var cluster = ''
    popular.forEach((product) => {
        cluster += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377 ${product.price}</h4>
        </div>
    </div>`
    document.querySelector('.populars').innerHTML = cluster
    })
}
addPopularProduct()
addProduct()


var cart = []
function addToCart(){
    document.querySelector('.products').addEventListener('click', (details) => {
        if (details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index])
            
        }
    })
    
}
addToCart()

function showCart(){
    document.querySelector('.carticon').addEventListener('click', () => {
        document.querySelector('.cartexpnd').style.display = 'block'
        var clutter = ''
        cart.forEach((prod, index) => {
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}">
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div>
        </div>`
        })
        document.querySelector('.cartexpnd').innerHTML = clutter

    })
}
showCart()