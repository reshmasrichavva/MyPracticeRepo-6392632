# Spring Data JPA – orm-learn

This project demonstrates the use of Spring Data JPA with MySQL. It shows how to set up a simple Spring Boot application that connects to a MySQL database using JPA and Hibernate.

## Overview

The application consists of:
- A `Country` entity representing a database table.
- A repository interface to handle data access.
- A service layer that uses the repository.
- A main class that starts the application and tests the data retrieval.

## Key Concepts

### JPA (Java Persistence API)
JPA is a specification that defines how Java objects can be mapped to relational database tables. It provides a standard set of rules and annotations for object-relational mapping but does not contain any implementation.

### Hibernate
Hibernate is one of the most widely used implementations of the JPA specification. It is a powerful ORM (Object-Relational Mapping) tool that manages the conversion between Java objects and database tables. Hibernate also offers additional features that go beyond the JPA standard.

### Spring Data JPA
Spring Data JPA is a library built on top of JPA and typically uses Hibernate under the hood. It significantly reduces the amount of boilerplate code required to interact with the database. By simply defining repository interfaces, developers can perform standard CRUD operations without writing implementation code.

## Summary

- JPA is just a specification (a set of guidelines).
- Hibernate is a concrete implementation of JPA.
- Spring Data JPA is an abstraction that simplifies working with JPA and Hibernate in Spring applications.

This project illustrates how these components work together in a typical enterprise application setup.
