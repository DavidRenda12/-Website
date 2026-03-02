sales = [
    {"customer": "A", "amount": 100, "country": "US"},
    {"customer": "B", "amount": 300, "country": "FR"},
    {"customer": "A", "amount": 200, "country": "US"},
]


##########
#for s in sales:
   # if s["amount"] > 150 and s["country"] == "US":

       # print(s["customer"],s["amount"])

##########
total_amount_per_customer = {}

for s in sales:
    cust = s["customer"]
    total_amount_per_customer[cust] = total_amount_per_customer.get(cust, 0) + s["amount"]

print(total_amount_per_customer)


#########

#filtered = {}
#for k, v in total_amount_per_customer.items():
#    if v > 200:
#        filtered[k] = v

#print(filtered)