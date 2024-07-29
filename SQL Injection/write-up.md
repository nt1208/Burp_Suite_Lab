## SQL Injection
 **Definition:** SQL Injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. This can allow an attacker to view data that they are not normally able to retrieve. This might include data that belongs to other users, or any other data that the application can access. In many cases, an attacker can modify or delete this data, causing persistent changes to the application's content or behavior.
 

***
#### Lab: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data
The first screen when we first access to the lab is shown below

![alt text](img/image1.png)

We can try to access the 'Lifestyle' category and observe the URL

![alt text](img/image2.png)


There is a parameter `category` in the URL, I guess we can change the value of this parameter for exploiting SQL injection vulnerability.

![alt text](img/image3.png)

We can use quote `'` character, comment `--` character, `OR` operation and true statement `1=1` in the URL for this situation. The query will be
`SELECT * FROM products WHERE category=' OR 1=1--'`

![alt text](img/image4.png)

And we will receive a notice for solving this lab

![alt text](img/image5.png)

***

#### Lab: SQL injection vulnerability allowing login bypass
To solve this lab,  we need to exploit SQLi vulnerability of the website for accessing the `administrator` role

![alt text](img/image6.png)

Firstly, we should try the solution of the previous lab modifying username to `administrator'--` and press login

![alt text](img/image7.png)

And we solve the problem after that

![alt text](img/image8.png)

***
#### Lab: SQL injection attack, querying the database type and version on Oracle

We need to show the version of the Oracle database to solve this lab and we have a cheatsheet about database version below

![alt text](img/image10.png)

Firstly, we need to determine that how many columns can display on the screen, in Oracle, every `SELECT` statement need to specify a table to select `FROM`. There is a built-in table in Oracle called `dual` which can use when you do not want to query to any specific table.

So we can use `category=Gifts' UNION SELECT 'HI', 'THERE' FROM dual--` to determine the number of displayed columns, which is 2 in this situation. 

![alt text](img/image11.png)

Finally, we can use this query to solve this lab
`category=Gifts' UNION SELECT BANNER, NULL FROM v$version--`

![alt text](img/image12.png)

***
#### LAB: SQL injection attack, querying the database type and version on MySQL and Microsoft

We still determine the number of columns which can display through this query
`category=Gifts' UNION SELECT 'ABC', 'XYZ'#`

![alt text](img/image13.png)

Also have 2 columns can be displayed, continually read the cheatsheet

![alt text](img/image14.png)

And the query to solve this lab is 
`category=Gifts' UNION SELECT @@version, NULL#`

![alt text](img/image15.png)