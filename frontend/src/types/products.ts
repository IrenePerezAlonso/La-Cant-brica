/* eslint-disable semi */
export default interface Products {
        _id: string,
        name: string,
        type: string,
        subType: string,
        img: string,
        price: number,
        notes: string,
        preparation: {
                entire: boolean,
                withOutHeadGuts: boolean,
                withOutThorn: boolean,
                fillet: boolean,
                slices:boolean,
                fresh: boolean,
                cooked: boolean
        }
}
