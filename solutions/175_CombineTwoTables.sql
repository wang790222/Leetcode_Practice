# Write your MySQL query statement below

Select Person.FirstName, Person.LastName, Address.City, Address.State from Person left JOIN Address on Person.PersonId = Address.PersonId;