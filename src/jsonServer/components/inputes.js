export default function Input({func,val,placeholder,classname="input",type}) {
    return <input
    placeholder={placeholder}
    type={type}
    name='author'
    defaultValue={val}
    onChange={(e) => {func(e)}}
    className={classname}
    />
}
export const capitalize = (str) => {
    const capitalizeStr = str && str[0].toUpperCase() + str.slice(1)
    if (capitalizeStr === str) { return true }
    return false
}
export const upToFiftySymbol = (str) => {
    if (str.split("").length <= 50) { return true }
    return false
}
export const BeNotHtmlTag = (str) => {
    const findTag = str.split("").find(elem => { return elem === "<" || elem === "/" || elem === ">" })
    return findTag ? false : true
}
export const BeNotHttpUrl = (str) => {
    if (str.length > 5) {
      return str.slice(0, 5) === "https" ? true : false
    } else return true
}

