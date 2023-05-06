#[derive(Clone, Copy, Debug)]
pub struct Letter(pub char);

const ALPHABET: [Letter; 26] = [
    Letter('A'),
    Letter('B'),
    Letter('C'),
    Letter('D'),
    Letter('E'),
    Letter('F'),
    Letter('G'),
    Letter('H'),
    Letter('I'),
    Letter('J'),
    Letter('K'),
    Letter('L'),
    Letter('M'),
    Letter('N'),
    Letter('O'),
    Letter('P'),
    Letter('Q'),
    Letter('R'),
    Letter('S'),
    Letter('T'),
    Letter('U'),
    Letter('V'),
    Letter('W'),
    Letter('X'),
    Letter('Y'),
    Letter('Z'),
];

impl From<usize> for Letter {
    fn from(index: usize) -> Self {
        ALPHABET[index]
    }
}

impl Into<usize> for Letter {
    fn into(self) -> usize {
        ALPHABET
            .into_iter()
            .enumerate()
            .find(|(_, l)| l.0 == self.0)
            .map(|(i, _)| i)
            .unwrap()
    }
}

impl Into<char> for Letter {
    fn into(self) -> char {
        self.0
    }
}
