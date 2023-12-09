// The let keyword was introduced in ES6 (2015)

// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same 

// before ES6(2015), Javascript did not have Block Scope 
// JS had Global Scope And Function Scope


x=30
{
    let x =2;

console .log(x)
}

// x can not be used hare
console.log(x)