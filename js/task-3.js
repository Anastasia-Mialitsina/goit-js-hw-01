function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);
    const totalWidth = contentWidth + (paddingValue * 2) + (borderValue * 2);
    return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));    
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));   
