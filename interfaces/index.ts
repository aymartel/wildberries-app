export interface IOrder {
    date: string,
    lastChangeDate: string,
    warehouseName: string,
    countryName: string,
    oblastOkrugName: string,
    regionName: string,
    supplierArticle: string,
    nmId: number,
    barcode: string,
    category: string,
    subject: string,
    brand: string,
    techSize: string,
    incomeID: number,
    isSupply: boolean,
    isRealization: boolean,
    totalPrice: number,
    discountPercent: number,
    spp: number,
    finishedPrice: number,
    priceWithDisc: number,
    isCancel: boolean,
    cancelDate: string,
    orderType: string,
    sticker: string,
    gNumber: string,
    srid: string
}