function returnTypes<T>(params: T): ReturnType<any> {
    return typeof params
}


console.log(returnTypes<string>("10"))
console.log(returnTypes<boolean>(" " === " "))