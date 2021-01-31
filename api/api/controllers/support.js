const pool = require('../../utils/pool');
const moment = require('moment');
const dotenv = require('dotenv');
dotenv.config();

exports.store_message = (req,res,next) => {
    const {fullname, email, phone, message} = req.body;
    const timestamp = moment().unix();
    const datetime = moment().format('YYYY-MM-DD HH:mm:ss');
    
    pool.getConnection((err,conn)=>{
        if(err) {
            console.log(err)
            return res.status(500).json({error:'An error occured. Please try again!'});
        } else {
            conn.query(`insert into messages (fullname,email,phone,message,timestamp,timedate) values (?,?,?,?,?,?)`, [fullname, email, phone, message,timestamp,datetime], (err,result)=>{
                conn.release();
                if(err) {
                    return res.status(500).json({error:'An error occured. Please try again!'});
                } else {
                    return res.status(200).json({
                        error:0
                    });
                }
            })
        }
    })
}