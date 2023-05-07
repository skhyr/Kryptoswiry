use crate::alphabet::Letter;
use na::{Matrix2, Vector2};

pub fn encrypt<'a>(input: Vec<Letter<'a>>, key: Matrix2<usize>) -> String {
    input
        .chunks(2)
        .map(|pair| Vector2::new(pair[0], pair[1]))
        .map(|v| {
            vec![
                key.row(0)[0] * v[0] + key.row(0)[1] * v[1],
                key.row(1)[0] * v[0] + key.row(1)[1] * v[1],
            ]
        })
        .flatten()
        .map(|l| l.char)
        .collect()
}

pub fn decrypt<'a>(input: Vec<Letter<'a>>, key: Matrix2<usize>) -> String {
    encrypt(input, key)
}
