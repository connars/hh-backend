

const GETLOGIN = `
select u.* from users as u where email = $1 and password = crypt($2, u.password)
`

const GETREGISTER = `
insert into users(username,lastname,password,contact,email) 
values ($1,$2,$3,$4,$5) returning *
`
const GETUSER = `
select u.*,b.* from users as u
left join balance as b on b.user_id = u.user_id
where u.user_id = $1
`

const GETPOST = `
update users SET on avatar = $1 where user_id = $2 returning *
`

const PUTBALANCE = `
update balance  SET score = $1 where user_id = $2 returning *
`

module.exports ={
    GETLOGIN , GETREGISTER ,GETUSER, GETPOST, PUTBALANCE
}