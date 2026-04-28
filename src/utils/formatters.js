export const formatDecimalNumber = (value) => {
    return new Intl.NumberFormat("es-PE", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    }).format(value)
}

export const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    }).format(value)
}