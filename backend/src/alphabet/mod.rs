use std::ops::{Add, Mul};

pub struct Alphabet {
    pub letters: Vec<char>,
}

impl Default for Alphabet {
    fn default() -> Self {
        Alphabet {
            letters: vec![
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            ],
        }
    }
}

impl Alphabet {
    pub fn new(input: &str) -> Self {
        Alphabet {
            letters: input.chars().collect::<Vec<char>>(),
        }
    }
    pub fn char_index(&self, char: char) -> usize {
        self.letters
            .iter()
            .enumerate()
            .find(|(_, l)| **l == char)
            .map(|(i, _)| i)
            .unwrap()
    }
}

#[derive(Clone, Copy)]
pub struct Letter<'a> {
    pub char: char,
    pub number: usize,
    pub alphabet: &'a Alphabet,
}

impl<'a> Letter<'a> {
    pub fn new(char: char, alphabet: &'a Alphabet) -> Self {
        Letter {
            char,
            alphabet,
            number: alphabet.char_index(char),
        }
    }
}

impl<'a> Mul<usize> for Letter<'a> {
    type Output = Letter<'a>;
    fn mul(self, n: usize) -> Self::Output {
        let new_number = (self.number * n) % self.alphabet.letters.len();
        Letter {
            number: new_number,
            char: self.alphabet.letters[new_number],
            alphabet: self.alphabet,
        }
    }
}

impl<'a> Mul<Letter<'a>> for usize {
    type Output = Letter<'a>;
    fn mul(self, l: Letter<'a>) -> Self::Output {
        l * self
    }
}

impl<'a> Add<usize> for Letter<'a> {
    type Output = Letter<'a>;
    fn add(self, n: usize) -> Self::Output {
        let new_number = (self.number + n) % self.alphabet.letters.len();
        Letter {
            number: new_number,
            char: self.alphabet.letters[new_number],
            alphabet: self.alphabet,
        }
    }
}

impl<'a> Add<Letter<'a>> for Letter<'a> {
    type Output = Letter<'a>;
    fn add(self, l: Letter) -> Self::Output {
        let new_number = (self.number + l.number) % self.alphabet.letters.len();
        Letter {
            number: new_number,
            char: self.alphabet.letters[new_number],
            alphabet: self.alphabet,
        }
    }
}

pub fn create_letter_vec<'a>(input: &str, alphabet: &'a Alphabet) -> Vec<Letter<'a>> {
    input.chars().map(|c| Letter::new(c, alphabet)).collect()
}
