# Day 2 - Python Basics

print("===== Day 2 Python Basics =====")

# Variables
name = "Aryan"
age = 18
course = "BCA AI & ML"

print("\nVariables")
print("Name:", name)
print("Age:", age)
print("Course:", course)

# Data Types
print("\nData Types")
print(type(name))
print(type(age))

price = 199.99
is_student = True

print(type(price))
print(type(is_student))

# Operators
print("\nOperators")

a = 15
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Modulus:", a % b)

# If Else
print("\nIf Else")

marks = 85

if marks >= 50:
    print("Pass")
else:
    print("Fail")

# For Loop
print("\nFor Loop")

for i in range(1, 6):
    print(i)

# While Loop
print("\nWhile Loop")

count = 1

while count <= 5:
    print(count)
    count += 1

# Function
print("\nFunction")

def greet(name):
    print("Hello", name)

greet("Aryan")

# Simple Program
print("\nSimple Calculator")

x = 20
y = 10

print("Sum =", x + y)
print("Difference =", x - y)
print("Product =", x * y)
print("Quotient =", x / y)

print("\nDay 2 Task Completed Successfully!")