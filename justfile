alias br := build-rs
alias b := build

build: build-ts build-rs clr-bin cp-rs

build-rs:
    cd rust && cargo build --release && cd ..

build-ts:
    pnpm build

run args:
    node dist/cli.js {{ args }}

run-rs args:
    cd rust && cargo run --release {{ args }} && cd ..

clr-bin:
    rm -r -fo dist\native -ea SilentlyContinue; exit 0 && mkdir dist\native

cp-rs:
    dir .\rust\target\release -File | ? {$_.BaseName -eq 'je-cli-rs' -and $_.Extension -eq '.exe'} | cp -D .\dist\native
