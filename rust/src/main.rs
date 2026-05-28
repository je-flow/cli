fn main() {
    println!("Hello, world from rust!");
    let args: Vec<String> = std::env::args().skip(1).collect();
    println!("{:?}", args);
}
