const GETLOGIN = `
select * from admin as a where username = $1 password = ($2,crypto(gen_salt))
`
const GETREGISTER = `
insert into admin(adminname,password) values($1,$2) returning *
`
const GET = `
select * from users
`
const PUTUSER = `
update balance  SET score = $1 
where user_id = $2 returning *
`

const PUTADMIN = `
update admin SET adminname = $1 and password = $2
where admin_id = $3
`
module.exports = {
    GETLOGIN, GETREGISTER ,PUTADMIN, GET,PUTUSER
}