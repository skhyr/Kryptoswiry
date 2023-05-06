use crate::alphabet::Letter;
use na::{Matrix2, Vector2};

pub fn encrypt(input: &str, key: Matrix2<usize>) -> String {
    input
        .chars()
        .collect::<Vec<char>>()
        .chunks(2)
        .map(|pair| (Letter(pair[0]), Letter(pair[1])))
        .map(|(l1, l2)| (l1.into(), l2.into()))
        .map(|(n1, n2)| Vector2::new(n1, n2))
        .map(|v| (key * v).map(|x| x % 26))
        .flat_map(|v| vec![v.x, v.y])
        .map(|n| Letter::from(n).0)
        .collect::<String>()
}

pub fn decrypt(input: &str, key: Matrix2<usize>) -> String {
    encrypt(input, key)
}
