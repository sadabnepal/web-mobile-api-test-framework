import util from "util"

export const stringFormatter = (data: string, value: string | number) => {
    return util.format(data, value)
}