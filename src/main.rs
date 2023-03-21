use lib::encrypt;

pub fn main() {
    let message = "KONSTYNTAN".into();
    let res = encrypt::encrypt(message, 4, 26);
    println!("{}", res);
}
