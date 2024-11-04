async function fetchProducts() {
    const response = await fetch('/product');
    const products = await response.json();
}
 
async function fetchOrders() {
    const response = await fetch('/orders');
    const orders = await response.json();
}
 
async function fetchCustomers() {
    const response = await fetch('/customers');
    const customers = await response.json();
}
 
async function fetchPayment() {
    const response = await fetch('/payment');
    const payments = await response.json();
}
async function fetchSales() {
    const response = await fetch('/sales');
    const sales = await response.json();
}
async function fetchSupply_chain() {
    const response = await fetch('/supply_chain');
    const supply_chains = await response.json();
}
async function fetchTransport() {
    const response = await fetch('/transport');
    const transports = await response.json();
}

 
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = `
<tr>
<th>Product_Id</th>
<th>Product_name</th>
<th>Product_Price</th>
<th>Stock</th>
<th>Product_cost</th>
</tr>`;
 
    products.forEach(product => {
        productList.innerHTML += `
<tr>
<td>${product.Product_Id}</td>
<td>${product.Product_name}</td>
<td>${product.Product_Price}</td>
<td>${product.Stock}</td>
<td>${product.Product_cost}</td>
</tr>`;
    });
}
 
function displayOrders(orders) {
    const ordersList = document.getElementById('ordersList');
    ordersList.innerHTML = `
<tr>
<th>Order_Id</th>
<th>Customer_Id</th>
<th>Payment_Id</th>
<th>Order_Date</th>
<th>Order_Status</th>
</tr>`;
 
    orders.forEach(order => {
        ordersList.innerHTML += `
<tr>
<td>${order.Order_Id}</td>
<td>${order.Customer_Id}</td>
<td>${order.Payment_Id}</td>
<td>${order.Order_Date}</td>
<td>${order.Order_Status}</td>
</tr>`;
    });
}
 
function displayCustomers(customers) {
    const customersList = document.getElementById('customersList');
    customersList.innerHTML = `
<tr>
<th>Customer_Id</th>
<th>FirstName</th>
<th>LastName</th>
<th>Email</th>
<th>Phone_number</th>
<th>Address</th>
</tr>`;
 
    customers.forEach(customer => {
        customersList.innerHTML += `
<tr>
<td>${customer.Customer_Id}</td>
<td>${customer.FirstName}</td>
<td>${customer.LastName}</td>
<td>${customer.Email}</td>
<td>${customer.Phone_number}</td>
<td>${customer.Address}</td>
</tr>`;
    });
}
 
function displayPayments(payments) {
    const paymentList = document.getElementById('paymentList');
    paymentList.innerHTML = `
<tr>
<th>Payment_Id</th>
<th>Customer_Id</th>
<th>Sales_Id</th>
<th>Total_Price</th>
<th>Payment_Date</th>
</tr>`;
 
    payments.forEach(payment => {
        paymentList.innerHTML += `
<tr>
<td>${payment.Payment_Id}</td>
<td>${payment.Customer_Id}</td>
<td>${payment.Sales_Id}</td>
<td>${payment.Total_Price}</td>
<td>${payment.Payment_Date}</td>
</tr>`;
    });
}

function displaySales(sales) {
    const salesList = document.getElementById('salesList');
    salesList.innerHTML = `
<tr>
<th>Sales_Id</th>
<th>Product_Id</th>
<th>Sale_Count</th>
<th>Sale_Price</th>
<th>Total_Profit</th>
</tr>`;
 
    sales.forEach(sale => {
        salesList.innerHTML += `<tr>
<td>${sale.Sales_Id}</td>
<td>${sale.Product_Id}</td>
<td>${sale.Sale_Count}</td>
<td>${sale.Sale_Price}</td>
<td>${sale.Total_Profit}</td>
</tr>`;
    });
}
  
function displaySupply_chains(supply_chains) {
    const supply_chainList = document.getElementById('supply_chainList');
    supply_chainList.innerHTML = `
<tr>
<th>Supply_chain_Id</th>
<th>Transport_Id</th>
<th>Supply_chain_name</th>
<th>Service_fee</th>
</tr>`;
 
    supply_chains.forEach(supply => {
        supply_chainList.innerHTML += `<tr>
<td>${supply.Supply_chain_Id}</td>
<td>${supply.Transport_Id}</td>
<td>${supply.Supply_chain_name}</td>
<td>${supply.Service_fee}</td>
</tr>`;
    });
}

function displayTransport(transports) {
    const transportList = document.getElementById('transportList');
    transportList.innerHTML = `
<tr>
<th>Transport_Id</th>
<th>Customer_Id</th>
<th>Product_Id</th>
<th>Product_route_Id</th>
<th>Transport_status</th>
</tr>`;
 
    transports.forEach(transport => {
        transportList.innerHTML += `<tr>
<td>${transport.Transport_Id}</td>
<td>${transport.Customer_Id}</td>
<td>${transport.Product_Id}</td>
<td>${transport.Product_route_Id}</td>
<td>${transport.Transport_status}</td>
</tr>`;
    });
}
// Search event listeners
document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchParams = {
        Product_Id: document.getElementById('Product_Id').value,
        Product_name: document.getElementById('Product_name').value,
        Product_Price: document.getElementById('Product_Price').value,
        Stock: document.getElementById('Stock').value,
        Product_cost: document.getElementById('Product_cost').value
    };
    const response = await fetch('/search-product?' + new URLSearchParams(
        Object.entries(searchParams).filter(([_, value]) => value !== '')
    ));
    const products = await response.json();
    displayProducts(products);
});
 
document.getElementById('ordersForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchParams = {
        Order_Id: document.getElementById('Order_Id').value,
        Customer_Id: document.getElementById('Order_Customer_Id').value,
        Payment_Id: document.getElementById('Order_Payment_Id').value,
        Order_Date_From: document.getElementById('Order_Date_From').value,
        Order_Date_To: document.getElementById('Order_Date_To').value,
        Order_Status: document.getElementById('Order_Status').value
    };
    const response = await fetch('/search-orders?' + new URLSearchParams(
        Object.entries(searchParams).filter(([_, value]) => value !== '')
    ));
    const orders = await response.json();
    displayOrders(orders);
});
 
document.getElementById('customersForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchParams = {
        Customer_Id: document.getElementById('Customer_Id').value,
        FirstName: document.getElementById('FirstName').value,
        LastName: document.getElementById('LastName').value,
        Email: document.getElementById('Email').value,
        Phone_number: document.getElementById('Phone_number').value
    };
    const response = await fetch('/search-customers?' + new URLSearchParams(
        Object.entries(searchParams).filter(([_, value]) => value !== '')
    ));
    const customers = await response.json();
    displayCustomers(customers);
});
 
document.getElementById('paymentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchParams = {
        Payment_Id: document.getElementById('Payment_Id').value,
        Customer_Id: document.getElementById('Payment_Customer_Id').value,
        Sales_Id: document.getElementById('Sales_Id').value,
        Total_Price: document.getElementById('Total_Price').value
    };
    const response = await fetch('/search-payment?' + new URLSearchParams(
        Object.entries(searchParams).filter(([_, value]) => value !== '')
    ));
    const payments = await response.json();
    displayPayments(payments);
});

 

document.getElementById('salesForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchParams = {
        Sales_Id: document.getElementById('Sales_Id').value,
        Product_Id: document.getElementById('Product_Id').value,
        Sale_Count: document.getElementById('Sale_Count').value,
        Sale_Price: document.getElementById('Sale_Price').value,
        Total_Profit: document.getElementById('Total_Profit').value
    };
    const response = await fetch('/search-sales?' + new URLSearchParams(
        Object.entries(searchParams).filter(([_, value]) => value !== '')
    ));
    const sales = await response.json();
    displaySales(sales);
});
 
 

 
document.getElementById('supply_chainForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchParams = {
        Supply_chain_Id: document.getElementById('Supply_chain_Id').value,
        Transport_Id: document.getElementById('Transport_Id').value,
        Supply_chain_name: document.getElementById('Supply_chain_name').value,
        Service_fee: document.getElementById('Service_fee').value
    };
    const response = await fetch('/search-supply_chain?' + new URLSearchParams(
        Object.entries(searchParams).filter(([_, value]) => value !== '')
    ));
    const supply_chains = await response.json();
    displaySupply_chains(supply_chains);
});
 
 

document.getElementById('transportForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchParams = {
        Transport_Id: document.getElementById('Transport_Id').value,
        Customer_Id: document.getElementById('Customer_Id').value,
        Product_Id: document.getElementById('Product_Id').value,
        Product_route_Id: document.getElementById('Product_route_Id').value,
        Transport_status: document.getElementById('Transport_status').value
    };
    const response = await fetch('/search-transport?' + new URLSearchParams(
        Object.entries(searchParams).filter(([_, value]) => value !== '')
    ));
    const transports = await response.json();
    displayTransport(transports);
});

fetchProducts();
fetchOrders();
fetchCustomers();
fetchPayment();
fetchSales();
fetchSupply_chain();
fetchTransport();

