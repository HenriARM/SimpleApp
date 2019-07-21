
# application.yml

`spring.jpa.hibernate.ddl-auto` can be `none`, `update`, `create`, `create-drop`:
* `none` is the default for MySQL, no change to the database structure.
* `update`. Hibernate changes the database according to the given Entity structures.
* `create`. Creates the database every time, but don’t drop it when close.
* `create-drop`. Creates the database then drops it when the SessionFactory closes.


# database init 

```bash
mysql> create database db_example; -- Create the new database
mysql> create user 'springuser'@'%' identified by 'ThePassword'; -- Creates the user
mysql> grant all on db_example.* to 'springuser'@'%'; -- Gives all the privileges to the new user on the newly created database
```

It is good security practice that after your database is in 
production state, you make this none and revoke all privileges from the MySQL 
user connected to the Spring application, then give him only SELECT, UPDATE, INSERT, DELETE.

# Lombok
* Enable `Annotation Processing` on IntelliJ IDEA:
```
> Settings > Build, Execution, Deployment > Compiler > Annotation Processors
```
* add the `Lombok IntelliJ plugin`:
    * Go to `Preferences`  > `Plugins`
    * Click on `Browse repositories`
    * Search and install `Lombok Plugin`, then restart IntelliJ IDEA