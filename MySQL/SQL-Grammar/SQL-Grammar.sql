-- * queries every field in the table
select * from users

-- query specific fields in the table
-- select username, password from users

-- insert values into specific fields
-- insert into users (username, password) values ("Curry", "tttttt")
-- insert into users (id, username, password) values (4, "Harden", "hhhhhh")

-- update the value in a specific field
-- update users set password='aaaaaa' where id=2

-- update multiple fields that belong to one id
-- update users set password='bbbbb', status=1 where id=2

-- delete all fields that belong to one id
-- delete from users where id=4

-- where --> where id>3 and status<>1
-- select * from users where status=1 or username='Julie'

-- ORDER BY
-- select * from users order by username (asc)		ascending
-- select * from users order by id desc				descending
-- select * from users order by status desc, username asc

-- COUNT
-- select count(*) as totalNormal from users where status=0		-- as totalNormal is optional
-- select username as Uname, password as Upwd from users
